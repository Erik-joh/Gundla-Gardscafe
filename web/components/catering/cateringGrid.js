import urlFor from "../../imageBuilder";
import styles from "./cateringGrid.module.css";

export default function CateringGrid(props) {
  if (props.image) {
    var image = <img src={urlFor(props.image).url()} />;
  }

  return (
    <div className={styles.cateringGroup}>
      {image}
      <div className={styles.cateringMenu}>
        <h4>{props.cateringMenu}</h4>
        <p>{props.One}</p>
        <p>{props.Two}</p>
        <p>{props.Three}</p>
      </div>
      {image}
      <div className={styles.cateringMenu}>
        <h4>{props.cateringMenu}</h4>
        <p>{props.cateringMenu}</p>
        <p>{props.cateringMenu}</p>
        <p>{props.cateringMenu}</p>
      </div>
      <div className={styles.cateringMenu}>
        <h4>{props.menuTitle}</h4>
        <p>{props.One}</p>
        <p>{props.Two}</p>
        <p>{props.Three}</p>
      </div>
      {image}
    </div>
  );
}
