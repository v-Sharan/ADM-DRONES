"use client";

import { motion, HTMLMotionProps } from "motion/react";
import React from "react";

const Motion = ({
  children,
  ...props
}: HTMLMotionProps<"div"> & { children: React.ReactNode }) => {
  return <motion.div {...props}>{children}</motion.div>;
};

export default Motion;
