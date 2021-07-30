import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, path }) {
  const token = localStorage.getItem("token");
  var isAuthenticated = false;

  if(token==null) {
    isAuthenticated = false
  }
  else {
    isAuthenticated = true
  }

  return (
    <Route
      path={path}
      render={(props) => {
        return isAuthenticated ? (<Component {...props} />) : (<Redirect to="/login" />);
      }
    }
    />
  )
}
   

export default ProtectedRoute;