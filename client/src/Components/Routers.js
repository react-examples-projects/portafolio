import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RedirectRoute from "./RedirectRoute";
import routers from "../Config/routers";
import LayoutContainer from "./LayoutContainer";

export default function Routers() {
  return (
    <Router>
      <Switch>
        {routers.map(({ redirect, component, ...args }, i) => {
          const RouteType = redirect ? RedirectRoute : Route;
          return (
            <RouteType {...args} key={i}>
              <LayoutContainer component={component} {...args} />
            </RouteType>
          );
        })}
      </Switch>
    </Router>
  );
}
