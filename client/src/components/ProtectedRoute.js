import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const { isUserLoggedIn } = useSelector((state) => state.common);

  return (
    <Route
      {...rest}
      render={(props) =>
        !isUserLoggedIn ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
}
