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
  preview: {
    select: {
      title: "title",
      weddingQuestion: "weddingQuestion",
      alt: "alt",
      weddingFacilitiesInfo: "weddingFacilitiesInfo",
    },
    prepare({ weddingQuestion, alt, weddingFacilitiesInfo }) {
      var title;
      if (weddingQuestion) {
        title = weddingQuestion;
      } else if (alt) {
        title = alt;
      } else if (weddingFacilitiesInfo) {
        title = weddingFacilitiesInfo;
      }
      return { title: title };
    },
  },
};
