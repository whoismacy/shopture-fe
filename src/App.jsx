import { useReducer, useState, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showSuccessToast } from "./utils/toast";
import { showErrorToast } from "./utils/toast";

import "./index.css";
import "./styles/footer.css";
import "./styles/itemContainer.css";
import "./styles/nav.css";
import "./styles/queries.css";
import "./styles/auth.css";
import "./styles/faqs.css";
import "./styles/cart.css";

import RootLayout from "./layouts/RootLayout";
import AuthLayout from "./layouts/AuthLayout";

const CreateAccount = lazy(() => import("./auth/CreateAccount"));
const LoginForm = lazy(() => import("./auth/Login"));
const ResetPassword = lazy(() => import("./auth/ConfirmEmail"));
const NewPassword = lazy(() => import("./auth/NewPassword"));
const Home = lazy(() => import("./ui/HomePage"));
const Checkout = lazy(() => import("./features/user/Checkout"));
const Address = lazy(() => import("./features/user/Address"));
const Profile = lazy(() => import("./features/user/Profile"));
const CompletePurchase = lazy(() => import("./features/user/CompletePurchase"));
const NotFound = lazy(() => import("./ui/NotFoundPage"));
const FAQ = lazy(() => import("./features/faqs/FAQ"));
const Cart = lazy(() => import("./features/cart/Cart"));

function reducer(state, action) {
  switch (action.type) {
    case "addToCart":
      showSuccessToast("Item added to Cart :)");
      return [...state, action.load];
    case "dropItem":
      showErrorToast("Removed item from Cart");
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
  const stateLength = () => state.length;

  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        { path: "/", element: <Home dispatch={dispatch} /> },
        { path: "/faqs", element: <FAQ /> },
        { path: "/profile", element: <Profile /> },
        {
          path: "/success-checkout",
          element: (
            <CompletePurchase
              len={stateLength}
              data={[location]}
              dispatch={dispatch}
            />
          ),
        },
        {
          path: "/checkout",
          element: <Checkout items={state} location={location} />,
        },
        {
          path: "/address",
          element: <Address items={location} dispatch={setLocation} />,
        },
        {
          path: "/cart",
          element: (
            <Cart data={Array.from(new Set(state))} dispatch={dispatch} />
          ),
        },
        {
          path: "/auth",
          element: <AuthLayout />,
          children: [
            {
              path: "login",
              element: <LoginForm />,
            },
            {
              path: "create-account",
              element: <CreateAccount />,
            },
            { path: "confirm-email", element: <ResetPassword /> },
            { path: "reset-password", element: <NewPassword /> },
          ],
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

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
