import icon from "react-icons/lib/md/local-movies";

export default {
  name: "catering",
  title: "Catering",
  type: "document",
  icon,
  fields: [
    // {
    //   name: "quoteSlideshow",
    //   title: "Quote Slideshow",
    //   type: "array",
    //   of: [{ type: "quoteSlideshow" }],
    // },
    {
      name: "imageSlideshow",
      title: "Image Slideshow",
      type: "array",
      of: [{ type: "imageSlideshow" }],
    },
  ],
};
