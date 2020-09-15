import styles from "../styles/catering.module.css";
import client from "../client";
import urlFor from "../imageBuilder";
import Layout from "../components/layout";
import CateringGroup from "../components/catering/cateringGroup";
import CateringHeader from "../components/catering/cateringHeader";
import ImageCarousel from "../components/catering/imageCarousel";
import QuoteCarousel from "../components/catering/quoteCarousel";

export default function Catering(props) {
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
            <ImageCarousel
              imageOne={item.slideImageOne}
              imageTwo={item.slideImageTwo}
              imageThree={item.slideImageThree}
              key={item._key}
            />
          );
        })}
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
                topLeftImage={item.topLeftImage}
                menu={props.catering.cateringMenu[0]}
                topRightImage={item.topRightImage}
                bottomLeftImage={item.bottomLeftImage}
                bottomRightImage={item.bottomRightImage}
                key={item._key}
              />
            );
          })}

          {props.catering.cateringInfo.map((item) => {
            console.log(item);
            return (
              <Form
                telephoneNumber={item.telephoneNumber}
                email={item.email}
                key={item._key}
              />
            );
          })}
          {props.catering.quoteSlideshow.map((item) => {
            return (
              <QuoteSwiper
                quoteOne={item.slideQuoteOne}
                quoteTwo={item.slideQuoteTwo}
                quoteThree={item.slideQuoteThree}
                key={item._key}
              />
            );
          })}
          {props.catering.imageSlideshow.map((item) => {
            console.log(item);
            return (
              <ImageSwiper
                imageOne={urlFor(item.slideImageOne).url()}
                imageTwo={urlFor(item.slideImageTwo).url()}
                imageThree={urlFor(item.slideImageThree).url()}
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
