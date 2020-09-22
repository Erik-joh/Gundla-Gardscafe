export default {
  name: "directions",
  title: "Hitta hit",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: 'Please use "Firstname Lastname" format',
    },
    {
      name: "directionsInfo",
      title: "Hitta hit info",
      type: "array",
      of: [{ type: "directionsInfo" }],
    },
    {
      name: "directionsContent",
      title: "Hitta hit innehåll",
      type: "array",
      of: [{ type: "directionsContent" }],
    },
  ],
};
