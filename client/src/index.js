import React from "react";
import ReactDOM from "react-dom";
import Routers from "./Components/Routers";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./Styles/Global.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./Context/UserContext";

const client = new QueryClient({
  queries: {
    refetchOnWindowFocus: false,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <UserProvider>
        <Routers />
      </UserProvider>
    </QueryClientProvider>
    <ToastContainer autoClose={2500}/>
  </React.StrictMode>,
  document.getElementById("root")
);
