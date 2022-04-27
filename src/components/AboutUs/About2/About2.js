import React from "react";
import "./About2.css";
import { FaUserMd, FaHospital, FaFlask, FaAward } from "react-icons/fa";
import { Link } from "react-router-dom";

const About2 = () => {
  return (
    <section className="About2_container">
      <div className="About2_details">
        <FaUserMd className="icon_About2" />
        <span className="Number">85</span>
        <p>
          <strong>Doctors</strong> consequuntur quae qui deca rode
        </p>
        <Link>Find Out More »</Link>
      </div>
      <div className="About2_details">
        <FaHospital className="icon_About2" />
        <span className="Number">26</span>
        <p>
          <strong>Departments</strong> adipisci atque cum quia aut numquam
          delectus
        </p>
        <Link>Find Out More »</Link>
      </div>
      <div className="About2_details">
        <FaFlask className="icon_About2" /> <span className="Number">14</span>
        <p>
          <strong> Research Lab</strong> aut commodi quaerat. Aliquam ratione
        </p>
        <Link>Find Out More »</Link>
      </div>
      <div className="About2_details">
        <FaAward className="icon_About2" /> <span className="Number">150</span>
        <p>
          <strong>Awards</strong> rerum asperiores dolor molestiae doloribu
        </p>
        <Link>Find Out More »</Link>
      </div>
    </section>
  );
};

export default About2;
