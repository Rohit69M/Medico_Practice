import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/AboutUs/About";
import Servicees from "./components/Servicees/Servicees";
import Testimonials from "./components/Department/Testimonials/Testimonials";
import Department from "./components/Department/Department/Department";
import Doctors from "./components/Doctors/Doctors";
import Gallery from "./components/Gallery/Gallery";
import Pricing from "./components/Pricing/Pricing";
import Questions from "./components/Questions/Questions";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Copyright from "./components/Copyright/Copyright";
function App() {
  return (
    <>
      <Router>
        <Header />
        <About />
        <Servicees />
        <Department />
        <Testimonials />
        <Doctors />
        <Gallery />
        <Pricing />
        <Questions />
        <Contact />
        <Footer />
        <Copyright />
      </Router>
    </>
  );
}

export default App;
