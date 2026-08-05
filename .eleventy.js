import YAML from "yaml";
import fs from "node:fs";
import path from "node:path";
import markdownIt from "markdown-it";
import * as sass from "sass";
import configureCollections from "./.eleventy.collections.js";
import { getSlug, localizedPermalink, normalizeSkills } from "./.eleventy.utils.js";

const md = markdownIt();

const useLiquidFor = (eleventyConfig, extensions) => {
  for (const extension of extensions.split(",")) {
    eleventyConfig.addExtension(extension, {
      key: "liquid",
      useLayouts: false,
      outputFileExtension: extension,
    });
  }
};

export default async function (eleventyConfig) {
  eleventyConfig.setLayoutsDirectory("_layouts");

  eleventyConfig.addPassthroughCopy("favicon.*");
  eleventyConfig.addPassthroughCopy("assets/*.typ");
  eleventyConfig.addPassthroughCopy("assets/main.js");
  eleventyConfig.addPassthroughCopy("assets/fontawesome");
  eleventyConfig.addPassthroughCopy("assets/fonts");
  eleventyConfig.addPassthroughCopy("assets/img");
  eleventyConfig.addPassthroughCopy("googlef0bc3dbe928e1f73.html");

  eleventyConfig.watchIgnores.add("README.md");

  eleventyConfig.addGlobalData("baseUrl", "https://www.henrikbecker.net");
  eleventyConfig.addGlobalData("lang", "en");

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

  eleventyConfig.addFilter("jsonify", (variable) => JSON.stringify(variable));
  eleventyConfig.addFilter("markdownify", (variable) =>
    md.render(variable ?? ""),
  );

  eleventyConfig.addTemplateFormats("scss,xml,webmanifest,markdown,txt,adoc");
  useLiquidFor(eleventyConfig, "markdown,xml,txt,webmanifest,adoc");

  eleventyConfig.addDataExtension("cjs,yml,yaml", (contents) =>
    YAML.parse(contents),
  );

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!--more-->",
  });

  eleventyConfig.addFilter("normalizeSkills", normalizeSkills);

  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",

    // opt-out of Eleventy Layouts
    useLayouts: false,

    compile: async function (inputContent, inputPath) {
      let parsed = path.parse(inputPath);
      // Don’t compile file names that start with an underscore
      if (parsed.name.startsWith("_")) {
        return;
      }

      let result = sass.compileString(inputContent, {
        loadPaths: [parsed.dir || ".", "_sass"],
      });

      // Map dependencies for incremental builds
      this.addDependencies(inputPath, result.loadedUrls);

      return async (data) => {
        return result.css;
      };
    },
  });

  configureCollections(eleventyConfig);
}
