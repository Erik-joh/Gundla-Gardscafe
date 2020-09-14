import styles from "../styles/catering.module.css";
import client from "../client";
import Layout from "../components/layout";
import CateringGroup from "../components/catering/cateringGroup";
import CateringHeader from "../components/catering/cateringHeader";
import ImageCarousel from "../components/catering/imageCarousel";
import QuoteCarousel from "../components/catering/quoteCarousel";
import "../styles/image-gallery.module.css";

export default function Catering(props) {
  return (
    <Layout menu={props.menu}>
      <div>
        <div className={styles.cateringWrapper}>
          {props.catering.cateringHeader.map((item) => {
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
          {props.catering.contentImages.map((item) => {
            return (
              <CateringGroup
                leftImage={item.leftImage}
                menu={props.catering.cateringMenu[0]}
                rightImage={item.rightImage}
                suggestionImage={item.suggestionImage}
                bottomImage={item.bottomImage}
                key={item._key}
              />
            );
          })}
          {props.catering.quoteSlideshow.map((item) => {
            return (
              <QuoteCarousel
                quoteOne={item.slideQuoteOne}
                quoteTwo={item.slideQuoteTwo}
                quoteThree={item.slideQuoteThree}
                key={item._key}
              />
            );
          })}
          {props.catering.imageSlideshow.map((item) => {
            console.log(item);
            return;
            <ImageCarousel />;
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
    *[_type == "catering"][0]
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
