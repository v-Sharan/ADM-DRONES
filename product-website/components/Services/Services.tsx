"use client";

import React, { useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import {
  motion,
  AnimationControls,
  TargetAndTransition,
  VariantLabels,
} from "framer-motion";

import { AppWrap, MotionWrap } from "@/Wrapper";
// import { urlFor, client } from "../../client";
import "./Services.scss";
// import { images } from "../../constants";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [animateCard, setAnimateCard] = useState<
    | boolean
    | AnimationControls
    | TargetAndTransition
    | VariantLabels
    | undefined
  >({
    y: 0,
    opacity: 1,
  });

  return (
    <>
      <h2 className="head-text">
        Our Services At<span> AMD Drones</span> on Action
      </h2>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {/* {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              {work.tags[0] == "Image" ? (
                <img src={work.imgUrl} alt={work.name} />
              ) : (
                <video src={work.imgUrl} autoPlay />
                // <div />
              )}

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              ></motion.div> *
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))} */}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "services",
  "app__primarybg"
);
