import styles from "./directionsContent.module.css";
import TextSplit from "../../textSplit/textSplit";

export default function DirectionsContent(props) {
  {
    return (
      <div className={styles.contentWrapper}>
        <div className={styles.bus}>
          <div className={styles.textOrderBus}>
            <h2>{props.titleBus}</h2>
            <TextSplit string={props.textInfoBus} />
          </div>
          <img src={props.firstImage}></img>
        </div>
        <div className={styles.car}>
          <div className={styles.textOrderCar}>
            <h2>{props.titleCar}</h2>
            <TextSplit string={props.textInfoCar} />
          </div>
          <img src={props.secondImage}></img>
        </div>
      </div>
    );
  }
}
