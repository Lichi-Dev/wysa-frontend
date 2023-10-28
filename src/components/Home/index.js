import React from "react";
import logo from "../../assets/icon.webp";
import "./index.css";
import ReactTyped from "react-typed";
import Button from "../Button";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-sub-container">
        <img className="logo-image" src={logo} />
        <ReactTyped
          className="type-text transition"
          strings={["Hey! I'm <span style='color:#009E99'>wysa</span>"]}
          typeSpeed={100}
          startDelay={1000}
        />

        <p className="para-text transition">
          I'm here to help you sleep better
        </p>
      </div>
      <div className="para-text transition">
        <Button />
      </div>
    </div>
  );
};

export default Home;
