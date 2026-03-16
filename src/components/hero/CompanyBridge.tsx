"use client";

export default function CompanyBridge() {
  return (
    <g className="animate-pulse-glow">
      {/* Shield shape */}
      <path
        d="M370 110 L430 110 L440 140 L430 200 L400 220 L370 200 L360 140 Z"
        fill="#0891B2"
        stroke="#0EA5E9"
        strokeWidth="2"
        opacity={0.95}
      />
      {/* Inner accent */}
      <path
        d="M380 130 L420 130 L425 150 L420 190 L400 205 L380 190 L375 150 Z"
        fill="#0EA5E9"
        opacity={0.3}
      />
      {/* LC text */}
      <text
        x="400"
        y="165"
        textAnchor="middle"
        fill="white"
        fontSize="22"
        fontWeight="bold"
      >
        LC
      </text>
      {/* Label */}
      <text
        x="400"
        y="250"
        textAnchor="middle"
        fill="#155E75"
        fontSize="13"
        fontWeight="600"
      >
        LoanConnect
      </text>
      {/* Subtitle */}
      <text
        x="400"
        y="268"
        textAnchor="middle"
        fill="#64748B"
        fontSize="11"
      >
        We match you
      </text>
    </g>
  );
}
