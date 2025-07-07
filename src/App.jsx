import { useState } from "react";
import { useEffect } from "react";
import { createBrowserRouter, Route } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import "./styles/index.css";
import LoginForm from "./pages/auth/Login";
import NotFound from "./pages/NotFoundPage";
import Home from "./pages/HomePage";
import ResetPassword from "./pages/auth/ConfirmEmail";
import NewPassword from "./pages/auth/NewPassword";
import CreateAccount from "./pages/auth/CreateAccount";
import RootLayout from "./layouts/ RootLayout";
import AuthLayout from "./layouts/AuthLayout";
import Children from "./pages/Children";
import Adults from "./pages/Adults";
import OfficeWear from "./pages/OfficeWear";
import WorkWear from "./pages/WorkWear";
import ProductCategory from "./pages/ProductCategory";

export default function App() {
  const [token, setToken] = useState(null);
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
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="products">
          <Route index element={<ProductCategory />} />
          <Route path="adults" element={<Adults />} />
          <Route path="children" element={<Children />} />
          <Route path="office-wear" element={<OfficeWear />} />
          <Route path="work-wear" element={<WorkWear />} />
        </Route>
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
