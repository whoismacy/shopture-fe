import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  deleteItem,
  getCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const navigate = useNavigate();
  const cart = useSelector(getCart);

  return (
    <>
      {cart.length > 0 ? (
        <CartItem data={cart} />
      ) : (
        <div className="align-center text-4xl">
          <h3 className="align-center text-4xl">
            You have no items in Your Cart :({" "}
          </h3>
          <button className="btn btnCart" onClick={() => navigate("/")}>
            Add Items
          </button>
        </div>
      )}
    </>
  );
}

function CartItem({ data }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(
    function () {
      const total = data.reduce((a, b) => a + b.price, 0);
      setTotalPrice(total * 100);
    },
    [data],
  );

  return (
    <>
      <h1 className="align-center text-4xl">Cart</h1>
      <div className="flex flex-col gap-8 p-6">
        {data.map((item) => (
          <div
            className="align-center flex justify-between rounded-md px-6 py-8 shadow-2xs transition-all duration-200 ease-in-out"
            key={item.id}
          >
            <div>
              <h3 className="">{item.title}</h3>
              <p className="">
                {item.description.length > 50
                  ? `${item.description.slice(0, 50)}...`
                  : item.description}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "16px",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <button
                className="cursor-pointer border-none bg-inherit text-2xl font-semibold"
                onClick={() => dispatch(decreaseQuantity(item.id))}
              >
                -
              </button>
              <p className="text-2xl font-semibold">{item.quantity}</p>
              <button
                className="cursor-pointer border-none bg-inherit text-2xl font-bold"
                onClick={() => dispatch(increaseQuantity(item.id))}
              >
                +
              </button>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-2xl font-semibold">Kshs. {item.price * 100}</p>
              <button
                className="flex h-[1rem] w-[1rem] cursor-pointer items-center justify-center rounded-full border-none bg-red-500 p-6 text-2xl font-semibold text-white"
                onClick={() => dispatch(deleteItem(item.id))}
              >
                X
              </button>
            </div>
          </div>
        ))}
        <div className="flex justify-between">
          <button
            onClick={() => navigate("/checkout")}
            className="btn btnShopNow btnCancel"
          >
            Checkout
          </button>
          <p className="text-2xl font-normal italic">
            Total Price:{" "}
            <span className="text-2xl font-bold">
              Kshs. {Math.round(totalPrice)}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

// drop an item
// toast icons, react-toastify
