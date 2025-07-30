import { useReducer, useState, lazy } from "react";
import { createBrowserRouter, Route } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { showSuccessToast } from "./utils/toast";
import { showErrorToast } from "./utils/toast";

import "./styles/index.css";
import "./styles/footer.css";
import "./styles/itemContainer.css";
import "./styles/nav.css";
import "./styles/queries.css";
import "./styles/auth.css";
import "./styles/faqs.css";
import "./styles/cart.css";

import ProtectedRoute from "./pages/ProtectedRoute";
import RootLayout from "./layouts/ RootLayout";
import AuthLayout from "./layouts/AuthLayout";
const CreateAccount = lazy(() => import("./pages/auth/CreateAccount"));
const LoginForm = lazy(() => import("./pages/auth/Login"));
const ResetPassword = lazy(() => import("./pages/auth/ConfirmEmail"));
const NewPassword = lazy(() => import("./pages/auth/NewPassword"));
const Home = lazy(() => import("./pages/HomePage"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Address = lazy(() => import("./pages/Address"));
const Profile = lazy(() => import("./pages/Profile"));
const CompletePurchase = lazy(() => import("./pages/CompletePurchase"));
const NotFound = lazy(() => import("./pages/NotFoundPage"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Cart = lazy(() => import("./pages/Cart"));

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

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home dispatch={dispatch} />} />
        <Route path="*" element={<NotFound />} />
        <Route path="faqs" element={<FAQ />} />
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="success-checkout"
          element={
            <ProtectedRoute>
              <CompletePurchase
                len={stateLength}
                data={[location]}
                dispatch={dispatch}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="checkout"
          element={
            <ProtectedRoute>
              <Checkout items={state} location={location} />
            </ProtectedRoute>
          }
        />
        <Route
          path="address"
          element={
            <ProtectedRoute>
              <Address items={location} dispatch={setLocation} />
            </ProtectedRoute>
          }
        />
        <Route
          path="cart"
          element={
            <Cart data={Array.from(new Set(state))} dispatch={dispatch} />
          }
        />
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginForm />} />
          <Route path="create-account" element={<CreateAccount />} />
          <Route
            path="confirm-email"
            element={
              <ProtectedRoute>
                <ResetPassword />
              </ProtectedRoute>
            }
          />
          <Route
            path="reset-password"
            element={
              <ProtectedRoute>
                <NewPassword />
              </ProtectedRoute>
            }
          />
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
