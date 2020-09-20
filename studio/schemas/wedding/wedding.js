export default {
  name: "wedding",
  title: "Bröllop & fest",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: 'Please use "Firstname Lastname" format',
    },
    {
      name: "weddingHeader",
      title: "Titelinformation",
      type: "array",
      of: [{ type: "weddingHeader" }],
    },
    {
      name: "weddingQuestions",
      title: "Frågor om bröllop",
      type: "array",
      of: [{ type: "weddingQuestions" }],
    },
  ],
};
