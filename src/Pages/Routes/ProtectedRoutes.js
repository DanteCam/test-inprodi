import { Navigate, Outlet } from "react-router-dom";
import { token } from "../../Components/Reducers/AuthSlice";
import { useSelector } from "react-redux";

const useAuth = () => {
  const authToken = useSelector(token);
  const isAuthorized = authToken.length > 0 ? true : false; // Unsafe: a production app requires additional security. : )
  return isAuthorized;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to='/' />;
};

export default ProtectedRoutes;
