import styles from "./CompletePurchase.module.css";

export default function CompletePurchase({ len, data }) {
  const [{ building, street, county }] = data;
  const string = `${building},${street} ${county} county`;
  return (
    <div className={styles.container}>
      <p className={styles.info}>
        You will receive your shopping of{" "}
        <span className={styles.delivery}>{len}</span> items at{" "}
        <span className={styles.delivery}>{string} </span>within 5 Business
        Days.
      </p>
      <p className={styles.info}>Thank you for shopping with us.</p>
    </div>
  );
}
