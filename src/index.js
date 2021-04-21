import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
