import React, { useState } from "react";
import "./index.css";

const Signup = () => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitSignup = async (e) => {
    e.preventDefault();
    try {
      if (nickname != "" && password != "") {
        const res = await fetch(`${process.env.REACT_APP_API_URL}user/signup`, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            nickname: nickname,
            password: password,
          }),
        });
        const data = await res.json();
        console.log(data);
        if (data.message == "User created successfully") {
          localStorage.setItem("jwt_token", data.token);
          console.log("User created successfully");
          setNickname("");
          setPassword("");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="login-container">
      <div class="card">
        <h2 className="login-heading">Register Form</h2>
        <form onSubmit={onSubmitSignup} className="login-form-container">
          <label for="nickname" className="login-label">
            Nickname
          </label>
          <input
            type="text"
            id="Nickname"
            placeholder="Enter your nickname"
            className="login-input"
            onChange={(e) => {
              setNickname(e.target.value);
            }}
            value={nickname}
          />
          <label for="password" className="login-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="login-input"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />

          <button className="login-button" type="submit">
            Register
          </button>
        </form>
        <div class="switch">
          Already have an account?{" "}
          <a href="/login" onclick="switchCard()">
            Login here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
