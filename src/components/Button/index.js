import React from "react";
import "./index.css";
import { HiArrowNarrowDown } from "react-icons/hi";

const Button = (props) => {
  const { clickFunction } = props;
  return (
    <button onClick={clickFunction} className="button-container bounce">
      <HiArrowNarrowDown />
    </button>
  );
};

export default Button;
