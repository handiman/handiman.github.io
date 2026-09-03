import {
  toArray,
  normalizeSkills,
  getLocalizedCollection,
  sortByFilePrefixReversed,
} from "./.eleventy.utils.js";

import { addExperience } from "./experience/experience.js";
import { addProjects } from "./projects/projects.js";
import { addEmployment } from "./employment/employment.js";
import { addEducation } from "./education/education.js";
import { addUsps } from "./usp/usp.js";
import { addFunFacts } from "./fun-facts/fun-facts.js";

export default (eleventyConfig) => {
  addExperience(eleventyConfig);
  addProjects(eleventyConfig);
  addUsps(eleventyConfig);
  addEmployment(eleventyConfig);
  addEducation(eleventyConfig);
  addClients(eleventyConfig);
  addFunFacts(eleventyConfig);
  addSkills(eleventyConfig);
  addRoles(eleventyConfig);
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
