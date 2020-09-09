export default {
  name: "catering",
  title: "Catering",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "array",
      of: [{ type: "cateringTitle" }],
    },
    {
      name: "headerImage",
      title: "Titelbild",
      type: "array",
      of: [{ type: "cateringHeaderImage" }],
    },
    {
      name: "description",
      title: "Beskrivning",
      type: "array",
      of: [{ type: "cateringDescription" }],
    },
    {
      name: "contentImages",
      title: "Innehållsbilder",
      type: "array",
      of: [{ type: "cateringContentImages" }],
    },
    {
      name: "cateringAppetizers",
      title: "Förrätter",
      type: "array",
      of: [{ type: "cateringAppetizers" }],
    },
    {
      name: "cateringMainCourses",
      title: "Varmrätter",
      type: "array",
      of: [{ type: "cateringMainCourses" }],
    },
    {
      name: "cateringDesserts",
      title: "Efterrätter",
      type: "array",
      of: [{ type: "cateringDesserts" }],
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
