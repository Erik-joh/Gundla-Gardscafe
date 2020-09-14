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

  if (id == 4 || id == 5) {
    style = styles.bgImageBlock;
    titel = <h1>{props.title}</h1>;
  } else {
    style = styles.logoImageBlock;
    titel = <h2>{props.title}</h2>;
  }
  if (props.link) {
    var icon = <img src={"/linkArrow.png"} />;
    var link = (
      <section>
        <a href={props.slug.current}>
          {props.link}
          {icon}
        </a>
      </section>
    );
  }
  var style2;
  if (id == 5 || id == 6) {
    style2 = styles.width50;
  } else if (id == 7) {
    style2 = styles.width100;
  }
  var logo;
  if (id == 1) {
    logo = <img src="/logo.png" />;
    style = styles.bgImageBlock;
  }

  return (
    <div className={`${style} ${style2}`}>
      {image}
      <div>
        {logo}
        <div>
          {titel}
          <p>{props.description}</p>
        </div>
      </div>
      {link}
    </div>
  );
}
