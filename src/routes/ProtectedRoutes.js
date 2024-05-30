import { useContext } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import AuthContext from "../hooks/userContext";

const ProtectedRoutes = ({ role }) => {
  let location = useLocation();
  const { user } = useContext(AuthContext);

  const isLoggedin = !!user?.stsTokenManager?.accessToken;

  return isLoggedin ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoutes;
