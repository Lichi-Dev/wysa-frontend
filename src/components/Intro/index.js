import React from "react";
import "./index.css";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();
  const clickFunction = () => {
    navigate("/sleepchange");
  };
  return (
    <div className="intro-container">
      <h1 className="intro-heading">
        Let's start by calculating your sleep efficiency and examining your
        concerns<br></br>
        <br></br>Over Time, we will together to improve these.
      </h1>
      <Button clickFunction={clickFunction} />
    </div>
  );
};

export default Intro;
