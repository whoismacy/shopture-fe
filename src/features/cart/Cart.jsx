import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
import {
  deleteItem,
  getCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/ui/Button";
import { FaShoppingBag } from "react-icons/fa";

export default function Cart() {
  const navigate = useNavigate();
  const cart = useSelector(getCart);

  return (
    <div className="flex min-h-screen items-center justify-center">
      {cart.length > 0 ? (
        <CartItem data={cart} />
      ) : (
        <div className="flex flex-col items-center justify-center px-12 py-6 shadow-md">
          <div className="mb-8">
            <FaShoppingBag className="h-12 w-12 text-stone-600" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="mb-8">
              <h3 className="mb-4 border-b-2 border-stone-900 text-2xl font-semibold text-stone-800">
                You have no items in Your Cart :({" "}
              </h3>
              <p className="align-center tracking-normal italic">
                Looks like you have no items in Your Cart
              </p>
            </div>
            <Button type="primary" onClick={() => navigate("/")}>
              Add Items
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
export function CartItem({ data }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(
    function () {
      const total = data.reduce((a, b) => a + b.price * b.quantity, 0);
      setTotalPrice(total * 100);
    },
    [data],
  );

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 p-4">
      <h1 className="mb-4 text-center text-3xl font-bold text-gray-800">
        Your Cart
      </h1>
      <div className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-md">
        {data.map((item) => (
          <div
            className="flex flex-col gap-4 border-b border-gray-200 py-4 last:border-b-0 md:flex-row md:items-center md:justify-between"
            key={item.id}
          >
            <div className="flex flex-grow items-center gap-4">
              <img
                src={item.image}
                alt={item.category}
                className="h-24 w-24 rounded-lg object-contain"
              />
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 capitalize">
                  {item.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                  {item.description}
                </p>
                <p className="mt-2 text-base font-bold text-gray-800">
                  KES {(item.price * 100).toLocaleString()}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center rounded-full">
                <Button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  type="icon"
                  className="p-2 text-gray-600 hover:bg-gray-100"
                >
                  <FaMinus />
                </Button>
                <p className="px-4 text-base font-medium">{item.quantity}</p>
                <Button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  type="icon"
                  className="p-2 text-gray-600 hover:bg-gray-100"
                >
                  <FaPlus />
                </Button>
              </div>
              <Button
                onClick={() => dispatch(deleteItem(item.id))}
                type="icon"
                className="rounded-full bg-red-500 p-2 text-white hover:bg-red-600"
              >
                <FaTrashAlt />
              </Button>
            </div>
          </div>
        ))}

        <div className="mt-4 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 md:flex-row">
          <Button onClick={() => navigate("/checkout")} type="primary">
            Proceed to Checkout
          </Button>
          <p className="text-xl font-normal text-gray-600">
            Total Price:{" "}
            <span className="ml-2 text-2xl font-bold text-gray-800">
              KES {Math.round(totalPrice).toLocaleString()}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
