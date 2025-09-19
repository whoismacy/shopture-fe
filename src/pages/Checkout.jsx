import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { showInfoToast, showSuccessToast } from "../utils/toast";
import { getCart } from "../store/slices/cartSlice";
import { getAddress } from "../store/slices/userSlice";
import Button from "../components/ui/Button";

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
    <div className="mx-auto my-[4.5rem] max-w-[80rem] rounded-md bg-white p-8 shadow-md">
      <div className="mb-8 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <h3>Total Items</h3>
          <p>{lengthItems}</p>
        </div>
        <hr />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-light">Price:</p>
          <p className="text-2xl">Kshs. {initialCost}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-light">Tax:</p>
          <p className="text-2xl">Kshs. {tax}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-light">Delivery Cost:</p>
          <p className="text-2xl">Kshs. {deliveryCost}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-light">Total Cost:</p>
          <p className="text-2xl">Kshs. {totalCost}</p>
        </div>
        <Button
          onClick={() => {
            if (!address.phone) {
              showInfoToast("Input address to complete purchase.");
              navigate("/address");
            } else {
              showSuccessToast("Successfully completed purchase.");
              navigate("/success-checkout");
            }
          }}
          type="primary"
        >
          Complete Purchase
        </Button>
      </div>
    </div>
  );
}
