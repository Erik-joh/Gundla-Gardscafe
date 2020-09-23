export default {
  name: "cateringImageSlideShow",
  title: "Bildkarusell",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string",
    },
    {
      name: "slideImage",
      title: "Karusell",
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
