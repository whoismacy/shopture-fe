import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showSuccessToast } from "../utils/toast";

import styles from "./Address.module.css";

export default function Address({ dispatch }) {
  const [county, setCounty] = useState("");
  const [building, setBuilding] = useState("");
  const [street, setStreet] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const navigate = useNavigate();

  function reset() {
    setCounty("");
    setBuilding("");
    setStreet("");
    setPhone("");
    setNote("");
  }

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.deliveryHeader}>Delivery details</h2>
      <form action="">
        <div className={styles.containerGroup}>
          <label htmlFor="county">County</label>
          <input
            type="text"
            value={county}
            onChange={(e) => setCounty(e.target.value)}
            required
          />
        </div>
        <div className={styles.containerGroup}>
          <label htmlFor="Building">Building & Building Number</label>
          <input
            type="text"
            required
            value={building}
            onChange={(e) => setBuilding(e.target.value)}
          />
        </div>
        <div className={styles.containerGroup}>
          <label htmlFor="Street">Street</label>
          <input
            type="text"
            required
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>
        <div className={styles.containerGroup}>
          <label htmlFor="Phone Number">Phone Number</label>
          <input
            type="text"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className={styles.containerGroup}>
          <label htmlFor="Note">Optional Note</label>
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <button
          onClick={(event) => {
            event.preventDefault();
            if (!county || !building || !street || !phone) return;
            dispatch({ county, building, street, phone, note });
            reset();
            showSuccessToast("Successfully Completed Purchase.");
            navigate("/success-checkout");
          }}
          className={`btn btnShopNow ${styles.btnCO}`}
        >
          Complete Purchase
        </button>
      </form>
    </div>
  );
}
