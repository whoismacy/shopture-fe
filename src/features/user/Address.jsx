import { useState } from "react";
import { Form, useActionData } from "react-router-dom";
import styles from "./Address.module.css";

export default function Address() {
  const [county, setCounty] = useState("");
  const [building, setBuilding] = useState("");
  const [street, setStreet] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const errors = useActionData();

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.deliveryHeader}>Delivery details</h2>
      <Form method="POST" action="">
        <div className={styles.containerGroup}>
          <label htmlFor="county">County</label>
          <input
            type="text"
            value={county}
            onChange={(e) => setCounty(e.target.value)}
            name="county"
            required
          />
        </div>
        <div className={styles.containerGroup}>
          <label htmlFor="Building">Building & Building Number</label>
          <input
            type="text"
            required
            name="building"
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
            name="street"
          />
        </div>
        <div className={styles.containerGroup}>
          <label htmlFor="Phone Number">Phone Number</label>
          <input
            type="text"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
          />
          {errors?.phone ? (
            <p
              style={{ color: "red", backgroundColor: "pink", padding: "4px" }}
            >
              {errors.phone}
            </p>
          ) : null}
        </div>
        <div className={styles.containerGroup}>
          <label htmlFor="Note">Optional Note</label>
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            name="note"
          />
        </div>
        <button type="submit" className={`btn btnShopNow ${styles.btnCO}`}>
          Complete Purchase
        </button>
      </Form>
    </div>
  );
}
