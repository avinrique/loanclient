"use client";

function Person({ cx, cy, delay }: { cx: number; cy: number; delay: number }) {
  return (
    <g>
      {/* Body */}
      <rect
        x={cx - 16}
        y={cy + 10}
        width={32}
        height={40}
        rx={8}
        fill="#0891B2"
        opacity={0.8 + delay * 0.05}
      />
      {/* Head */}
      <circle cx={cx} cy={cy - 4} r={14} fill="#0891B2" opacity={0.9} />
      {/* Smile */}
      <path
        d={`M${cx - 5} ${cy - 1} Q${cx} ${cy + 4} ${cx + 5} ${cy - 1}`}
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </g>
  );
}

export default function PeopleGroup() {
  return (
    <g>
      {/* Label */}
      <text x="105" y="95" textAnchor="middle" fill="#155E75" fontSize="13" fontWeight="600">
        Borrowers
      </text>
      <Person cx={60} cy={160} delay={0} />
      <Person cx={110} cy={140} delay={1} />
      <Person cx={150} cy={170} delay={2} />
    </g>
  );
}
