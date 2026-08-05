import { getLocale, localizedPermalink } from "../.eleventy.utils.js";

export default function () {
  return {
    layout: "usp",
    tags: ["usps"],
    permalink: (data) => localizedPermalink(data, "unique-selling-points"),
  };
}
