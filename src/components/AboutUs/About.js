import React from "react";
import "./About.css";
import About1 from "../AboutUs/About1/About1";
import About2 from "./About2/About2";
import About3 from "./AboutUs3/About3";
const About = () => {
  return (
    <>
      <div className="About">
        <About1 />
        <About2 />
        <About3 />
      </div>
    </>
  );
};

export default About;
