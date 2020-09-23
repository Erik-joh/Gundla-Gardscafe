export default {
  name: "aboutHeader",
  title: "Vilka är vi?",
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
      name: "poster",
      title: "Bild",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "altText",
      title: "Bildbeskrivning",
      type: "string",
    },
  ],
};
