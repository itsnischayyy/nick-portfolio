import React from "react";
// import "./Hero.scss";
import { motion } from "framer-motion";
// import mainsetup from "../../assets/mainsetup.png";
// import mainsetup2 from "../../assets/mainsetup2.png";
// import chair from "../../assets/chair.png";
// import monitor from "../../assets/monitor.png";
// import monke1 from "../../assets/monke1.svg";
import main_back from "../../assets/main_back.png";
import chair_back from "../../assets/chair_back.png";
import man_back from "../../assets/man_back.png";
import main_light_back from "../../assets/main_light_back.png";
import chair_light_back from "../../assets/chair_light_back.png";
import man_light_back from "../../assets/man_light_back.png";
import PropTypes from 'prop-types'



const Hero2_0 = (props) => {
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
    <div className={`setupcontainer ${props.mode} mob`}>
      <div className="hero_container">
        {/* <img src={mainsetup} className="setup-obj" data-value="-1" alt=""/>
<img src={monitor} className="setup-obj" data-value="-2" alt=""/>
<img src={mainsetup2} className="setup-obj" data-value="1" alt=""/>
<img src={chair} className="setup-obj" data-value="4" alt=""/> */}
        {/* Dark Mode Objects */}
        <img src={main_back} id="main_back" className={`setup-obj set_2 ${props.show2}`} data-value="-1" alt="" />
        <img src={man_back} id="man_back" className={`setup-obj set_2 ${props.show2}`} data-value="-2" alt="" />
        <img src={chair_back} id="chair_back" className={`setup-obj set_2 ${props.show2}`} data-value="2" alt="" />

        {/* Light Mode Objects */}
        <img src={main_light_back} id="main_back" className={`setup-obj set_2 ${props.show}`} data-value="-1" alt="" />
        <img src={man_light_back} id="man_back" className={`setup-obj set_2 ${props.show}`} data-value="-2" alt="" />
        <img src={chair_light_back} id="chair_back" className={`setup-obj set_2 ${props.show}`} data-value="2" alt="" />
      </div>
      
      <div className="indicatorcover">
      <div class="indicator">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      </div>
  </div>
  </>
  );
};

export default Hero2_0;

document.addEventListener("mousemove", parallax);
function parallax(e) {
  document.querySelectorAll(".setup-obj").forEach(function (move) {
    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 250;
    var y = (e.clientY * moving_value) / 250;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}

// var main_back_2 = document.getElementById('main_back')
// var man_back_2 = document.getElementById('man_back')
// var chair_back_2 = document.getElementById('chair_back')

// document.addEventListener("scroll", parallax2)

// function parallax2(e){
//     var value = e.clientY;
//     main_back_2.style.left = value *2 + 'px';
// }

// const text = document.querySelector(".sec-text");

//     const textLoad = () => {
//         setTimeout(() => {
//             text.textContent = "Freelancer";
//         }, 0);
//         setTimeout(() => {
//             text.textContent = "Blogger";
//         }, 4000);
//         setTimeout(() => {
//             text.textContent = "YouTuber";
//         }, 8000); //1s = 1000 milliseconds
//     }

//     textLoad();
//     setInterval(textLoad, 12000);
