import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import CreateAccount from "./components/auth/CreateAccount.jsx";
import LoginForm from "./components/auth/Login.jsx";
import ResetPassword from "./components/auth/ResetPassword.jsx";
import NewPassword from "./components/auth/NewPassword.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="auth">
        <Route path="create-account" element={<CreateAccount />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="confirm-email" element={<ResetPassword />} />
        <Route path="reset-password" element={<NewPassword />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

//using outlet, useNavigate, hashing a password ?
