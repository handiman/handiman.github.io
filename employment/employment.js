import {
  getLocalizedCollection,
  sortByFilePrefixReversed,
  early_job,
  late_job,
} from "../.eleventy.utils.js";

export const addEmployment = (eleventyConfig) => {
  eleventyConfig.addCollection("employment", (collectionApi) =>
    getLocalizedCollection(
      collectionApi
        .getFilteredByTag("employment")
        .sort(sortByFilePrefixReversed)
        .filter(late_job),
      "en",
    ),
  );

  eleventyConfig.addCollection("employment_sv", (collectionApi) =>
    getLocalizedCollection(
      collectionApi
        .getFilteredByTag("employment")
        .sort(sortByFilePrefixReversed)
        .filter(late_job),
      "sv",
    ),
  );
};
