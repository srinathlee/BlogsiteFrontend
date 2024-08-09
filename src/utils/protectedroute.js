import { Navigate, Outlet } from "react-router-dom";

const Protectedroute = () => {
  const JwtToken = localStorage.getItem("jwtToken") !== null;

  return JwtToken ? <Outlet /> : <Navigate to="/login" />;
};

export default Protectedroute;
