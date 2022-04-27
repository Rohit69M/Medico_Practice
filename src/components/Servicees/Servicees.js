import React from "react";
import Services2 from "./Services2/Services2";
import "./Servicees.css";
import Service from "./Servicees/Service";

const Servicees = () => {
  return (
    <>
      <div className="servicees_container">
        <Service />
      </div>
      <Services2 />
    </>
  );
};

export default Servicees;
