export default {
  name: "frontpage",
  title: "Startsida",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: 'Please use "Firstname Lastname" format',
    },

    {
      name: "blockItem",
      title: "Bildrutor",
      type: "array",
      of: [{ type: "blockItem" }],
    },
  ],
};
