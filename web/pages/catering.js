import Head from "next/head";
import styles from "../styles/Home.module.css";
import client from "../client";

export default function Catering(props) {
  console.log(props);
  return (
    <div className={styles.container}>
      <Head>
        <title>Catering</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src={props.poster}></img>
        <h1>{props.titel}</h1>
        <p>{props.appetizer}</p>
        <p>{props.mainCourse}</p>
        <p>{props.dessert}</p>

        <p>{props.quoteSlideshow[0].slideQuote}</p>
        <p>{props.quoteSlideshow[1].slideQuote}</p>
        <p>{props.quoteSlideshow[2].slideQuote}</p>

        <img src={props.imageSlideshow[0].slideImage.asset}></img>
        <img src={props.imageSlideshow[1]}></img>
        <img src={props.imageSlideshow[2]}></img>

        <p>{props.description}</p>
      </main>
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
