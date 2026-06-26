export default function () {
  return {
    layout: "project",
    tags: ["assignments"],
    permalink: (data) =>
      `/assignments/${data.page.fileSlug.replace(/^\d+-/, "")}/`,
  };
}
