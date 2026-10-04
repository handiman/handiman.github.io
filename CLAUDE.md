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

Most content types (`experience/`, `employment/`, `education/`) are directories of Markdown files named `NN-slug.md` (English) and `NN-slug.sv.md` (Swedish). The two are paired at build time, not by filename alone:

- `getLocale()` ([.eleventy.utils.js](.eleventy.utils.js)) detects language from a `.sv.` infix in the filename (falls back to `data.lang`, default `en`).
- `getSlug()` reads front matter `slug` (or derives it from the filename, stripping the numeric prefix and `.sv`).
- `getLocalizedCollection(items, targetLocale)` dedupes by slug, preferring the target-locale item and falling back to English when no Swedish version exists yet. This is why a new `experience/15-foo.sv.md` isn't required immediately — the English version renders on `/sv` until it is.
- The leading `NN-` numeric prefix drives ordering (`sortByFilePrefix` / `sortByFilePrefixReversed` in [.eleventy.utils.js](.eleventy.utils.js)), not the date — keep prefixes consistent when inserting new entries.

Collection registration follows a per-content-type module pattern: each type owns an `add<Type>(eleventyConfig)` function in a file next to its content (`experience/experience.js`, `employment/employment.js`, `education/education.js`, `usp/usp.js`, `fun-facts/fun-facts.js`). Most of these register an English and a `_sv` variant (e.g. `employment` / `employment_sv`, `experience` / `experience_sv`) — `fun_facts` is the exception, registering a single unsplit collection since that content isn't paired per-locale. [.eleventy.collections.js](.eleventy.collections.js) just imports and calls these `add*` functions, plus defines the remaining cross-cutting collections inline (`clients`, `all_skills`, `all_roles`). Templates pick the localized variant based on `lang`. When adding a new content type that needs its own collection, follow this pattern (a colocated `<dir>/<dir>.js` exporting `add<Type>`) rather than growing `.eleventy.collections.js` directly.

Work history is split into two eras: `early_job`/`late_job` (in `.eleventy.utils.js`) partition `experience`/`employment` at year 2008 into `experience` vs `earlier_career` (and localized variants) — this is a hardcoded cutoff, not configurable data.

### CV generation is one dataset rendered to multiple output formats

`cv.js` (root) assembles a single CV object (`buildCV`) from collections + `_data` (person, skills, languages, certs, education, recommendations, interests). That object backs, currently:

- HTML CV at `/cv` (via [_layouts/cv.liquid](_layouts/cv.liquid), itself built from `_includes/cv-*.liquid` partials like `work-experience`, `earlier-career`, `usps`, `skills-pills`)
- `assets/henrik-becker.json.11ty.js` — machine-readable JSON resume (also gisted by CI, see below)
- `assets/henrik-becker.adoc`, `.markdown`, `.txt` — plain-text/structured CV exports, each with matching `_includes/*-adoc.liquid` / `*-markdown.liquid` / `*-txt.liquid` templates
- `assets/henrik-becker.typ` — Typst source compiled to PDF post-build (`npm run typst`), separately for `en` (`assets/henrik-becker.pdf`) and `sv` (`sv/assets/henrik-becker.pdf`, passed `--input lang=sv --input data=...sv/assets/henrik-becker.json`)

None of these consumers are generated from each other — each is templated independently off the same `buildCV` object. When changing CV data shape, update `buildCV` in `cv.js` and check every consumer stays in sync. When adding a new output format, follow the existing pattern: template it directly off the `buildCV` object (or a collection feeding it), rather than deriving it from one of the other formats.

### Localization pattern beyond content pairs

`_data/eleventyComputed.js` resolves language-suffixed global data at build time: for keys like `summary`, `coreSkills`, `languages`, `headings`, `interests`, `categorizedSkills`, `featuredSkills`, it picks `_data/<key>.sv.yml` when `lang` is `sv`, else `_data/<key>.yml`. Add new localized global data by following this `<key>.yml` / `<key>.sv.yml` naming, not by branching in templates.

`localizedPermalink(data, section)` ([.eleventy.utils.js](.eleventy.utils.js)) is the shared helper for building `/sv/<section>/<slug>/`-style permalinks from front matter.

### Layout hierarchy ([_layouts/](_layouts/))

- [base.liquid](_layouts/base.liquid) is the root `<html>` shell (head, meta/OG tags, the shared stylesheet and `/assets/main.css`, theme-toggle button, `main.js`) — it renders `{{ content }}` directly into `<body>` with no header/main/footer chrome of its own.
- [page.liquid](_layouts/page.liquid) (`layout: base`) adds the site chrome: `{% include 'header' %}`, `<main id="content">{{ content }}</main>`, `{% include 'footer' %}`. Most content types build on this, directly or transitively.
- [reading.liquid](_layouts/reading.liquid) (`layout: page`) is the content-page frame, the same as on becker-consulting.se: the text in a centred column (`.article-layout` / `.article`) and an "On this page" list (`.toc`) beside it that follows the reader. It gives plain `<h2>`s ids (`headingIds` filter) and shows the list when there are two or more (`toc` filter). `article`, `collection` and `experience` build on it, and so do the section pages (`unique-selling-points.html`, `fun-facts.html` and their `.sv` versions); the landing page and CV don't.
- [article.liquid](_layouts/article.liquid) (`layout: reading`) is breadcrumb, title, optional lead, prose and an optional recommendation. Used by the About page.
- [collection.liquid](_layouts/collection.liquid) (`layout: reading`) is a breadcrumb back to its list, the title and prose — a titled write-up with no extra metadata. Used by `usp` and `fun-facts`.
- [experience.liquid](_layouts/experience.liquid) (`layout: reading`) is `collection.liquid` plus a `roles`/`start_date`–`end_date` line under the `<h1>`. Used by `experience`, `education`, and `employment` — anything with a role and a date range.
- When adding a content type, pick whichever of `page` / `article` / `collection` / `experience` matches its shape rather than writing a new top-level `<html>` layout; only `base.liquid` should ever own the document shell.

