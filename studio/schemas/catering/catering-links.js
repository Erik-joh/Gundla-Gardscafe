export default {
  name: "catering-links",
  title: "Catering navigering",
  type: "object",
  fields: [
    {
      name: "titel",
      title: "Titel",
      type: "string",
    },
    {
      name: "description",
      title: "Beskrivning",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      name: "poster",
      title: "Bild",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "slideImage",
      title: "Slide Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
