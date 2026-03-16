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
      <svg viewBox="0 0 800 420" className="w-full h-auto">
        <defs>
          <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#0EA5E9" stopOpacity="1" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#0891B2" />
          </linearGradient>
          <linearGradient id="personGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#67E8F9" />
            <stop offset="100%" stopColor="#0891B2" />
          </linearGradient>
          <linearGradient id="personGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A5F3FC" />
            <stop offset="100%" stopColor="#0E7490" />
          </linearGradient>
          <linearGradient id="bankGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0E7490" />
          </linearGradient>
          <linearGradient id="coinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <linearGradient id="glowGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0891B2" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-strong">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="shadow">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#0891B2" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Background glow orbs */}
        <circle cx="400" cy="200" r="160" fill="url(#glowGrad)" opacity="0.15" />
        <circle cx="120" cy="200" r="100" fill="#0EA5E9" opacity="0.05" />
        <circle cx="680" cy="200" r="100" fill="#0EA5E9" opacity="0.05" />

        <ConnectionPaths />

        <motion.g
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <PeopleGroup />
        </motion.g>

        <motion.g
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "backOut" }}
        >
          <CompanyBridge />
        </motion.g>

        <motion.g
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
        >
          <LenderGroup />
        </motion.g>

        <FlowingIcons />
      </svg>
    </div>
  );
}
