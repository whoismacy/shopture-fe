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
          <ul className="flex justify-evenly gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center space-x-1 ${isActive ? "font-bold text-stone-600" : "text-stone-500 hover:text-stone-600"}`
              }
            >
              <li>
                <span>
                  <FaHome className="text-lg" />
                </span>
              </li>
            </NavLink>
            <NavLink to="cart">
              <li className="h-[40px] w-[40px]">
                <span>
                  <FaShoppingCart />
                </span>
              </li>
            </NavLink>
            <NavLink to="faqs">
              <li className="h-[40px] w-[40px]">
                <span>
                  <FaQuestionCircle />
                </span>
              </li>
            </NavLink>
          </ul>
        </div>
      </header>
    </>
  );
}
