import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCart } from "../../store/slices/cartSlice";
import styles from "./CompletePurchase.module.css";
import { getAddress } from "../../store/slices/userSlice";

export default function CompletePurchase() {
  const address = useSelector(getAddress);
  const cart = useSelector(getCart);
  const cartLength = cart.length;
  const { building, street, county } = address;
  const locationString = `${building},${street} ${county} county`;
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <img
        src="../../assets/success-svgrepo-com.svg"
        alt="successful-delivery-alt-png"
      />

      <p className={styles.info}>
        You will receive your shopping of{" "}
        <span className={styles.delivery}>{cartLength}</span> items at{" "}
        <span className={styles.delivery}>{locationString} </span>within the
        next 5 Business Days.
      </p>
      <p className={styles.info}>Thank you for shopping with us.</p>
      <button onClick={() => navigate("/")}>Shop More</button>
    </div>
  );
}
