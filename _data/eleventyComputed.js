import { getLocale } from "../.eleventy.utils.js";

const getLocalizedData = (key, data) => {
  const lang = getLocale(data);
  return data[`${key}.${lang}`] || data[key];
};

export default {
  lang: getLocale,
  languages: (data) => getLocalizedData("languages", data),
  summary: (data) => getLocalizedData("summary", data),
  coreSkills: (data) => getLocalizedData("coreSkills", data),
  categorizedSkills: (data) => getLocalizedData("categorizedSkills", data),
  featuredSkills: (data) => getLocalizedData("featuredSkills", data),
  interests: (data) => getLocalizedData("interests", data),
  headings: (data) => getLocalizedData("headings", data),
};
