import markdownIt from "markdown-it";
import { useEmoji } from "./.eleventy.markdown.js";
import {
  normalizeSkills,
  getHreflangAlternates,
  findByInputPath,
} from "./.eleventy.utils.js";

const md = useEmoji(markdownIt());

export default (eleventyConfig) => {
  eleventyConfig.addFilter(
    "absolute_url",
    function (url, base = eleventyConfig.globalData.baseUrl) {
      try {
        return new URL(url, base).href;
      } catch (err) {
        console.error(err);
        return url;
      }
    },
  );
  eleventyConfig.addFilter("normalizeSkills", normalizeSkills);
  eleventyConfig.addFilter("jsonify", (variable) => JSON.stringify(variable));
  // Rendered HTML → readable plain text (for the AI ingestion file): drops <style>/<script>,
  // keeps list items and paragraphs on their own lines.
  eleventyConfig.addFilter("plainText", (html = "", headingOffset = 1) =>
    String(html)
      .replace(/<(style|script)[\s\S]*?<\/\1>/gi, "")
      // Headings become Markdown; headingOffset pushes them below the section they are placed in.
      .replace(/<h([1-5])[^>]*>/gi, (_, level) => `\n${"#".repeat(Number(level) + headingOffset)} `)
      // Absolute links keep their target.
      .replace(/<a[^>]*href="(https?:[^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) => `${text} (${href})`)
      .replace(/<li[^>]*>/gi, "\n- ")
      .replace(/<\/(p|h[1-6]|li|ul|ol|div|blockquote)>|<br\s*\/?>/gi, "\n")
      .replace(/<[^>]+>/g, "")
      .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'")
      .split("\n").map((line) => line.replace(/\s+/g, " ").trim()).join("\n")
      .replace(/\n{3,}/g, "\n\n")
      .replace(/\n\n- /g, "\n- ")
      .trim(),
  );
  // Distinct values of a front matter list (e.g. "skills", "roles") across items, sorted.
  eleventyConfig.addFilter("collectValues", (items = [], key) =>
    [...new Map(items.flatMap((item) => [].concat(item.data?.[key] ?? []))
      .map((value) => String(value).trim()).filter(Boolean)
      .map((value) => [value.toLowerCase(), value])).values()]
      .sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" })),
  );
  // Collapse all whitespace (including newlines) to single spaces.
  eleventyConfig.addFilter("oneLine", (text = "") => String(text).replace(/\s+/g, " ").trim());
  eleventyConfig.addFilter("markdownify", (variable) =>
    md.render(variable ?? ""),
  );
  eleventyConfig.addFilter(
    "hreflangAlternates",
    function (item, allItems, siteUrl = eleventyConfig.globalData.baseUrl) {
      return getHreflangAlternates(item, allItems, siteUrl);
    },
  );
  eleventyConfig.addFilter("findByInputPath", findByInputPath);
  // Estimated reading time in minutes for a rendered post (about 220 words a minute).
  // Splits a work-history collection at a date: items that started on or
  // after `since` (e.g. "2014-11-01"), or with `before: true`, the ones before it.
  eleventyConfig.addFilter("startedSince", (items = [], since, before = false) => {
    const cutoff = new Date(since);
    return items.filter((item) => (new Date(item.data.start_date) >= cutoff) !== before);
  });
  // Real HTML pages, opted out of via `sitemap: false` front matter — feeds,
  // resume exports (.json/.adoc/.markdown/.txt/.webmanifest), robots.txt, etc.
  // are excluded automatically since their output isn't `.html`.
  eleventyConfig.addFilter("sitemapPages", (allItems) =>
    allItems.filter(
      (item) => item.data.sitemap !== false && item.outputPath?.endsWith(".html"),
    ),
  );
};
