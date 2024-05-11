import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "./context/ThemeProvider";

import "./config/i18next";
import "inter-ui/inter.css";
import "./styles/normalize.min.scss";
import "atropos/css";
import "./styles/styles.scss";
import Index from ".";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Index />
    </ThemeProvider>
  </React.StrictMode>
);
