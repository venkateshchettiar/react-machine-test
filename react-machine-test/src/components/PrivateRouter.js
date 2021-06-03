import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRouter = (props) => {
  let { component: Component, ...rest } = props;
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("userData") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};
