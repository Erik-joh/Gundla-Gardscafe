import styles from "./plusSign.module.css";
import React, { useState } from "react";

export default function PlusSign(props) {
  const [animate, setAnimate] = useState("");
  return (
    <div
      className={`${styles.plusSign} ${animate}`}
      onClick={() => {
        if (animate == "") {
          setAnimate(styles.active);
        } else {
          setAnimate("");
        }
        props.onClick();
      }}
    >
      <div className={styles.horizontal}></div>
      <div className={styles.vertical}></div>
    </div>
  );
}
