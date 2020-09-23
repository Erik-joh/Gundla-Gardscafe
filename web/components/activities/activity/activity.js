import styles from "./activity.module.css";
import RespPicture from "../../respPicture/respPicture";
import PlusSign from "../plusSign/plusSign";
import React, { useState } from "react";

export default function Activity(props) {
  var linkText;
  var styleA;
  const [increaseHeight, setIncreaseHeight] = useState("");
  const [showText, setShowText] = useState("");
  const [gradient, setGradient] = useState("");
  if (props.url) {
    linkText = "Köp Biljett";
    styleA = styles.buy;
  } else {
    linkText = "Fri Entré";
    styleA = styles.free;
  }
  return (
    <div
      className={`${styles.activity} ${increaseHeight}`}
      style={{ width: props.width }}
    >
      <RespPicture
        image={props.image}
        alt={props.alt}
        width={props.imageWidth}
      />
      <div className={`${styles.gradient} ${gradient}`}></div>
      <h3>{props.date}</h3>
      <div className={styles.contentContainer}>
        <div className={`${styles.textContainer} ${showText}`}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <a href={props.url} className={styleA}>
            <h4>{linkText}</h4>
          </a>
        </div>
      </div>
      <PlusSign
        className={styles.plusSign}
        onClick={() => {
          if (increaseHeight == "" && gradient == "" && showText == "") {
            setShowText(styles.showText);
            setIncreaseHeight(styles.increaseHeight);
            setGradient(styles.setGradient);
          } else {
            setShowText("");
            setIncreaseHeight("");
            setGradient("");
          }
        }}
      />
    </div>
  );
}
