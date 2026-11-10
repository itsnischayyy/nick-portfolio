import * as React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";



export default function Navbar(props) {
  
  return (
    <>
      <nav
        className={`navbar-expand-lg navbar navbar-${props.mode} nick-navbar`} // removed sticky-top   
        id="navbar"
      >
        <div className="container-fluid">
          <div className="nav-header">
            <a
              className="navbar-brand"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noreferrer"
            >
              Nischay Gupta
            </a>
          </div>
          <div className="navbar container-fluid">
            <ul className="navbar-nav justify-content-center container nick-nav">
              <li className="nav-item me-2">
                <NavLink className="nav-link " activeClassName="active_link" aria-current="page" to="/">
                  <span className="nick_link">&#47;&#47;Home<sup>01</sup></span>
                </NavLink>
              </li>
              <li className="nav-item me-2">
                <NavLink className="nav-link nick_link" activeClassName="active_link" aria-current="page" to="/About">
                  &#47;&#47;About<sup>02</sup>
                </NavLink>
              </li>
              <li className="nav-item me-2">
                <NavLink className="nav-link nick_link" activeClassName="active_link" aria-current="page" to="Expertise">
                  &#47;&#47;Expertise<sup>03</sup>
                </NavLink>
              </li>
              <li className="nav-item me-2">
                <NavLink className="nav-link nick_link" activeClassName="active_link" aria-current="page" to="Projects">
                  &#47;&#47;Projects<sup>04</sup>
                </NavLink>
              </li>
              <li className="nav-item me-2">
                <NavLink className="nav-link nick_link" activeClassName="active_link" aria-current="page" to="Contact">
                  &#47;&#47;Contact<sup>05</sup>
                </NavLink>
              </li>
            </ul>
          </div>
          <ul className="nav-socials justify-content-right">
            <li>
              <a
                href="https://github.com/NickDL29"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/nickdl42/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nischay29/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin-square"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li onClick={props.toggleMode}>
              <i class={`${props.icon} moon_color fa-lg`}></i>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

// let theEnd = 0,
//     navbar = document.getElementById('navbar');

// window.addEventListener('scroll', function(){
//   var scrollTop = window.scrollY || this.document.getElement.scrollTop;
//   if(scrollTop > theEnd){
//     navbar.style.top = '-100px';
//   }
//   else{
//     navbar.style.top = '0';
//   }
//   theEnd = scrollTop
// })

// const body = document.body;
// let lastScroll = 0;

// window.addEventListener("scroll", () => {
// 	const currentScroll = window.pageYOffset;
// 	if (currentScroll <= 0) {
// 		body.classList.remove("scroll-up");
// 		return;
// 	}

// 	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
// 		body.classList.remove("scroll-up");
// 		body.classList.add("scroll-down");
// 	} else if (
// 		currentScroll < lastScroll &&
// 		body.classList.contains("scroll-down")
// 	) {
// 		body.classList.remove("scroll-down");
// 		body.classList.add("scroll-up");
// 	}
// 	lastScroll = currentScroll;
// });
