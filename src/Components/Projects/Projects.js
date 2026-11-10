import React from "react";
import "./Projects.scss";
import { motion } from "framer-motion";

function Projects() {


  // transition
  const transition1 = {
    duration: .6,
    type: "linear",
  };

  const transition2 = {
    // delay: .1,
    duration: .8,
    type: "tween",
  };


  return (
    <>
      <section id="projects" className="projects Projects">
        <div className="projectwrap">
          <motion.h1 className="secHead"
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={transition1}
          >&#60;Latest Projects&#62;</motion.h1>
          <ul className="projectsList clearfix" id="projectsList">
            <li >
              <motion.article 
              className="projList"
              initial={{ y: 200 }}
              whileInView={{ y: 0}}
              transition={transition2}
              >
                <h1 className="projListName ">My Portfolio Website</h1>
                <h2 className="projListDesc">
                  Portfolio Website made with React. A high-performance, Responsive website that uses ScrollMagic powered animations for enriching user experience.
                  <a href="https://nischaygupta.netlify.app/" target="_blank" rel="noopener noreferrer">
                    Case Study
                  </a>
                </h2>
              </motion.article>
              <motion.div
              initial={{ scaleX: 1 }}
              whileInView={{ scaleX: 0}}
              transition={transition1}
                className="revealer">
                </motion.div>
            </li>
            <li >
              <motion.article 
              className="projList"
              initial={{ y: 200 }}
              whileInView={{ y: 0}}
              transition={transition2}
              >
                <h1 className="projListName ">Real Estate Platform</h1>
                <h2 className="projListDesc">
                  A dynamic real estate platform using the MERN stack, connecting buyers, sellers, and renters seamlessly. 
                  <a href="https://real-estate-spm.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Check Out Now
                  </a>
                </h2>
              </motion.article>
              <motion.div
              initial={{ scaleX: 1 }}
              whileInView={{ scaleX: 0}}
              transition={transition1}
                className="revealer">
                </motion.div>
            </li>
            <li >
              <motion.article 
              className="projList"
              initial={{ y: 200 }}
              whileInView={{ y: 0}}
              transition={transition2}
              >
                <h1 className="projListName ">SCRUM Board</h1>
                <h2 className="projListDesc">
                A Full stack Kanban app made with MERN is a web application that allows users to manage projects using the Kanban methodology. It features a database, API, front-end interface, and back-end functionality. The app includes authentication to ensure user data security.
                  <a href="https://kanban-app-se.netlify.app/" target="_blank" rel="noopener noreferrer">
                    Check Out Now
                  </a>
                </h2>
              </motion.article>
              <motion.div
              initial={{ scaleX: 1 }}
              whileInView={{ scaleX: 0}}
              transition={transition1}
                className="revealer">
                </motion.div>
            </li>
            <li >
            <motion.article 
              className="projList"
              initial={{ y: 200 }}
              whileInView={{ y: 0}}
              transition={transition2}
              >
                <h1 className="projListName ">AASFR</h1>
                <h2 className="projListDesc">
                PROJECT DEFINITION:- We made an Automatic Attendance System via Facial Recognition (AASFR). Our main goal is to make a system where attendance is automatically taken by recognizing their faces.
                  <a
                    href="https://github.com/NickDL29/AASFR-FaceRecognition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repo
                  </a>
                </h2>
              </motion.article>
              <motion.div
              initial={{ scaleX: 1 }}
              whileInView={{ scaleX: 0}}
              transition={transition1}
                className="revealer">
                </motion.div>
            </li>
            <li >
              <motion.article 
              className="projList"
              initial={{ y: 200 }}
              whileInView={{ y: 0}}
              transition={transition2}
              >
                <h1 className="projListName ">Bit-Start</h1>
                <h2 className="projListDesc">
                  Bit-Start is a blockchain version of a crowd funding app called KickStarter. It is a decentralized application.
                  <a href="https://nickdl29.github.io/nick-portfolio/" target="_blank" rel="noopener noreferrer">
                    Coming Soon
                  </a>
                </h2>
              </motion.article>
              <motion.div
              initial={{ scaleX: 1 }}
              whileInView={{ scaleX: 0}}
              transition={transition1}
                className="revealer">
                </motion.div>
            </li>
            <li >
            <motion.article 
              className="projList"
              initial={{ y: 200 }}
              whileInView={{ y: 0}}
              transition={transition2}
              >
                <h1 className="projListName ">Restaurant Landing Page</h1>
                <h2 className="projListDesc">
                  I designed a creative landing page for a Restaurant. The client was very satisfied with the responsive and interactive design.
                  <a
                    href="https://nickdl29.github.io/nick-portfolio/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </a>
                </h2>
              </motion.article>
              <motion.div
              initial={{ scaleX: 1 }}
              whileInView={{ scaleX: 0}}
              transition={transition1}
                className="revealer">
                </motion.div>
            </li>
          </ul>
          {/* <div className="secEnd" data-text="Latest Projects"></div> */}
          <motion.h1 className="secEnd"
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={transition1}
          >&#60;/Latest Projects&#62;</motion.h1>
        </div>
      </section>
    </>
  );
}

export default Projects;
