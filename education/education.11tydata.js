export default function () {
  return {
    layout: "page",   
    tags: ["education"],
    permalink: (data) =>
      `/education/${data.page.fileSlug.replace(/^\d+-/, "")}/`,
  };
}
