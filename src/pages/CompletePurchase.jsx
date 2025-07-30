import styles from "./CompletePurchase.module.css";
import { useNavigate } from "react-router-dom";

export default function CompletePurchase({ len, data, dispatch }) {
  const [{ building, street, county }] = data;
  const string = `${building},${street} ${county} county`;
  const navigate = useNavigate();
  dispatch({ type: "reset" });

  return (
    <div className={styles.container}>
      <img
        src="../../assets/success-svgrepo-com.svg"
        alt="successful-delivery-alt-png"
      />

      <p className={styles.info}>
        You will receive your shopping of{" "}
        <span className={styles.delivery}>{len}</span> items at{" "}
        <span className={styles.delivery}>{string} </span>within the next 5
        Business Days.
      </p>
      <p className={styles.info}>Thank you for shopping with us.</p>
      <button onClick={() => navigate("/")}>Shop More</button>
    </div>
  );
}
