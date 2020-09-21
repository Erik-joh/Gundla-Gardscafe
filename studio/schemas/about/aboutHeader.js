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
      type: "string",
    },

    {
      name: "poster",
      title: "Bild",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
