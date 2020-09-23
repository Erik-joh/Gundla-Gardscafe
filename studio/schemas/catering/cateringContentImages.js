export default {
  name: "cateringContentImages",
  title: "Innehållsbilder",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string",
    },
    {
      name: "Image",
      title: "Innehållsbild",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "Bilder",
      subtitle: "bilder",
    },
  },
};
