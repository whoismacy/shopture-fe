import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { dropCart, getCart } from "../store/slices/cartSlice";
import { getAddress } from "../store/slices/userSlice";
import Button from "../components/ui/Button";
import { FaCheckCircle } from "react-icons/fa";

export default function CompletePurchase() {
  const address = useSelector(getAddress);
  const cart = useSelector(getCart);
  const cartLength = cart.length;
  const { building, street, county } = address;
  const locationString = `${building}, ${street} ${county} County`;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function completePurchase() {
    dispatch(dropCart());
    navigate("/");
  }

  return (
    <div className="mx-auto my-16 flex max-w-xl flex-col items-center justify-center rounded-2xl bg-white p-12 text-center shadow-2xl">
      <FaCheckCircle className="mb-6 text-7xl text-green-500" />
      <h2 className="mb-4 text-3xl font-bold text-gray-800">
        Order Placed Successfully!
      </h2>
      <p className="mb-2 text-base text-gray-600">
        Thank you for your purchase. Your order has been confirmed.
      </p>

      <div className="my-8 w-full border-t border-b border-gray-200 py-6">
        <p className="mb-4 text-lg font-normal text-gray-700">
          You will receive your shopping of{" "}
          <span className="font-semibold text-gray-900">{cartLength}</span>{" "}
          item(s) at{" "}
          <span className="font-semibold text-gray-900">{locationString}</span>{" "}
          within the next{" "}
          <span className="font-semibold text-gray-900">5 business days</span>.
        </p>
      </div>

      <p className="mb-8 text-base text-gray-600">
        A confirmation email has been sent to your registered email address.
      </p>

      <Button onClick={completePurchase} type="primary" className="px-8 py-3">
        Continue Shopping
      </Button>
    </div>
  );
}
