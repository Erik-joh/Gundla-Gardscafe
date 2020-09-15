import urlFor from "../../imageBuilder";
import styles from "./cateringGroup.module.css";
import Menu from "./menu";

export default function CateringGroup(props) {
  return (
    <div className={styles.group}>
      <div className={styles.leftGroup}>
        <img
          className={styles.topLeftImage}
          src={urlFor(props.topLeftImage).url()}
        />
        <img
          className={styles.bottomLeftImage}
          src={urlFor(props.bottomLeftImage).url()}
        />
      </div>
      <div className={styles.menuGroup}>
        <Menu
          background={"/appetizerImage.png"}
          title={props.menu.menuTitleAppetizer}
          alternativeOne={props.menu.appetizerOne}
          alternativeTwo={props.menu.appetizerTwo}
          alternativeThree={props.menu.appetizerThree}
          key={props._key}
        ></Menu>
        <Menu
          background={"/mainCourseImage.png"}
          title={props.menu.menuTitleMainCourse}
          alternativeOne={props.menu.mainCourseOne}
          alternativeTwo={props.menu.mainCourseTwo}
          alternativeThree={props.menu.mainCourseThree}
          key={props._key}
        ></Menu>

        <Menu
          background={"/dessertImage.png"}
          title={props.menu.menuTitleDessert}
          alternativeOne={props.menu.dessertOne}
          alternativeTwo={props.menu.dessertTwo}
          alternativeThree={props.menu.dessertThree}
          key={props._key}
        ></Menu>
      </div>
      <div className={styles.rightGroup}>
        <img
          className={styles.topRightImage}
          src={urlFor(props.topRightImage).url()}
        />
        <img
          className={styles.bottomRightImage}
          src={urlFor(props.bottomRightImage).url()}
        />
      </div>
    </div>
  );
}
