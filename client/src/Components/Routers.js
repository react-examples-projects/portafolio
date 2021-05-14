import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RedirectRoute from "./RedirectRoute";
import routers from "../Config/routers";
import Layout from "./Layout";

export default function Routers() {
  return (
    <Router>
      <Switch>
        {routers.map(
          (
            {
              component: Component,
              redirect,
              layout,
              layoutClassName,
              ...args
            },
            index
          ) => {
            const RouteType = redirect ? RedirectRoute : Route;
            return (
              <RouteType {...args} key={index}>
                {layout ? (
                  <Layout className={layoutClassName}>
                    <Suspense fallback="Cargando...">
                      <Component />
                    </Suspense>
                  </Layout>
                ) : (
                  <Suspense fallback="Cargando...">
                    <Component />
                  </Suspense>
                )}
              </RouteType>
            );
          }
        )}
      </Switch>
    </Router>
  );
}
