import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/redux/store.js";
import { Toaster } from "react-hot-toast";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster
        position="bottom-right"
        toastOptions={{
          success: {
            style: {
              background: "#042335",
              border: "2px solid #00bfff",
              color: "#ffffff",
            },
          },
          error: {
            style: {
              background: "#042335",
              border: "2px solid #ff6347",
              color: "#ffffff",
            },
          },
          style: {
            background: "#042335",
            border: "2px solid #007bff",
            color: "#ffffff",
          },
        }}
      />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
