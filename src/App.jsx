import "./App.css";
import "./styles/index.css";
import LoginForm from "./pages/auth/Login";
import NotFound from "./pages/NotFoundPage";
import Home from "./pages/HomePage";
import { useState } from "react";
import { useEffect } from "react";
import { createBrowserRouter, Route } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import ResetPassword from "./pages/auth/ConfirmEmail";
import NewPassword from "./pages/auth/NewPassword";
import CreateAccount from "./pages/auth/CreateAccount";

export default function App() {
  const [token, setToken] = useState(null);

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
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="products" element={<RootLayout />}>
          <Route path="adults" />
          <Route path="children" />
          <Route path="office-wear" />
          <Route path="work-wear" />
        </Route>
        <Route path="auth" element={<AuthLayout />}>
          <Route
            path="login"
            element={<LoginForm onCreation={handleToken} />}
          />
          <Route
            path="create-account"
            elment={<CreateAccount onCreation={handleToken} />}
          />
          <Route path="confirm-email" element={<ResetPassword />} />
          <Route path="reset-password" element={<NewPassword />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

// Route Pages to Adults, Children, OfficeWear, Workwear.
