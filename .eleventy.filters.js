import markdownIt from "markdown-it";
import {
  normalizeSkills,
  getHreflangAlternates,
  findByInputPath,
} from "./.eleventy.utils.js";

const md = markdownIt();

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
