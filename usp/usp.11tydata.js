export default function () {
  return {
    layout: "usp",
    tags: ["usps"],
    permalink: (data) => `/usps/${data.page.fileSlug.replace(/^\d+-/, "")}/`,
  };
}
