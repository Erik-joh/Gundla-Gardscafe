export default {
  name: "catering",
  title: "Catering",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: 'Please use "Firstname Lastname" format',
    },
    {
      name: "cateringHeader",
      title: "Titelinformation",
      type: "array",
      of: [{ type: "cateringHeader" }],
    },
    {
      name: "contentImages",
      title: "Innehållsbilder",
      type: "array",
      of: [{ type: "cateringContentImages" }],
    },
    {
      name: "cateringMenu",
      title: "Catering Meny",
      type: "array",
      of: [{ type: "cateringMenu" }],
    },
    {
      name: "quoteSlideshow",
      title: "Citatkarusell",
      type: "array",
      of: [{ type: "cateringQuoteSlideShow" }],
    },
    {
      name: "imageSlideshow",
      title: "Bildkarusell",
      type: "array",
      of: [{ type: "cateringImageSlideShow" }],
    },
  ],
};
