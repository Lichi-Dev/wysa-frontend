import React, { useState } from "react";
import "./index.css";
import { IoMdCheckmarkCircle } from "react-icons/io";
import Button from "../Button";
import { isExpired, decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";

const SleepChange = () => {
  const [sleepChangeValue, setSleepChangeValue] = useState([]);
  const navigate = useNavigate();
  const onSleepChange = (e) => {
    const isvalueThere = sleepChangeValue.find(
      (value) => value == e.target.value
    );
    if (isvalueThere) {
      setSleepChangeValue(
        sleepChangeValue.filter((value) => value != e.target.value)
      );
    } else {
      setSleepChangeValue((prev) => [...prev, e.target.value]);
    }
  };
  const clickFunction = async () => {
    const token = localStorage.getItem("jwt_token");
    const payload = decodeToken(token);
    const id = payload.id;
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}user/sleepchange/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "PATCH",
          body: JSON.stringify({
            sleepchange: sleepChangeValue,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
      if (data.message == "Submitted") {
        navigate("/sleepstruggle");
      }
    } catch (err) {
      console.log(err);
    }
  };
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
          <label className="label-container">
            <input
              className="input-container"
              type="checkbox"
              value="I would go to sleep easily"
              onChange={onSleepChange}
            />
            I would go to sleep easily
            <span id="check">
              <IoMdCheckmarkCircle className="check-logo" />
            </span>
          </label>
          <label className="label-container">
            <input
              className="input-container"
              type="checkbox"
              value="I would sleep through the night"
              onChange={onSleepChange}
            />
            I would sleep through the night
            <span id="check">
              <IoMdCheckmarkCircle className="check-logo" />
            </span>
          </label>
          <label className="label-container">
            <input
              className="input-container"
              type="checkbox"
              value="I'd wake up on time, refreshed"
              onChange={onSleepChange}
            />
            I'd wake up on time, refreshed
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

export default SleepChange;
