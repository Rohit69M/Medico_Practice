import React from "react";
import "./Doctors.css";
import { Link } from "react-router-dom";
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import doctor1 from "../../assets/img/doctors/doctors-1.jpg";
import doctor2 from "../../assets/img/doctors/doctors-2.jpg";
import doctor3 from "../../assets/img/doctors/doctors-3.jpg";
import doctor4 from "../../assets/img/doctors/doctors-4.jpg";

const Doctors = () => {
  return (
    <section className="Doctor_Container">
      <h1>Doctors</h1>
      <div className="Doctor_underline"></div>
      <p className="Doctor_desc">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className="Doctors_Details_Section">
        <div className="Doctor_information">
          <img src={doctor1} alt="doctor1" />
          {/* Below social icon part not completed */}
          {/* <div className="social_icons">
            <Link>
              <BsTwitter />
            </Link>
            <Link>
              <BsFacebook />
            </Link>
            <BsInstagram />
            <Link>
              <BsLinkedin />
            </Link>
          </div> */}
          <div className="doctor_Name_post">
            <h4>Walter White</h4>
            <span>Chief Medical Officer</span>
          </div>
        </div>
        <div className="Doctor_information">
          <img src={doctor2} alt="doctor2" />
          <div className="doctor_Name_post">
            <h4>Walter White</h4>
            <span>Chief Medical Officer</span>
          </div>
        </div>
        <div className="Doctor_information">
          <img src={doctor3} alt="doctor3" />
          <div className="doctor_Name_post">
            <h4>Walter White</h4>
            <span>Chief Medical Officer</span>
          </div>
        </div>
        <div className="Doctor_information">
          <img src={doctor4} alt="doctor4" />
          <div className="doctor_Name_post">
            <h4>Walter White</h4>
            <span>Chief Medical Officer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
