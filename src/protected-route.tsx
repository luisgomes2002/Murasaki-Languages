import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./context/user-context";

interface ProtectedRouteProps {
  redirectPath?: string;
}

const ProtectedRoute = ({ redirectPath = "/sign-in" }: ProtectedRouteProps) => {
  const userContext = useContext(UserContext);

  const isAuthenticated = !!userContext?.user?.userId;
  const isLoading = userContext?.isLoading;

  if (isLoading) {
    return <i className="fa-solid fa-c fa-spin" />;
  }

  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
