import buildCV from "./cv.js";

export class SemanticCV {
  constructor(lang) {
    this.lang = lang;
  }

  data() {
    return {
      permalink: `${this.lang ? `/${this.lang}` : ""}/assets/henrik-becker.jsonld`,
      eleventyExcludeFromCollections: true,
      layout: null,
    };
  }

  render(data) {
    const cv = buildCV(data);
    const {
      introduction,
      certifications,
      coreSkills,
      workExperience,
      earlierCareer,
      education,
      languages,
      interests,
      recommendations,
    } = cv;
    const experience = [...(workExperience ?? []), ...(earlierCareer ?? [])];
    const semanticCV = {
      ...introduction,
      knowsLanguage: languages?.map((language) => language.name),
      worksFor: experience.map((data) => {
        return {
          "@type": "Role",
          roleName: data.roles?.join(", "),
          startDate: data.start_date,
          endDate: data.end_date,
          description: data.highlights
            ? `${data.description ? `${data.description}\n\n` : ""}${data.highlights.map((item) => `- ${item}`).join("\n")}`
            : data.description,
          worksFor: {
            "@type": "Organization",
            name: data.title,
          },
        };
      }),
      alumniOf: education?.map((data) => {
        return {
          "@type": "Role",
          description: data.description,
          startDate: `${data.start_year}-01-01`,
          endDate: `${data.end_year}-01-01`,
          alumniOf: {
            "@type": "EducationalOrganization",
            name: data.title,
            location: data.location,
          },
        };
      }),
    };
    return JSON.stringify(semanticCV, null, 2);
  }
}
