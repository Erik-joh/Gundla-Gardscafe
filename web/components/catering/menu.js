import urlFor from "../../imageBuilder";
import styles from "./menu.module.css";

export default function Menu(props) {
  console.log(props);

  if (props.image) {
    var image = <img src={urlFor(props.image).url()} />;
  }
  var style;

  return (
    <div className={styles.test}>
      {image}
      <div>
        <div>
          <h4>{props.title}</h4>
          <p>{props.descriptionOne}</p>
          <p>{props.descriptionTwo}</p>
          <p>{props.descriptionThree}</p>
        </div>
      </div>
    </div>
  );
}
