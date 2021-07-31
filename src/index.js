import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CartState from "./context/Cart/CartState";
import AuthProvider from "./context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CartState>
        <App />
      </CartState>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
