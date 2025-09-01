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
    <div className="mx-auto my-12 max-w-100 rounded-md bg-white px-8 py-6">
      <h2 className="align-center mb-8 text-2xl text-orange-400 uppercase">
        Delivery details
      </h2>
      <Form method="POST" action="">
        <div className="mb-6 flex flex-col gap-4">
          <label className="text-2xl font-semibold" htmlFor="county">
            County
          </label>
          <input
            className="border-b px-1 py-2 text-2xl focus:outline-none"
            type="text"
            value={county}
            onChange={(e) => setCounty(e.target.value)}
            name="county"
            required
          />
        </div>
        <div className="mb-6 flex flex-col gap-4">
          <label className="text-2xl font-semibold" htmlFor="Building">
            Building & Building Number
          </label>
          <input
            className="border-b px-1 py-2 text-2xl focus:outline-none"
            type="text"
            required
            name="building"
            value={building}
            onChange={(e) => setBuilding(e.target.value)}
          />
        </div>
        <div className="mb-6 flex flex-col gap-4">
          <label className="text-2xl font-semibold" htmlFor="Street">
            Street
          </label>
          <input
            className="border-b px-1 py-2 text-2xl focus:outline-none"
            type="text"
            required
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            name="street"
          />
        </div>
        <div className="mb-6 flex flex-col gap-4">
          <label className="text-2xl font-semibold" htmlFor="Phone Number">
            Phone Number
          </label>
          <input
            className="border-b px-1 py-2 text-2xl focus:outline-none"
            type="text"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
          />
          {errors?.phone ? (
            <p className="bg-red-300 p-1 text-red-500">{errors.phone}</p>
          ) : null}
        </div>
        <div className="mb-6 flex flex-col gap-4">
          <label className="text-2xl font-semibold" htmlFor="Note">
            Optional Note
          </label>
          <input
            className="border-b px-1 py-2 text-2xl focus:outline-none"
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
