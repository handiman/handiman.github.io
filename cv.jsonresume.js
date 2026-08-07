import { toArray } from "./.eleventy.utils.js";
import buildCV from "./cv.js";

export class JsonResume {
  constructor(lang) {
    this.lang = lang;
  }
  data() {
    return {
      permalink: `${this.lang ? `/${this.lang}` : ""}/assets/henrik-becker.resume.json`,
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
        name: introduction.name,
        label: introduction.jobTitle,
        image: introduction.image,
        url: introduction.url,
        summary: introduction.description,
        profiles: introduction.same_as?.map((item) => ({
          network: item.network,
          url: item.url,
          username: "GitHub" == item.network ? "handiman" : undefined,
        })),
      },
      certificates: certifications?.map((cert) => ({
        name: cert.title,
        issuer: cert.issuer,
        date: cert.achievementDate,
        url: cert.link,
      })),
      skills: coreSkills?.map((category) => ({
        name: category.name,
        level: category.level,
        keywords: category.skills,
      })),
      work: experience?.map((xp) => {
        return {
          name: xp.title,
          description: xp.description,
          position: xp.roles.join(", "),
          startDate: xp.startDate,
          endDate: xp.endDate,
          highlights: xp.highlights,
        };
      }),
      education: education?.map((edu) => ({
        institution: edu.title,
        area: edu.description,
        startDate: `${edu.start_year}-01-01`,
        endDate: `${edu.end_year}-01-01`,
      })),
      languages: languages?.map((lang) => ({
        language: lang.name,
        fluency: lang.proficiency,
      })),
      interests: interests?.map((nerd) => ({
        name: nerd.name,
      })),
      references: recommendations?.map((ref) => ({
        name: ref.name,
        reference: ref.text,
      })),
    };
    return JSON.stringify(resume, null, 2);
  }
}
