import { getLocale, localizedPermalink } from "../.eleventy.utils.js";

export default function () {
  return {
    layout: "experience",
    tags: ["projects"],
    permalink: (data) => localizedPermalink(data, "projects"),
  };
}
