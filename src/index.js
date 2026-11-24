import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
  window.addEventListener("load", () =>
    navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/sw.js`)
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
