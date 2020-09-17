export default {
  name: "cateringContentImages",
  title: "Innehållsbilder",
  type: "object",
  fields: [
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
