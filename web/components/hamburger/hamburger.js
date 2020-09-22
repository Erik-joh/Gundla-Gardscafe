import { useState, useEffect } from "react";
import styles from "./hamburger.module.css";

export default function Hamburger(props) {
  const [anim, setAnim] = useState(false);
  const [animTop, setAnimTop] = useState("");
  const [animHam, setAnimHam] = useState("");
  const [animMid, setAnimMid] = useState("");
  const [animBot, setAnimBot] = useState("");

  useEffect(() => {
    if (anim) {
      setAnimTop(styles.animTop);
      setAnimHam(styles.animHam);
      setAnimMid(styles.animMid);
      setAnimBot(styles.animBot);
    } else {
      setAnimTop("");
      setAnimHam("");
      setAnimMid("");
      setAnimBot("");
    }
  }, [anim]);
  return (
    <div
      className={`${styles.hamburger} ${animHam}`}
      onClick={() => {
        props.onClick();
        setAnim(!anim);
      }}
    >
      <div className={styles.gradient} />
      <div className={`${styles.top} ${animTop}`} />
      <div className={`${styles.mid} ${animMid}`} />
      <div className={`${styles.bot} ${animBot}`} />
    </div>
  );
}
