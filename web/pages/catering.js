import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Catering() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Catering</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>Hej!</p>
      </main>
    </div>
  );
}
