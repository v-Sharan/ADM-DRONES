"use client";

import { AppWrap } from "@/Wrapper";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Header.scss";

const Header = () => {
  return (
    <div />
    // <Carousel autoPlay infiniteLoop swipeable emulateTouch showThumbs={false}>
    //   <div>
    //     <img src="/assets/1.png" />
    //     <p className="legend">Legend 1</p>
    //   </div>
    //   <div>
    //     <img src="https://cdn.sanity.io/files/ilakyt62/production/9b7e315f5216692aa98acc08fb67b12d18f12def.png" />
    //     {/* <p className="legend">Legend 2</p> */}
    //   </div>
    //   <div>
    //     <img src="assets/3.jpeg" />
    //     {/* <p className="legend">Legend 3</p> */}
    //   </div>
    // </Carousel>
  );
};

export default AppWrap(Header, "home", "");
