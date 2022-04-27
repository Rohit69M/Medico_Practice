import React from "react";
import Contact from "./Contact/Contact";
import Navigation from "./Navigation/Navigation";
import Facilities from "./Facilities/Facilities";
import Appointment from "./Appointment/Appointment";
import Hero from "../Hero/Hero";

const Header = () => {
  return (
    <>
      <Contact />
      <Navigation />
      <Hero />
      <Facilities />
      <Appointment />
    </>
  );
};

export default Header;
