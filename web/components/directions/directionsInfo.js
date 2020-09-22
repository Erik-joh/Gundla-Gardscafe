import styles from "./directionsInfo.module.css";

export default function DirectionsInfo(props) {
  {
    return (
      <div className={styles.infoWrapper}>
        <h2>{props.titel}</h2>
        <h3>{props.subTitle}</h3>
        <pre>{props.paragraph}</pre>
      </div>
    );
  }
}
