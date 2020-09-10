import Link from "next/link";
import Head from "next/head";

const Layout = (props) => (
  <main>
    <Head>
      <title>Gundla gårdscafé</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="catering">
        <a>Catering</a>
      </Link>
    </nav>
    <section> {props.children}</section>
  </main>
);

export default Layout;
