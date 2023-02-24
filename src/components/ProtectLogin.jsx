import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const uid = window.localStorage.getItem("uid") || "";
  const user = {
    isLoggedin: uid !== "",
  };

  console.log(user);

  return user.isLoggedin;
};

const ProtectedLogin = () => {
  const isAuth = useAuth();
  return isAuth ? <Navigate to="/home" /> : <Outlet /> ;
};

export default ProtectedLogin;
