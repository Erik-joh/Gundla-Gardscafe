import urlFor from "../../../imageBuilder";
import styles from "./block.module.css";
import ArrowLink from "../../arrowLink/arrowLink";
import RespPicture from "../../respPicture/respPicture";
import TextSplit from "../../textSplit/textSplit";

export default function Block(props) {
  var link;
  if (props.slug) {
    var link = <a href={props.slug.current}>{props.link}</a>;
  }
  if (props.image) {
    var image = <img src={urlFor(props.image).url()} alt={props.alt} />;
  }

  var id = props.id;

  var style;
  var titel;

  if (id == 4 || id == 5) {
    style = styles.bgImageBlock;
    titel = <h1>{props.title}</h1>;
    var image = (
      <RespPicture image={props.image} alt={props.alt} width={0.75} />
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
  var logo;
  var link;
  if (id == 1) {
    logo = <img src="/logoBig.png" />;
    style = styles.bgImageBlock;
    style2 = styles.topBlock;
    var downArrow = (
      <img
        className={styles.downArrow}
        src="/linkArrowShort.png"
        alt="En pil neråt"
      />
    );
    var image = (
      <RespPicture image={props.image} alt={props.alt} width={0.75} />
    );
  }
  if (props.link) {
    if (id == 6) {
      link = (
        <ArrowLink
          slug={props.slug.current}
          link={props.link}
          type="b"
          color="black"
        />
      );
    } else if (id == 5 || id == 7) {
      link = (
        <ArrowLink
          slug={props.slug.current}
          link={props.link}
          type="w"
          color="white"
        />
      );
    } else {
      link = (
        <ArrowLink
          slug={props.slug.current}
          link={props.link}
          type="lw"
          color="white"
        />
      );
    }
  }

  return (
    <div className={`${style} ${style2}`} style={{ width: props.width }}>
      {image}
      <div>
        <div>
          {logo}
          {titel}
          <TextSplit string={props.description} />
        </div>
      </div>
      {downArrow}
      {link}
    </div>
  );
}
