import { sortByFilePrefix } from "../.eleventy.utils.js";

export const addFunFacts = (eleventyConfig) => {
  eleventyConfig.addCollection("fun_facts", function (collectionApi) {
    return collectionApi.getFilteredByTag("fun-facts").sort(sortByFilePrefix);
  });
};
