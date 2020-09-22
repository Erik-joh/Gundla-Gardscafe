import Link from "next/link";
import styles from "./menu.module.css";
import urlFor from "../../imageBuilder";
import { useEffect, useState } from "react";
import Hamburger from "../hamburger/hamburger";

export default function Menu(props) {
  const [show, setShow] = useState("");
  const [anim, setAnim] = useState(false);
  useEffect(() => {
    if (anim) {
      setShow(styles.show);
    } else {
      setShow("");
    }
  }, [anim]);
  return (
    <div>
      <Hamburger
        onClick={() => {
          setAnim(!anim);
        }}
      />
      <div className={`${styles.menu} ${show}`}>
        <img src={urlFor(props.logo).url()} />
        <nav>
          {props.menuLinks.map((item) => {
            return (
              <Link href={item.slug.current} key={item._key}>
                <a>{item.link}</a>
              </Link>
            );
          })}
        </nav>
        <div className={styles.titelTextContainer}>
          {props.menuTitleText.map((item) => {
            return (
              <div key={item._key}>
                <h4>{item.titel}</h4>
                <pre>{item.paragraph}</pre>
              </div>
            );
          })}
        </div>

        <div className={styles.socialmediaContainer}>
          {props.socialmedias.map((item) => {
            return (
              <a href={item.link} key={item._key}>
                <img src={urlFor(item.poster).url()} />
              </a>
            );
          })}
        </div>
        <nav className={styles.bottomNav}>
          {props.menuBottomLinks.map((item) => {
            return (
              <Link href={item.slug.current} key={item._key}>
                <a>{item.link}</a>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
