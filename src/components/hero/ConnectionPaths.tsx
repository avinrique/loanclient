"use client";

import { motion } from "framer-motion";

const pathVariant = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.5, delay: 1, ease: "easeInOut" as const },
  },
};

export default function ConnectionPaths() {
  return (
    <g>
      {/* Glow path behind (thicker, blurred) */}
      <motion.path
        d="M175 170 C260 170 290 175 360 170"
        fill="none"
        stroke="#0EA5E9"
        strokeWidth="6"
        opacity="0.15"
        variants={pathVariant}
        initial="hidden"
        animate="visible"
        filter="url(#glow)"
      />
      <motion.path
        d="M440 170 C510 165 540 170 645 165"
        fill="none"
        stroke="#0EA5E9"
        strokeWidth="6"
        opacity="0.15"
        variants={pathVariant}
        initial="hidden"
        animate="visible"
        filter="url(#glow)"
      />

      {/* Main dotted paths */}
      <motion.path
        d="M175 170 C260 170 290 175 360 170"
        fill="none"
        stroke="url(#pathGrad)"
        strokeWidth="2.5"
        strokeDasharray="8 4"
        variants={pathVariant}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        d="M440 170 C510 165 540 170 645 165"
        fill="none"
        stroke="url(#pathGrad)"
        strokeWidth="2.5"
        strokeDasharray="8 4"
        variants={pathVariant}
        initial="hidden"
        animate="visible"
      />

      {/* Arrow tips */}
      <motion.polygon
        points="355,164 365,170 355,176"
        fill="#22D3EE"
        variants={pathVariant}
        initial="hidden"
        animate="visible"
      />
      <motion.polygon
        points="640,159 650,165 640,171"
        fill="#22D3EE"
        variants={pathVariant}
        initial="hidden"
        animate="visible"
      />
    </g>
  );
}
