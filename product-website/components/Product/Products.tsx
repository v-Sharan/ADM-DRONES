"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AppWrap, MotionWrap } from "@/Wrapper";
// import { urlFor, client } from "../../client";
import "./Products.scss";

const Products = () => {
  const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //     const query = '*[_type == "works"]';

  //     client.fetch(query).then((data) => {
  //       setWorks(data);
  //     });
  //   }, []);

  return (
    <>
      <h2 className="head-text">
        Our Work <span>And</span> Our Pride
      </h2>
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delayChildren: 0.6 }}
        className="app__work-portfolio"
      >
        {products.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <Image src={"/api.png"} width={60} height={60} alt={"Work img"} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              ></motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">Title</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                Discription
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Products, "app__works"),
  "products",
  "app__primarybg"
);
