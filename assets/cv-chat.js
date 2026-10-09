// Loads the chat widget (henrikbecker.net.chat.ui). Bump the version here.
// Its styles are added from here too: they don't block the page, and the
// widget needs JavaScript anyway. Kept out of the page so the
// Content-Security-Policy in _headers can do without 'unsafe-inline'.
const base = "https://cdn.jsdelivr.net/gh/handiman/henrikbecker.net.chat.ui@0.0.28/dist";

const css = document.createElement("link");
css.rel = "stylesheet";
css.href = `${base}/collection/cv-chat.css`;
document.head.appendChild(css);

const { defineCustomElements } = await import(`${base}/esm/loader.js`);
defineCustomElements();
