import styles from "./FullPageLoader.module.css";

function FullLoader() {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default FullLoader;
