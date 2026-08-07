import { localizedPermalink } from "../.eleventy.utils.js";

export default function () {
  return {
    layout: "collection",
    tags: ["fun-facts"],
    permalink: (data) => localizedPermalink(data, "fun-facts"),
  };
}
