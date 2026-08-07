import { localizedPermalink } from "../.eleventy.utils.js";

export default function () {
  return {
    layout: "experience",
    tags: ["education"],
    permalink: (data) => localizedPermalink(data, "education"),
  };
}
