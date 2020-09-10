import styles from "../styles/catering.module.css";
import { useRouter } from "next/router";
import client from "../client";
import Layout from "../components/layout";
import urlFor from "../imageBuilder";
import Menu from "../components/catering/menu";

export default function Catering(props) {
  var count = 0;
  console.log(props);
  return (
    <div>
      <Layout>
        <title>Catering</title>
        <link rel="icon" href="/favicon.ico" />
      </Layout>
      {props.cateringMenu.map((item) => {
        console.log(item);
        count++;
        return (
          <Menu
            title={item.menuTitle}
            descriptionOne={item.One}
            descriptionTwo={item.Two}
            descriptionThree={item.Three}
            key={item._key}
          />
        );
      })}
      <div className={styles.cateringWrapper}>
        <div className={styles.cateringHeader}>
          <div className={styles.cateringImage}>
            <img
              className={styles.cateringHeaderImage}
              src={urlFor(props.cateringHeader[0].headerImage).url()}
            />
            <h1 className={styles.cateringTitle}>
              {props.cateringHeader[0].title}
            </h1>
          </div>
          <div className={styles.cateringTextarea}>
            <h2>{props.cateringHeader[0].subTitle}</h2>
            <p>{props.cateringHeader[0].description}</p>
          </div>
        </div>
        <div className={styles.cateringGroup}>
          <img
            className={styles.cateringImageLeft}
            src={urlFor(props.contentImages[0].contentImages).url()}
          />
          <div className={styles.cateringMenu}>
            <h4>{props.cateringMenu[0].menuTitle}</h4>
            <p>{props.cateringMenu[0].One}</p>
            <p>{props.cateringMenu[0].Two}</p>
            <p>{props.cateringMenu[0].Three}</p>
          </div>
          <img
            className={styles.cateringImageRight}
            src={urlFor(props.contentImages[1].contentImages).url()}
          />
          <img
            className={styles.menuSuggestion}
            src={urlFor(props.contentImages[3].contentImages).url()}
          />
          <div className={styles.cateringMenu}>
            <h4>{props.cateringMenu[1].menuTitle}</h4>
            <p>{props.cateringMenu[1].One}</p>
            <p>{props.cateringMenu[1].Two}</p>
            <p>{props.cateringMenu[1].Three}</p>
          </div>
          <div className={styles.cateringMenu}>
            <h4>{props.cateringMenu[2].menuTitle}</h4>
            <p>{props.cateringMenu[2].One}</p>
            <p>{props.cateringMenu[2].Two}</p>
            <p>{props.cateringMenu[2].Three}</p>
          </div>

          <img
            className={styles.cateringImageBottom}
            src={urlFor(props.contentImages[2].contentImages).url()}
          />
        </div>
      </div>
    </div>
  );
}

Catering.getInitialProps = async function (context) {
  const { content = "" } = context.query;
  return await client.fetch(
    `
    *[_type == "catering"][0]
    `,
    { content }
  );
};
