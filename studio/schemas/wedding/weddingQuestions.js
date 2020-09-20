export default {
  name: "weddingQuestions",
  title: "Bröllop & fest - Frågor och svar",
  type: "object",
  fields: [
    {
      name: "Title",
      title: "Titel",
      type: "string",
    },
    {
      name: "weddingQuestion",
      title: "En fråga",
      type: "string",
    },
    {
      name: "weddingAnswer",
      title: "Ett svar",
      type: "string",
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
  ],
};