import React from "react";
import ReactDOM from "react-dom/client";
import { App, AppSwitch } from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppSwitch />
    <AppSwitch />
    <AppSwitch />
  </React.StrictMode>
);
