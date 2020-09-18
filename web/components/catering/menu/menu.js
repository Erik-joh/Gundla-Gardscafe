import styles from "./menu.module.css";

export default function Menu(props) {
  {
    return (
      <div className={styles.menu}>
        <img src={props.background}></img>
        <h4>{props.menuTitle}</h4>
        <p>{props.alternativeOne}</p>
        <p>{props.alternativeTwo}</p>
        <p>{props.alternativeThree}</p>
      </div>
    );
  }
}
