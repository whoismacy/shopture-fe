import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Cart({ data, dispatch }) {
  const navigate = useNavigate();

  return (
    <>
      {data.length > 0 ? (
        <CartItem data={data} dispatch={dispatch} />
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

function CartItem({ data, dispatch }) {
  const [totalPrice, setTotalPrice] = useState(0);

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
                onClick={() => dispatch({ type: "dropItem", load: item })}
              >
                X
              </button>
            </div>
          </div>
        ))}
        <div className="cartLower">
          <button className="btn btnShopNow btnCheckOut">Checkout</button>
          <p className="cartPriceText">
            Total Price: <span className="cartPrice">Kshs. {totalPrice}</span>
          </p>
        </div>
      </div>
    </>
  );
}

// drop an item
// toast icons, react-toastify
