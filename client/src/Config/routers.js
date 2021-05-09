import { lazy } from "react";
const App = lazy(() => import("../Components/Pages/App"));
const Contact = lazy(() => import("../Components/Pages/Contact"));
const Login = lazy(() => import("../Components/Pages/Login"));
const Projects = lazy(() => import("../Components/Pages/Projects"));
const route = (path, component, redirect = false) => ({
  path,
  component,
  exact: true,
  redirect,
});

const routers = [
  route("/", App),
  route("/contacto", Contact),
  route("/login", Login, true),
  route("/proyectos", Projects),
];

export default routers;
