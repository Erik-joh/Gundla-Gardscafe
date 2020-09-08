import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Gundla Gårdscafé!</title>
        <link rel="icon" href="/favicon.ico" />{" "}
      </Head>

      <main className={styles.main}>
        <span onClick={() => router.push("/")}>Click here for ???</span>

        <span onClick={() => router.push("/catering")}>
          Click here for Catering!
        </span>
      </main>
    </div>
  );
}
