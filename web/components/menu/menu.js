import Link from "next/link";
import styles from "./menu.module.css";
import urlFor from "../../imageBuilder";

export default function Menu(props) {
  console.log(props);

  return (
    <div className={styles.menu}>
      <img src={urlFor(props.logo).url()} />
      <nav>
        {props.menuLinks.map((item) => {
          return (
            <a href={item.slug.current} key={item._key}>
              {item.link}
            </a>
          );
        })}
      </nav>
      <div className={styles.titelTextContainer}>
        {props.menuTitleText.map((item) => {
          return (
            <div key={item._key}>
              <h3>{item.titel}</h3>
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
            <a href={item.slug.current} key={item._key}>
              {item.link}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
