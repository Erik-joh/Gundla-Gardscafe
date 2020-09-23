import urlFor from "../../../imageBuilder";
import styles from "./cateringHeader.module.css";
import TextSplit from "../../textSplit/textSplit";

export default function CateringHeader(props) {
  if (props.image) {
    var image = <img src={urlFor(props.image).url()} />;
  }

  return (
    <div className={styles.header}>
      <div className={styles.headerImage}>
        {image}
        <h1>{props.title}</h1>
      </div>
      <div className={styles.text}>
        <h2>{props.subTitle}</h2>
        <TextSplit string={props.description} />
      </div>
    </div>
  );
}
