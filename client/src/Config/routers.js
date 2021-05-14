import { lazy } from "react";
import { route } from "../Helpers/utils";
const App = lazy(() => import("../Components/Pages/App"));
const Contact = lazy(() => import("../Components/Pages/Contact"));
const Login = lazy(() => import("../Components/Pages/Login"));
const Projects = lazy(() => import("../Components/Pages/Projects"));

const routers = [
  route("/", { component: App }),
  route("/contacto", { component: Contact }),
  route("/login", { component: Login, redirect: true, layout: false }),
  route("/proyectos", {
    component: Projects,
    layoutClassName: "justify-content-start align-items-start",
  }),
];

export default routers;
