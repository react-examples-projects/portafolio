import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LoaderPage from "./components/loaders/LoaderPage";
import useThemeContext from "./hooks/useThemeContext";
import ThemeProvider from "./context/ThemeProvider";
import { GeistProvider, CssBaseline } from "@geist-ui/core";

import "./config/i18next";
import "inter-ui/inter.css";
import "./styles/normalize.min.scss";
import "./styles/styles.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Index() {
  const { currentTheme } = useThemeContext();
  return (
    <GeistProvider themeType={currentTheme}>
      <CssBaseline />
      <Suspense fallback={<LoaderPage />}>
        <App />
      </Suspense>
    </GeistProvider>
  );
}

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Index />
    </ThemeProvider>
  </React.StrictMode>
);
