import React from 'react'
import "./Footer.scss";
import github from "../../assets/github.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <div>
        <footer>
        <div class="footer-content">
            <div className="footer-inner">
            <h3>Nischay Gupta</h3>
            {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo iste corrupti doloribus odio sed!</p> */}
            <ul class="footer-socials">
                <li><a href="https://github.com/NickDL29" target="_blank" rel="noreferrer"><i class="fa fa-github"></i></a></li>
                <li><a href="https://www.instagram.com/nickdl42/" target="_blank" rel="noreferrer"><i class="fa fa-instagram"></i></a></li>
                <li><a href="https://www.linkedin.com/in/nischay29/" target="_blank" rel="noreferrer"><i class="fa fa-linkedin-square"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                {/* <li><a href="#"><i class="fa fa-youtube"></i></a></li> */}
                {/* <li>
                  <a href="https://github.com/NickDL29" target="_blank" rel="noreferrer">
                    <img src={github} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/nickdl42/" target="_blank" rel="noreferrer">
                    <img src={insta} alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="https:/www.linkedin.com/in/nischay29"
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
                </li> */}
            </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy;2023 All Rights Reserved. Designed by <span>Nischay Gupta</span></p>
        </div>
    </footer>
    </div>
  )
}

export default Footer