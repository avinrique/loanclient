"use client";

function Person({
  cx,
  cy,
  scale,
  gradId,
}: {
  cx: number;
  cy: number;
  scale: number;
  gradId: string;
}) {
  return (
    <g transform={`translate(${cx}, ${cy}) scale(${scale})`} filter="url(#shadow)">
      {/* Body */}
      <rect x={-18} y={12} width={36} height={44} rx={10} fill={`url(#${gradId})`} />
      {/* Head */}
      <circle cx={0} cy={-2} r={16} fill={`url(#${gradId})`} />
      {/* Face highlight */}
      <circle cx={-4} cy={-6} r={3} fill="white" opacity={0.2} />
      {/* Smile */}
      <path
        d="M-5 1 Q0 6 5 1"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      {/* Shoulder accents */}
      <rect x={-18} y={16} width={36} height={8} rx={4} fill="white" opacity={0.1} />
    </g>
  );
}

export default function PeopleGroup() {
  return (
    <g>
      {/* Soft background circle */}
      <circle cx="105" cy="185" r="75" fill="#0EA5E9" opacity="0.06" />

      {/* Label */}
      <text
        x="105"
        y="90"
        textAnchor="middle"
        fill="#A5F3FC"
        fontSize="12"
        fontWeight="700"
        letterSpacing="1.5"
      >
        BORROWERS
      </text>
      <line x1="75" y1="97" x2="135" y2="97" stroke="#22D3EE" strokeWidth="1.5" opacity="0.4" />

      <Person cx={55} cy={175} scale={0.9} gradId="personGrad1" />
      <Person cx={110} cy={155} scale={1} gradId="personGrad2" />
      <Person cx={155} cy={180} scale={0.85} gradId="personGrad1" />

      {/* Application doc */}
      <g transform="translate(60, 240)" opacity="0.7">
        <rect x={0} y={0} width={28} height={36} rx={4} fill="#155E75" stroke="#22D3EE" strokeWidth="0.8" />
        <line x1="5" y1="8" x2="23" y2="8" stroke="#67E8F9" strokeWidth="1.5" opacity="0.6" />
        <line x1="5" y1="14" x2="20" y2="14" stroke="#67E8F9" strokeWidth="1.5" opacity="0.4" />
        <line x1="5" y1="20" x2="18" y2="20" stroke="#67E8F9" strokeWidth="1.5" opacity="0.3" />
        <circle cx="14" cy="28" r="3" fill="none" stroke="#22D3EE" strokeWidth="0.8" opacity="0.5" />
      </g>
    </g>
  );
}
