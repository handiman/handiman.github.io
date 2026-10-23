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
      projects,
      workExperience,
      earlierCareer,
      education,
      languages,
    } = cv;
    const withType = (items, type) =>
      (items ?? []).map((item) => ({ ...item, type }));

    const toIsoDate = (value) =>
      value instanceof Date ? value.toISOString().slice(0, 10) : value;

    const toDefinedTerms = (competencies) => {
      const seen = new Map();
      for (const tech of (competencies ?? []).flatMap((c) => c.tech ?? [])) {
        const key = tech.trim().toLowerCase();
        if (key && !seen.has(key)) seen.set(key, tech.trim());
      }
      return [...seen.values()].map((name) => ({
        "@type": "DefinedTerm",
        name,
      }));
    };

    const experience = [
      ...withType(workExperience, "Organization"),
      ...withType(earlierCareer, "Organization"),
      ...withType(projects, "Project"),
    ];

    const semanticCV = {
      "@context": [
        "https://schema.org",
        "https://semantic.cv/context/latest.jsonld",
      ],
      "@type": "Person",
      ...introduction,
      theme: {
        "@type": "Theme",
        name: "alice",
      },
      knowsLanguage: languages?.map((language) => language.name),
      worksFor: experience.map((data) => {
        const keywords = toDefinedTerms(data.competencies);
        return {
          "@type": "Role",
          roleName: data.roles?.join(", "),
          startDate: toIsoDate(data.startDate),
          endDate: toIsoDate(data.endDate),
          description: data.highlights
            ? `${data.description ? `${data.description}\n\n` : ""}${data.highlights.map((item) => `- ${item}`).join("\n")}`
            : data.description,
          worksFor: {
            "@type": data.type,
            name: data.title,
          },
          ...(keywords.length && { keywords }),
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
      hasCertification: certifications?.map((data) => {
        return {
          "@type": "Certification",
          name: data.title,
          certificationIdentification: data.certNumber,
          datePublished: toIsoDate(data.achievementDate),
          url: data.link,
          issuedBy: {
            "@type": "Organization",
            name: data.issuer,
          },
        };
      }),
    };
    return JSON.stringify(semanticCV, null, 2);
  }
}
