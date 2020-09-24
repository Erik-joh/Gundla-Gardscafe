export default {
  name: "cateringHeader",
  title: "Titelinformation",
  type: "object",
  fields: [
    {
      name: "headerImage",
      title: "Titelbild",
      type: "image",
    },
    {
      name: "alt",
      title: "Bildbeskrivning",
      type: "string",
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
