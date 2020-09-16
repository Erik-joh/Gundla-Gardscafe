export default {
  name: "activities",
  title: "Aktiviteter",
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
      validation: (Rule) => Rule.length(2),
    },
    {
      name: "activity",
      title: "Aktiviteter",
      type: "array",
      of: [{ type: "activity" }],
      options: {
        sortable: false,
      },
      validation: (Rule) => Rule.length(4),
    },
  ],
};
