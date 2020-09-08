export default {
  name: "catering-links",
  title: "Catering navigering",
  type: "object",
  fields: [
    {
      name: "slideQuote",
      title: "Slide Quote",
      type: "string"
    },
    {
      name: "slideImage",
      title: "Slide Image",
      type: "image",
      options: {
        hotspot: true
      }
    }
  ]
};
