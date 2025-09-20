import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import RootLayout from "./components/layout/RootLayout";
const Checkout = lazy(() => import("./pages/Checkout"));
const Address = lazy(() => import("./pages/Address"));
const CompletePurchase = lazy(() => import("./pages/CompletePurchase"));
const NotFound = lazy(() => import("./pages/NotFoundPage"));
const FAQ = lazy(() => import("./pages/Faq"));
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
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <Toaster
        position="top-right"
        gutter={12}
        toastOptions={{
          style: {
            fontFamily: "Rubik",
            backgroundColor: "oklch(98.5% 0.001 106.423)",
            padding: "8px 4px",
            fontSize: "12px",
            maxWidth: "500px",
          },
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000,
          },
        }}
      />
      <RouterProvider router={router} />
    </>
  );
}

// necessary changes required for the shopture app
// I) Improve the styling on the cart's and styling page
// II) Use React Query to fetch data for the homepage
// III) use React Form hook for the checkout form
// IV) uniform styling for the whole app
// V ) Use React Icons
// VI) use react toast icons

/*
PAGES:
i) homepage
ii) cart
iii) checkout
iv) address
v) successful-checkout
vi) faq-page with pagination
vii) not found page
*/
