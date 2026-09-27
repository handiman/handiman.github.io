// Blog posts: posts/YYYY-MM-DD-slug.md, published at /blog/slug/.
// Posts with `draft: true` show up in `npm run serve` but are left out of builds.
export const addPosts = (eleventyConfig) => {
  eleventyConfig.addPreprocessor("drafts", "md", (data) => {
    if (data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
      return false;
    }
  });

  // Newest first
  eleventyConfig.addCollection("blog", (collectionApi) =>
    collectionApi.getFilteredByTag("posts").sort((a, b) => b.date - a.date),
  );
};
