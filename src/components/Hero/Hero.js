import React from "react";
import "./Hero.css";
import slide1 from "../../assets/img/slide/slide-1.jpg";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="Hero_Container">
      <img src={slide1} alt="slide1" />
      <div className="arrow forward">
        <MdArrowForwardIos className="Hero_ArrowForwd" />
      </div>
      <div className="arrow backward">
        <MdArrowBackIosNew className="Hero_ArrowBckwd" />
      </div>
      <div className="Hero_Details">
        <h1>Welcome to Medicio</h1>
        <p>
          Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est
          quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut.
          Similique ea voluptatem. Esse doloremque accusamus repellendus
          deleniti vel.
        </p>
        <Link>Read More</Link>
      </div>
      <div className="Hero_image_dots">
        <span className="Hero_testimonial"></span>
        <span className="Hero_testimonial"></span>
        <span className="Hero_testimonial"></span>
      </div>
    </section>
  );
};

export default Hero;
