import React from "react";
import "./Pricing.css";
import { Link } from "react-router-dom";
const Pricing = () => {
  return (
    <section className="Pricing_Container">
      <h1>PRICING</h1>
      <div className="Pricing_underline"></div>
      <p className="Pricing_desc">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className="Pricing_Section">
        <div className="Pricing_Details">
          <h3>Free</h3>
          <h4>
            <sup>$</sup>0<span> / month</span>
          </h4>
          <ul>
            <li>Aida dere</li>
            <li>Nec feugiat nisl</li>
            <li>Nulla at volutpat dola</li>
            <li>Aida dere</li>
            <li className="na">Pharetra massa</li>
            <li className="na">Massa ultricies mi</li>
          </ul>
          <div className="Pricing_Details_Btn">
            <Link>Buy Now</Link>
          </div>
        </div>
        <div className="Pricing_Details Bussiness">
          <h3>Business</h3>
          <h4>
            <sup>$</sup>19<span> / month</span>
          </h4>
          <ul>
            <li>Aida dere</li>
            <li>Nec feugiat nisl</li>
            <li>Nulla at volutpat dola</li>
            <li>Aida dere</li>
            <li className="na">Pharetra massa</li>
            <li className="na">Massa ultricies mi</li>
          </ul>
          <div className="Pricing_Details_Btn">
            <Link>Buy Now</Link>
          </div>
        </div>
        <div className="Pricing_Details">
          <h3>Developer</h3>
          <h4>
            <sup>$</sup>29<span> / month</span>
          </h4>
          <ul>
            <li>Aida dere</li>
            <li>Nec feugiat nisl</li>
            <li>Nulla at volutpat dola</li>
            <li>Aida dere</li>
            <li className="na">Pharetra massa</li>
            <li className="na">Massa ultricies mi</li>
          </ul>
          <div className="Pricing_Details_Btn">
            <Link>Buy Now</Link>
          </div>
        </div>
        <div className="Pricing_Details">
          <h3>Ultimate</h3>
          <h4>
            <sup>$</sup>49<span> / month</span>
          </h4>
          <ul>
            <li>Aida dere</li>
            <li>Nec feugiat nisl</li>
            <li>Nulla at volutpat dola</li>
            <li>Aida dere</li>
            <li className="na">Pharetra massa</li>
            <li className="na">Massa ultricies mi</li>
          </ul>
          <div className="Pricing_Details_Btn">
            <Link>Buy Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
