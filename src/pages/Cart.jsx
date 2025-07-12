import { useNavigate } from "react-router-dom";

export default function Cart({ cart, onCart }) {
  const navigate = useNavigate();

  return (
    <>
      {cart.length > 0 ? (
        cart.map((item, index) => <CartItem data={item} key={index + 1} />)
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
  return (
    <div>
      <div></div>
      <div></div>
    </div>
  );
}
