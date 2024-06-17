import { useContext } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import AuthContext from "../hooks/userContext";

const RoleProtectedRoutes = () => {
  let location = useLocation();
  const { user, isAdmin } = useContext(AuthContext);

  const isLoggedin = !!user?.stsTokenManager?.accessToken;

  return isLoggedin && isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to="/home" state={{ from: location }} replace />
  );
};

export default RoleProtectedRoutes;
