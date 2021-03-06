export default {
  name: "menu",
  title: "Navigerings Meny",
  type: "document",
  fields: [
    {
      name: "menuLinks",
      title: "Länkar till navigerings menyn",
      type: "array",
      of: [{ type: "menuLink" }],
      options: {
        sortable: false,
      },
      validation: (Rule) => Rule.length(7),
    },
    {
      name: "menuTitleText",
      title: "Öppettider, Adress och Kontakt",
      type: "array",
      of: [{ type: "menuTitleText" }],
    },
    {
      name: "socailmedias",
      title: "Socialmedia länkar",
      type: "array",
      of: [{ type: "socialmedia" }],
    },

    {
      name: "menuBottomLinks",
      title: "Länkar till nyhetsbrev och policy",
      type: "array",
      of: [{ type: "menuLink" }],
      validation: (Rule) => Rule.length(2),
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare() {
      const title = "Navigerings Meny";
      return { title: title };
    },
  },
};
