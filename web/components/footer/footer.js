import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <img src="/logo.png" />
      <p>2020 © Gundla Gårdscafé Göteborg</p>
    </div>
  );
}
