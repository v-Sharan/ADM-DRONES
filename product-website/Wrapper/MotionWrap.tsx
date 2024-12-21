import React from "react";
import Motion from "../components/Motion";

const MotionWrap = (Component: React.FC, classNames: string | undefined) =>
  function HOC() {
    return (
      <Motion
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className={`${classNames} app__flex`}
      >
        <Component />
      </Motion>
    );
  };

export default MotionWrap;
