export default {
  name: "menuLink",
  title: "Länk till navigerings menyn",
  type: "object",
  fields: [
    {
      name: "link",
      title: "länk",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
    },
  ],
  preview: {
    select: {
      title: "link",
    },
  },
};
