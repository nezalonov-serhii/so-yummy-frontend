import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PublicRoute = ({ children }) => {
   const isAuth = useSelector((state) => state.auth.token);
   const { state } = useLocation();
   return !isAuth ? children : <Navigate to={state ? state : "/main"} />;
};

export default PublicRoute;
