import YAML from "yaml";

export default async function (eleventyConfig) {
  // Configure Eleventy
  eleventyConfig.addDataExtension("yml,yaml", (contents) =>
    YAML.parse(contents),
  );

  eleventyConfig.addCollection("experience", function (collectionApi) {
    return collectionApi
      .getFilteredByTag("experience")
      .sort(function (itemA, itemB) {
        const a = parseInt(itemA.inputPath.replace("./cv/experience/", "").split("-")[0]);
        const b = parseInt(itemB.inputPath.replace("./cv/experience/", "").split("-")[0]);
        return a - b;
      });
  });
}
