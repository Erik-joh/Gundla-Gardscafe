export default {
  name: "organizerHeader",
  title: "Titelinformation",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string",
    },
    {
      name: "headerImage",
      title: "Titelbild",
      type: "image",
    },
    {
      name: "subTitle",
      title: "Underrubrik",
      type: "string",
    },
    {
      name: "description",
      title: "Beskrivning",
      type: "text",
    },
  ],
};
