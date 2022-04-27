import React from "react";
import "./Facilities.css";
import { FaHeartbeat, FaPills, FaThermometer, FaDna } from "react-icons/fa";

const Facilities = () => {
  return (
    <section className="facility_container">
      <div className="facility_details">
        <FaHeartbeat className="icon_facility" />
        <h3>Lorem Ipsum</h3>
        <p>
          Voluptatum deleniti atque corrupti quos dolores et quas molestias
          excepturi
        </p>
      </div>
      <div className="facility_details">
        <FaPills className="icon_facility" />
        <h3>Sed ut perspiciatis</h3>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore
        </p>
      </div>
      <div className="facility_details">
        <FaThermometer className="icon_facility" />
        <h3>Magni Dolores</h3>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia
        </p>
      </div>
      <div className="facility_details">
        <FaDna className="icon_facility" />
        <h3>Nemo Enim</h3>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis
        </p>
      </div>
    </section>
  );
};

export default Facilities;
