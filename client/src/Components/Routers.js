import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RedirectRoute from "./RedirectRoute";
import routers from "../Config/routers";

export default function Routers() {
  return (
    <Router>
      <Switch>
        {routers.map(({ component: Component, redirect, ...args }, index) => {
          const RouteType = redirect ? RedirectRoute : Route;
          return (
            <RouteType {...args} key={index}>
              <Suspense fallback="Cargando...">
                <Component />
              </Suspense>
            </RouteType>
          );
        })}
      </Switch>
    </Router>
  );
}
