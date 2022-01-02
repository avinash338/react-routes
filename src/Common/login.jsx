import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { updateState, clearState } from "../Utils/utils";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  useEffect(() => localStorage.clear());

  const doLogin = () => {
    if (loginEmail === "user") {
      localStorage.setItem("role", "user");
    } else {
      localStorage.setItem("role", "admin");
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <hr />
      <input
        type="text"
        placeholder="Enter Email"
        name="loginEmail"
        value={loginEmail}
        required
        onChange={updateState(setLoginEmail)}
      />
      <input
        type="text"
        placeholder="Enter Password"
        name="loginPassword"
        value={loginPassword}
        required
        onChange={updateState(setLoginPassword)}
      />
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
      <div className="clearfix">
        <button type="button" className="cancelbtn" onClick={() => clearState(setLoginEmail, setLoginPassword)}>
          Cancel
        </button>
        <button type="submit" className="signupbtn" onClick={doLogin}>
          Sign In
        </button>
      </div>
    </div>
  );
};
export default Login;
