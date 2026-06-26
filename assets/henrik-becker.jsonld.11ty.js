class SemanticCV {
  data() {
    return {
      permalink: "/assets/henrik-becker.jsonld",
      eleventyExcludeFromCollections: true,
      layout: null,
    };
  }

  render(data) {
    const experience = [
      ...(data.collections.employment ?? []),
      ...(data.collections.early_career ?? []),
    ];
    const semanticCV = {
      ...data.person,
      knowsLanguage: data.languages?.map((language) => language.name),
      worksFor: experience.map((item) => {
        const { data } = item;
        return {
          "@type": "Role",
          roleName: data.roles?.join(", "),
          startDate: data.start_date,
          endDate: data.end_date,
          description: data.highlights
            ? `${data.description ? `${data.description}\n\n`: ""}${data.highlights.map((item) => `- ${item}`).join("\n")}`
            : data.description,
          worksFor: {
            "@type": "Organization",
            name: data.title,
          },
        };
      }),
      alumniOf: data.collections.education?.map((item) => {
        const { data } = item;
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

export default SemanticCV;
