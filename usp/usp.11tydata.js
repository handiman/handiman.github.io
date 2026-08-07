import { getLocale, localizedPermalink } from "../.eleventy.utils.js";

export default function () {
  return {
    layout: "collection",
    tags: ["usps"],
    permalink: (data) => localizedPermalink(data, "unique-selling-points"),
  };
}
