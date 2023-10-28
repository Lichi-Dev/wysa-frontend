import React from "react";
import "./index.css";

const Login = () => {
  return (
    <div className="login-container">
      <div class="card">
        <h2 className="login-heading">Login Form</h2>
        <form className="login-form-container">
          <label for="nickname" className="login-label">
            Nickname
          </label>
          <input
            type="text"
            id="Nickname"
            placeholder="Enter your nickname"
            className="login-input"
          />
          <label for="password" className="login-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="login-input"
          />

          <button className="login-button" type="submit">
            Login
          </button>
        </form>
        <div class="switch">
          Don't have an account?{" "}
          <a href="/signup" onclick="switchCard()">
            Register here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
