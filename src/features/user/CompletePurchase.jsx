import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { dropCart, getCart } from "../../store/slices/cartSlice";
import { getAddress } from "../../store/slices/userSlice";

export default function CompletePurchase() {
  const address = useSelector(getAddress);
  const cart = useSelector(getCart);
  const cartLength = cart.length;
  const { building, street, county } = address;
  const locationString = `${building},${street} ${county} county`;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function completePurchase() {
    dispatch(dropCart);
    navigate("/");
  }

  return (
    // line-height
    <div className="mx-auto my-60 flex flex-col items-center justify-center gap-4 p-6">
      <img
        src="../../assets/success-svgrepo-com.svg"
        alt="successful-delivery-alt-png"
        className="h-16 w-16"
      />

      <p className="mt-8 text-2xl font-light italic">
        You will receive your shopping of{" "}
        <span className="font-semibold text-black">{cartLength}</span> items at{" "}
        <span className="font-semibold text-black">{locationString} </span>
        within the next 5 Business Days.
      </p>
      <p className="mt-8 text-2xl font-light italic">
        Thank you for shopping with us.
      </p>
      <button onClick={completePurchase}>Shop More</button>
    </div>
  );
}
