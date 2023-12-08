import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <ToastContainer
      theme="dark"
      position="top-right"
      autoClose={3000}
      closeOnClick
      pauseOnHover={false}
    />
    <App />
  </>
);
