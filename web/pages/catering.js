import styles from "../styles/catering.module.css";
import client from "../client";
import urlFor from "../imageBuilder";
import Layout from "../components/layout";
import CateringGroup from "../components/catering/cateringGroup";
import CateringHeader from "../components/catering/cateringHeader";
import Form from "../components/catering/booking";
import QuoteSwiper from "../components/catering/quoteSwiper";
import ImageSwiper from "../components/catering/Swiper";

export default function Catering(props) {
  console.log(props);
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
          <CateringGroup
            topLeftImage={props.catering.contentImages[3].Image}
            menu={props.catering.cateringMenu}
            topRightImage={props.catering.contentImages[0].Image}
            bottomLeftImage={props.catering.contentImages[2].Image}
            bottomRightImage={props.catering.contentImages[1].Image}
            key={props._key}
          />
          {props.catering.cateringInfo.map((item) => {
            return (
              <Form
                telephoneNumber={item.telephoneNumber}
                email={item.email}
                key={item._key}
              />
            );
          })}

          <QuoteSwiper
            quoteOne={props.catering.quoteSlideshow[0].slideShowQuote}
            quoteTwo={props.catering.quoteSlideshow[1].slideShowQuote}
            quoteThree={props.catering.quoteSlideshow[2].slideShowQuote}
            key={props._key}
          />

          <ImageSwiper
            imageOne={urlFor(props.catering.imageSlideshow[0].slideImage).url()}
            imageTwo={urlFor(props.catering.imageSlideshow[1].slideImage).url()}
            imageThree={urlFor(
              props.catering.imageSlideshow[2].slideImage
            ).url()}
            key={props._key}
          />
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
