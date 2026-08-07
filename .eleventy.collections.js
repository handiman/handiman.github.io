import {
  getSlug,
  getLocale,
  toArray,
  normalizeSkills,
  getLocalizedCollection,
  sortByFilePrefix,
  sortByFilePrefixReversed,
  early_job,
  late_job,
  english,
  swedish,
} from "./.eleventy.utils.js";

import { addExperience } from "./experience/experience.js";
import { addEmployment } from "./employment/employment.js";
import { addEducation } from "./education/education.js";
import { addUsps } from "./usp/usp.js";

export default (eleventyConfig) => {
  addExperience(eleventyConfig);
  addUsps(eleventyConfig);
  addEmployment(eleventyConfig);
  addEducation(eleventyConfig);
  addClients(eleventyConfig);
  addFunFacts(eleventyConfig);
  addSkills(eleventyConfig);
  addRoles(eleventyConfig);
  addSitemapPages(eleventyConfig);
};

const addClients = (eleventyConfig) =>
  eleventyConfig.addCollection("clients", (collectionApi) =>
    getLocalizedCollection(
      collectionApi
        .getFilteredByTag("experience")
        .sort(sortByFilePrefixReversed)
        .filter((item) => true === item.data.client),
      "en",
    ),
  );

const addFunFacts = (eleventyConfig) =>
  eleventyConfig.addCollection("fun_facts", function (collectionApi) {
    return collectionApi.getFilteredByTag("fun-facts").sort(sortByFilePrefix);
  });

const addSkills = (eleventyConfig) =>
  eleventyConfig.addCollection("all_skills", function (collectionApi) {
    const skills = collectionApi
      .getAll()
      .flatMap((item) => normalizeSkills(item.data.skills));
    return [...new Set(skills)].sort();
  });

const addRoles = (eleventyConfig) =>
  eleventyConfig.addCollection("all_roles", function (collectionApi) {
    const roles = collectionApi
      .getAll()
      .flatMap((item) => toArray(item.data.roles));
    return [...new Set(roles)].sort();
  });

// Real HTML pages, opted out of via `sitemap: false` front matter — feeds,
// resume exports (.json/.adoc/.markdown/.txt/.webmanifest), robots.txt, etc.
// are excluded automatically since their output isn't `.html`.
const addSitemapPages = (eleventyConfig) =>
  eleventyConfig.addCollection("sitemap", (collectionApi) =>
    collectionApi
      .getAll()
      .filter(
        (item) =>
          item.data.sitemap !== false && item.outputPath?.endsWith(".html"),
      ),
  );
