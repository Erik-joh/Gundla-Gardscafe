import styles from "../styles/directions.module.css";
import client from "../client";
import Layout from "../components/layout";
import DirectionsInfo from "../components/directions/directionsInfo";
import WeddingInfoSection from "../components/wedding/info/weddingInfoSection";
import urlFor from "../imageBuilder";

export default function Organizer(props) {
  console.log(props);
  return (
    <Layout menu={props.menu}>
      <div className={styles.directionsWrapper}>
        <div className={styles.directionsInfo}>
          {props.directions.directionsInfo.map((item) => {
            return (
              <DirectionsInfo
                title={item.title}
                subTitle={item.subTitle}
                paragraph={item.paragraph}
                key={item._key}
              />
            );
          })}
        </div>
        <div className={styles.directionsImage}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.7701274440897!2d12.026426915833932!3d57.68638478111446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff3e9fab7c319%3A0x881e787529cd7b7c!2sGundla%20mosse%2032%2C%20412%2076%20G%C3%B6teborg!5e0!3m2!1ssv!2sse!4v1600783137681!5m2!1ssv!2sse"
            width="600"
            height="450"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className={styles.directionsContent}>
          <WeddingInfoSection
            questionOne={props.directions.directionsContent[0].title}
            answerOne={props.directions.directionsContent[0].infoText}
            imageLeft={urlFor(
              props.directions.directionsContent[0].images
            ).url()}
            imageRight={urlFor(
              props.directions.directionsContent[1].images
            ).url()}
            facilityOne={props.directions.directionsContent[1].title}
            infoOne={props.directions.directionsContent[1].infoText}
            key={props._key}
          />
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
