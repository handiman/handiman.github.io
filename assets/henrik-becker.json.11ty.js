import buildCV from "../cv.js";

export default class {
  data() {
    return {
      permalink: "/assets/henrik-becker.json",
      eleventyExcludeFromCollections: true,
      layout: null,
    };
  }

  render(data) {
    const cv = buildCV(data);
    return JSON.stringify(cv, null, 2);
  }
}
