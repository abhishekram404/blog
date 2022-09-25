import React from "react";
import { Redirect, Route } from "react-router";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const isUserLoggedIn = sessionStorage.getItem("isUserLoggedIn") === "true";

  return (
    <Route
      {...rest}
      render={(props) =>
        !isUserLoggedIn ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
}
