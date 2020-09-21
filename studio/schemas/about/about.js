export default {
  name: "about",
  title: "Om oss",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Sidtitel",
      type: "string",
    },
    {
      name: "aboutHeader",
      title: "Vilka är vi?",
      type: "array",
      of: [{ type: "aboutHeader" }],
      options: {
        sortable: false,
      },
      validation: (Rule) => Rule.length(1),
    },
    {
      name: "topImage",
      title: "Bild",
      type: "array",
      of: [{ type: "imageBlock" }],
      options: {
        sortable: false,
      },
      validation: (Rule) => Rule.length(1),
    },
    {
      name: "history",
      title: "Vår historia",
      type: "array",
      of: [{ type: "textBlock" }],
      options: {
        sortable: false,
      },
      validation: (Rule) => Rule.length(4),
    },
    {
      name: "midImages",
      title: "Bilder",
      type: "array",
      of: [{ type: "imageBlock" }],
      options: {
        sortable: false,
      },
      validation: (Rule) => Rule.length(2),
    },
    {
      name: "bottomTextBlocks",
      title: "Vår vision & miljö och hållbarhet",
      type: "array",
      of: [{ type: "textBlock" }],
      options: {
        sortable: false,
      },
      validation: (Rule) => Rule.length(2),
    },
  ],
};
