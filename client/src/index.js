import React from "react";
import ReactDOM from "react-dom";
import Routers from "./Components/Routers";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Global.scss";

ReactDOM.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
  document.getElementById("root")
);
