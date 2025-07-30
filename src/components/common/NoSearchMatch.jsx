import styles from "./NoSearchMatch.module.css";

export default function NoSearchMatch() {
  return (
    <div className={styles.container}>
      <div>
        <img src="../../assets/no-search.svg" alt="no-items-match-search" />
        <p>No items match your Search.</p>
      </div>
    </div>
  );
}
