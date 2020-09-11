import styles from "../styles/catering.module.css";
import client from "../client";
import Layout from "../components/layout";
import urlFor from "../imageBuilder";
export default function Catering(props) {
  const router = useRouter();

import CateringGroup from "../components/catering/cateringGroup";
import CateringHeader from "../components/catering/cateringHeader";
import ImageCarousel from "../components/catering/imageCarousel";
  
export default function Catering(props) {
  console.log(props);
  return (
    <div>
      <Layout>
        <title>Catering</title>
        <link rel="icon" href="/favicon.ico" />
      </Layout>
      <div className={styles.cateringWrapper}>
        {props.cateringHeader.map((item) => {
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
        ;
        {props.contentImages.map((item) => {
          return (
            <CateringGroup
              leftImage={item.contentImageOne}
              menu={props.cateringMenu[0]}
              rightImage={item.contentImageTwo}
              suggestionImage={item.contentImageThree}
              bottomImage={item.contentImageFour}
              key={item._key}
            />
          );
        })}
      </div>
      {props.imageSlideshow.map((item) => {
        return (
          <ImageCarousel
            imageOne={item.slideImageOne}
            imageTwo={item.slideImageTwo}
            imageThree={item.slideImageThree}
            key={item._key}
          />
        );
      })}
    </div>
  );
}

Catering.getInitialProps = async function (context) {
  const { content = "" } = context.query;
  return await client.fetch(
    `
    *[_type == "catering"][0]
    `,
    { content }
  );
};
