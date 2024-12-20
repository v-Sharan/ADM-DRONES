"use client";

import React from "react";
import { AppWrap } from "@/Wrapper";
import { motion } from "framer-motion";
import "./Header.scss";
import Image from "next/image";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return <div />;
  // <div className="app__header app__flex">
  //   {/* <motion.div
  //     variants={scaleVariants}
  //     whileInView={scaleVariants.whileInView}
  //     className="app__header--circles"
  //   >
  //     {["/assets/amazon.png", "/assets/api.png"].map((circle, index) => (
  //       <div className="circle-cmp app__flex" key={`circle-${index}`}>
  //         <Image
  //           src={circle}
  //           alt="profile_bg"
  //           width={60}
  //           height={60}
  //           style={{ borderRadius: 10 }}
  //         />
  //       </div>
  //     ))}
  //   </motion.div> */}

  //   <motion.div
  //     whileInView={{ opacity: [0, 1] }}
  //     transition={{ duration: 0.5, delayChildren: 0.5 }}
  //     className="app__header-img"
  //   >
  //     <motion.div
  //       whileInView={{ x: [-100, 0], opacity: [0, 1] }}
  //       transition={{ duration: 0.5 }}
  //       className="app__header-ani"
  //     >
  //       <div className="app__header-badge">
  //         <div className="tag-cmp app__flex">
  //           <p className="p-text">Software Development</p>
  //         </div>
  //         <div className="tag-cmp app__flex">
  //           <p className="p-text">Drone Light Show</p>
  //         </div>
  //         <div className="tag-cmp app__flex">
  //           <p className="p-text">Swarm Automation</p>
  //         </div>
  //         <div className="tag-cmp app__flex">
  //           <p className="p-text">Artificial intelligence</p>
  //         </div>
  //         <div className="tag-cmp app__flex">
  //           <p className="p-text">Application Development</p>
  //         </div>
  //       </div>
  //     </motion.div>
  //   </motion.div>
  // </div>
};

export default AppWrap(Header, "home", "");
