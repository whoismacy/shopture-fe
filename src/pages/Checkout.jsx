import styles from "./Checkout.module.css";

export default function Checkout({ items }) {
  let lengthItems = items?.length;
  let initialCost = items?.reduce((a, b) => a + b.price, 0);
  let deliveryCost = Math.round(initialCost * 0.075) / 100;
  let tax = Math.round(initialCost * 0.16) / 100;
  let totalCost = initialCost + deliveryCost + tax;

  return (
    <div className={styles.container}>
      <div className={styles.headGroup}>
        <div className={styles.containerGroup}>
          <h3>Total Items</h3>
          <p>{lengthItems}</p>
        </div>
        <hr />
      </div>
      <div className={styles.paragraphDiv}>
        <div className={styles.containerGroup}>
          <p className={styles.paragraph}>Price</p>
          <p className={styles.price}>Kshs. {initialCost}</p>
        </div>
        <div className={styles.containerGroup}>
          <p className={styles.paragraph}>Tax</p>
          <p className={styles.price}>Kshs. {tax}</p>
        </div>
        <div className={styles.containerGroup}>
          <p className={styles.paragraph}>Delivery Cost:</p>
          <p className={styles.price}>Kshs. {deliveryCost}</p>
        </div>
        <div className={styles.containerGroup}>
          <p className={styles.paragraph}>Total Cost:</p>
          <p className={styles.price}>Kshs. {totalCost}</p>
        </div>
        <button className={`${styles.btnCompletePurchase} btn btnShopNow`}>
          Complete Purchase
        </button>
      </div>
    </div>
  );
}
