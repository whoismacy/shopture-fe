import { useState } from "react";
import { Form, useActionData } from "react-router-dom";
import Button from "../components/ui/Button";

export default function Address() {
  const [county, setCounty] = useState("");
  const [building, setBuilding] = useState("");
  const [street, setStreet] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const errors = useActionData();

  return (
    <div className="mx-auto my-16 max-w-xl rounded-xl bg-white p-8 shadow-2xl md:p-12">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
        Delivery Details
      </h2>
      <Form method="POST" action="" className="space-y-6">
        <div className="flex flex-col">
          <label
            className="mb-2 text-sm font-medium text-gray-600"
            htmlFor="county"
          >
            County
          </label>
          <input
            className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            type="text"
            value={county}
            onChange={(e) => setCounty(e.target.value)}
            name="county"
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            className="mb-2 text-sm font-medium text-gray-600"
            htmlFor="building"
          >
            Building & Building Number
          </label>
          <input
            className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            type="text"
            required
            name="building"
            value={building}
            onChange={(e) => setBuilding(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label
            className="mb-2 text-sm font-medium text-gray-600"
            htmlFor="street"
          >
            Street
          </label>
          <input
            className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            type="text"
            required
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            name="street"
          />
        </div>

        <div className="flex flex-col">
          <label
            className="mb-2 text-sm font-medium text-gray-600"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            className={`rounded-md border ${
              errors?.phone ? "border-red-500" : "border-gray-300"
            } px-4 py-2 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none`}
            type="text"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
          />
          {errors?.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label
            className="mb-2 text-sm font-medium text-gray-600"
            htmlFor="note"
          >
            Optional Note
          </label>
          <input
            className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            name="note"
          />
        </div>

        <div className="mt-8 flex justify-center">
          <Button type="primary" className="w-full py-3">
            Complete Purchase
          </Button>
        </div>
      </Form>
    </div>
  );
}
