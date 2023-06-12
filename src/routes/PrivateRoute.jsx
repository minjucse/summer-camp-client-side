import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router";


const PrivateRoute = ({ children }) => {
    const { userInfo, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if (userInfo) {
        return children;
    }
    return <Navigate to="/sign-in" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;