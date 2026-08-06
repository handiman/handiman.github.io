import { localizedPermalink } from "../.eleventy.utils.js";

export default function () {
  return {
    layout: "page",
    tags: ["education"],
    permalink: (data) => localizedPermalink(data, "education"),
  };
}
