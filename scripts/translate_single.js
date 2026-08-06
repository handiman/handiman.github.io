#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
import { translate } from '@vitalets/google-translate-api';

async function main() {
  const arg = process.argv[2];
  if (!arg) {
    console.error('Usage: node translate_single.js <relative-path>');
    process.exit(2);
  }
  const filePath = path.join(process.cwd(), arg);
  let raw;
  try { raw = await fs.readFile(filePath,'utf8'); } catch (e) { console.error('Read error', e.message); process.exit(1); }

  const fmEnd = raw.indexOf('\n---', 3);
  let front = '';
  let body = raw;
  if (raw.startsWith('---') && fmEnd !== -1) {
    front = raw.slice(0, fmEnd+4);
    body = raw.slice(fmEnd+4).replace(/^\n/, '');
  }

  if (!body.trim()) { console.log('Empty body; nothing to translate.'); return; }

  // Split to preserve fenced code blocks
  const parts = body.split(/(```[\s\S]*?```)/g);
  const translatedParts = [];

  async function retryTranslate(text, attempts = 3) {
    let lastErr = null;
    for (let i = 0; i < attempts; i++) {
      try {
        const res = await translate(text, { to: 'sv' });
        return res.text;
      } catch (err) {
        lastErr = err;
        // exponential backoff
        await new Promise((r) => setTimeout(r, 500 * Math.pow(2, i)));
      }
    }
    throw lastErr;
  }

  for (const part of parts) {
    if (part.startsWith('```')) {
      translatedParts.push(part);
    } else {
      try {
        const t = await retryTranslate(part, 4);
        translatedParts.push(t);
      } catch (err) {
        console.error('Translate error:', err.message || err);
        translatedParts.push(part);
      }
    }
  }

  const newBody = translatedParts.join('');
  const newContent = front + (front && !front.endsWith('\n') ? '\n' : '') + newBody;
  try {
    await fs.writeFile(filePath, newContent, 'utf8');
    console.log('UPDATED', filePath);
  } catch (e) {
    console.error('Write error', e.message);
    process.exit(1);
  }
}

main();
