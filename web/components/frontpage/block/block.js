import urlFor from "../../../imageBuilder";
import styles from "./block.module.css";

export default function Block(props) {
  console.log(props.slug);
  if (props.slug) {
    var link = <a href={props.slug.current}>{props.link}</a>;
  }
  if (props.image) {
    var image = <img src={urlFor(props.image).url()} />;
  }
  var style;
  if (props.name == "bgImageBlock") {
    style = styles.bgImageBlock;
  } else {
    style = styles.logoImageBlock;
  }
  return (
    <div className={style}>
      {image}
      <div>
        <div>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
        {link}
      </div>
    </div>
  );
}
