import React from "react";
import features from "../../../assets/img/features.jpg";
import { BiReceipt, BiCubeAlt, BiImages } from "react-icons/bi";
import "./About3.css";
const About3 = () => {
  return (
    <section className="About3_container">
      <div className="About3_left_desc">
        <div className="About3_left">
          <BiReceipt className="About3_left_icons" />
          <div className="About3_left_details">
            <h4>Est labore ad</h4>
            <p>
              Consequuntur sunt aut quasi enim aliquam quae harum pariatur
              laboris nisi ut aliquip
            </p>
          </div>
        </div>
        <div className="About3_left">
          <BiCubeAlt className="About3_left_icons" />
          <div className="About3_left_details">
            <h4>Est labore ad</h4>
            <p>
              Consequuntur sunt aut quasi enim aliquam quae harum pariatur
              laboris nisi ut aliquip
            </p>
          </div>
        </div>
        <div className="About3_left">
          <BiImages className="About3_left_icons" />
          <div className="About3_left_details">
            <h4>Harum esse qui</h4>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt
            </p>
          </div>
        </div>
        <div className="About3_left">
          <BiReceipt className="About3_left_icons" />
          <div className="About3_left_details">
            <h4>Beatae veritatis</h4>
            <p>
              Expedita veritatis consequuntur nihil tempore laudantium vitae
              denat pacta
            </p>
          </div>
        </div>
      </div>
      <div className="About3_Right_img">
        <img src={features} alt="features" />
      </div>
    </section>
  );
};

export default About3;
