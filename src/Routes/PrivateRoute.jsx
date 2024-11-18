import { useContext } from "react"
import { AuthContext } from "../authProvider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);
    if(loading){
        return <progress className="progress w-56" value="10" max="100"></progress>;
    }
    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
}

export default PrivateRoute