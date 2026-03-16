"use client";

import { motion } from "framer-motion";
import PeopleGroup from "./PeopleGroup";
import CompanyBridge from "./CompanyBridge";
import LenderGroup from "./LenderGroup";
import ConnectionPaths from "./ConnectionPaths";
import FlowingIcons from "./FlowingIcons";

export default function HeroAnimation() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <svg viewBox="0 0 800 400" className="w-full h-auto">
        <defs>
          <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0891B2" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#0EA5E9" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0891B2" stopOpacity="0.6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <ConnectionPaths />

        <motion.g
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <PeopleGroup />
        </motion.g>

        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <CompanyBridge />
        </motion.g>

        <motion.g
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <LenderGroup />
        </motion.g>

        <FlowingIcons />
      </svg>
    </div>
  );
}
