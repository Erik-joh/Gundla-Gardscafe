import urlFor from "../../imageBuilder";
import styles from "./imageCarousel.module.css";
import { useState } from "react";

export default function ImageCarousel(props) {
  return (
    <div className={styles.carousel}>
      <img src={urlFor(props.imageOne).url()} />
      <button className={styles.leftButton}></button>
      <img src={urlFor(props.imageTwo).url()} />
      <button className={styles.rightButton}></button>
      <img src={urlFor(props.imageThree).url()} />
    </div>
  );
}
