import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCart } from "../store/slices/cartSlice";
import { getAddress } from "../store/slices/userSlice";
import Button from "../components/ui/Button";
import toast from "react-hot-toast";
import { FaShoppingCart, FaHome, FaCheckCircle } from "react-icons/fa";

export default function Checkout() {
  const navigate = useNavigate();
  const cart = useSelector(getCart);
  const address = useSelector(getAddress);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal =
    cart.reduce((total, item) => total + item.price * item.quantity, 0) * 100;
  const tax = Math.round(subtotal * 0.16);
  const deliveryCost = Math.round(subtotal * 0.085);
  const totalCost = subtotal + deliveryCost + tax;

  function handlePurchase() {
    if (!address.phone) {
      toast.error("Please add your address to complete the purchase.");
      navigate("/address");
    } else {
      toast.success(
        "Purchase completed successfully! Thank you for your order.",
      );
      navigate("/success-checkout");
    }
  }

  return (
    <div className="mx-auto my-8 max-w-lg rounded-xl bg-white p-8 shadow-2xl">
      <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
        Order Summary
      </h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between text-lg">
          <p className="flex items-center gap-2 font-medium text-gray-700">
            Items
          </p>
          <span className="font-semibold text-gray-900">{totalItems}</span>
        </div>
        <hr className="border-gray-200" />

        <div className="flex items-center justify-between text-lg">
          <p className="flex items-center gap-2 font-medium text-gray-700">
            Subtotal
          </p>
          <span className="font-semibold text-gray-900">
            KES {subtotal.toLocaleString()}
          </span>
        </div>
        <hr className="border-gray-200" />

        <div className="flex items-center justify-between text-lg">
          <p className="flex items-center gap-2 font-medium text-gray-700">
            Tax (16%)
          </p>
          <span className="font-semibold text-gray-900">
            KES {tax.toLocaleString()}
          </span>
        </div>
        <hr className="border-gray-200" />

        <div className="flex items-center justify-between text-lg">
          <p className="flex items-center gap-2 font-medium text-gray-700">
            Delivery Cost
          </p>
          <span className="font-semibold text-gray-900">
            KES {deliveryCost.toLocaleString()}
          </span>
        </div>
        <hr className="border-gray-200" />

        <div className="flex items-center justify-between pt-2 text-base font-bold text-gray-900">
          <p>Order Total: </p>
          <span>KES {totalCost.toLocaleString()}</span>
        </div>
      </div>

      <div className="mt-8">
        <Button onClick={handlePurchase} type="primary" className="w-full py-3">
          Complete Purchase
        </Button>
      </div>
    </div>
  );
}
