import client from "../client";
import Layout from "../components/layout";
import urlFor from "../imageBuilder";

export default function Home(props) {
  console.log(props);
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
