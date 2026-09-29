import { getLocale } from "../.eleventy.utils.js";

const getLocalizedData = (key, data) => {
  const lang = getLocale(data);
  return data[`${key}.${lang}`] || data[key];
};

// ---- SEO: <title> and meta description ------------------------------------
const MAX_TITLE = 65;
const MAX_DESCRIPTION = 160;

const clean = (text) =>
  typeof text === "string"
    ? text.replace(/<[^>]+>/g, "").replace(/\*\*|__|`/g, "").replace(/\s+/g, " ").trim()
    : "";

// Cut at a word boundary so snippets don't end mid-word.
const clip = (text, max = MAX_DESCRIPTION) => {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,;:.–—-]+$/, "") + "…";
};

const section = (data) => (data.page?.inputPath || "").replace(/^\.\//, "").split("/")[0];

const year = (value, lang) => {
  if (!value || value === "present") return lang === "sv" ? "idag" : "present";
  const date = new Date(value);
  return isNaN(date) ? String(value) : String(date.getFullYear());
};

const jobTitle = (data) => getLocalizedData("person", data)?.jobTitle || data.person?.jobTitle;

const metaTitle = (data) => {
  const name = data.person?.name || "Henrik Becker";
  const title = clean(data.title);
  if (!title) return `${name} – ${jobTitle(data)}, Stockholm`;
  if (title.includes(name)) return `${title} – ${jobTitle(data)}`;
  // Work history and side projects: say what the page is about, not just the company name.
  const extra = ["experience", "employment"].includes(section(data))
    ? clean((data.roles || [])[0])
    : section(data) === "projects"
      ? clean(data.tagline).replace(/\.$/, "")
      : "";
  const withExtra = `${title} – ${extra} | ${name}`;
  return extra && withExtra.length <= MAX_TITLE ? withExtra : `${title} | ${name}`;
};

const metaDescription = (data) => {
  const lang = getLocale(data);
  const sv = lang === "sv";
  if (section(data) === "education") {
    const what = clean(data.description);
    return clip(
      `${clean(data.title)}${what ? `: ${what}` : ""}, ${data.start_year || year(data.start_date, lang)}–${data.end_year || year(data.end_date, lang)}. ` +
        (sv ? "Ur Henrik Beckers utbildning." : "From Henrik Becker's education.")
    );
  }
  const own = [data.description, data.lead, data.ingress, data.intro].map(clean).find(Boolean);
  if (own) return clip(own);
  const title = clean(data.title);
  const roles = (data.roles || []).map(clean).filter(Boolean).join(", ");
  switch (section(data)) {
    case "employment": {
      const type = clean(data.organization?.type);
      const period = `${year(data.start_date, lang)}–${year(data.end_date, lang)}`;
      return clip(
        `${title}${type ? ` (${type})` : ""}: ${roles ? `${roles}, ` : ""}${period}. ` +
          (sv ? "Ur Henrik Beckers arbetshistorik." : "From Henrik Becker's work history.")
      );
    }
    case "fun-facts":
      return clip(
        sv ? `Kul fakta om Henrik Becker, senior .NET-konsult i Stockholm: ${title}.`
           : `A fun fact about Henrik Becker, senior .NET consultant in Stockholm: ${title}.`
      );
    default:
      return clip(clean(data.summary) || clean(getLocalizedData("person", data)?.description));
  }
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
  metaTitle,
  metaDescription,
  ogLocale: (data) => (getLocale(data) === "sv" ? "sv_SE" : "en_GB"),
  ogType: (data) => (section(data) === "posts" ? "article" : "website"),
};
