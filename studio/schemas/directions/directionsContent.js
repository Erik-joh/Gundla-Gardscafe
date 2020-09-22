export default {
  name: "directionsContent",
  title: "Hitta hit innehåll",
  type: "object",
  fields: [
    {
      name: "images",
      title: "Bilder",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "title",
      title: "Titel",
      type: "string",
    },
    {
      name: "infoText",
      title: "Informationstext",
      type: "string",
    },
  ],
};
