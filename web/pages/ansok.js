import styles from "../styles/organizer.module.css";
import client from "../client";
import Layout from "../components/layout";
import CateringHeader from "../components/catering/cateringHeader/cateringHeader";
import Form from "../components/catering/booking/booking";

export default function Organizer(props) {
  return (
    <Layout title="Ansök" menu={props.menu}>
      <div className={styles.organizerWrapper}>
        <div className={styles.organizerHeader}>
          {props.organizer.organizerHeader.map((item) => {
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
        </div>
        <div className={styles.organizerForm}>
          {props.organizer.organizerInfo.map((item) => {
            return (
              <Form
                title={"arrangörsförfrågan"}
                telephoneNumber={item.telephoneNumber}
                email={item.email}
                placeholder={
                  "Vad är det för typ av arrangemang? Vad behöver du av oss? Hur lång tid tar det? Tidigare erfarenheter?"
                }
                placeholderDate={"2020/10/11"}
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
  const organizer = await client.fetch(
    `
    *[_type == "organizer"][0]
    `
  );
  const menu = await client.fetch(
    `
      *[_type == "menu"][0]
      `
  );
  return {
    props: {
      organizer,
      menu,
    },
  };
}
