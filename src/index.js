import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import storage from "./state/storage";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={storage}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
