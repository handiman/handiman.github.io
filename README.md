# henrikbecker.net

Personal site / CV for Henrik Becker, a freelance senior .NET/backend consultant. Built with [Eleventy](https://www.11ty.dev/) v3 and deployed to Cloudflare Pages. Content is bilingual (English default, Swedish under `/sv`).

## Commands

```
npm run build   # clean, run Eleventy, then compile CV PDFs with Typst
npm run serve   # build, then serve with --incremental --serve (dev server)
npm run clean   # rimraf _site
npm run typst   # compile both English and Swedish CV PDFs (requires the typst CLI on PATH)
```

See [CLAUDE.md](CLAUDE.md) for architecture notes.
