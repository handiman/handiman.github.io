import { getLocale, localizedPermalink } from "../.eleventy.utils.js";

export default function () {
  return {
    layout: "page",
    tags: ["experience"],
    permalink: (data) => localizedPermalink(data, "experience"),
  };
}
