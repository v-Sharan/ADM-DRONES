"use client";

import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "motion/react";
import Image from "next/image";

import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="/#">
          <Image src={"/next.svg"} width={50} height={30} alt="logo" />
        </a>
        <p className="head-text">ADM Drones</p>
      </div>
      <ul className="app__navbar-links">
        {["home", "products", "services", "about", "contact"].map((item) => (
          <li className="app__flex " key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "products", "services", "about", "contact"].map(
                (item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
