import styles from "../styles/catering.module.css";
import client from "../client";
import urlFor from "../imageBuilder";
import Layout from "../components/layout";
import CateringGroup from "../components/catering/cateringGroup";
import CateringHeader from "../components/catering/cateringHeader";
import ImageCarousel from "../components/catering/imageCarousel";
import QuoteCarousel from "../components/catering/quoteCarousel";
import Swipers from "../components/catering/Swiper";

export default function Catering(props) {
  console.log(props);
  return (
    <div>
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
              leftImage={item.leftImage}
              menu={props.cateringMenu[0]}
              rightImage={item.rightImage}
              suggestionImage={item.suggestionImage}
              bottomImage={item.bottomImage}
              key={item._key}
            />
          );
        })}
        {props.quoteSlideshow.map((item) => {
          return (
            <QuoteCarousel
              quoteOne={item.slideQuoteOne}
              quoteTwo={item.slideQuoteTwo}
              quoteThree={item.slideQuoteThree}
              key={item._key}
            />
          );
        })}
        {props.imageSlideshow.map((item) => {
          console.log(item);
          return (
            <Swipers
              imageOne={urlFor(item.slideImageOne).url()}
              imageTwo={urlFor(item.slideImageTwo).url()}
              imageThree={urlFor(item.slideImageThree).url()}
              key={item._key}
            />
          );
        })}
      </div>
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
