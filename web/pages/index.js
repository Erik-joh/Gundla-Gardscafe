import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import client from "../client";
import Layout from "../components/layout";
import urlFor from "../imageBuilder";

export default function Home(props) {
  const router = useRouter();
  console.log(props);
  console.log(props.imagelink[0].poster.asset._ref);
  console.log(props.name);
  return (
    <div>
      <Layout>
        <h1>{props.name}</h1>
        <div>
          <img src={urlFor(props.imagelink[0].poster).url()} />
        </div>
      </Layout>
    </div>
  );
}

Home.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { content = "" } = context.query;
  return await client.fetch(
    `
    *[_type == "frontpage"][0]
  `,
    { content }
  );
};
