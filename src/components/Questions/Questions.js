import React, { useState } from "react";
import "./Questions.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
const Questions = () => {
  const [toggleArrow, setToggleArrow] = useState(false);
  const handleClick = (e) => {
    console.log(e.target);
    setToggleArrow((prev) => !prev);
  };
  return (
    <section className="Questions_Container">
      <h1>FREQUENTLY ASKED QUESTIOINS</h1>
      <div className="Questions_underline"></div>
      <p className="Questions_desc">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <ul className="Questions_Container_List" onClick={handleClick}>
        <li>
          <div className="Question_Details">
            {toggleArrow ? (
              <IoIosArrowUp className="Question_down_arrow" />
            ) : (
              <IoIosArrowDown className="Question_down_arrow" />
            )}
            <p> Non consectetur a erat nam at lectus urna duis?</p>
          </div>
          {/* <IoIosArrowUp /> */}
          {toggleArrow && (
            <p className="Question_desc">
              Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
              volutpat lacus laoreet non curabitur gravida. Venenatis lectus
              magna fringilla urna porttitor rhoncus dolor purus non.
            </p>
          )}
        </li>

        <li>
          <div className="Question_Details">
            <IoIosArrowDown className="Question_down_arrow" />
            <p>
              Feugiat scelerisque varius morbi enim nunc faucibus a
              pellentesque?
            </p>
          </div>
          {toggleArrow && (
            <p>
              Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
              volutpat lacus laoreet non curabitur gravida. Venenatis lectus
              magna fringilla urna porttitor rhoncus dolor purus non.
            </p>
          )}
          {/* <IoIosArrowUp /> */}
        </li>
        <li>
          <div className="Question_Details">
            <IoIosArrowDown className="Question_down_arrow" />
            <p>
              Dolor sit amet consectetur adipiscing elit pellentesque habitant
              morbi?
            </p>
          </div>
          {toggleArrow && (
            <p>
              Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
              volutpat lacus laoreet non curabitur gravida. Venenatis lectus
              magna fringilla urna porttitor rhoncus dolor purus non.
            </p>
          )}
          {/* <IoIosArrowUp /> */}
        </li>
        <li>
          <div className="Question_Details">
            <IoIosArrowDown className="Question_down_arrow" />
            <p> Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</p>
          </div>
          {/* <IoIosArrowUp /> */}
          {toggleArrow && (
            <p>
              Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
              volutpat lacus laoreet non curabitur gravida. Venenatis lectus
              magna fringilla urna porttitor rhoncus dolor purus non.
            </p>
          )}
        </li>
        <li>
          <div className="Question_Details">
            <IoIosArrowDown className="Question_down_arrow" />
            <p>
              Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
            </p>
          </div>
          {/* <IoIosArrowUp /> */}
          {toggleArrow && (
            <p>
              Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
              volutpat lacus laoreet non curabitur gravida. Venenatis lectus
              magna fringilla urna porttitor rhoncus dolor purus non.
            </p>
          )}
        </li>
        <li>
          <div className="Question_Details">
            <IoIosArrowDown className="Question_down_arrow" />
            <p>
              Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis
              nunc eget lorem dolor?
            </p>
          </div>
          {/* <IoIosArrowUp /> */}
          {toggleArrow && (
            <p>
              Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
              volutpat lacus laoreet non curabitur gravida. Venenatis lectus
              magna fringilla urna porttitor rhoncus dolor purus non.
            </p>
          )}
        </li>
      </ul>
    </section>
  );
};

export default Questions;
