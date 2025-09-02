import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AuthLayout from "./components/layout/AuthLayout";
import RootLayout from "./components/layout/RootLayout";

const CreateAccount = lazy(
  () => import("./features/auth/components/CreateAccount"),
);
const LoginForm = lazy(() => import("./features/auth/components/Login"));
const Checkout = lazy(() => import("./features/user/Checkout"));
const Address = lazy(() => import("./features/user/Address"));
const Profile = lazy(() => import("./features/user/Profile"));
const CompletePurchase = lazy(() => import("./features/user/CompletePurchase"));
const NotFound = lazy(() => import("./pages/NotFoundPage"));
const FAQ = lazy(() => import("./features/faqs/Faq"));
const Cart = lazy(() => import("./features/cart/Cart"));
const Home = lazy(() => import("./pages/HomePage"));

import { action as addressAction } from "./features/user/addressAction";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        { path: "/faqs", element: <FAQ /> },
        { path: "/profile", element: <Profile /> },
        {
          path: "/success-checkout",
          element: <CompletePurchase />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/address",
          element: <Address />,
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
