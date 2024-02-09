/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <span className="loading loading-dots  text-primary loading-lg"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/" replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
