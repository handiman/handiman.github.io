import { toArray } from "./.eleventy.js";

const mapExperience = (item) => ({
  title: item.data.title,
  startDate: item.data.start_date,
  endDate: item.data.end_date,
  type: item.data.organization?.type ?? null,
  roles: toArray(item.data.roles),
  description: item.data.description ?? null,
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
  assignments: item.data.assignments
    ? item.data.assignments.map(mapExperience)
    : undefined,
});

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

export default function buildCV(data) {
  const cv = {
    introduction: {
      ...data.person,
    },
    languages: [...data.languages],
    certifications: data.certs.map(mapCertification),
    coreSkills: [...data.coreSkills],
    professionalExperience: data.collections.employment.map(mapExperience),
    earlyCareer: data.collections.early_career.map(mapExperience),
    education: data.collections.education.map(mapEducation),
    recommendations: [...data.recommendations],
    interests: [...data.interests],
    allSkills: [...data.collections.all_skills],
    allRoles: [...data.collections.all_roles],
  };
  delete cv.introduction["@context"];
  delete cv.introduction["@type"];
  return cv;
}
