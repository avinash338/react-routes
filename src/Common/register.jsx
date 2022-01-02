import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container">
      <h1>Register</h1>
      <hr />
      <input type="text" placeholder="Enter Email" name="email" required />
      <input type="password" placeholder="Enter Password" name="psw" required />
      <p>
        Already have an account? <Link to="/">Sign In</Link>
      </p>
      <div className="clearfix">
        <button type="button" className="cancelbtn">
          Cancel
        </button>
        <button type="submit" className="signupbtn">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Register;
