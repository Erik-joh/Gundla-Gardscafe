import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import client from "../client";
import Layout from "../components/layout";
import urlFor from "../imageBuilder";

export default function Catering(props) {
  const router = useRouter();
  console.log(props);
  return (
    <div>
      <Layout>
        <title>Catering</title>
        <link rel="icon" href="/favicon.ico" />
      </Layout>

      <main className={styles.main}>
        <div className="cateringWrapper">
          <div className="cateringHeader">
            <div className="cateringImage">
              <img src={urlFor(props.cateringHeader[0].headerImage).url()} />
              <h1 className="cateringTitle">{props.cateringHeader[0].title}</h1>
            </div>
            <div className="cateringTextarea">
              <h3>{props.cateringHeader[0].subTitle}</h3>
              <h3>{props.cateringHeader[0].description}</h3>
            </div>
            <div className="cateringGroup">
              <img
                className="cateringImageLeft"
                src={urlFor(props.contentImages[0].contentImages).url()}
              />
              <div className="cateringMenu">
                <p>{props.cateringMenu[0].menuTitle}</p>
                <p>{props.cateringMenu[0].One}</p>
                <p>{props.cateringMenu[0].Two}</p>
                <p>{props.cateringMenu[0].Three}</p>
              </div>
              <img
                className="cateringImageRight"
                src={urlFor(props.contentImages[1].contentImages).url()}
              />
              <img
                className="menuSuggestion"
                src={urlFor(props.contentImages[3].contentImages).url()}
              />
              <div className="cateringMenu">
                <p>{props.cateringMenu[2].menuTitle}</p>
                <p>{props.cateringMenu[2].One}</p>
                <p>{props.cateringMenu[2].Two}</p>
                <p>{props.cateringMenu[2].Three}</p>
              </div>
              <div className="cateringMenu">
                <p>{props.cateringMenu[1].menuTitle}</p>
                <p>{props.cateringMenu[1].One}</p>
                <p>{props.cateringMenu[1].Two}</p>
                <p>{props.cateringMenu[1].Three}</p>
              </div>

              <img
                className="cateringImageBottom"
                src={urlFor(props.contentImages[2].contentImages).url()}
              />
            </div>
          </div>
        </div>
      </main>
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
