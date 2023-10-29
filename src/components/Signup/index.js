import React, { useState } from "react";
import "./index.css";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const Signup = () => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [nicknameError, setNicknameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const navigate = useNavigate();
  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  const onSubmitSignup = async (e) => {
    e.preventDefault();
    try {
      if (nickname != "" && password != "") {
        setPasswordError(false);
        setNicknameError(false);
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
          toast("User created successfully", { type: "success" });
          setNickname("");
          setPassword("");
          navigate("/");
        } else if (data.message == "User already exists") {
          toast("User already exists", { type: "error" });
        }
      } else {
        if (nickname == "" && password == "") {
          setPasswordError(true);
          setNicknameError(true);
        } else if (nickname == "") {
          setNicknameError(true);
          setPasswordError(false);
        } else if (password == "") {
          setPasswordError(true);
          setNicknameError(false);
        }
        toast("Enter all details", { type: "error" });
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
          {nicknameError && (
            <span className="error">* Please fill the nickname</span>
          )}
          <label for="password" className="login-label">
            Password
          </label>
          <input
            type={type}
            id="password"
            placeholder="Enter your password"
            className="login-input"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          {passwordError && (
            <span className="error">* Please fill the password</span>
          )}
          <button
            className="show-password-button"
            type="button"
            onClick={handleToggle}
          >
            Show Password
            <Icon class="absolute mr-10" icon={icon} size={10} />
          </button>

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
