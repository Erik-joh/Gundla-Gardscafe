import styles from "./directionsContent.module.css";
import TextSplit from "../../textSplit/textSplit";
import RespPicture from "../../respPicture/respPicture";

export default function DirectionsContent(props) {
  {
    return (
      <div className={styles.contentWrapper}>
        <div className={styles.bus}>
          <div className={styles.textOrderBus}>
            <h2>{props.titleBus}</h2>
            <TextSplit string={props.textInfoBus} />
          </div>
          <RespPicture
            image={props.firstImage}
            alt={props.altFirstImage}
            width={0.7}
          />
        </div>
        <div className={styles.car}>
          <div className={styles.textOrderCar}>
            <h2>{props.titleCar}</h2>
            <TextSplit string={props.textInfoCar} />
          </div>
          <RespPicture
            image={props.secondImage}
            alt={props.altSecondImage}
            width={0.7}
          />
        </div>
      </div>
    );
  }
}
