import React, { useRef, useEffect, useState } from "react";
// import emailjs from '@emailjs/browser';
import "./Contact.scss";
import call from "../../assets/call.gif";
import message from "../../assets/message.gif";
import pin from "../../assets/pin.gif";
import github from "../../assets/github.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import monke4 from "../../assets/monke4.svg";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useForm, ValidationError } from "@formspree/react";
import Thankyou from "../Thankyou/Thankyou";

function Contact() {
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

  const [state, handleSubmit] = useForm("xjvdkqqr");
  if (state.succeeded) {
    return <Thankyou/> ;
  }

  return (
    <>
      {/* <div className="maincontainer">
        <div className="contactcontainer">
          <div className="contactinfo">
            <div>

            </div>
            <h1>
              Contact Me
            </h1>
          </div>
        </div>
      </div> */}
      <section id="Contact">
        <div className="contact-main-container">
          <div className="contactcontainer">
            <div className="contactinfo contact-obj" data-value="-2">
              <div>
                <h2>Contact Info</h2>
                <ul className="info">
                  <li>
                    <span>
                      <img src={pin} type="" alt="" />
                      {/* <img src="https://lh3.googleusercontent.com/drive-viewer/AJc5JmTHc43V8nqsBfWHgkt1UCEd72YLfu8Q1_2wxW7ObgUWpRlgaXETTBeej00vLcentAZJq6wkZ4I=w3840-h1847" alt="" /> */}
                    </span>
                    <span>INDIA</span>
                  </li>
                  <li>
                    <span>
                      <img src={message} alt="" />
                      {/* <img src="https://lh3.googleusercontent.com/drive-viewer/AJc5JmSkXILtY2xKpa0Zdr5LmenwK0U1P1qvnk7kMjBIiOZDyIVa3K29_Lz7wLc4LNcurX0KxL_0J1w=w3840-h1847" alt="" /> */}
                    </span>
                    <span>
                      <a href="mailto:nischaygupta299@gmail.com">
                        nischaygupta299@gmail.com
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <img src={call} alt="" />
                      {/* <img src="https://lh3.googleusercontent.com/drive-viewer/AJc5JmSz10W_rnFE0d_RXaGJV6tacgT09yb9NVC5dC64EbaohPz2KyW30a16mFk4bXk_ySFzH3iDMh8=w3840-h1847" alt="" /> */}
                    </span>
                    <span>+91-9624111593</span>
                  </li>
                </ul>
              </div>
              <ul className="sci">
                <li>
                  <a
                    href="https://github.com/NickDL29"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={github} alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/nickdl42/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={insta} alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/nischay29/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    <img src={twitter} alt="" />
                  </a>
                </li>
              </ul>
            </div>

            <form
              className="contactForm contact-obj"
              id="contactMeForm"
              data-value="2"
              onSubmit={handleSubmit}
            >
              <h2>Send A Message</h2>
              <div className="formBox">
                <div className="inputBox w50">
                  <input type="text" name="name" required />
                  <span>First Name</span>
                </div>
                <div className="inputBox w50">
                  <input type="text" name="last_name" required />
                  <span>Last Name</span>
                </div>
                <div className="inputBox w50">
                  <input id="email" type="email" name="email" required />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                  <span>Email</span>
                </div>
                <div className="inputBox w50">
                  <input type="text" name="number" required/>
                  <span>Number</span>
                </div>
                <div className="inputBox w100">
                  <textarea id="message" name="message" required></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                  <span>Type Here</span>
                </div>
                <div className="sendfield">
                  <div className="inputBox w50" id="submit">
                    <input type="submit" disabled={state.submitting} value="Send" />
                  </div>
                  <div className="monke4container">
                    <motion.div
                      initial={{ x: -50 }}
                      whileInView={{ x: 0 }}
                      transition={transition1}
                    >
                      <img
                        src={monke4}
                        className="monke4"
                        data-value="4"
                        alt=""
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

document.addEventListener("mousemove", parallax);
function parallax(e) {
  document.querySelectorAll(".contact-obj").forEach(function (move) {
    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 250;
    var y = (e.clientY * moving_value) / 250;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}
