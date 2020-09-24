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
    {
      name: "alt",
      title: "Bildbeskrivning",
      type: "string",
    },
  ],
};
