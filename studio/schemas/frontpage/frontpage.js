export default {
  name: "frontpage",
  title: "Startsida",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Sidtitel",
      type: "string",
    },

    {
      name: "blockItem",
      title: "Bildrutor",
      type: "array",
      of: [{ type: "blockItem" }],
      options: {
        sortable: false,
      },
      validation: (Rule) => Rule.length(7),
    },
  ],
};
