import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = lazy(() => import("./Pages/App"));
const Contact = lazy(() => import("./Pages/Contact"));

export default function Routers() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Suspense fallback={<h5>Cargando inicio...</h5>}>
            <App />
          </Suspense>
        </Route>

        <Route exact path="/contacto">
          <Suspense fallback={<h5>Cargando contacto...</h5>}>
            <Contact />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
}
