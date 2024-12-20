"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "@/Wrapper";
// import { urlFor, client } from "../../client";
import "./About.scss";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  //   useEffect(() => {
  //     const query = '*[_type == "abouts"]';

  //     client.fetch(query).then((data) => {
  //       setAbouts(data);
  //     });
  //   }, []);

  return (
    <>
      <h2 className="head-text">
        Text
        {/* Our aim is to revolutionize the skies with cutting-edge solutions that
        redefine possibilities and inspire awe,{" "}
        <span>we craft experiences that elevate imagination</span> <br /> */}
        {/* with <span>Good Knowledge</span> */}
      </h2>

      <div className="app__profiles">
        {/* {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))} */}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
