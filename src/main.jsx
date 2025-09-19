import React from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./features/auth/context/AuthContext.jsx";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./store/store.js";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider>
  </React.StrictMode>,
);
