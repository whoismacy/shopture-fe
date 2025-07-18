import { useReducer, useState } from "react";
import { createBrowserRouter, Route } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles/index.css";
import "./styles/footer.css";
import "./styles/itemContainer.css";
import "./styles/nav.css";
import "./styles/queries.css";
import "./styles/auth.css";
import "./styles/faqs.css";
import "./styles/cart.css";

import LoginForm from "./pages/auth/Login";
import NotFound from "./pages/NotFoundPage";
import Home from "./pages/HomePage";
import ResetPassword from "./pages/auth/ConfirmEmail";
import NewPassword from "./pages/auth/NewPassword";
import CreateAccount from "./pages/auth/CreateAccount";
import RootLayout from "./layouts/ RootLayout";
import AuthLayout from "./layouts/AuthLayout";
import FAQ from "./pages/FAQ";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Address from "./pages/Address";
import CompletePurchase from "./pages/CompletePurchase";
import Profile from "./pages/Profile";

function notify(message) {
  toast(message, {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Zoom,
  });
}

function reducer(state, action) {
  switch (action.type) {
    case "addToCart":
      notify("Item added to Cart :)");
      return [...state, action.load];
    case "dropItem":
      notify("Removed item from Cart");
      return [...state].filter((item) => item.id !== action.load.id);
    case "reset":
      return [];
    default:
      return state;
  }
}

const initialState = [];

export default function App() {
  const [location, setLocation] = useState({});
  const [state, dispatch] = useReducer(reducer, initialState);
  const [user, setUser] = useState({});

  const stateLength = () => state.length;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home dispatch={dispatch} />} />
        <Route path="*" element={<NotFound />} />
        <Route path="faqs" element={<FAQ />} />
        <Route path="profile" element={<Profile data={user} />} />
        <Route
          path="success-checkout"
          element={
            <CompletePurchase
              len={stateLength}
              data={[location]}
              dispatch={dispatch}
            />
          }
        />
        <Route
          path="checkout"
          element={<Checkout items={state} location={location} />}
        />
        <Route
          path="address"
          element={<Address items={location} dispatch={setLocation} />}
        />
        <Route
          path="cart"
          element={
            <Cart data={Array.from(new Set(state))} dispatch={dispatch} />
          }
        />
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginForm setUser={setUser} />} />
          <Route
            path="create-account"
            element={<CreateAccount setUser={setUser} />}
          />
          <Route path="confirm-email" element={<ResetPassword />} />
          <Route path="reset-password" element={<NewPassword />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

function ErrorComponent(error) {
  return (
    <div>
      <p>⚠️ Error {error}</p>
    </div>
  );
}

// handle vite image error
// fix no.of items checkout error
// position of the spinner / loader
// compose.yaml
// axios httpOnly cookie
