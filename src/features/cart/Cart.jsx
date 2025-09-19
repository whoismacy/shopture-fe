import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  deleteItem,
  getCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/ui/Button";

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
          <Button type="primary" onClick={() => navigate("/")}>
            Add Items
          </Button>
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
              <Button
                type="aggreagate"
                onClick={() => dispatch(decreaseQuantity(item.id))}
              >
                -
              </Button>
              <p className="text-2xl font-semibold">{item.quantity}</p>
              <Button
                type="aggregate"
                onClick={() => dispatch(increaseQuantity(item.id))}
              >
                +
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-2xl font-semibold">Kshs. {item.price * 100}</p>
              <Button
                type="cancel"
                onClick={() => dispatch(deleteItem(item.id))}
              >
                X
              </Button>
            </div>
          </div>
        ))}
        <div className="flex justify-between">
          <Button onClick={() => navigate("/checkout")} type="primary">
            Checkout
          </Button>
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
