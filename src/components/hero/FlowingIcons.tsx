"use client";

import { motion } from "framer-motion";

function FlowingDot({
  path,
  delay,
  color,
}: {
  path: string;
  delay: number;
  color: string;
}) {
  return (
    <motion.circle
      r="5"
      fill={color}
      filter="url(#glow)"
      initial={{ offsetDistance: "0%" }}
      animate={{ offsetDistance: "100%" }}
      transition={{
        duration: 3,
        delay: delay + 2,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <animateMotion
        dur="3s"
        begin={`${delay + 2}s`}
        repeatCount="indefinite"
        path={path}
      />
    </motion.circle>
  );
}

export default function FlowingIcons() {
  const leftPath = "M170 160 C260 160 280 170 360 165";
  const rightPath = "M440 165 C520 160 540 160 640 155";

  return (
    <g>
      {/* Left flowing dots */}
      <FlowingDot path={leftPath} delay={0} color="#0EA5E9" />
      <FlowingDot path={leftPath} delay={1} color="#22D3EE" />
      <FlowingDot path={leftPath} delay={2} color="#0891B2" />

      {/* Right flowing dots */}
      <FlowingDot path={rightPath} delay={0.5} color="#0EA5E9" />
      <FlowingDot path={rightPath} delay={1.5} color="#22D3EE" />
      <FlowingDot path={rightPath} delay={2.5} color="#0891B2" />

      {/* Small doc/coin icons flowing along left path */}
      <g>
        <animateMotion
          dur="4s"
          begin="2.5s"
          repeatCount="indefinite"
          path={leftPath}
        />
        <rect x="-6" y="-8" width="12" height="16" rx="2" fill="#0891B2" opacity="0.7" />
        <line x1="-3" y1="-3" x2="3" y2="-3" stroke="white" strokeWidth="1" />
        <line x1="-3" y1="0" x2="3" y2="0" stroke="white" strokeWidth="1" />
        <line x1="-3" y1="3" x2="2" y2="3" stroke="white" strokeWidth="1" />
      </g>

      {/* Coin icon flowing along right path */}
      <g>
        <animateMotion
          dur="4s"
          begin="3s"
          repeatCount="indefinite"
          path={rightPath}
        />
        <circle r="8" fill="#0EA5E9" opacity="0.8" />
        <text y="4" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
          $
        </text>
      </g>
    </g>
  );
}
