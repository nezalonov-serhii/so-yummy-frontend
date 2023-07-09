import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
   const { token } = useSelector((state) => state.auth);
   const location = useLocation();
   return token ? children : <Navigate to="/" state={location} />;
};

export default PrivateRoute;
