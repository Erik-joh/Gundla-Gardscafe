import Head from "next/head";
import Menu from "./menu/menu";
import Footer from "./footer/footer";

export default function Layout(props) {
  return (
    <main>
      <Head>
        <title>{props.title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Menu
        logo={props.menu.logo}
        menuLinks={props.menu.menuLinks}
        menuTitleText={props.menu.menuTitleText}
        socialmedias={props.menu.socailmedias}
        menuBottomLinks={props.menu.menuBottomLinks}
      />

      <section> {props.children}</section>
      <Footer />
    </main>
  );
}
