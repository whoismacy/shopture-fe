import { createRoot } from "react-dom/client";
import React from "react";
import "./styles/index.css";
import App from "./App.jsx";
import { ItemProvider } from "./contexts/ItemsContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ItemProvider>
        <App />
      </ItemProvider>
    </AuthProvider>
  </React.StrictMode>
);
