import React from "react";
import "./Expertise.scss";
import { motion } from "framer-motion";
import DummyCode from '../../assets/DummyCode.png';

function Expertise() {

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
    duration: 0.4,
    type: "tween",
  };
  const transition3 = {
    duration: 0.4,
    type: "tween",
    delay: 0.1,
  };
  const transition4 = {
    duration: 0.4,
    type: "tween",
    delay: 0.2,
  };

  return (
    // <div className="exp_body">
    //   {/* <div>Hello World</div> */}
    //   {/* <div className="exp_wrapper">
    //     <div className="exp_title">My Expertise</div>
    //     <div className="exp_info">
    //         <div className="exp_blocks">
    //             <div className="fullstack_dev exp_block">
    //                 <div className="block_title">
    //                     <div className="title_txt">
    //                     Full Stack Dev
    //                     </div>
    //                 </div>
    //                 <div className="block_info">
    //                     <div className="block_txt">Passionate about UI/UX. Over 4 years of development experience in HTML, CSS, JS, React and NextJS frameworks.</div>
    //                 </div>
    //             </div>
    //             <div className="soft_dev exp_block">
    //             <div className="block_title">
    //             <div className="title_txt">
    //                     Software Dev
    //                     </div>
    //             </div>
    //                 <div className="block_info">
    //                     <div className="block_txt">Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript. Lorem ipsum dolor sit amet consectetur</div>
    //                 </div>
    //             </div>
    //             <div className="graphic_designer exp_block">
    //             <div className="block_title">
    //             <div className="title_txt">
    //                     Graphic Designer
    //                     </div>
    //             </div>
    //                 <div className="block_info">
    //                     <div className="block_txt">Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.</div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     <div className="exp_dummy_code"></div>
    //   </div> */}
    //   <motion.h1 class="text-center text-light pt-5"
    //   initial={{ y: 50 }}
    //   whileInView={{ y: 0 }}
    //   transition={transition}
    //   >
    //     My Expertise</motion.h1>
    //   <div class="card_grp pt-4">
    //     <motion.div
    //       class="card"
    //       initial={{ y: 50 }}
    //       whileInView={{ y: 0 }}
    //       transition={transition}
    //     >
    //       {/* <img src="..." class="card-img-top" alt="..."/> */}
    //       <div class="card-body">
    //         <h2 class="card-title d-flex justify-content-center p-4 flex-column">
    //           <div className="border-5 border-bottom border-danger">Full Stack</div> Web Developer
    //         </h2>
    //         <p class="card-text p-4">
    //           Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //           Laboriosam, quae.
    //         </p>
    //         {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
    //       </div>
    //     </motion.div>
    //     <motion.div
    //       class="card"
    //       initial={{ y: 50 }}
    //       whileInView={{ y: 0 }}
    //       transition={transition1}
    //     >
    //       {/* <img src="..." class="card-img-top" alt="..."/> */}
    //       <div class="card-body">
    //         <h2 class="card-title d-flex justify-content-center p-4 flex-column">
    //         <div className="border-5 border-bottom border-primary">Software Dev</div> Engg.
    //         </h2>
    //         <p class="card-text p-4">
    //           Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //           Laboriosam, quae.
    //         </p>
    //         {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
    //       </div>
    //     </motion.div>
    //     <motion.div
    //       class="card"
    //       initial={{ y: 50 }}
    //       whileInView={{ y: 0 }}
    //       transition={transition2}
    //     >
    //       {/* <img src="..." class="card-img-top" alt="..."/> */}
    //       <div class="card-body">
    //         <h2 class="card-title d-flex justify-content-center p-4 flex-column">
    //         <div className="border-5 border-bottom border-success pe-0">Graphic</div> Designer
    //         </h2>
    //         <p class="card-text p-4">
    //           Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //           Laboriosam, quae.
    //         </p>
    //         {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
    //       </div>
    //     </motion.div>
    //   </div>
    // </div>
    <>
    <div className="exp-about-container active">
                    {/* <motion.div className="exp_title"
                    initial={{ x: 50 }}
                    whileInView={{ x: 0 }}
                    transition={transition1}
                    >My Expertise</motion.div> */}

                    <motion.div className="main-title exp_title"
                    initial={{ x: 50 }}
                    whileInView={{ x: 0 }}
                    transition={transition1}
                    >
                    <h2><span className="text-white abt_heading">Expertise</span> <span className="bg-text">my <br/> skills</span></h2>
                    </motion.div>

                    <div className="right-about">

                    <motion.div className="about-item"
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    transition={transition2}
                    >
                        <div className="abt-text">
                          <div className="fswd_brand">
                            <p className="large-text large-text1">Full Stack Developer</p>
                          </div>
                            <p className="small-text">MERN/MEAN <br /> Passionate about UI/UX. Over 1 year of development experience in HTML, CSS, JS & React frameworks.</p>
                        </div>
                    </motion.div>
                    <motion.div className="about-item"
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    transition={transition3}
                    >
                        <div className="abt-text">
                        <div className="fswd_brand">
                            <p className="large-text large-text2">Software Dev Engg.</p>
                          </div>
                            
                            <p className="small-text">SDE<br /> Experienced in both functional and OOP: C, Java, JavaScript, Python, TypeScript.</p>
                        </div>
                    </motion.div>
                    <motion.div className="about-item"
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    transition={transition4}
                    >
                        <div className="abt-text">
                        <div className="fswd_brand">
                            {/* <i class="fa-solid fa-palette"></i> */}
                            <p className="large-text large-text3">Graphic<br/> Designer<br/></p>
                          </div>
                            
                            <p className="small-text">skilled <br /> in creating highly complex designs and experienced in working with various Graphic designing softwares.</p>
                        </div>
                    </motion.div>
                    {/* <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">400+</p>
                            <p className="small-text">Customer <br /> reviews</p>
                        </div>
                    </div> */}
    </div>
    <img className="dummy-code" src={DummyCode} alt=""/>
    </div>
    </>
  );
}

export default Expertise;
