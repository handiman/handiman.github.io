export default {
  time: new Date(),
  production_url: "https://www.henrikbecker.net",
  // The shared look (fonts, tokens, header, footer, content pages) lives in the
  // becker-consulting.github.io repo and is linked from there: /assets/css/shared.css,
  // /assets/js/toc.js and the Geist fonts. SHARED_ASSETS points it elsewhere, e.g.
  // http://localhost:8080 while running both sites locally.
  sharedAssets: process.env.SHARED_ASSETS || "https://www.becker-consulting.se",
  orgNumber: "559120-2147",
  // The short CV (web page and shared site data) lists assignments that started on or after this date.
  shortCvSince: "2014-11-01",
  // Current work situation, stated first in the CV bot's document. Update when it changes.
  currentStatus: "Freelance consultant through Henrik Becker Consulting AB. Left Betsson in December 2025 and went back to freelancing. Available for new assignments."
};
