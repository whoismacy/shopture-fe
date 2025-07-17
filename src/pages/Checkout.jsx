import { useNavigate } from "react-router-dom";
import styles from "./Checkout.module.css";
import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function notify(message) {
  toast(message, {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Zoom,
  });
}

export default function Checkout({ items, location }) {
  let lengthItems = items?.length;
  let initialCost = items?.reduce((a, b) => a + b.price, 0) * 100;
  let deliveryCost = Math.round(initialCost * 0.085);
  let tax = Math.round(initialCost * 0.16);
  let totalCost = Math.round(initialCost + deliveryCost + tax);
  const navigate = useNavigate();

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
            if (Object.keys(location).length < 1) {
              notify("Input address to complete purchase.");
              navigate("/address");
            } else {
              notify("Successfully completed purchase.");
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
