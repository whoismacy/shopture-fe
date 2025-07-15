import { useReducer, useState } from "react";
import { useEffect } from "react";
import { createBrowserRouter, Route } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
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

function reducer(state, action) {
  switch (action.type) {
    case "addToCart":
      return [...state, action.load];
  }
}

const initialState = [];

export default function App() {
  const [token, setToken] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(token);

  useEffect(() => {
    const storedToken = localStorage.getItem("jwt_token");
    if (storedToken) setToken(storedToken);
  }, []);

  function handleToken(newToken) {
    setToken(newToken);
    localStorage.setItem("jwt_token", newToken);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home dispatch={dispatch} />} />
        <Route path="*" element={<NotFound />} />
        <Route path="faqs" element={<FAQ />} />
        <Route path="cart" element={<Cart data={state} />} />
        <Route path="auth" element={<AuthLayout />}>
          <Route
            path="login"
            element={<LoginForm onCreation={handleToken} />}
          />
          <Route
            path="create-account"
            element={<CreateAccount onCreation={handleToken} />}
          />
          <Route path="confirm-email" element={<ResetPassword />} />
          <Route path="reset-password" element={<NewPassword />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

function ErrorComponent(error) {
  return (
    <div>
      <p>⚠️ Error {error}</p>
    </div>
  );
}
