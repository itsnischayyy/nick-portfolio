import React from "react";
import "./Hero.scss";
import { motion } from "framer-motion";
import monke1 from "../../assets/monke1.svg";
import front_vec from "../../assets/front_vec.png";
import back_vec from "../../assets/back_vec.png";
import man_vec from "../../assets/man_vec.png";
import PropTypes from "prop-types";

const Hero = (props) => {
  const transition = {
    duration: 0.2,
    type: "tween",
  };
  const transition1 = {
    duration: 0.4,
    type: "tween",
  };
  const transition2 = {
    duration: 0.6,
    type: "tween",
  };
  const transition3 = {
    duration: 0.8,
    type: "tween",
  };
  const transition4 = {
    duration: 1,
    type: "tween",
  };

  return (
    <>
      <div className={`maincontainer ${props.mode}`} id="Hero">
        <div className="leftcontainer">
          {/* <div className="monkecontainer">
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={transition1}
        >
        <img src={monke1} className="monke1" data-value="4" alt=""/>
        </motion.div>
        </div> */}
          <div className="textcontainer">
            <motion.div
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              transition={transition1}
            >
              <h1 className="greet" id="greet1">
                Hi..!!
              </h1>
            </motion.div>
            <motion.div
              initial={{ x: 50 }}
              whileInView={{ x: 0 }}
              transition={transition2}
            >
              <h1 className="greet" id="greet2">
                This Is Nick.
              </h1>
            </motion.div>
            <motion.div
              className="static-txt"
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              transition={transition3}
            >
              I'm a
            </motion.div>
            <motion.ul
              className={`dynamic-txts ${props.dytxt}`}
              initial={{ x: 50 }}
              whileInView={{ x: 0 }}
              transition={transition4}
            >
              <li>
                <span>Developer</span>
              </li>
              <li>
                <span>Designer</span>
              </li>
              <li>
                <span>Freelancer</span>
              </li>
              <li>
                <span>Student</span>
              </li>
            </motion.ul>
          </div>
        </div>
        <div className="setupcontainer">
          <div className="container">
            <img src={back_vec} className="setup-obj" data-value="-2" alt="" />
            <img src={man_vec} className="setup-obj" data-value="-1" alt="" />
            <img src={front_vec} className="setup-obj" data-value="1" alt="" />
            {/* <img src={chair} className="setup-obj" data-value="4" alt=""/> */}
          </div>
        </div>
      </div>

      {/* <Triangles/> */}
    </>
  );
};

export default Hero;

document.addEventListener("mousemove", parallax);
function parallax(e) {
  document.querySelectorAll(".setup-obj").forEach(function (move) {
    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 250;
    var y = (e.clientY * moving_value) / 250;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}