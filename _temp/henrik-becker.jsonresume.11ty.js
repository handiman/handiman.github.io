const toArray = (something) =>
  something ? (Array.isArray(something) ? something : [something]) : something;

class JsonResume {
  data() {
    return {
      permalink: "/assets/henrik-becker.resume.json",
      eleventyExcludeFromCollections: true,
      layout: null,
    };
  }

  render(data) {
    const resume = {
      $schema:
        "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
      meta: {
        theme: "flat",
        lastUpdated: new Date(),
        canonical:
          "https://gist.githubusercontent.com/handiman/3881a8e890dd1032cce3f5e655859717/raw/01ba33f00c707670636d902546d7e50c4d4176e4/resume.json",
      },
      basics: {
        name: data.person.name,
        label: data.person.jobTitle,
        image: data.person.image,
        url: data.person.url,
        summary: data.person.description,
        profiles: data.same_as?.map((item) => ({
          network: item.network,
          url: item.url,
          username: "GitHub" == item.network ? "handiman" : undefined,
        })),
      },
      certificates: data.certs?.map((cert) => ({
        name: cert.title,
        issuer: cert.issuer,
        date: cert.achievement_date,
        url: cert.link,
      })),
      skills: data.categorizedSkills?.map((category) => ({
        name: category.name,
        level: category.level,
        keywords: category.skills,
      })),
      work: [
        ...(data.collections.employment ?? []),
        ...(data.collections.early_career ?? []),
      ].map((xp) => ({
        name: xp.data.organization?.name,
        description: xp.data.organization?.type,
        position: xp.data.roles.join(", "),
        startDate: xp.data.start_date,
        endDate: xp.data.end_date,
        summary: xp.data.mission ?? xp.data.description ?? xp.data.summary,
        highlights: xp.data.highlights,
      })),
      education: data.collections.education?.map((edu) => ({
        institution: edu.data.title,
        area: edu.data.description,
        startDate: `${edu.data.start_year}-01-01`,
        endDate: `${edu.data.end_year}-01-01`,
      })),
      languages: data.languages?.map((lang) => ({
        language: lang.name,
        fluency: lang.proficiency,
      })),
      projects: data.collections.projects?.map((proj) => ({
        name: proj.data.name,
        entity: proj.data.organization?.name,
        description: proj.data.summary ?? proj.data.description,
        roles: toArray(proj.data.roles),
        highlights: proj.data.highlights,
        startDate: proj.data.start_date,
        endDate: proj.data.end_date,
      })),
      interests: data.interests?.map((nerd) => ({
        name: nerd.name,
      })),
      references: data.recommendations?.map((ref) => ({
        name: ref.name,
        reference: ref.text,
      })),
    };
    return JSON.stringify(resume, null, 2);
  }
}

export default JsonResume;
