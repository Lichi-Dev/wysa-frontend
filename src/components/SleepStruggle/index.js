import React, { useState } from "react";
import "./index.css";
import { IoMdCheckmarkCircle } from "react-icons/io";
import Button from "../Button";
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";

const SleepStruggle = () => {
  const [sleepChangeValue, setSleepChangeValue] = useState("");
  const navigate = useNavigate();
  const onSleepChange = (e) => {
    setSleepChangeValue(e.target.value);
  };
  const clickFunction = async () => {
    const token = localStorage.getItem("jwt_token");
    const payload = decodeToken(token);
    const id = payload.id;
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}user/sleepstruggle/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "PATCH",
          body: JSON.stringify({
            sleepstruggle: sleepChangeValue,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
      if (data.message == "Submitted") {
        navigate("/result");
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(sleepChangeValue);
  return (
    <div className="sleepchange-container">
      <div>
        <h1 className="intro-heading">
          Let's say in few weeks, you're sleeping well. What would change?
          <br></br>
          <span className="select-change-para">
            Select all the changes you would like to see
          </span>
        </h1>
        <form className="sleep-change-form">
          <label className="label-container input-1">
            <input
              className="input-container"
              type="checkbox"
              value="Less than 2 weeks"
              onChange={onSleepChange}
              checked={sleepChangeValue == "Less than 2 weeks" ? "checked" : ""}
            />
            Less than 2 weeks
            <span id="check">
              <IoMdCheckmarkCircle className="check-logo" />
            </span>
          </label>
          <label className="label-container input-2">
            <input
              className="input-container"
              type="checkbox"
              value="2 to 8 weeks"
              onChange={onSleepChange}
              checked={sleepChangeValue == "2 to 8 weeks" ? "checked" : ""}
            />
            2 to 8 weeks
            <span id="check">
              <IoMdCheckmarkCircle className="check-logo" />
            </span>
          </label>
          <label className="label-container input-3">
            <input
              className="input-container"
              type="checkbox"
              value="More than 8 weeks"
              onChange={onSleepChange}
              checked={sleepChangeValue == "More than 8 weeks" ? "checked" : ""}
            />
            More than 8 weeks
            <span id="check">
              <IoMdCheckmarkCircle className="check-logo" />
            </span>
          </label>
        </form>
      </div>
      {sleepChangeValue.length != 0 && <Button clickFunction={clickFunction} />}
    </div>
  );
};

export default SleepStruggle;
