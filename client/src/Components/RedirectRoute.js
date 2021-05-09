import { Route, Redirect } from "react-router-dom";
import { existsToken } from "../Helpers/token";

export default function RedirectRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => (existsToken() ? <Redirect to="/" /> : children)}
    />
  );
}
