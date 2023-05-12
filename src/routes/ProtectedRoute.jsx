import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const uid = window.localStorage.getItem("uid") || "";
  const user = {
    isLoggedin: uid !== "",
  };

  console.log(user);

  return user.isLoggedin;
};

const ProtectedRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
