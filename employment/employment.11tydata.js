export default function () {
  return {
    layout: "page",
    tags: ["employment"],
    permalink: (data) =>
      `/employment/${data.page.fileSlug.replace(/^\d+-/, "")}/`,
  };
}
