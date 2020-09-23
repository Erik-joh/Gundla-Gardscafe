import styles from "../styles/wedding.module.css";
import client from "../client";
import urlFor from "../imageBuilder";
import Layout from "../components/layout";
import CateringHeader from "../components/catering/cateringHeader/cateringHeader";
import Menu from "../components/catering/menu/menu";
import Form from "../components/catering/booking/booking";
import ImageSwiper from "../components/catering/imageSwiper/Swiper";
import WeddingInfoSection from "../components/wedding/info/weddingInfoSection";

export default function Wedding(props) {
  console.log(props);
  return (
    <Layout title="Bröllop och fest" menu={props.menu}>
      <div className={styles.weddingWrapper}>
        <div className={styles.weddingHeader}>
          {props.wedding.weddingHeader.map((item) => {
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
        <div className={styles.weddingMenu}>
          <Menu
            background={"/appetizerImage.png"}
            menuTitle={"FÖRRÄTTER"}
            alternativeOne={props.catering.cateringMenu[0].Food}
            alternativeTwo={props.catering.cateringMenu[1].Food}
            alternativeThree={props.catering.cateringMenu[2].Food}
            key={props._key}
          />
          <Menu
            background={"/mainCourseImage.png"}
            menuTitle={"VARMRÄTTER"}
            alternativeOne={props.catering.cateringMenu[3].Food}
            alternativeTwo={props.catering.cateringMenu[4].Food}
            alternativeThree={props.catering.cateringMenu[5].Food}
            key={props._key}
          />
          <Menu
            background={"/dessertImage.png"}
            menuTitle={"EFTERRÄTTER"}
            alternativeOne={props.catering.cateringMenu[6].Food}
            alternativeTwo={props.catering.cateringMenu[7].Food}
            alternativeThree={props.catering.cateringMenu[8].Food}
            key={props._key}
          />
        </div>
        <div className={styles.infoSection}>
          <WeddingInfoSection
            imageLeft={urlFor(props.wedding.weddingQuestions[3].Images).url()}
            imageRight={urlFor(props.wedding.weddingQuestions[4].Images).url()}
            title={props.wedding.weddingQuestions[0].Title}
            questionOne={props.wedding.weddingQuestions[0].weddingQuestion}
            answerOne={props.wedding.weddingQuestions[0].weddingAnswer}
            questionTwo={props.wedding.weddingQuestions[1].weddingQuestion}
            answerTwo={props.wedding.weddingQuestions[1].weddingAnswer}
            questionThree={props.wedding.weddingQuestions[2].weddingQuestion}
            answerThree={props.wedding.weddingQuestions[2].weddingAnswer}
            titleFacilities={props.wedding.weddingQuestions[5].Title}
            facilityOne={props.wedding.weddingQuestions[5].weddingFacilities}
            infoOne={props.wedding.weddingQuestions[5].weddingFacilitiesInfo}
            infoTwo={props.wedding.weddingQuestions[6].weddingFacilitiesInfo}
            infoThree={props.wedding.weddingQuestions[7].weddingFacilitiesInfo}
            infoFour={props.wedding.weddingQuestions[8].weddingFacilitiesInfo}
            facilityTwo={props.wedding.weddingQuestions[9].weddingFacilities}
            infoFive={props.wedding.weddingQuestions[9].weddingFacilitiesInfo}
            infoSix={props.wedding.weddingQuestions[10].weddingFacilitiesInfo}
            facilityThree={props.wedding.weddingQuestions[11].weddingFacilities}
            infoSeven={props.wedding.weddingQuestions[11].weddingFacilitiesInfo}
            infoEight={props.wedding.weddingQuestions[12].weddingFacilitiesInfo}
            key={props._key}
          />
        </div>
        <div className={styles.weddingForm}>
          {props.catering.cateringInfo.map((item) => {
            return (
              <Form
                title={"bokningsförfågan bröllop & fest"}
                telephoneNumber={item.telephoneNumber}
                email={item.email}
                placeholderDate={"2020/10/11 – 2020/10/13"}
                placeholder={
                  "Tänker ni exempelvis fira bröllop eller att någon fyller jämnt? Om det gäller bröllop, vill ni ha vigseln på Gundla gård? När vill Ni anlända? "
                }
                key={item._key}
              />
            );
          })}
        </div>
        <div className={styles.weddingSwiper}>
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
  const wedding = await client.fetch(
    `
    *[_type == "wedding"][0]
    `
  );
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
      wedding,
      menu,
    },
  };
}
