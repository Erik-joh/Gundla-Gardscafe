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
    <div className={styles.container}>
      <Layout>
        <title>Catering</title>
        <link rel="icon" href="/favicon.ico" />

        <main className={styles.main}>
          <img width="50%" src={urlFor(props.poster).url()}></img>
          <h1>{props.titel}</h1>
          <p>{props.description}</p>
          <p>Förrätter!</p>
          <p>{props.appetizerOne}</p>
          <p>{props.appetizerTwo}</p>
          <p>{props.appetizerThree}</p>
          <p>Varmrätter!</p>
          <p>{props.mainCourseOne}</p>
          <p>{props.mainCourseTwo}</p>
          <p>{props.mainCourseThree}</p>
          <p>Efterrätter!</p>
          <p>{props.dessertOne}</p>
          <p>{props.dessertTwo}</p>
          <p>{props.dessertThree}</p>
          <p>{props.quoteSlideshow[0].slideQuote}</p>
          <p>{props.quoteSlideshow[1].slideQuote}</p>
          <p>{props.quoteSlideshow[2].slideQuote}</p>
          <div className="imageSlider">
            <img
              width="50%"
              src={urlFor(props.imageSlideshow[0].slideImage).url()}
            ></img>
            <img
              width="50%"
              src={urlFor(props.imageSlideshow[1].slideImage).url()}
            ></img>
            <img
              width="50%"
              src={urlFor(props.imageSlideshow[2].slideImage).url()}
            ></img>
          </div>
        </main>
      </Layout>
    </div>
  );
}

Catering.getInitialProps = async function(context) {
  const { content = "" } = context.query;
  return await client.fetch(
    `
    *[_type == "catering"][0]
    `,
    { content }
  );
};
