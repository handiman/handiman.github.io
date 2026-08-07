# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal site / CV for Henrik Becker (freelance senior .NET/backend consultant), built with Eleventy (11ty) v3 and deployed to Cloudflare Pages. Content is bilingual (English default, Swedish under `/sv`).

## Commands

```
npm run build   # clean, run Eleventy, then compile CV PDFs with Typst
npm run serve   # build, then serve with --incremental --serve (dev server)
npm run clean   # rimraf _site
npm run typst   # compile both English and Swedish CV PDFs (requires typst installed; typst:en / typst:sv individually)
```

There is no lint or test script/framework in this project — do not invent `npm test`/`npm run lint` commands.

`npm run serve` builds first, so a full non-incremental build always runs at least once; expect the initial Eleventy run to include Typst PDF compilation only via `npm run build`, not `serve`.

The Typst steps require the `typst` CLI binary to be on PATH (installed separately, see `.github/workflows/ci.yml`); without it, `npm run typst`/`npm run build` will fail even though the Eleventy build itself succeeded.

## Architecture

### Content model: one Markdown file per item, localized via `.md` / `.sv.md` siblings

Most content types (`experience/`, `assignments/`, `employment/`, `education/`) are directories of Markdown files named `NN-slug.md` (English) and `NN-slug.sv.md` (Swedish). The two are paired at build time, not by filename alone:

- `getLocale()` ([.eleventy.utils.js](.eleventy.utils.js)) detects language from a `.sv.` infix in the filename (falls back to `data.lang`, default `en`).
- `getSlug()` reads front matter `slug` (or derives it from the filename, stripping the numeric prefix and `.sv`).
- `getLocalizedCollection(items, targetLocale)` dedupes by slug, preferring the target-locale item and falling back to English when no Swedish version exists yet. This is why a new `assignments/15-foo.sv.md` isn't required immediately — the English version renders on `/sv` until it is.
- The leading `NN-` numeric prefix drives ordering (`sortByFilePrefix` / `sortByFilePrefixReversed` in [.eleventy.utils.js](.eleventy.utils.js)), not the date — keep prefixes consistent when inserting new entries.

Collections are registered in [.eleventy.collections.js](.eleventy.collections.js) and [experience/experience.js](experience/experience.js), each with an English and a `_sv` variant (e.g. `employment` / `employment_sv`, `experience` / `experience_sv`). Templates pick the right one based on `lang`. `employment` also has assignments joined onto it in-memory (`mapEmployer`), matched by `employer` slug against `assignments` front matter — assignments aren't a child collection on disk.

Work history is split into two eras: `early_job`/`late_job` (in `.eleventy.utils.js`) partition `experience`/`employment` at year 2008 into `experience` vs `earlier_career` (and localized variants) — this is a hardcoded cutoff, not configurable data.

### CV generation is one dataset rendered to five output formats

`cv.js` (root) assembles a single CV object (`buildCV`) from collections + `_data` (person, skills, languages, certs, education, recommendations, interests). That object backs:

- HTML CV at `/cv` (via [_layouts/cv.liquid](_layouts/cv.liquid), itself built from `_includes/cv-*.liquid` partials like `work-experience`, `earlier-career`, `usps`, `skills-pills`)
- `assets/henrik-becker.json.11ty.js` — machine-readable JSON resume (also gisted by CI, see below)
- `assets/henrik-becker.adoc`, `.markdown`, `.txt` — plain-text/structured CV exports, each with matching `_includes/*-adoc.liquid` / `*-markdown.liquid` / `*-txt.liquid` templates
- `assets/henrik-becker.typ` — Typst source compiled to PDF post-build (`npm run typst`), separately for `en` (`assets/henrik-becker.pdf`) and `sv` (`sv/assets/henrik-becker.pdf`, passed `--input lang=sv --input data=...sv/assets/henrik-becker.json`)

When changing CV data shape, update `buildCV` in `cv.js` and check all five consumers stay in sync — none of them are generated from each other.

### Localization pattern beyond content pairs

`_data/eleventyComputed.js` resolves language-suffixed global data at build time: for keys like `summary`, `coreSkills`, `languages`, `headings`, `interests`, `categorizedSkills`, `featuredSkills`, it picks `_data/<key>.sv.yml` when `lang` is `sv`, else `_data/<key>.yml`. Add new localized global data by following this `<key>.yml` / `<key>.sv.yml` naming, not by branching in templates.

`localizedPermalink(data, section)` ([.eleventy.utils.js](.eleventy.utils.js)) is the shared helper for building `/sv/<section>/<slug>/`-style permalinks from front matter.

### Eleventy config specifics ([.eleventy.js](.eleventy.js))

- `scss` is a custom extension (not the standard 11ty-sass plugin): compiles via `sass.compileString` with load paths `[fileDir, "_sass"]`, skips files whose name starts with `_` (partials), and registers Sass `loadedUrls` as dependencies for incremental builds.
- `markdown,xml,txt,webmanifest,adoc` are configured to use the Liquid engine (`useLiquidFor`) instead of their usual/no engine, so front matter + Liquid tags work inside `.adoc`/`.txt`/CV export templates.
- `.cjs,.yml,.yaml` data files are parsed with the `yaml` package via `addDataExtension`.
- Directories/files prefixed with `_` (`_data`, `_includes`, `_layouts`, `_sass`, `_temp`, etc.) are excluded from output by [.eleventyignore](.eleventyignore) — this is the standard Eleventy convention here, applied broadly.

### CI/CD ([.github/workflows/ci.yml](.github/workflows/ci.yml), [ingest.yml](.github/workflows/ingest.yml))

- Push to `master` builds the site, compiles CV PDFs (Typst installed manually via curl, no package manager), and deploys `_site` to Cloudflare Pages (project `henrikbecker`, see [wrangler.toml](wrangler.toml)).
- The generated `assets/henrik-becker.resume.json` is also pushed to a public Gist as part of the same job.
- A second workflow (`ingest.yml`) fires after the Pages deployment completes and POSTs the live `/cv` and `/fun-facts` HTML to an external AI ingestion endpoint (`henrikbecker.azurewebsites.net`) — unrelated to the Eleventy build itself, just a post-deploy side effect.
