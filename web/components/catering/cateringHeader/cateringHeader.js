import styles from "./cateringHeader.module.css";
import TextSplit from "../../textSplit/textSplit";
import RespPicture from "../../respPicture/respPicture";

export default function CateringHeader(props) {
  console.log(props);
  return (
    <div className={styles.header}>
      <div className={styles.headerImage}>
        <RespPicture image={props.image} alt={props.altHeader} width={1.2} />
        <h1>{props.title}</h1>
      </div>
      <div className={styles.text}>
        <h2>{props.subTitle}</h2>
        <TextSplit string={props.description} />
      </div>
    </div>
  );
}
