import styles from "./cateringGroup.module.css";
import Menu from "../menu/menu";
import RespPicture from "../../respPicture/respPicture";

export default function CateringGroup(props) {
  console.log(props);

  return (
    <div className={styles.group}>
      <div className={styles.leftGroup}>
        <RespPicture image={props.topLeftImage} alt={props.alt} width={0.285} />
        <RespPicture
          image={props.bottomLeftImage}
          alt={props.alt}
          width={0.285}
        />
      </div>
      <div className={styles.menuGroup}>
        <Menu
          background={"/appetizerImage.png"}
          menuTitle="FÖRRÄTTER"
          alternativeOne={props.menu[0].Food}
          alternativeTwo={props.menu[1].Food}
          alternativeThree={props.menu[2].Food}
          key={props._key}
        ></Menu>
        <Menu
          background={"/mainCourseImage.png"}
          menuTitle="VARMRÄTTER"
          alternativeOne={props.menu[3].Food}
          alternativeTwo={props.menu[4].Food}
          alternativeThree={props.menu[5].Food}
          key={props._key}
        ></Menu>

        <Menu
          background={"/dessertImage.png"}
          menuTitle="EFTERRÄTTER"
          alternativeOne={props.menu[6].Food}
          alternativeTwo={props.menu[7].Food}
          alternativeThree={props.menu[8].Food}
          key={props._key}
        ></Menu>
      </div>
      <div className={styles.rightGroup}>
        <RespPicture
          image={props.topRightImage}
          alt={props.alt}
          width={0.285}
        />
        <RespPicture
          image={props.bottomRightImage}
          alt={props.alt}
          width={0.285}
        />
      </div>
    </div>
  );
}
