import { getLocalizedCollection, sortByFilePrefix } from "../.eleventy.utils.js";

export const addFunFacts = (eleventyConfig) => {
  eleventyConfig.addCollection("fun_facts", (collectionApi) =>
    getLocalizedCollection(collectionApi.getFilteredByTag("fun-facts").sort(sortByFilePrefix), "en"),
  );
  eleventyConfig.addCollection("fun_facts_sv", (collectionApi) =>
    getLocalizedCollection(collectionApi.getFilteredByTag("fun-facts").sort(sortByFilePrefix), "sv"),
  );
};
