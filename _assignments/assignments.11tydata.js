import { getLocale, localizedPermalink } from "../.eleventy.utils.js";

export default function () {
  return {
    layout: "experience",
    tags: ["assignments"],
    permalink: (data) => localizedPermalink(data, "assignments"),
  };
}
