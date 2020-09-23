import client from "../client";
import Layout from "../components/layout";
import Block from "../components/frontpage/block/block";
import InstaPosts from "../components/frontpage/instaPosts/instaPosts";
import styles from "../styles/frontpage.module.css";
import { useEffect } from "react";

export default function Home(props) {
  var count = 0;
  const [instaPosts, setInstaPosts] = React.useState("");
  useEffect(() => {
    fetch("https://www.instagram.com/gundlagardscafe/?__a=1")
      .then((resp) => resp.json())
      .then((json) => setInstaPosts(json));
  }, [0]);
  var instaArray = [];
  if (instaPosts) {
    instaArray = instaPosts.graphql.user.edge_owner_to_timeline_media.edges;
  }
  return (
    <Layout menu={props.menu}>
      <div className={styles.frontpage}>
        <div className={styles.blockContainer}>
          {props.posts.blockItem.map((item) => {
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
        <InstaPosts posts={instaArray} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch(
    `
    *[_type == "frontpage"][0]
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
