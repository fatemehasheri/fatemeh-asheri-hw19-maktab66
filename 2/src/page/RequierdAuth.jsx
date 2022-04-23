import React, { useContext } from "react";
import checkLogin from "./checkLogin";
import { useLocation, Navigate } from "react-router-dom";
const RequierdAuth = ({ children }) => {
  const { userLogin, setUserLogin } = useContext(checkLogin);
  const location = useLocation();
  
  if (!(userLogin)) {
    alert("Please Login!");
    return <Navigate to={"/login"} state={location.pathname} />;
  }else{
      return <div>{children}</div>;
  }
  
};

export default RequierdAuth;