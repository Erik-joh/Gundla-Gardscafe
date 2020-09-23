export default {
  name: "imageBlock",
  title: "Bilder",
  type: "object",
  fields: [
    {
      name: "poster",
      title: "Bild",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "altText",
      title: "Bildbeskrivning",
      type: "string",
    },
  ],
};
