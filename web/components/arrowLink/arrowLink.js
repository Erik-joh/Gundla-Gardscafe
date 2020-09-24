import styles from "./arrowLink.module.css";
export default function ArrowLink(props) {
  var icon;
  var class2;
  if (props.type == "lw") {
    var class2 = styles.longArrow;
    icon = <img src={"/linkArrow.png"} />;
  } else if (props.type == "w") {
    icon = <img src={"/linkArrowShort.png"} />;
  } else {
    icon = <img src={"/linkArrowShortBlack.png"} />;
  }
  var color;
  if (props.color == "white") {
    color = styles.white;
  } else {
    color = styles.black;
  }
  return (
    <a href={props.slug} className={`${styles.arrowLink} ${class2}`}>
      <p className={color}>{props.link}</p>
      {icon}
    </a>
  );
}
