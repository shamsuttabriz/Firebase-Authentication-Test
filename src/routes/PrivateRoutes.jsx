import React, { use } from "react";
import { AuthContext } from "../contexts/Authcontext";
import { Navigate, useLocation } from "react-router";

function PrivateRoutes({ children }) {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <span className="loading loading-bars loading-xl text-center"></span>
    );
  }

  if (!user) {
    return <Navigate state={location?.pathname} to="/login" />;
  }
  return children;
}

export default PrivateRoutes;
