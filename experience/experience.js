import {
  getLocalizedCollection,
  sortByFilePrefixReversed,
  early_job,
  late_job,
} from "../.eleventy.utils.js";

export default (eleventyConfig) => {
  eleventyConfig.addCollection("experience", (collectionApi) => {
    return getLocalizedCollection(
      collectionApi
        .getFilteredByTag("experience")
        .sort(sortByFilePrefixReversed)
        .filter(late_job),
      "en",
    );
  });

  eleventyConfig.addCollection("experience_sv", (collectionApi) => {
    return getLocalizedCollection(
      collectionApi
        .getFilteredByTag("experience")
        .sort(sortByFilePrefixReversed)
        .filter(late_job),
      "sv",
    );
  });

  eleventyConfig.addCollection("earlier_career", function (collectionApi) {
    return getLocalizedCollection(
      collectionApi
        .getFilteredByTag("experience")
        .sort(sortByFilePrefixReversed)
        .filter(early_job),
      "en",
    );
  });

  eleventyConfig.addCollection("earlier_career_sv", function (collectionApi) {
    return getLocalizedCollection(
      collectionApi
        .getFilteredByTag("experience")
        .sort(sortByFilePrefixReversed)
        .filter(early_job),
      "sv",
    );
  });
};
