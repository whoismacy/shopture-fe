import React from "react";
import { createRoot } from "react-dom/client";
import { ItemProvider } from "../src/features/products/context/ItemsContext.jsx";
import { AuthProvider } from "./features/auth/context/AuthContext.jsx";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./store/store.js";
import "./index.css";

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
