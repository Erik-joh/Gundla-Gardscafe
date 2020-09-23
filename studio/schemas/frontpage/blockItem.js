export default {
  name: "blockItem",
  title: "Startsidans bild navigering",
  type: "object",
  fields: [
    {
      name: "titel",
      title: "Titel",
      type: "string",
      readOnly: false,
    },
    {
      name: "description",
      title: "Beskrivning",
      type: "text",
    },
    {
      name: "link",
      title: "länk",
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
      name: "alt",
      title: "Bildbeskrivning",
      type: "string",
    },
  ],
};
