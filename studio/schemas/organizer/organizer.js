export default {
  name: "organizer",
  title: "Arrangör",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: 'Please use "Firstname Lastname" format',
    },
    {
      name: "organizerHeader",
      title: "Titelinformation",
      type: "array",
      of: [{ type: "organizerHeader" }],
    },
    {
      name: "organizerInfo",
      title: "Test",
      type: "array",
      of: [{ type: "cateringInfo" }],
    },
  ],
};
