import { useNavigate } from "react-router-dom";
import { showInfoToast, showSuccessToast } from "../../utils/toast";

import styles from "./Checkout.module.css";
import { useSelector } from "react-redux";
import { getCart } from "../../store/slices/cartSlice";
import { getAddress } from "../../store/slices/userSlice";

export default function Checkout() {
  const navigate = useNavigate();
  const cart = useSelector(getCart);
  const address = useSelector(getAddress);
  let lengthItems = cart.length;
  let initialCost = cart.reduce((a, b) => a + b.price, 0) * 100;
  let deliveryCost = Math.round(initialCost * 0.085);
  let tax = Math.round(initialCost * 0.16);
  let totalCost = Math.round(initialCost + deliveryCost + tax);

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
          <p className={styles.paragraph}>Price:</p>
          <p className={styles.price}>Kshs. {initialCost}</p>
        </div>
        <div className={styles.containerGroup}>
          <p className={styles.paragraph}>Tax:</p>
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
        <button
          onClick={() => {
            if (!address.phone) {
              showInfoToast("Input address to complete purchase.");
              navigate("/address");
            } else {
              showSuccessToast("Successfully completed purchase.");
              navigate("/success-checkout");
            }
          }}
          className={`${styles.btnCompletePurchase} btn btnShopNow`}
        >
          Complete Purchase
        </button>
      </div>
    </div>
  );
}
