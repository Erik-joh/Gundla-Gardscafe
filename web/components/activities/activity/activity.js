import styles from "./activity.module.css";
import urlFor from "../../../imageBuilder";
import PlusSign from "../plusSign/plusSign";
import React, { useState } from "react";

export default function Activity(props) {
  var linkText;
  var styleA;
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
      className={`${styles.activity} ${showText}`}
      style={{ width: props.width }}
    >
      <img src={urlFor(props.image).url()} />
      <div className={`${styles.gradient} ${gradient}`}></div>
      <h3>{props.date}</h3>
      <div className={styles.contentContainer}>
        <div>
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
          if (showText == "" && gradient == "") {
            setShowText(styles.showText);
            setGradient(styles.setGradient);
          } else {
            setGradient("");
            setShowText("");
          }
        }}
      />
    </div>
  );
}
