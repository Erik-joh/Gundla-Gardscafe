import styles from "./menu.module.css";

export default function Menu(props) {
  return (
    <div className={styles.menu}>
      <img src={props.background}></img>
      <h2>{props.title}</h2>
      <p>{props.alternativeOne}</p>
      <p>{props.alternativeTwo}</p>
      <p>{props.alternativeThree}</p>
    </div>
  );
}
