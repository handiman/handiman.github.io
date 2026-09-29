import path from "node:path";

export const sortByFilePrefixReversed = (itemA, itemB) => {
  const a = parseInt(itemA.fileSlug.split("-")[0]);
  const b = parseInt(itemB.fileSlug.split("-")[0]);
  return b - a;
};

export const sortByFilePrefix = (itemA, itemB) => {
  const a = parseInt(itemA.fileSlug.split("-")[0]);
  const b = parseInt(itemB.fileSlug.split("-")[0]);
  return a - b;
};

export const early_job = (item) => {
  const year = new Date(item.data.start_date).getFullYear();
  return year < 2008;
};

export const late_job = (item) => !early_job(item);

export const swedish = (item) => getLocale(item.data) === "sv";
export const english = (item) => !swedish(item);

export const getLocalizedCollection = (items, targetLocale) => {
  const localizedItems = new Map();

  for (const item of items) {
    const slug = getSlug(item.data);
    if (getLocale(item.data) === targetLocale || !localizedItems.has(slug)) {
      localizedItems.set(slug, item);
    }
  }

  return [...localizedItems.values()];
};

export const normalizeSkills = (skills) => {
  if (!skills) return [];
  if (Array.isArray(skills) && typeof skills[0] === "string") return skills;
  if (Array.isArray(skills)) return skills.flatMap((area) => area.tech ?? []);
  return [];
};

export const toArray = (something) =>
  something ? (Array.isArray(something) ? something : [something]) : [];

export const getSlug = (data) =>
  data.slug ?? data.page.fileSlug.replace(/^\d+-/, "").replace(/\.sv$/, "");

export const getLocale = (data) => {
  const inputPath = data?.page?.inputPath;
  if (inputPath) {
    const fileName = path.basename(inputPath);
    const match = fileName.match(/\.([a-z]{2,3})\.[^.]+$/i);
    if (match) {
      return match[1].toLowerCase();
    }
  }

  if (data?.lang) {
    return data.lang;
  }

  return "en";
};

export const localizedPermalink = (data, section) => {
  const slug = getSlug(data);
  const prefix = getLocale(data) === "sv" ? "/sv" : "";
  return `${prefix}/${section}/${slug}/`;
};

/**
 * Hittar alla output-sidor som delar samma slug som `item` (dvs.
 * dess språkvarianter) genom att söka i collections.all — samma
 * parningsprincip som getLocalizedCollection() använder.
 */
export const getHreflangAlternates = (item, allItems, siteUrl) => {
  const slug = item && getSlug(item.data);
  if (!slug) return [];
  // Slugs repeat across sections (employment/betsson and experience/betsson),
  // so a translation must also be in the same section.
  const section = (url) => String(url).replace(/^\/sv\//, "/").split("/")[1] ?? "";
  const itemSection = section(item.url);

  const locales = new Map(); // lang -> site-relative url
  for (const other of allItems) {
    if (getSlug(other.data) !== slug || section(other.url) !== itemSection) continue;
    const lang = getLocale(other.data);
    if (!locales.has(lang)) locales.set(lang, other.url);
  }

  // href is absolute (hreflang tags and the sitemap need that); path is
  // site-relative, for links a visitor clicks, so they work locally too.
  const alternates = Array.from(locales, ([lang, path]) => ({ lang, href: siteUrl + path, path }));
  const defaultPath = locales.get("en");
  if (defaultPath) alternates.push({ lang: "x-default", href: siteUrl + defaultPath, path: defaultPath });

  return alternates;
};

/**
 * Finds a collections.all entry by its Eleventy `inputPath` — lets a
 * template that only has the built-in `page` object (e.g. a shared layout,
 * which has no `item.data` of its own) look up its own full collection item.
 */
export const findByInputPath = (items, inputPath) =>
  items.find((item) => item.inputPath === inputPath);
