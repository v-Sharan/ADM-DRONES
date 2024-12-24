import React from "react";
import { Motion } from "@/components";

import { AppWrap, MotionWrap } from "@/Wrapper";
import { client, urlFor } from "@/client";
import { AboutQuery } from "@/actions/query";
import { About as AboutTypes } from "@/types/SanityResults";
import "./About.scss";

const About = async () => {
  const abouts = await client.fetch<AboutTypes[]>(AboutQuery);

  return (
    <>
      <h2 className="head-text">
        At <span>ADM Drones</span>, we specialize in designing and manufacturing
        <span>state-of-the-art</span> drones and <span>high-performance</span>{" "}
        drone frames that combine <span>innovation</span>,{" "}
        <span>durability</span>, and <span>precision</span>. Our mission is to
        provide groundbreaking solutions for <span>industries</span> and{" "}
        <span>individuals</span>, redefining the possibilities of aerial
        technology.
      </h2>

      <div className="app__profiles">
        {abouts.map((about) => (
          <Motion
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about._id}
          >
            <img src={urlFor(about.imgUrl).url()} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </Motion>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
