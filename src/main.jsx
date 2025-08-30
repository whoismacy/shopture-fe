import React from "react";
import { createRoot } from "react-dom/client";
import { ItemProvider } from "../src/features/products/context/ItemsContext.jsx";
import App from "./App.jsx";
import { AuthProvider } from "./features/auth/context/AuthContext.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ItemProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ItemProvider>
    </AuthProvider>
  </React.StrictMode>
);
