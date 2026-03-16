"use client";

import { motion } from "framer-motion";

const pathVariant = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.2, delay: 1, ease: "easeInOut" as const },
  },
};

export default function ConnectionPaths() {
  return (
    <g>
      {/* Left path: People → Company */}
      <motion.path
        d="M170 160 C260 160 280 170 360 165"
        fill="none"
        stroke="url(#pathGrad)"
        strokeWidth="2.5"
        strokeDasharray="8 4"
        variants={pathVariant}
        initial="hidden"
        animate="visible"
      />
      {/* Right path: Company → Lenders */}
      <motion.path
        d="M440 165 C520 160 540 160 640 155"
        fill="none"
        stroke="url(#pathGrad)"
        strokeWidth="2.5"
        strokeDasharray="8 4"
        variants={pathVariant}
        initial="hidden"
        animate="visible"
      />
    </g>
  );
}
