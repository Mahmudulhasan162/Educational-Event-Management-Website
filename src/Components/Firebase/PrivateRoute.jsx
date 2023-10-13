/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Context } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(Context)
    const Location = useLocation();
    if(loading){
        return <span className="loading loading-dots loading-lg h-[80vh] flex items-center justify-center mx-auto"></span>
    }
    if(user){
       return children;
    }
    else{
        return <Navigate state={Location.pathname} to="/login" replace></Navigate>
    }
};

export default PrivateRoute;