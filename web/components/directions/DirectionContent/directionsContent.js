import styles from "./directionsContent.module.css";

export default function DirectionsContent(props) {
  {
    return (
      <div className={styles.contentWrapper}>
        <div className={styles.bus}>
          <div className={styles.textOrderBus}>
            <h2>{props.titleBus}</h2>
            <p>{props.textInfoBus}</p>
          </div>
          <img src={props.firstImage}></img>
        </div>
        <div className={styles.car}>
          <div className={styles.textOrderCar}>
            <h2>{props.titleCar}</h2>
            <p>{props.textInfoCar}</p>
          </div>
          <img src={props.secondImage}></img>
        </div>
      </div>
    );
  }
}
