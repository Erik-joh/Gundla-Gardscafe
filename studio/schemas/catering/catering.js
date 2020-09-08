export default {
  name: "catering",
  title: "Catering",
  type: "document",
  fields: [
    {
      name: "appetizer",
      title: "Förrätt",
      type: "string",
    },
    {
      name: "mainCourse",
      title: "Varmrätt",
      type: "string",
    },
    {
      name: "dessert",
      title: "Efterrätt",
      type: "string",
    },
    {
      name: "imageSlideshow",
      title: "Image Slideshow",
      type: "array",
      of: [{ type: "catering-links" }],
    },
  ],
};
