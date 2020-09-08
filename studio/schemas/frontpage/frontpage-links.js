export default {
  name: "frontpage-links",
  title: "Startsidans bild navigering",
  type: "object",
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
        source: "title",
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
    }
  ]
};
