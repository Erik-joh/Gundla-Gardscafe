export default {
  name: "weddingQuestions",
  title: "Bröllop & fest - Frågor och svar",
  type: "object",
  fields: [
    {
      name: "weddingQuestion",
      title: "En fråga",
      type: "string",
    },
    {
      name: "weddingAnswer",
      title: "Ett svar",
      type: "text",
    },
    {
      name: "weddingFacilities",
      title: "Faciliteter",
      type: "string",
    },
    {
      name: "weddingFacilitiesInfo",
      title: "Facilitetsinfo",
      type: "string",
    },
    {
      name: "Images",
      title: "Bilder",
      type: "image",
    },
    {
      name: "alt",
      title: "Bildbeskrivning",
      type: "string",
    },
  ],
};
