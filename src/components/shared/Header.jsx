import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  <nav>
    <img src="" alt="" />
    <ul>
      <NavLink>
        <li>Home</li>
      </NavLink>
      <NavLink>
        <li>Home</li>
      </NavLink>
      <NavLink>
        <li>Home</li>
      </NavLink>
      <NavLink>
        <li>Home</li>
      </NavLink>
      <NavLink>
        <li>Home</li>
      </NavLink>
    </ul>
    <button onClick={() => navigate("/")}>Click Here</button>
  </nav>;
}
