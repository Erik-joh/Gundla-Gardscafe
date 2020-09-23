function TextSplit(string) {
  let array = string.split("\n");
  console.log(array);
  return array.map((item) => {
    console.log(item);
    <p>{item}</p>;
  });
}

export default TextSplit;
