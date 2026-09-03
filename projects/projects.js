import {
  getLocalizedCollection,
  sortByFilePrefixReversed,
} from "../.eleventy.utils.js";

export const addProjects = (eleventyConfig) => {
  eleventyConfig.addCollection("projects", (collectionApi) => {
    return getLocalizedCollection(
      collectionApi
        .getFilteredByTag("projects")
        .sort(sortByFilePrefixReversed),
      "en",
    );
  });

  eleventyConfig.addCollection("projects_sv", (collectionApi) => {
    return getLocalizedCollection(
      collectionApi
        .getFilteredByTag("projects")
        .sort(sortByFilePrefixReversed),
      "sv",
    );
  });
};
