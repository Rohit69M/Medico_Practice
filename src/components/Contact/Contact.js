import React from "react";
import "./Contact.css";
import { RiMapPinLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { MdPhoneInTalk } from "react-icons/ai";

const Contact = () => {
  return (
    <section className="Contact_Container">
      <h1>PRICING</h1>
      <div className="Contact_underline"></div>
      <p className="Contact_desc">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      {/* Map Is Missing */}
      <div className="Contact_Details">
        <div className="Contact_Location one">
          <RiMapPinLine className="Contact_icon" />
          <h3>Our Address</h3>
          <p>A108 Adam Street, New York, NY 535022</p>
        </div>
        <div className="Contact_Location two">
          <AiOutlineMail className="Contact_icon" />
          <h3>Our Address</h3>
          <p>
            info@example.com <br /> contact@example.com
          </p>
        </div>
        <div className="Contact_Location three">
          <AiOutlineMail className="Contact_icon" />
          <h3>Our Address</h3>
          <p>
            +1 5589 55488 55 +1 <br /> 6678 254445 41
          </p>
        </div>

        <div className="Contact_Location four">
          <form>
            <div className="Form_container">
              <div className="Contact_Form">
                <input type="text" placeholder="First Name" />
              </div>
              <div className="Contact_Form">
                <input type="email" placeholder="Your Email" />
              </div>
            </div>
            <div className="Contact_Form subject">
              <input type="text" placeholder="Subject" />
            </div>
            <div className="Contact_Form form_textarea">
              <textarea type="text" placeholder="Message" />
            </div>
            <button type="submit" className="contact_sub_btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
