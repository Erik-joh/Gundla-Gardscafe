import client from "../client";
import Layout from "../components/layout";
import Block from "../components/frontpage/block/block";
import styles from "../styles/about.module.css";
import ImageBlock from "../components/about/imageBlock/imageBlock";
import History from "../components/about/history/history";

export default function About({ posts, menu }) {
  return (
    <Layout title="Om oss" menu={menu}>
      <div className={styles.about}>
        <Block
          className={styles.activitiesBlock}
          image={posts.aboutHeader[0].poster}
          title={posts.aboutHeader[0].titel}
          description={posts.aboutHeader[0].description}
          key={posts.aboutHeader[0]._key}
          id={2}
          width={"42%"}
        />
        <ImageBlock
          image={posts.topImage[0].poster}
          alt={posts.topImage[0].altText}
          imageWidth={0.58}
        />

        <div className={styles.historyContainer}>
          <h3>Vår historia</h3>
          {posts.history.map((item) => {
            return (
              <History
                title={item.title}
                description={item.description}
                key={item._key}
              />
            );
          })}
        </div>

        <div className={styles.imageContainer}>
          {posts.midImages.map((item) => {
            return (
              <div key={item._key}>
                <ImageBlock
                  image={item.poster}
                  alt={item.altText}
                  width="100%"
                  key={item._key}
                  imageWidth={0.5}
                />
              </div>
            );
          })}
        </div>
        {posts.bottomTextBlocks.map((item) => {
          return (
            <Block
              className={styles.bottomTextBlocks}
              title={item.titel}
              description={item.description}
              key={item._key}
              id={2}
              width="100%"
            />
          );
        })}
      </div>
    </Layout>
  );
}
export async function getStaticProps() {
  const posts = await client.fetch(
    `
      *[_type == "about"][0]
    `
  );
  const menu = await client.fetch(
    `
      *[_type == "menu"][0]
    `
  );
  return {
    props: {
      posts,
      menu,
    },
  };
}
