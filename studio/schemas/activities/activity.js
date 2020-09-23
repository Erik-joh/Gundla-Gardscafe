export default {
  name: "activity",
  title: "Aktivitet",
  type: "object",
  fields: [
    {
      name: "titel",
      title: "Titel",
      type: "string",
      readOnly: false,
    },
    {
      name: "date",
      titel: "Datum",
      type: "string",
    },
    {
      name: "description",
      title: "Beskrivning",
      type: "string",
    },
    {
      name: "url",
      title: "Url",
      type: "url",
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
