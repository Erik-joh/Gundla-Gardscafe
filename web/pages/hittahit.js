import styles from "../styles/directions.module.css";
import client from "../client";
import Layout from "../components/layout";
import DirectionsInfo from "../components/directions/directionsInfo";

export default function Organizer(props) {
  console.log(props);
  return (
    <Layout menu={props.menu}>
      <div className={styles.directionsWrapper}>
        <div className={styles.info}>
          <DirectionsInfo />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const directions = await client.fetch(
    `
    *[_type == "directions"][0]
    `
  );
  const menu = await client.fetch(
    `
      *[_type == "menu"][0]
      `
  );
  return {
    props: {
      directions,
      menu,
    },
  };
}
