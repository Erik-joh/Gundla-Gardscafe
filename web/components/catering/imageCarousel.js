import urlFor from "../../imageBuilder";
import styles from "./imageCarousel.module.css";

export default function ImageCarousel(props) {
  return (
    <div className={styles.carousel}>
      <img src={urlFor(props.imageOne).url()} />
      <button className={styles.leftButton} onClick={swipeLeft}></button>
      <img src={urlFor(props.imageTwo).url()} />
      <button className={styles.rightButton} onClick={swipeRight}></button>
      <img src={urlFor(props.imageThree).url()} />
    </div>
  );
}
