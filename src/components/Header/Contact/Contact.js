import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="contact_section">
      <p>
        <AiOutlineClockCircle className="contact_section_clock" /> Monday -
        Saturday, 8AM to 10PM
      </p>
      <p>
        <BsPhone className="contact_section_phone" /> Call us now +1 5589 55488
        55
      </p>
    </section>
  );
};

export default Contact;