### Eleventy config specifics ([.eleventy.js](.eleventy.js))

- Filters are registered via a colocated [.eleventy.filters.js](.eleventy.filters.js) module (`configureFilters(eleventyConfig)`, called from `.eleventy.js`), mirroring the `.eleventy.collections.js` split described above — add new filters there rather than inline in `.eleventy.js`.
- `scss` is a custom extension (not the standard 11ty-sass plugin): compiles via `sass.compileString` with load paths `[fileDir, "_sass"]`, skips files whose name starts with `_` (partials), and registers Sass `loadedUrls` as dependencies for incremental builds.
- `markdown,xml,txt,webmanifest,adoc` are configured to use the Liquid engine (`useLiquidFor`) instead of their usual/no engine, so front matter + Liquid tags work inside `.adoc`/`.txt`/CV export templates.
- `.cjs,.yml,.yaml` data files are parsed with the `yaml` package via `addDataExtension`.
- Directories/files prefixed with `_` (`_data`, `_includes`, `_layouts`, `_sass`, `_temp`, etc.) are excluded from output by [.eleventyignore](.eleventyignore) — this is the standard Eleventy convention here, applied broadly.

### CI/CD ([.github/workflows/ci.yml](.github/workflows/ci.yml), [ingest.yml](.github/workflows/ingest.yml))

- Push to `master` builds the site, compiles CV PDFs (Typst installed manually via curl, no package manager), and deploys `_site` to Cloudflare Pages (project `henrikbecker`, see [wrangler.toml](wrangler.toml)).
- The generated `assets/henrik-becker.resume.json` is also pushed to a public Gist as part of the same job.
- A second workflow (`ingest.yml`) fires after the Pages deployment completes and POSTs the live `/cv` and `/fun-facts` HTML to an external AI ingestion endpoint (`henrikbecker.azurewebsites.net`) — unrelated to the Eleventy build itself, just a post-deploy side effect.

## Branching
Trunk-based development with short-lived feature branches.

- Never commit, push, or merge directly to `master`. All changes reach master via PR.
- Starting new work: branch from an up-to-date `master` (`git pull` first).
  Name it `feature/<short-desc>` or `fix/<short-desc>`.
- Continuing work: if already on a feature branch for the current task, stay on it.
- Commit to the feature branch in small, logical commits.
- Keep the branch current by rebasing on `master`. Force-push (`--force-with-lease`)
  is allowed only on your own feature branch.
- Push the branch and open a PR when the work is ready for review.

## Blog

- The blog moved to becker-consulting.se (`/en/blog/`, posts in that repo's `posts/`) on 2026-10-03. This site has none of its own any more: the "Blog" menu item links there, and `_redirects` (Cloudflare Pages, copied to the output by `.eleventy.js`) sends the old `/blog/...` URLs and feeds there with 301s. "Web 1.0" didn't move; its old URL redirects to the LinkedIn original.
- Keep `_redirects` even when nothing links to the old URLs any more: other sites and feed readers do.

## Shared content (becker-consulting.se)

- This repo is the single source for the CV, side projects and recommendations shown on becker-consulting.se.
- `assets/site-data.json.11ty.js` publishes them as `/assets/site-data.json` (English) and `/sv/assets/site-data.json` (Swedish, same shape, `lang: "sv"`) (short CV = assignments started on or after `site.shortCvSince`). Swedish values come from the `.sv` content and data files, falling back to English. Treat its shape as a contract: add fields freely; rename/remove only together with `_data/shared.js`, `cv.js` and `projects.js` in the becker-consulting.github.io repo, and bump `version` for breaking changes.
- Project cards there use `name`, `url`, `tagline`, `summary`, `badge` and `skills` from `projects/*.md` front matter.
- After deploying, CI sends a `shared-content-updated` repository_dispatch to becker-consulting/becker-consulting.github.io (secret `SHARED_CONTENT_DISPATCH_TOKEN`), which rebuilds that site.

## Shared design (becker-consulting.se)

- The look both sites share lives in the becker-consulting.github.io repo, not here: `https://www.becker-consulting.se/assets/css/shared.css` (fonts, palette incl. dark mode, base elements, buttons, header, footer, content pages), `/assets/js/toc.js` (marks the current "On this page" section), `/assets/js/theme.js` (the invisible dark-mode toggle) and the Geist fonts. `_layouts/base.liquid` links them through `site.sharedAssets` ([_data/site.js](_data/site.js)).
- `assets/main.scss` and `_sass/` hold only what this site adds or does differently (the CV chat in the header, legacy tokens, element defaults, CV, print). Change shared styles in the other repo.
- Local work on both sites: run becker-consulting.github.io with `npm start` (port 8080) and this one with `SHARED_ASSETS=http://localhost:8080 npm run serve`.

