import React from "react";
import "./Department.css";
import { Link } from "react-router-dom";
import department1 from "../../../assets/img/departments-1.jpg";
const Department = () => {
  return (
    <section className="Department_Container">
      <h1 className="Department_Name">Department</h1>
      <div className="Department_underline"></div>
      <p className="Department_desc">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className="Department_Details_Container">
        <div className="Department_Details">
          <ul>
            <li className="active">
              <Link>
                <h4>Cardiology</h4>
                <p>
                  Quis excepturi porro totam sint earum quo nulla perspiciatis
                  eius.
                </p>
              </Link>
            </li>
            <li>
              <Link>
                <h4>Neurology</h4>
                <p>Voluptas vel esse repudiandae quo excepturi.</p>
              </Link>
            </li>

            <li>
              <Link>
                <h4>Hepatology</h4>
                <p>Velit veniam ipsa sit nihil blanditiis mollitia natus.</p>
              </Link>
            </li>
            <li>
              <Link>
                <h4>Pediatrics</h4>
                <p>
                  Ratione hic sapiente nostrum doloremque illum nulla
                  praesentium id
                </p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="Department_Details_active">
          <h3>Cardiology</h3>
          <p className="Department_Details_active_desc">
            Qui laudantium consequatur laborum sit qui ad sapiente dila parde
            sonata raqer a videna mareta paulona marka
          </p>

          <div className="active_img_detail">
            <img src={department1} />
            <p>
              Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum
              sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae
              aut qui. Est repellat minima eveniet eius et quis magni nihil.
              Consequatur dolorem quaerat quos qui similique accusamus nostrum
              rem vero
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Department;
