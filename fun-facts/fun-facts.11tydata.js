import { localizedPermalink } from "../.eleventy.utils.js";

export default function () {
  return {
    layout: "page",
    tags: ["fun-facts"],
    permalink: (data) => localizedPermalink(data, "fun-facts"),
  };
}
