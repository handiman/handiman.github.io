import { getLocale, localizedPermalink } from "../.eleventy.utils.js";

export default function () {
  return {
    layout: "page",
    tags: ["employment"],
    permalink: (data) => localizedPermalink(data, "employment"),
  };
}
