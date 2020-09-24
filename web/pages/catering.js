import styles from "../styles/catering.module.css";
import client from "../client";
import urlFor from "../imageBuilder";
import Layout from "../components/layout";
import CateringGroup from "../components/catering/cateringGroup/cateringGroup";
import CateringHeader from "../components/catering/cateringHeader/cateringHeader";
import Form from "../components/catering/booking/booking";
import QuoteSwiper from "../components/catering/quoteSwiper/quoteSwiper";
import ImageSwiper from "../components/catering/imageSwiper/Swiper";

export default function Catering(props) {
  return (
    <Layout title="Catering" menu={props.menu}>
      <div>
        <div className={styles.cateringWrapper}>
          {props.catering.cateringHeader.map((item) => {
            return (
              <CateringHeader
                image={item.headerImage}
                altHeader={item.alt}
                title={item.title}
                subTitle={item.subTitle}
                description={item.description}
                key={item._key}
              />
            );
          })}
          <CateringGroup
            topLeftImage={props.catering.contentImages[3].Image}
            altTopLeft={props.catering.contentImages[3].alt}
            menu={props.catering.cateringMenu}
            topRightImage={props.catering.contentImages[0].Image}
            altTopRight={props.catering.contentImages[0].alt}
            bottomLeftImage={props.catering.contentImages[2].Image}
            altBottomLeft={props.catering.contentImages[2].alt}
            bottomRightImage={props.catering.contentImages[1].Image}
            altBottomRight={props.catering.contentImages[1].alt}
            key={props._key}
          />
          {props.catering.cateringInfo.map((item) => {
            return (
              <Form
                title={"bokningsförfågan catering"}
                telephoneNumber={item.telephoneNumber}
                email={item.email}
                placeholderDate={"2020/10/11"}
                placeholder={
                  "Ska cateringen t.ex. anpassas efter en företagskonferens eller ett studentfirande? Önskar ni servera buffé eller upplagd tallrik?"
                }
                key={item._key}
              />
            );
          })}

          <QuoteSwiper
            quoteOne={props.catering.quoteSlideshow[0].slideShowQuote}
            quoteTwo={props.catering.quoteSlideshow[1].slideShowQuote}
            key={props._key}
          />

          <ImageSwiper
            imageOne={urlFor(props.catering.imageSlideshow[0].slideImage).url()}
            altImageOne={props.catering.imageSlideshow[0].alt}
            imageTwo={urlFor(props.catering.imageSlideshow[1].slideImage).url()}
            altImageTwo={props.catering.imageSlideshow[1].alt}
            imageThree={urlFor(
              props.catering.imageSlideshow[2].slideImage
            ).url()}
            altImageThree={props.catering.imageSlideshow[2].alt}
            key={props._key}
          />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
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
  return {
    props: {
      catering,
      menu,
    },
  };
}
