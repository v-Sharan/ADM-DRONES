"use client";

import { AppWrap } from "@/Wrapper";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Header.scss";
import { motion } from "motion/react";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    // <Carousel
    //   autoPlay
    //   infiniteLoop
    //   swipeable
    //   emulateTouch={false}
    //   showThumbs={false}
    //   showArrows={false}
    //   showStatus={false}
    //   dynamicHeight={true}
    //   className="app__header"
    // >
    //   <div>
    //     <img src="/assets/bg.png" alt="1.png" />
    //     <p className="legend__header">Hello</p>
    //   </div>
    //   <div>
    //     <img src="/assets/bg.png" alt="2.png" />
    //   </div>
    //   <div>
    //     <img src="/assets/bg.png" alt="3.png" />
    //   </div>
    // </Carousel>
    <div />
  );
};

export default AppWrap(Header, "home", "");
// export default Header;
