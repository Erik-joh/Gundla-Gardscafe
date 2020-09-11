import urlFor from "../../imageBuilder";
import styles from "./imageCarousel.module.css";

export default function ImageCarousel(props) {
  return (
    <div className={styles.carousel}>
      <img src={urlFor(props.imageOne).url()} />

      <img src={urlFor(props.imageTwo).url()} />

      <img src={urlFor(props.imageThree).url()} />
    </div>
  );
}
