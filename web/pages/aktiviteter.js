import client from "../client";
import Layout from "../components/layout";
import Block from "../components/frontpage/block/block";
import Activity from "../components/activities/activity/activity";
import styles from "../styles/activities.module.css";

export default function Activities(props) {
  return (
    <Layout title="Aktiviteter" menu={props.menu}>
      <div className={styles.activities}>
        <Block
          className={styles.activitiesBlock}
          image={props.posts.blockItem[0].poster}
          title={props.posts.blockItem[0].titel}
          description={props.posts.blockItem[0].description}
          slug={props.posts.blockItem[0].slug}
          link={props.posts.blockItem[0].link}
          key={props.posts.blockItem[0]._key}
          id={6}
          width={"33%"}
          alt={props.posts.blockItem[0].alt}
        />
        <Activity
          image={props.posts.activity[0].poster}
          title={props.posts.activity[0].titel}
          description={props.posts.activity[0].description}
          date={props.posts.activity[0].date}
          url={props.posts.activity[0].url}
          imageWidth={0.67}
          alt={props.posts.activity[0].alt}
          width="67%"
        />
        <Activity
          image={props.posts.activity[1].poster}
          title={props.posts.activity[1].titel}
          description={props.posts.activity[1].description}
          date={props.posts.activity[1].date}
          url={props.posts.activity[1].url}
          imageWidth={0.67}
          alt={props.posts.activity[1].alt}
          width="67%"
        />
        <Activity
          image={props.posts.activity[2].poster}
          title={props.posts.activity[2].titel}
          description={props.posts.activity[2].description}
          date={props.posts.activity[2].date}
          url={props.posts.activity[2].url}
          imageWidth={0.33}
          alt={props.posts.activity[2].alt}
          width="33%"
        />

        <Block
          className={styles.activitiesBlock}
          image={props.posts.blockItem[1].poster}
          title={props.posts.blockItem[1].titel}
          description={props.posts.blockItem[1].description}
          slug={props.posts.blockItem[1].slug}
          link={props.posts.blockItem[1].link}
          key={props.posts.blockItem[1]._key}
          id={6}
          width={"33%"}
          alt={props.posts.blockItem[1].alt}
        />
        <Activity
          image={props.posts.activity[3].poster}
          title={props.posts.activity[3].titel}
          description={props.posts.activity[3].description}
          date={props.posts.activity[3].date}
          url={props.posts.activity[3].url}
          imageWidth={0.67}
          alt={props.posts.activity[3].alt}
          width="67%"
        />
      </div>
    </Layout>
  );
}
export async function getStaticProps() {
  const posts = await client.fetch(
    `
      *[_type == "activities"][0]
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
