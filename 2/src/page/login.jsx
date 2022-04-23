import React, { useContext ,useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckLogin from "./checkLogin";
const Login = () => {
  const navigate = useNavigate();
  const { userLogin, setUserLogin } = useContext(CheckLogin);
  const handelSubmit = () => {
    setUserLogin(true);
    navigate("/dashboard", { state: "wellcome !", replace: true });
  };

  return (
    <div className="page">
      <h2>Login</h2>
      <form onSubmit={handelSubmit}>
        <input type="text" placeholder="userName" name="userName" />
        <input type="text" placeholder="password" name="password" />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
