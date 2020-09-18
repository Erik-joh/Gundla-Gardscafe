import styles from "../styles/organizer.module.css";
import client from "../client";
import urlFor from "../imageBuilder";
import Layout from "../components/layout";
import CateringHeader from "../components/catering/cateringHeader/cateringHeader";
import Form from "../components/catering/booking/booking";

export default function Organizer(props) {
  console.log(props);
  return (
    <Layout menu={props.menu}>
      <div className={styles.organizerWrapper}>
        <div className={styles.organizerHeader}>
          {props.catering.organizerHeader.map((item) => {
            return (
              <CateringHeader
                image={item.headerImage}
                title={item.title}
                subTitle={item.subTitle}
                description={item.description}
                key={item._key}
              />
            );
          })}
        </div>
        <div className={styles.organizerForm}>
          {props.catering.organizerInfo.map((item) => {
            return (
              <Form
                title={"arrangörsförfrågan"}
                telephoneNumber={item.telephoneNumber}
                email={item.email}
                key={item._key}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const catering = await client.fetch(
    `
    *[_type == "organizer"][0]
    `
  );
  const menu = await client.fetch(
    `
      *[_type == "menu"][0]
      `
  );
  // const posts = await res.json();
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      catering,
      menu,
    },
  };
}
