import urlFor from "../../imageBuilder";
import styles from "./cateringGroup.module.css";
import Menu from "./menu";

export default function CateringGroup(props) {
  return (
    <div className={styles.group}>
      <img className={styles.leftImage} src={urlFor(props.leftImage).url()} />
      <Menu
        title={props.menu.menuTitleAppetizer}
        alternativeOne={props.menu.appetizerOne}
        alternativeTwo={props.menu.appetizerTwo}
        alternativeThree={props.menu.appetizerThree}
        key={props._key}
      ></Menu>
      <img className={styles.rightImage} src={urlFor(props.rightImage).url()} />
      <img
        className={styles.suggestionImage}
        src={urlFor(props.suggestionImage).url()}
      />
      <Menu
        title={props.menu.menuTitleMainCourse}
        alternativeOne={props.menu.mainCourseOne}
        alternativeTwo={props.menu.mainCourseTwo}
        alternativeThree={props.menu.mainCourseThree}
        key={props._key}
      ></Menu>
      <Menu
        title={props.menu.menuTitleDessert}
        alternativeOne={props.menu.dessertOne}
        alternativeTwo={props.menu.dessertTwo}
        alternativeThree={props.menu.dessertThree}
        key={props._key}
      ></Menu>
      <img
        className={styles.bottomImage}
        src={urlFor(props.bottomImage).url()}
      />
    </div>
  );

  {
    props.cateringMenu.map((item) => {
      return (
        <Menu
          title={item.menuTitleAppetizer}
          alternativeOne={item.appetizerOne}
          alternativeTwo={item.appetizerTwo}
          alternativeThree={item.appetizerThree}
          key={item._key}
        ></Menu>
      );
    });
  }
}
