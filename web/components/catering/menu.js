import styles from "./menu.module.css";

export default function Menu(props) {
  return (
    <div className={styles.menu}>
      <h4>{props.title}</h4>
      <p>{props.alternativeOne}</p>
      <p>{props.alternativeTwo}</p>
      <p>{props.alternativeThree}</p>
    </div>
  );
}
