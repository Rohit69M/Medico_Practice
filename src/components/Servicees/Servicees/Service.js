import React from "react";
import "./Service.css";
import {
  FaHeartbeat,
  FaPills,
  FaThermometer,
  FaDna,
  FaHospitalUser,
  FaWheelchair,
  FaNotesMedical,
} from "react-icons/fa";
const Service = () => {
  return (
    <section className="service_container">
      <h1>SERVICES</h1>
      <div className="service_underline"></div>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>

      <section className="Service_details">
        <div className="service_detail_desc">
          <div className="service_circle">
            <FaHeartbeat className="services_icon" />
          </div>
          <div className="service_icon_section">
            <h4>Lorem Ipsum</h4>
            <div className="service_icon_section_underline"></div>
          </div>
          <p>
            Voluptatum deleniti atque corrupti quos dolores et quas molestias
            excepturi sint occaecati cupiditate non provident
          </p>
        </div>
        <div className="service_detail_desc">
          <div className="service_circle">
            <FaPills className="services_icon" />
          </div>
          <div className="service_icon_section">
            <h4>Dolor Sitema</h4>
            <div className="service_icon_section_underline"></div>
          </div>
          <p>
            Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat tarad limino ata
          </p>
        </div>
        <div className="service_detail_desc">
          <div className="service_circle">
            <FaHospitalUser className="services_icon" />
          </div>
          <div className="service_icon_section">
            <h4>Sed ut perspiciatis</h4>
            <div className="service_icon_section_underline"></div>
          </div>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatu
          </p>
        </div>
        <div className="service_detail_desc">
          <div className="service_circle">
            <FaDna className="services_icon" />
          </div>
          <div className="service_icon_section">
            <h4>Magni Dolores</h4>
            <div className="service_icon_section_underline"></div>
          </div>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </p>
        </div>
        <div className="service_detail_desc">
          <div className="service_circle">
            <FaWheelchair className="services_icon" />
          </div>
          <div className="service_icon_section">
            <h4>Nemo Enim</h4>
            <div className="service_icon_section_underline"></div>
          </div>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque
          </p>
        </div>
        <div className="service_detail_desc">
          <div className="service_circle">
            <FaNotesMedical className="services_icon" />
          </div>
          <div className="service_icon_section">
            <h4>Eiusmod Tempor</h4>
            <div className="service_icon_section_underline"></div>
          </div>
          <p>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi
          </p>
        </div>
      </section>
    </section>
  );
};

export default Service;
