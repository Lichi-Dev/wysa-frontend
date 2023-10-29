import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("jwt_token");
    navigate("/login");
  };
  return (
    <div className="result-container">
      <h1 className="result-heading">
        You seem to have a sleep efficiency of 65% That's good😎<br></br>
        <br></br>A higher sleep efficiency means a more refreshing and
        energizing sleep,which can help you movbe into your day with a sense of
        lightness and ease.
      </h1>
      <button onClick={logout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default Result;
