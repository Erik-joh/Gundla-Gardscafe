export default {
  name: "FrontPage",
  title: "StartSida",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: 'Please use "Firstname Lastname" format',
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "imagelink",
      title: "Bild navigering",
      type: "array",
      of: [{ type: "frontpage-links" }],
    },
  ],
};
