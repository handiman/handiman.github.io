import YAML from "yaml";
import path from "node:path";
import markdownIt from "markdown-it";
import * as sass from "sass";

const md = markdownIt();
const now = new Date();

export const toArray = (something) =>
  something ? (Array.isArray(something) ? something : [something]) : [];

const sortByFilePrefixReversed = (itemA, itemB) => {
  const a = parseInt(itemA.fileSlug.split("-")[0]);
  const b = parseInt(itemB.fileSlug.split("-")[0]);
  return b - a;
};

const sortByFilePrefix = (itemA, itemB) => {
  const a = parseInt(itemA.fileSlug.split("-")[0]);
  const b = parseInt(itemB.fileSlug.split("-")[0]);
  return a - b;
};

export const normalizeSkills = (skills) => {
  if (!skills) return [];
  if (Array.isArray(skills) && typeof skills[0] === "string") return skills;
  if (Array.isArray(skills)) return skills.flatMap((area) => area.tech ?? []);
  return [];
};

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

  eleventyConfig.addCollection("employment", function (collectionApi) {
    const employment = collectionApi
      .getFilteredByTag("employment")
      .sort(sortByFilePrefixReversed)
      .filter((item) => {
        const year = new Date(item.data.start_date).getFullYear();
        return year >= 1998;
      });
    const assignments = collectionApi
      .getFilteredByTag("assignments")
      .sort(sortByFilePrefixReversed);

    return employment.map((employer) => {
      return {
        data: {
          ...employer.data,
          assignments: assignments.filter((a) =>
            toArray(a.data.employer).some(
              (slug) => employer.fileSlug.indexOf(slug) > -1,
            ),
          ),
        },
      };
    });
  });

  eleventyConfig.addCollection("early_career", function (collectionApi) {
    return collectionApi
      .getFilteredByTag("employment")
      .sort(sortByFilePrefixReversed)
      .filter((item) => {
        const year = new Date(item.data.start_date).getFullYear();
        return year < 1998;
      });
  });
  eleventyConfig.addCollection("usps", function (collectionApi) {
    return collectionApi.getFilteredByTag("usps").sort(sortByFilePrefix);
  });
  eleventyConfig.addCollection("education", function (collectionApi) {
    return collectionApi
      .getFilteredByTag("education")
      .sort(sortByFilePrefixReversed);
  });
  eleventyConfig.addCollection("clients", function (collectionApi) {
    return collectionApi
      .getFilteredByTag("assignments")
      .sort(sortByFilePrefixReversed)
      .filter((item) => true === item.data.client);
  });
  eleventyConfig.addCollection("fun_facts", function (collectionApi) {
    return collectionApi.getFilteredByTag("fun-facts").sort(sortByFilePrefix);
  });
  eleventyConfig.addCollection("all_skills", function (collectionApi) {
    const skills = collectionApi
      .getAll()
      .flatMap((item) => normalizeSkills(item.data.skills));
    return [...new Set(skills)].sort();
  });
  eleventyConfig.addCollection("all_roles", function (collectionApi) {
    const roles = collectionApi
      .getAll()
      .flatMap((item) => toArray(item.data.roles));
    return [...new Set(roles)].sort();
  });
}
