import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = lazy(() => import("./App"));

export default function Routers() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Suspense fallback={<h5>Cargando inicio...</h5>}>
            <App />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
}
