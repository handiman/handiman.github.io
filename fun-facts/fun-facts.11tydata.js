export default function () {
  return {
    layout: "page",
    tags: ["fun-facts"],
    permalink: (data) =>
      `/fun-facts/${data.page.fileSlug.replace(/^\d+-/, "")}/`,
  };
}
