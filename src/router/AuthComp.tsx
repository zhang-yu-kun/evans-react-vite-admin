import { Navigate } from "react-router-dom";

const AuthComp = ({ children }: any) => {
  const token = localStorage.getItem("token");
  // const role = localStorage.getItem('role')
  // if (token === '90329872168') {

  // }
  // return <Navigate to="/login" />
  return token === "90329872168" ? children : <Navigate to="/login" />;
};
export default AuthComp;
