import markdownIt from "markdown-it";
import { normalizeSkills, getHreflangAlternates } from "./.eleventy.utils.js";

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
};
