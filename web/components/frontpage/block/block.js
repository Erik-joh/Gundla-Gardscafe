import urlFor from "../../../imageBuilder";
import styles from "./block.module.css";

export default function Block(props) {
  var link;
  if (props.slug) {
    var link = <a href={props.slug.current}>{props.link}</a>;
  }
  if (props.image) {
    var image = <img src={urlFor(props.image).url()} />;
  }
  var id = props.id;

  var style;
  var titel;
  var icon;
  if (id == 1 || id == 4 || id == 5) {
    style = styles.bgImageBlock;
    titel = <h1>{props.title}</h1>;
    icon = <img src={"/arrow.png"} />;
    var link = (
      <a href={props.slug.current}>
        {props.link}
        {icon}
      </a>
    );
  } else {
    style = styles.logoImageBlock;
    titel = <h2>{props.title}</h2>;
  }
  var style2;
  if (id == 5 || id == 6) {
    style2 = styles.width50;
  } else if (id == 7) {
    style2 = styles.width100;
  }
  console.log(icon);

  return (
    <div className={`${style} ${style2}`}>
      {image}
      <div>
        <div>
          {titel}
          <p>{props.description}</p>
        </div>
        {link}
      </div>
    </div>
  );
}
