import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <header className="navContainer">
        <NavLink to="/">
          <img
            src="../../../public/assets/shopTureB.png"
            alt="logo"
            className="logoImg"
          />
        </NavLink>
        <ul className="middleNav">
          <NavLink to="/">
            <li className="category">Home</li>
          </NavLink>
          <NavLink to="products">
            <li className="category">Category</li>
          </NavLink>
          <NavLink to="*">
            <li className="category">Cart</li>
          </NavLink>
          <NavLink to="auth/login">
            <li className="category">Profile</li>
          </NavLink>
        </ul>
        <button className="btn" onClick={() => navigate("/auth/login")}>
          Sign In
        </button>
      </header>
    </>
  );
}
