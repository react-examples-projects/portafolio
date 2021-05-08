import { lazy } from "react";
const App = lazy(() => import("../Components/Pages/App"));
const Contact = lazy(() => import("../Components/Pages/Contact"));
const Login = lazy(() => import("../Components/Pages/Login"));
const route = (path, component) => ({ path, component, exact: true });

const routers = [
  route("/", App),
  route("/contacto", Contact),
  route("/login", Login),
];

export default routers;
