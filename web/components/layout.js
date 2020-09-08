import Link from "next/link";
import Head from "next/head";

const Layout = (props) => (
  <main>
    <Head>
      <title>Gundla gårdscafé</title>
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
