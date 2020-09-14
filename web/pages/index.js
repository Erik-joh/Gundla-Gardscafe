import client from "../client";
import Layout from "../components/layout";
import Block from "../components/frontpage/block/block";
import styles from "../styles/frontpage.module.css";

export default function Home(props) {
  var count = 0;
  return (
    <div className={styles.frontpage}>
      <div className={styles.blockContainer}>
        {props.blockItem.map((item) => {
          count++;
          return (
            <Block
              image={item.poster}
              title={item.titel}
              description={item.description}
              slug={item.slug}
              link={item.link}
              key={item._key}
              id={count}
            />
          );
        })}
      </div>
    </div>
  );
}

Home.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { content = "" } = context.query;
  return await client.fetch(
    `
    *[_type == "frontpage"][0]
  `,
    { content }
  );
};
