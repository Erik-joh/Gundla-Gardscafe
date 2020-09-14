export default {
  name: "socialmedia",
  title: "Länk socialmedia",
  type: "object",
  fields: [
    {
      name: "poster",
      title: "Socialmedia ikon",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "link",
      title: "länk",
      type: "url",
    },
  ],
};
