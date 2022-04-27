import React from "react";
import "./Copyright.css";
import { Link } from "react-router-dom";
const Copyright = () => {
  return (
    <section className="Copyright_Container">
      <div className="copyright">
        © Copyright
        <strong>
          <span>Medicio</span>
        </strong>
        . All Rights Reserved
      </div>
      <div class="credits">
        Designed by <Link>BootstrapMade</Link>
      </div>
    </section>
  );
};

export default Copyright;
