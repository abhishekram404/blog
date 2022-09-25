import Cookies from "js-cookie";
import React from "react";
import { Redirect, Route } from "react-router";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const isUserLoggedIn = !!Cookies.get("jwt");

  return (
    <Route
      {...rest}
      render={(props) =>
        !isUserLoggedIn ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
}
