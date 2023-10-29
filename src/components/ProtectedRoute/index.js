import { Navigate, Route, redirect } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("jwt_token");
  console.log(token);
  if (token) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default ProtectedRoute;
