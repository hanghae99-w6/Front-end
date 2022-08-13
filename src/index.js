// React import
import React from "react";
import ReactDOM from "react-dom/client";

// Redux import
import { Provider } from "react-redux";
import store from "./redux/configStore";

// Component import
import App from "./App";

// Style import
import "./index.css";

// Package import
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
