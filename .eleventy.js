import YAML from "yaml";
import fs from "node:fs";
import path from "node:path";
import * as sass from "sass";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import configureCollections from "./.eleventy.collections.js";
import configureFilters from "./.eleventy.filters.js";
import { useEmoji } from "./.eleventy.markdown.js";

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
  eleventyConfig.amendLibrary("md", useEmoji);
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPassthroughCopy("favicon.*");
  // Cloudflare Pages redirects: the blog moved to becker-consulting.se.
  eleventyConfig.addPassthroughCopy("_redirects");
  // Cloudflare Pages response headers: security headers and the Content-Security-Policy.
  eleventyConfig.addPassthroughCopy("_headers");
  eleventyConfig.addPassthroughCopy("assets/*.typ");
  eleventyConfig.addPassthroughCopy("assets/main.js");
  eleventyConfig.addPassthroughCopy("assets/cv-chat.js");
  eleventyConfig.addPassthroughCopy("assets/fonts");
  eleventyConfig.addPassthroughCopy("assets/img");
  eleventyConfig.addPassthroughCopy("googlef0bc3dbe928e1f73.html");

  eleventyConfig.watchIgnores.add("README.md");

  eleventyConfig.addGlobalData("baseUrl", "https://www.henrikbecker.net");
  eleventyConfig.addGlobalData("lang", "en");

  eleventyConfig.addTemplateFormats("scss,xml,webmanifest,markdown,txt,adoc");
  useLiquidFor(eleventyConfig, "markdown,xml,txt,webmanifest,adoc");

  eleventyConfig.addDataExtension("cjs,yml,yaml", YAML.parse);

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!--more-->",
  });

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

  configureFilters(eleventyConfig);
  configureCollections(eleventyConfig);
}
