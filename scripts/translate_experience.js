#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
import { translate } from '@vitalets/google-translate-api';

const argv = process.argv.slice(2);
const RUN = argv.includes('--run');
const FOLDER = path.join(process.cwd(), 'experience');

function splitFrontMatter(content) {
  if (!content.startsWith('---')) return { front: '', body: content };
  const end = content.indexOf('\n---', 3);
  if (end === -1) return { front: '', body: content };
  const front = content.slice(0, end + 4);
  const body = content.slice(end + 4).replace(/^\n/, '');
  return { front, body };
}

async function translateFile(filePath) {
  const raw = await fs.readFile(filePath, 'utf8');
  const { front, body } = splitFrontMatter(raw);
  if (!body.trim()) return { filePath, changed: false, reason: 'empty body' };

  // Naive protection for fenced code blocks: don't translate code blocks (odd segments)
  const parts = body.split(/(```[\s\S]*?```)/g);
  const translatedParts = [];
  for (const part of parts) {
    if (part.startsWith('```')) {
      translatedParts.push(part);
    } else {
      // translate plain markdown segment
      try {
        const res = await translate(part, { to: 'sv' });
        translatedParts.push(res.text);
      } catch (err) {
        console.error('Translate error for', filePath, err.message || err);
        translatedParts.push(part);
      }
    }
  }

  const newBody = translatedParts.join('');
  if (newBody.trim() === body.trim()) return { filePath, changed: false, reason: 'no change' };

  const newContent = front + (front && !front.endsWith('\n') ? '\n' : '') + newBody;
  if (RUN) {
    await fs.writeFile(filePath, newContent, 'utf8');
    return { filePath, changed: true };
  }

  return { filePath, changed: true, preview: newBody.slice(0, 400) };
}

async function main() {
  console.log('Scanning experience/*.sv.md');
  const dirents = await fs.readdir(FOLDER, { withFileTypes: true });
  const files = dirents
    .filter((d) => d.isFile() && d.name.endsWith('.sv.md'))
    .map((d) => path.join(FOLDER, d.name));

  if (files.length === 0) {
    console.log('No .sv.md files found in experience/');
    return;
  }

  const results = [];
  for (const f of files) {
    process.stdout.write('.');
    try {
      const r = await translateFile(f);
      results.push(r);
    } catch (err) {
      results.push({ filePath: f, changed: false, error: err.message });
    }
  }
  console.log('\n');
  for (const r of results) {
    if (r.error) console.log('ERROR', r.filePath, r.error);
    else if (r.changed && RUN) console.log('UPDATED', r.filePath);
    else if (r.changed) console.log('WILL UPDATE (dry run) ', r.filePath, '-', r.reason || '');
    else console.log('SKIP', r.filePath, '-', r.reason || '');
  }

  console.log('\nDone.');
  console.log(RUN ? 'Files were written.' : 'Dry run; re-run with --run to apply changes.');
}

main().catch((err) => { console.error(err); process.exit(1); });
