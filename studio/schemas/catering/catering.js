export default {
  name: "catering",
  title: "Catering",
  type: "document",
  fields: [
    {
      name: "titel",
      title: "Titel",
      type: "string"
    },
    {
      name: "description",
      title: "Beskrivning",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100
      }
    },
    {
      name: "poster",
      title: "Bild",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "appetizer",
      title: "Förrätt",
      type: "string"
    },
    {
      name: "mainCourse",
      title: "Varmrätt",
      type: "string"
    },
    {
      name: "dessert",
      title: "Efterrätt",
      type: "string"
    },
    {
      name: "imageSlideshow",
      title: "Image Slideshow",
      type: "array",
      of: [{ type: "catering-links" }]
    },
    {
      name: "quoteSlideshow",
      title: "Quote Slideshow",
      type: "array",
      of: [{ type: "catering-links" }]
    }
  ]
};
