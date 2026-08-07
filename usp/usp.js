import {
  getLocalizedCollection,
  sortByFilePrefixReversed,
} from "../.eleventy.utils.js";

export const addUsps = (eleventyConfig) => {
  eleventyConfig.addCollection("usps", (collectionApi) =>
    getLocalizedCollection(
      collectionApi.getFilteredByTag("usps").sort(sortByFilePrefixReversed),
      "en",
    ),
  );
  eleventyConfig.addCollection("usps_sv", (collectionApi) =>
    getLocalizedCollection(
      collectionApi.getFilteredByTag("usps").sort(sortByFilePrefixReversed),
      "sv",
    ),
  );
};
