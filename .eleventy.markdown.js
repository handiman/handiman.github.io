import emoji from "markdown-it-emoji/lib/bare.mjs";
import emojiDefs from "markdown-it-emoji/lib/data/full.mjs";

// :shortcode: emoji in Markdown (:wink: -> 😉). Text smileys like :) are left alone
// (no shortcuts), and a couple of GitHub-style names that aren't in the standard set
// are added here.
export const useEmoji = (md) =>
  md.use(emoji, {
    defs: { ...emojiDefs, flame: "🔥", trollface: "🧌" },
    shortcuts: {},
    enabled: [],
  });
