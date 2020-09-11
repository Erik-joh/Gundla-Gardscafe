import urlFor from "../../imageBuilder";
import styles from "./quoteCarousel.module.css";

export default function quoteCarousel(props) {
  return (
    <div className={styles.carousel}>
      <div className={styles.singelCarousel}>
        <p>{props.quoteOne}</p>
      </div>
      <div className={styles.singelCarousel}>
        <p>{props.quoteTwo}</p>
      </div>
      <div className={styles.singelCarousel}>
        <p>{props.quoteThree}</p>
      </div>
    </div>
  );
}
