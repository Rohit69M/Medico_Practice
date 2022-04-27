import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialSkype,
  TiSocialLinkedin,
} from "react-icons/ti";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <section className="footer_container">
      <div className="footer_sections">
        <div className="footer_Details">
          <h3>Medicio</h3>
          <p>
            A108 Adam Street <br />
            NY 535022, USA
            <br />
            <br />
            <strong>Phone: </strong> +1 5589 55488 55 <br />
            <strong>Email: </strong>info@example.com
          </p>
          <div className="footer_social_links">
            <Link>
              <TiSocialTwitter className="footer_links" />
            </Link>
            <Link>
              <TiSocialFacebook className="footer_links" />
            </Link>
            <Link>
              <IoLogoInstagram className="footer_links" />
            </Link>
            <Link>
              <TiSocialSkype className="footer_links" />
            </Link>
            <Link>
              <TiSocialLinkedin className="footer_links" />
            </Link>
          </div>
        </div>
        <div className="footer_Details">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <MdOutlineKeyboardArrowRight className="right_arrow" />
              Home
            </li>
            <li>
              <MdOutlineKeyboardArrowRight className="right_arrow" />
              About us
            </li>
            <li>
              <MdOutlineKeyboardArrowRight className="right_arrow" />
              Services
            </li>
            <li>
              <MdOutlineKeyboardArrowRight className="right_arrow" />
              Terms of service
            </li>
            <li>
              <MdOutlineKeyboardArrowRight className="right_arrow" />
              Privacy policy
            </li>
          </ul>
        </div>
        <div className="footer_Details">
          <h4>Our Services</h4>
          <ul>
            <li>
              <MdOutlineKeyboardArrowRight className="right_arrow" />
              Web Design
            </li>
            <li>
              <MdOutlineKeyboardArrowRight className="right_arrow" />
              Web Development
            </li>
            <li>
              <MdOutlineKeyboardArrowRight className="right_arrow" />
              Product Managment
            </li>
            <li>
              <MdOutlineKeyboardArrowRight className="right_arrow" />
              Marketing
            </li>
            <li>
              <MdOutlineKeyboardArrowRight className="right_arrow" />
              Graphic Design
            </li>
          </ul>
        </div>
        <div className="footer_Details sub">
          <h4>Our Newsletter</h4>
          <p>
            Tamen quem nulla quae legam multos aute sint culpa legam noster
            magna
          </p>
          <form>
            <input type="email" />
            <input type="submit" value="Subscribe"></input>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Footer;
