import { lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import RootLayout from "./components/layout/RootLayout";

const Checkout = lazy(() => import("./pages/Checkout"));
const Address = lazy(() => import("./pages/Address"));
const CompletePurchase = lazy(() => import("./pages/CompletePurchase"));
const NotFound = lazy(() => import("./pages/NotFoundPage"));
const FAQ = lazy(() => import("./pages/Faq"));
const Cart = lazy(() => import("./features/cart/Cart"));
const Home = lazy(() => import("./pages/HomePage"));

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: Infinity } },
});

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
