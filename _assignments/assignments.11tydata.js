import { getLocale, localizedPermalink } from "../.eleventy.utils.js";

export default function () {
  return {
    layout: "project",
    tags: ["assignments"],
    permalink: (data) => localizedPermalink(data, "assignments"),
  };
}
