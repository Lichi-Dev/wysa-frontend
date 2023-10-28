import React from "react";
import logo from "../../assets/icon.webp";
import "./index.css";
import Button from "../Button";
import Typed from "typed.js";

const Home = () => {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hey! I'm <span style='color:#009E99'>wysa</span>"],
      typeSpeed: 100,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className="home-container">
      <div className="home-sub-container">
        <img className="logo-image" src={logo} />
        {/* <Typed
          className="type-text transition"
          strings={["Hey! I'm <span style='color:#009E99'>wysa</span>"]}
          typeSpeed={100}
          startDelay={1000}
        /> */}
        <h1 className="type-text transition" ref={el}></h1>
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
