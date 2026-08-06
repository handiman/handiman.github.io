import YAML from "yaml";
import buildCV from "../cv.js";

export default class CvYaml {
  data() {
    return {
      permalink: "/assets/henrik-becker.yaml",
      eleventyExcludeFromCollections: true,
      layout: null,
    };
  }

  render(data) {
    const cv = buildCV(data);
    return YAML.stringify(cv);
  }
}
