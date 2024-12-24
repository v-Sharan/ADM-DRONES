"use client";

import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "motion/react";
import Image from "next/image";

import "./Navbar.scss";
import Link from "next/link";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link href="/#">
          <Image src={"/assets/Logo.png"} width={50} height={30} alt="logo" />
        </Link>
        <p className="head-text">ADM Drones</p>
      </div>
      <ul className="app__navbar-links">
        {["home", "products", "services", "about", "contact"].map((item) => (
          <li className="app__flex " key={`link-${item}`}>
            <div />
            <Link href={`/#${item}`}>{item}</Link>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "products", "services", "about", "contact"].map(
                (item) => (
                  <li key={item}>
                    <Link href={`/#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </Link>
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
