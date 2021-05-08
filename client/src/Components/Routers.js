import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routers from "../Config/routers";

export default function Routers() {
  return (
    <Router>
      <Switch>
        {routers.map(({ component: Component, ...args }, index) => {
          return (
            <Route {...args} key={index}>
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
