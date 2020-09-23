import styles from "../styles/directions.module.css";
import client from "../client";
import Layout from "../components/layout";
import DirectionsInfo from "../components/directions/Info/directionsInfo";
import DirectionsContent from "../components/directions/DirectionContent/directionsContent";
import urlFor from "../imageBuilder";

export default function Organizer(props) {
  console.log(props);
  return (
    <Layout title="Hitta hit" menu={props.menu}>
      <div className={styles.directionsWrapper}>
        <div className={styles.directionsInfo}>
          {props.directions.directionsInfo.map((item) => {
            return (
              <DirectionsInfo
                image={"./directionArrow.svg"}
                title={item.title}
                subTitle={item.subTitle}
                info={item.info}
                key={item._key}
              />
            );
          })}
        </div>
        <div className={styles.directionsImage}></div>
        <div className={styles.directionsContent}>
          <DirectionsContent
            titleBus={props.directions.directionsContent[0].title}
            textInfoBus={props.directions.directionsContent[0].infoText}
            firstImage={urlFor(
              props.directions.directionsContent[0].images
            ).url()}
            titleCar={props.directions.directionsContent[1].title}
            textInfoCar={props.directions.directionsContent[1].infoText}
            secondImage={urlFor(
              props.directions.directionsContent[1].images
            ).url()}
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
