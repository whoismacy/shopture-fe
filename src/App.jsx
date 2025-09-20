import { lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import RootLayout from "./components/layout/RootLayout";
import PrivateRoute from "./components/layout/PrivateRoute";
import { useSelector } from "react-redux";
import { getAllowedState } from "./store/slices/userSlice";

const Checkout = lazy(() => import("./pages/Checkout"));
const Address = lazy(() => import("./pages/Address"));
const CompletePurchase = lazy(() => import("./pages/CompletePurchase"));
const NotFound = lazy(() => import("./pages/NotFoundPage"));
const FAQ = lazy(() => import("./pages/Faq"));
const Cart = lazy(() => import("./features/cart/Cart"));
const Welcome = lazy(() => import("./pages/Welcome"));
const Home = lazy(() => import("./pages/HomePage"));

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: Infinity } },
});

export default function App() {
  const allowed = useSelector(getAllowedState);
  const router = createBrowserRouter([
    { path: "/", element: <Welcome /> },
    {
      element: <RootLayout />,
      children: [
        {
          path: "/home",
          element: (
            <PrivateRoute allowed={allowed}>
              <Home />
            </PrivateRoute>
          ),
        },
        { path: "/faqs", element: <FAQ /> },
        {
          path: "/success-checkout",
          element: (
            <PrivateRoute allowed={allowed}>
              <CompletePurchase />
            </PrivateRoute>
          ),
        },
        {
          path: "/checkout",
          element: (
            <PrivateRoute allowed={allowed}>
              <Checkout />
            </PrivateRoute>
          ),
        },
        {
          path: "/address",
          element: (
            <PrivateRoute allowed={allowed}>
              <Address />
            </PrivateRoute>
          ),
        },
        {
          path: "/cart",
          element: (
            <PrivateRoute allowed={allowed}>
              <Cart />
            </PrivateRoute>
          ),
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster
        position="top-center"
        gutter={12}
        toastOptions={{
          style: {
            fontFamily: "Poppins, sans-serif",
            backgroundColor: "#fafaf9",
            padding: "8px 12",
            fontSize: "16px",
            maxWidth: "500px",
            color: "#0c0a09",
          },
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000,
            backgroundColor: "#ff6467",
          },
        }}
      />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
