import { getLocale, localizedPermalink } from "../.eleventy.utils.js";

export default function () {
  return {
    layout: "experience",
    tags: ["employment"],
    permalink: (data) => localizedPermalink(data, "employment"),
  };
}
