import Head from "next/head";
import Menu from "./menu/menu";
import client from "../client";

export default function Layout(props) {
  return (
    <main>
      <Head>
        <title>Gundla gårdscafé</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Menu
        logo={props.logo}
        menuLinks={props.menuLinks}
        menuTitleText={props.menuTitleText}
        socialmedias={props.socailmedias}
        menuBottomLinks={props.menuBottomLinks}
      />

      <section> {props.children}</section>
    </main>
  );
}

Layout.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { content = "" } = context.query;
  return await client.fetch(
    `
    *[_type == "menu"][0]
  `,
    { content }
  );
};
