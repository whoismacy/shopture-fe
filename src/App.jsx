import { lazy, useReducer, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showErrorToast, showSuccessToast } from "./utils/toast";

import "./index.css";
import "./styles/auth.css";
import "./styles/cart.css";
import "./styles/faqs.css";
import "./styles/footer.css";
import "./styles/itemContainer.css";
import "./styles/nav.css";
import "./styles/queries.css";

import AuthLayout from "./components/layout/AuthLayout";
import RootLayout from "./components/layout/RootLayout";
import ErrorBoundary from "./pages/ErrorBoundary";

const CreateAccount = lazy(() =>
  import("./features/auth/components/CreateAccount")
);
const LoginForm = lazy(() => import("./features/auth/components/Login"));
const ResetPassword = lazy(() => import("./components/forms/ConfirmEmail"));
const NewPassword = lazy(() =>
  import("./features/auth/components/NewPassword")
);
const Checkout = lazy(() => import("./features/user/Checkout"));
const Address = lazy(() => import("./features/user/Address"));
const Profile = lazy(() => import("./features/user/Profile"));
const CompletePurchase = lazy(() => import("./features/user/CompletePurchase"));
const NotFound = lazy(() => import("./pages/NotFoundPage"));
const FAQ = lazy(() => import("./features/faqs/Faq"));
const Cart = lazy(() => import("./features/cart/Cart"));
const Home = lazy(() => import("./pages/HomePage"));

import { loader as productsLoader } from "./pages/homePageLoader";
import { action as addressAction } from "./features/user/addressAction";

export default function App() {
  const [location, setLocation] = useState({});

  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: productsLoader,
          errorElement: <ErrorBoundary />,
        },
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
          action: addressAction,
        },
        {
          path: "/cart",
          element: <Cart />,
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
