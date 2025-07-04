import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./styles/index.css";
import App from "./App.jsx";
import CreateAccount from "./pages/auth/CreateAccount.jsx";
import LoginForm from "./pages/auth/Login.jsx";
import ConfirmEmail from "./pages/auth/ConfirmEmail.jsx";
import NewPassword from "./pages/auth/NewPassword.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="auth">
        <Route path="create-account" element={<CreateAccount />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="confirm-email" element={<ConfirmEmail />} />
        <Route path="reset-password" element={<NewPassword />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// Auth & React-Router
