import React from "react";
import "./About1.css";
import about from "../../../assets/img/about.jpg";
import { BsCheckCircle } from "react-icons/bs";

const About1 = () => {
  return (
    <section className="AboutUs_Container">
      <h1>ABOUT US</h1>
      <div className="AboutUs_Underline"></div>
      <p className="AboutUs_description">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className="About_Us">
        <img src={about} alt="About_Us_img_details" />
        <div className="About_Us_Details">
          <h1>
            Voluptatem dignissimos provident quasi corporis voluptates sit
            assumenda.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          {/* list part not aligend properly...3rd li */}
          <ul className="about_list">
            <li>
              <span>
                <BsCheckCircle className="About_checkIcon" />
              </span>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </li>
            <li>
              <span>
                <BsCheckCircle className="About_checkIcon" />
              </span>
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </li>
            <li>
              <span>
                <BsCheckCircle className="About_checkIcon" />
              </span>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate trideta storacalaperda
              mastiro dolore eu fugiat nulla pariatur
            </li>
          </ul>
          <p className="About_details_last">
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum
          </p>
        </div>
      </div>
    </section>
  );
};

export default About1;
