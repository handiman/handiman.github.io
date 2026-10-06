// Shared content for other sites (becker-consulting.se reads this at build time).
// Treat the shape as a public contract: add fields freely, but rename or remove
// only together with the consumers.
//
// Rendered once per language: /assets/site-data.json (English) and
// /sv/assets/site-data.json (Swedish). Same shape; `lang` says which one it is.
// Recommendations, certifications and download links are the same in both.
import { addHeadingIds } from "../.eleventy.utils.js";

const year = (date) => (date === "present" ? "present" : new Date(date).getFullYear());

const years = (start, end) => {
  const from = year(start);
  const to = year(end ?? "present");
  return from === to ? `${from}` : `${from} — ${to === "present" ? "present" : to}`;
};

const absolute = (base, url) => (url ? new URL(url, base).href : null);

export default class SiteData {
  data() {
    return {
      siteDataLocales: ["en", "sv"],
      pagination: { data: "siteDataLocales", size: 1, alias: "locale" },
      permalink: (data) => (data.locale === "sv" ? "/sv/assets/site-data.json" : "/assets/site-data.json"),
      eleventyExcludeFromCollections: true,
      layout: null,
      // Re-render when these change during --serve (incremental builds).
      eleventyImport: { collections: ["experience", "experience_sv", "projects", "projects_sv", "usps", "usps_sv", "clients"] },
    };
  }

  render(data) {
    const base = data.site.production_url;
    const lang = data.locale ?? "en";
    const sv = lang === "sv";
    // Global data with a Swedish sibling file (summary.sv.yml etc.); English is the fallback.
    const localized = (key) => (sv ? data[`${key}.sv`] ?? data[key] : data[key]);
    const collection = (name) => data.collections[sv ? `${name}_sv` : name] ?? [];
    const person = localized("person");
    const homeUrl = sv ? "/sv/" : "/";
    const aboutUrl = sv ? "/sv/about/" : "/about/";
    const since = new Date(data.site.shortCvSince);
    const experience = collection("experience");
    const recent = experience.filter((xp) => new Date(xp.data.start_date) >= since);
    const older = experience.filter((xp) => new Date(xp.data.start_date) < since);
    const olderYears = older.flatMap((xp) => [year(xp.data.start_date), year(xp.data.end_date ?? xp.data.start_date)]).filter((y) => y !== "present");

    const shared = {
      version: 1,
      lang,
      generated: new Date().toISOString(),
      source: base,
      person: {
        name: person.name,
        jobTitle: person.jobTitle,
        email: person.email,
        url: base,
        sameAs: data.same_as,
      },
      summary: localized("summary"),
      downloads: Object.fromEntries(
        (data.formats ?? []).map((format) => [
          `${format.name}${format.lang && format.lang !== "en" ? `_${format.lang}` : ""}`.toLowerCase().replace(/[^a-z_]+/g, "_"),
          absolute(base, format.url),
        ]),
      ),
      experience: recent.map((xp) => ({
        id: xp.fileSlug,
        name: xp.data.title,
        organizationId: xp.data.organization?.id ?? null,
        url: absolute(base, xp.url),
        years: years(xp.data.start_date, xp.data.end_date),
        startDate: xp.data.start_date,
        endDate: xp.data.end_date,
        roles: xp.data.roles ?? [],
        description: xp.data.description ?? null,
        descriptionHtml: xp.data.description ? this.markdownify(xp.data.description).trim() : null,
        keyHighlight: xp.data.key_highlight ?? null,
        skills: xp.data.skills ?? [],
      })),
      earlier: {
        years: olderYears.length ? `${Math.min(...olderYears)} — ${Math.max(...olderYears)}` : null,
        names: older.map((xp) => xp.data.title),
      },
      coreSkills: (localized("coreSkills") ?? []).map((item) => ({
        name: item.name?.trim(),
        skills: item.skills ?? [],
      })),
      certifications: (data.certs ?? []).map((cert) => ({
        name: cert.title,
        issuer: cert.issuer,
        year: year(cert.achievement_date),
        url: cert.link ?? null,
      })),
      languages: (localized("languages") ?? []).map((language) => ({
        name: language.name,
        proficiency: language.proficiency,
      })),
      recommendations: (data.recommendations ?? []).map((recommendation) => ({
        by: recommendation.name?.trim(),
        url: recommendation.link ?? null,
        text: recommendation.text?.replace(/\s+/g, " ").trim(),
      })),
      projects: collection("projects").map((project) => ({
        id: project.fileSlug,
        name: project.data.name ?? project.data.title,
        url: project.data.url ?? null,
        page: absolute(base, project.url),
        tagline: project.data.tagline ?? null,
        summary: project.data.summary ?? project.data.description ?? null,
        badge: project.data.badge ?? null,
        skills: project.data.skills ?? [],
        since: year(project.data.start_date),
      })),
      // Client logos (assignments marked `client: true` that have a logo). Names and logos
      // are the same in both languages; the link goes to the assignment in this language.
      clients: (data.collections.clients ?? [])
        .filter((client) => client.data.logo)
        .map((client) => ({
          name: client.data.title,
          logo: absolute(base, client.data.logo),
          url: absolute(base, sv ? `/sv${client.url}` : client.url),
        })),
      usps: collection("usps").map((usp) => ({
        id: usp.fileSlug,
        title: usp.data.title,
        url: absolute(base, usp.url),
      })),
      about: (() => {
        const about = (data.collections.all ?? []).find((item) => item.url === aboutUrl);
        if (!about) return null;
        const quote = data.recommendations?.[about.data.quote];
        return {
          title: about.data.title,
          lead: about.data.lead ?? null,
          description: about.data.description ?? null,
          // Headings get ids so consumers can build an "On this page" list.
          html: addHeadingIds(about.content).trim(),
          quote: quote ? { by: quote.name?.trim(), text: quote.text?.replace(/\s+/g, " ").trim() } : null,
        };
      })(),
      services: (data.collections.all ?? []).find((item) => item.url === homeUrl)?.data.cards?.map((card) => ({
        title: card.title ?? card.front,
        text: (card.text ?? card.back)?.replace(/\s+/g, " ").trim(),
      })) ?? [],
    };

    return JSON.stringify(shared, null, 2);
  }
}
