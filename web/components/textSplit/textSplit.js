function TextSplit({ string }) {
  let array = string.split("\n");
  return array.map((item) => {
    return <p key={item}>{item}</p>;
  });
}
export default TextSplit;
