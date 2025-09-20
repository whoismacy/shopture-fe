import { Link, NavLink } from "react-router-dom";
import { FaHome, FaQuestionCircle, FaShoppingCart } from "react-icons/fa";
import SearchFilter from "../../features/search/SearchFilter";

export default function Header() {
  return (
    <>
      <header className="flex w-full flex-col justify-start p-2 shadow-md">
        <div className="mx-auto flex items-center justify-between gap-12">
          <Link to="/">
            <img
              src="../../shopTureB.png"
              alt="logo"
              className="h-[75px] w-[75px] rounded-full object-cover"
            />
          </Link>
          <SearchFilter />
          <ul className="flex justify-evenly gap-12">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center space-x-1 ${isActive ? "font-bold text-stone-900" : "text-stone-600 hover:text-stone-900"}`
              }
            >
              <li>
                <span>
                  <FaHome className="text-4xl" />
                </span>
              </li>
            </NavLink>
            <NavLink
              to="cart"
              className={({ isActive }) =>
                `flex items-center space-x-1 ${isActive ? "font-bold text-stone-900" : "text-stone-600 hover:text-stone-900"}`
              }
            >
              <li>
                <span>
                  <FaShoppingCart className="text-4xl" />
                </span>
              </li>
            </NavLink>
            <NavLink
              to="faqs"
              className={({ isActive }) =>
                `flex items-center space-x-1 ${isActive ? "font-bold text-stone-900" : "text-stone-600 hover:text-stone-900"}`
              }
            >
              <li>
                <span>
                  <FaQuestionCircle className="text-4xl" />
                </span>
              </li>
            </NavLink>
          </ul>
        </div>
      </header>
    </>
  );
}
