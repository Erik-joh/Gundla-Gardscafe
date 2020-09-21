import styles from "./history.module.css";

export default function History({ title, description }) {
  return (
    <div className={styles.history}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
