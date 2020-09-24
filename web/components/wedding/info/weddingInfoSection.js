import styles from "./weddingInfoSection.module.css";
import RespPicture from "../../respPicture/respPicture";

export default function WeddingInfoSection(props) {
  return (
    <div className={styles.group}>
      <div className={styles.infoImages}>
        <RespPicture
          image={props.imageLeft}
          alt={props.altImageLeft}
          width={0.35}
        />
        <RespPicture
          image={props.imageRight}
          alt={props.altImageRight}
          width={0.65}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.qna}>
          <h2>{props.title}</h2>
          <h4>{props.questionOne}</h4>
          <p>{props.answerOne}</p>
          <h4>{props.questionTwo}</h4>
          <p>{props.answerTwo}</p>
          <h4>{props.questionThree}</h4>
          <p>{props.answerThree}</p>
        </div>
        <div className={styles.facilities}>
          <h2>{props.titleFacilities}</h2>
          <h4>{props.facilityOne}</h4>
          <p>{props.infoOne}</p>
          <p>{props.infoTwo}</p>
          <p>{props.infoThree}</p>
          <p>{props.infoFour}</p>
          <h4>{props.facilityTwo}</h4>
          <p>{props.infoFive}</p>
          <p>{props.infoSix}</p>
          <h4>{props.facilityThree}</h4>
          <p>{props.infoSeven}</p>
          <p>{props.infoEight}</p>
        </div>
      </div>
    </div>
  );
}
