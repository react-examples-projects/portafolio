import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routers from "../Config/routers";

export default function Routers() {
  return (
    <Router>
      <Switch>
        {routers.map(({ component: Component, ...args }) => {
          return (
            <Route {...args}>
              <Suspense fallback="Cargando...">
                <Component />
              </Suspense>
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
}
  