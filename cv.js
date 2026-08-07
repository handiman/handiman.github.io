import YAML from "yaml";
import { toArray } from "./.eleventy.utils.js";
export * from "./cv.jsonresume.js";
export * from "./cv.jsonld.js";

const mapExperience = (item) => {
  const description = (
    (item.data.description || "") +
    (item.data.comment ? ` ${item.data.comment}` : "")
  ).trim();
  return {
    title: item.data.title + (item.data.via ? ` (via ${item.data.via})` : ""),
    startDate: item.data.start_date,
    endDate: item.data.end_date,
    type: item.data.organization?.type ?? null,
    roles: toArray(item.data.roles),
    description: description.length > 0 ? description : null,
    highlights: item.data.highlights ? [...item.data.highlights] : undefined,
    competencies: item.data.competencies
      ? [...item.data.competencies]
      : item.data.skills
        ? [
            {
              name: "Development",
              weight: 1,
              tech: [...item.data.skills],
            },
          ]
        : undefined,
  };
};

const mapEducation = (item) => ({
  title: item.data.title,
  period:
    item.data.start_year == item.data.end_year
      ? item.data.start_year
      : `${item.data.start_year} - ${item.data.end_year}`,
  start_year: item.data.start_year,
  end_year: item.data.end_year,
  description: item.data.description,
});

const mapCertification = (item) => ({
  title: item.title,
  issuer: item.issuer,
  achievementDate: item.achievement_date,
});

const getCollection = (key, data) =>
  "sv" === data.lang
    ? data.collections[`${key}_${data.lang}`]
    : data.collections[key];

export default function buildCV(data) {
  const experience = getCollection("experience", data);
  const earlier_career = getCollection("earlier_career", data);
  const education = getCollection("education", data);
  const cv = {
    introduction: {
      ...("sv" === data.lang ? data["person.sv"] : data.person),
    },
    languages: [...data.languages],
    certifications: data.certs.map(mapCertification),
    coreSkills: [...data.coreSkills],
    headings: { ...data.headings },
    workExperience: experience.map(mapExperience),
    earlierCareer: earlier_career.map(mapExperience),
    education: education.map(mapEducation),
    recommendations: [...data.recommendations],
    interests: [...data.interests],
    allSkills: [...data.collections.all_skills],
    allRoles: [...data.collections.all_roles],
  };
  delete cv.introduction["@context"];
  delete cv.introduction["@type"];
  return cv;
}

export class CvJson {
  constructor(lang) {
    this.lang = lang;
  }
  data() {
    return {
      permalink: `${this.lang ? `/${this.lang}` : ""}/assets/henrik-becker.json`,
      eleventyExcludeFromCollections: true,
      layout: null,
    };
  }

  render(data) {
    const cv = buildCV(data);
    return JSON.stringify(cv, null, 2);
  }
}

export class CvYaml {
  constructor(lang) {
    this.lang = lang;
  }

  data() {
    return {
      permalink: `${this.lang ? `/${this.lang}` : ""}/assets/henrik-becker.yaml`,
      eleventyExcludeFromCollections: true,
      layout: null,
    };
  }

  render(data) {
    const cv = buildCV(data);
    return YAML.stringify(cv);
  }
}
