export default function () {
  return {
    layout: "post",
    tags: ["posts"],
    lang: "en",
    permalink: (data) => `/blog/${data.page.fileSlug}/`,
  };
}
