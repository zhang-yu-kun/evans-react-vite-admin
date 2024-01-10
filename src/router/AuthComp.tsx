import { Navigate } from "react-router-dom";

const AuthComp = ({ children }: any) => {
  const token = localStorage.getItem("token");
  return token === "90329872168" ? children : <Navigate to="/login" />;
};
export default AuthComp;
