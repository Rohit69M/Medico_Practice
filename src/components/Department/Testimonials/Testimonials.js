import React from "react";
import "./Testimonials.css";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import testimonials1 from "../../../assets/img/testimonials/testimonials-1.jpg";
import testimonials2 from "../../../assets/img/testimonials/testimonials-2.jpg";
import testimonials3 from "../../../assets/img/testimonials/testimonials-3.jpg";

const Testimonials = () => {
  return (
    <section className="Testimonials_Container">
      <h1>TESTIMONIALS</h1>
      <div className="Testimonials_underline"></div>
      <p className="Testimonials_desc">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className="Testimonials_Testimonials">
        <div className="Testimonials">
          <p>
            <ImQuotesLeft className="quote_left" />
            Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
            veniam tempor noster veniam enim culpa labore duis sunt culpa nulla
            illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
            <ImQuotesRight className="quote_Right" />
          </p>
          <div className="testimonial_Person">
            <img src={testimonials1} alt="testimonial1" />
            <h3>Saul Goodman</h3>
            <h4>Ceo & Founder</h4>
          </div>
        </div>
        <div className="Testimonials">
          <p>
            <ImQuotesLeft className="quote_left" />
            Export tempor illum tamen malis malis eram quae irure esse labore
            quem cillum quid cillum eram malis quorum velit fore eram velit sunt
            aliqua noster fugiat irure amet legam anim culpa.
            <ImQuotesRight className="quote_Right" />
          </p>
          <div className="testimonial_Person">
            <img src={testimonials2} alt="testimonial1" />
            <h3></h3>
            <h4>Ceo & Founder</h4>
          </div>
        </div>
        <div className="Testimonials">
          <p>
            <ImQuotesLeft className="quote_left" />
            Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos
            export minim fugiat minim velit minim dolor enim duis veniam ipsum
            anim magna sunt elit fore quem dolore labore illum veniam.
            <ImQuotesRight className="quote_Right" />
          </p>
          <div className="testimonial_Person">
            <img src={testimonials3} alt="testimonial1" />
            <h3>Saul Goodman</h3>
            <h4>Ceo & Founder</h4>
          </div>
        </div>
      </div>
      <div className="testimonial_image_dots">
        <span className="dot_testimonial"></span>
        <span className="dot_testimonial"></span>
        <span className="dot_testimonial"></span>
        <span className="dot_testimonial"></span>
        <span className="dot_testimonial"></span>
      </div>
    </section>
  );
};

export default Testimonials;
