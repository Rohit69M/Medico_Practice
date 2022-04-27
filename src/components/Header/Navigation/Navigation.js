import React from "react";
import "./Navigation.css";
import logo from "../../../assets/img/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Navigation = () => {
  return (
    <nav className="header_navigation">
      {/* class  header_navigation_logo Automatically taking width */}
      <section className="header_navigation_logo">
        <img src={logo} />
      </section>
      <section className="header_navigation_menu">
        <ul className="header_navigation_menu_list">
          <li>
            <Link to="#">HOME</Link>
          </li>
          <li>
            <Link>ABOUT</Link>{" "}
          </li>
          <li>
            <Link>SERVICES</Link>
          </li>
          <li>
            <Link>DEPARTMENTS</Link>
          </li>
          <li>
            <Link>DOCTORS</Link>
          </li>
          <li className="drop">
            <Link>
              DROP DOWN <MdKeyboardArrowDown className="menu_dropdown" />
            </Link>
            <div className="sub_menu">
              <ul>
                <li>
                  <Link>DROPDOWN 1</Link>
                </li>
                <li className="deep_menu">
                  <Link>Deep Drop Down</Link>
                  <IoIosArrowForward className="forward_arrow" />
                  <div className="deep_submenu">
                    <ul>
                      <li>
                        <Link>DEEP DROPDOWN 1</Link>
                      </li>
                      <li>
                        <Link>DEEP DROPDOWN 2</Link>
                      </li>
                      <li>
                        <Link>DEEP DROPDOWN 3</Link>
                      </li>
                      <li>
                        <Link>DEEP DROPDOWN 4</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link>DROPDOWN 2</Link>
                </li>
                <li>
                  <Link>DROPDOWN 3</Link>
                </li>
                <li>
                  <Link>DROPDOWN 4</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="contact">
            <Link>CONTACT</Link>
          </li>
        </ul>
      </section>
      <button className="contact_btn">Make an Appointment</button>
    </nav>
  );
};

export default Navigation;
