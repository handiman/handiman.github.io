import { getLocale, localizedPermalink } from "../.eleventy.utils.js";

export default function () {
  return {
    layout: "experience",
    tags: ["experience"],
    permalink: (data) => localizedPermalink(data, "experience"),
  };
}
