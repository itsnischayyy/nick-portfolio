import React from "react";
import "./About.scss";
import { motion } from "framer-motion";

function About() {


  // transition
  const transition = {
    duration: 1,
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
<section className="about-main-container about active" id="About">
            <motion.div className="main-title"
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            transition={transition1}
            >
                <h2><span className="text-white abt_heading">About</span> <span className="abt_heading">me</span><span className="bg-text">my <br/> stats</span></h2>
            </motion.div>
            <div className="about-container">
                <div className="left-about">
                    <motion.h4 className="left-about-title"
                    initial={{ x: -50 }}
                    whileInView={{ x: 0 }}
                    transition={transition2}
                    > Heyyy There, I'm <span>Nischay Gupta</span>.</motion.h4>
                    <motion.p className="about-para1"
                    initial={{ x: 50 }}
                    whileInView={{ x: 0 }}
                    transition={transition3}
                    >   
                        Currently pursuing majors in Information Technology from
                        Sarvajanik College of Engineering and Technology(SCET) 3rd Year with a CPI of 8.2.<br/><br/>

                        A Highly motivated and experienced software engineer with a passion for developing innovative solutions to complex problems. Experienced in developing software applications for a variety of platforms, including web, mobile, and desktop. Skilled in object-oriented programming, database design, and software development life cycle.<br/><br/>
                        
                        I'm fun to work around. I'm also productive and compassionate and skilled in working under pressure.

                    </motion.p>
                    {/* <p className="about-para2">
                        With an interest in web Development i started learning all about it from various courses.
                    </p> */}
                    <motion.div className="btn-con"
                    initial={{ x: -50 }}
                    whileInView={{ x: 0 }}
                    transition={transition4}
                    >
                        {/* <a href={resume} download="NischayGupta" className="main-btn"> */}
                        <a href="https://drive.google.com/file/d/1YoaA4n0LMbDtKRXQFC2rlugcZEGZ-Bcj/view?usp=sharing" target="_blank" rel="noreferrer" className="main-btn">
                             Curriculum Vitae (PDF)
                            {/* <span className="btn-icon"><i className="fa fa-download"></i></span> */}
                        </a>
                        {/* <motion.span className="download-cv"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1}}
                                transition={transition}
                                >
                                <span className="download-cv"></span>
                                </motion.span> */}

                    </motion.div>
                </div>
                <div className="right-about">
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">50+</p>
                            <p className="small-text">Projects <br /> Completed</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">2+</p>
                            <p className="small-text">Years of <br /> experience</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">30+</p>
                            <p className="small-text">github <br /> repos</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">200+</p>
                            <p className="small-text">competitive <br /> problems solved</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-stats">
                <h4 className="stat-title">My Skills</h4>
                <div className="progress-bars">
                    <div className="progress-bar">
                        <p className="prog-title">html5</p>
                        <div className="progress-con">
                            <div className="progress">
                            <motion.span className="html"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1}}
                                transition={transition}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">css3</p>
                        <div className="progress-con">
                            <div className="progress">
                            <motion.span className="css"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1}}
                                transition={transition}
                                >
                                <span className="css"></span>
                                </motion.span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">javascript</p>
                        <div className="progress-con">
                            <div className="progress">
                            <motion.span className="js"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1}}
                                transition={transition}
                                >
                                <span className="js"></span>
                                </motion.span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">ReactJS</p>
                        <div className="progress-con">
                            <div className="progress">
                            <motion.span className="react"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1}}
                                transition={transition}
                                >
                                <span className="react"></span>
                                </motion.span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">NodeJS</p>
                        <div className="progress-con">
                            <div className="progress">
                            <motion.span className="node"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1}}
                                transition={transition}
                                >
                                <span className="node"></span>
                                </motion.span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Python</p>
                        <div className="progress-con">
                            <div className="progress">
                            <motion.span className="python"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1}}
                                transition={transition}
                                >
                                <span className="python"></span>
                                </motion.span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h4 className="stat-title">My Timeline</h4>
            <div className="timeline">
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}}
                transition={transition}
                >
                <div className="timeline-item">
                    <div className="tl-icon">
                    <i class="fa fa-code"></i>
                    </div>
                    <p className="tl-duration">2022 - present</p>
                    <h5>Web Developer<span> - June 2022</span></h5>
                    <p>
                        Self learned Web Developer.
                    </p>
                </div>
                </motion.div>
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}}
                transition={transition}
                >
                <div className="timeline-item">
                    <div className="tl-icon">
                    <i class="fa fa-graduation-cap"></i>
                    </div>
                    <p className="tl-duration">2020 - Present</p>
                    <h5>Graduation<span> - SCET, Surat</span></h5>
                    <p>
                        B.E in Information Technology From Sarvajanik College of Engineering and Technology.<br/> With current CPI of 8.00.
                    </p>
                </div>
                </motion.div>
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}}
                transition={transition}
                >
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fa fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">2017 - Present</p>
                    <h5>FreeLancer<span> - Surat</span></h5>
                    <p>
                        Graphic Designing, Web Development.
                    </p>
                </div>
                </motion.div>
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}}
                transition={transition}
                >
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i class="fa fa-book"></i>
                    </div>
                    <p className="tl-duration">2018 - 2020</p>
                    <h5>High School<span> - Scholar English Academy</span></h5>
                    <p>
                        Percentage in PCM :- 70%<br/> GUJCET Percentile :- 90%
                    </p>
                </div>
                </motion.div>
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}}
                transition={transition}
                >
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fa fa-crop"></i>
                    </div>
                    <p className="tl-duration">2016 - 2020</p>
                    <h5>Graphic Designer<span> - Surat</span></h5>
                    <p>
                        Have Experience in working with AdobePhotoshop, Illustrator, Corel-Draw
                    </p>
                </div>
                </motion.div>
            </div>
        </section>


    </>
  );
}

export default About;