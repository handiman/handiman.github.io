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
  swedish
} from "./.eleventy.utils.js";

import addExperience from "./experience/experience.js";

const mapEmployer = (employer, assignments) => {
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
};

export default (eleventyConfig) => {
  addExperience(eleventyConfig);

  eleventyConfig.addCollection("employment", function (collectionApi) {
    const employment = getLocalizedCollection(
      collectionApi
        .getFilteredByTag("employment")
        .sort(sortByFilePrefixReversed)
        .filter(late_job),
      "en",
    );
    const assignments = collectionApi
      .getFilteredByTag("assignments")
      .sort(sortByFilePrefixReversed);

    return employment.map((employer) => mapEmployer(employer, assignments));
  });

  eleventyConfig.addCollection("employment_sv", function (collectionApi) {
    const employment = getLocalizedCollection(
      collectionApi
        .getFilteredByTag("employment")
        .sort(sortByFilePrefixReversed)
        .filter(late_job),
      "sv",
    );
    const assignments = collectionApi
      .getFilteredByTag("assignments")
      .sort(sortByFilePrefixReversed);

    return employment.map((employer) => mapEmployer(employer, assignments));
  });

  /*eleventyConfig.addCollection("early_career", function (collectionApi) {
    return getLocalizedCollection(
      collectionApi
        .getFilteredByTag("employment")
        .sort(sortByFilePrefixReversed)
        .filter(early_job),
      "en",
    );
  });

  eleventyConfig.addCollection("early_career_sv", function (collectionApi) {
    return getLocalizedCollection(
      collectionApi
        .getFilteredByTag("employment")
        .sort(sortByFilePrefixReversed)
        .filter(early_job),
      "sv",
    );
  });*/
  eleventyConfig.addCollection("usps", (collectionApi) =>
    getLocalizedCollection(
      collectionApi
        .getFilteredByTag("education")
        .filter(english)
        .sort(sortByFilePrefixReversed),
      "en",
    ),
  );
  eleventyConfig.addCollection("usps_sv", (collectionApi) =>
    getLocalizedCollection(
      collectionApi
        .getFilteredByTag("education")
        .filter(swedish)
        .sort(sortByFilePrefixReversed),
      "sv",
    ),
  );

  eleventyConfig.addCollection("education", (collectionApi) =>
    getLocalizedCollection(
      collectionApi
        .getFilteredByTag("education")
        .filter(english)
        .sort(sortByFilePrefixReversed),
      "en",
    ),
  );
  eleventyConfig.addCollection("education_sv", (collectionApi) =>
    getLocalizedCollection(
      collectionApi
        .getFilteredByTag("education")
        .filter(swedish)
        .sort(sortByFilePrefixReversed),
      "sv",
    ),
  );

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
};
