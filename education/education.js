import {
  getLocalizedCollection,
  sortByFilePrefixReversed,
} from "../.eleventy.utils.js";

export const addEducation = (eleventyConfig) => {
  eleventyConfig.addCollection("education", (collectionApi) =>
    getLocalizedCollection(
      collectionApi
        .getFilteredByTag("education")
        .sort(sortByFilePrefixReversed),
      "en",
    ),
  );
  eleventyConfig.addCollection("education_sv", (collectionApi) =>
    getLocalizedCollection(
      collectionApi
        .getFilteredByTag("education")
        .sort(sortByFilePrefixReversed),
      "sv",
    ),
  );
};
