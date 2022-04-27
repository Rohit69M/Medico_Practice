import React from "react";
import "./Services2.css";

const Services2 = () => {
  return (
    <section className="Services2_Container">
      <h1>MAKE AN APPOINTMENT</h1>
      <div className="Services2_underline"></div>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      {/*  textarea size problem. Not taking % value form parent reference  */}
      <form className="form_Services2">
        <div className="row">
          <div className="Services2_Form">
            <input type="text" placeholder="First Name" />
          </div>
          <div className="Services2_Form">
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="Services2_Form">
            <input type="number" placeholder="Your Phone" />
          </div>
        </div>
        <div className="row">
          <div className="Services2_Form">
            <input type="datetime" placeholder="Appointment Date" />
          </div>
          <div className="Services2_Form">
            <select>
              <option> Select Department </option>
              <option value="volvo">Department 1</option>
              <option value="saab">Department 2</option>
              <option value="opel">Department 3</option>
            </select>
          </div>
          <div className="Services2_Form">
            <select>
              <option> Select Doctor </option>
              <option value="volvo">Doctor 1</option>
              <option value="saab">Doctor 2</option>
              <option value="opel">Doctor 3</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="Services2_Form">
            <textarea className="form_textarea"></textarea>
          </div>
        </div>
        <button className="btn_submit" type="submit">
          Make an Appointment
        </button>
      </form>
    </section>
  );
};

export default Services2;
