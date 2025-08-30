import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteItem, getCart } from "../../store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Cart({ dispatch }) {
  const navigate = useNavigate();
  const cart = useSelector(getCart);
  console.log(cart);

  return (
    <>
      {cart.length > 0 ? (
        <CartItem data={cart} dispatch={dispatch} />
      ) : (
        <div className="cartHeading">
          <h3 className="faqHeading">You have no items in Your Cart :( </h3>
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
    [data]
  );
  return (
    <>
      <h1 className="cartHeading">Cart</h1>
      <div className="cartContainer">
        {data.map((item) => (
          <div className="cartItem" key={item.id}>
            <div>
              <h3 className="cartSubHeading">{item.title}</h3>
              <p className="cartDescription">
                {item.description.length > 50
                  ? `${item.description.slice(0, 50)}...`
                  : item.description}
              </p>
            </div>
            <div className="cartPriceExit">
              <p className="cartPrice">Kshs. {item.price * 100}</p>
              <button
                className="btnRemove"
                onClick={() => dispatch(deleteItem(item.id))}
              >
                X
              </button>
            </div>
          </div>
        ))}
        <div className="cartLower">
          <button
            onClick={() => navigate("/checkout")}
            className="btn btnShopNow btnCancel"
          >
            Checkout
          </button>
          <p className="cartPriceText">
            Total Price:{" "}
            <span className="cartPrice">Kshs. {Math.round(totalPrice)}</span>
          </p>
        </div>
      </div>
    </>
  );
}

// drop an item
// toast icons, react-toastify
