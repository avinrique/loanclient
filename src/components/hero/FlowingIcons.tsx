"use client";

function FlowingDot({
  path,
  delay,
  color,
  r,
}: {
  path: string;
  delay: number;
  color: string;
  r: number;
}) {
  return (
    <circle r={r} fill={color} filter="url(#glow)">
      <animateMotion
        dur="2.5s"
        begin={`${delay + 2}s`}
        repeatCount="indefinite"
        path={path}
      />
      <animate
        attributeName="opacity"
        values="0.3;1;0.3"
        dur="2.5s"
        begin={`${delay + 2}s`}
        repeatCount="indefinite"
      />
    </circle>
  );
}

export default function FlowingIcons() {
  const leftPath = "M175 170 C260 170 290 175 360 170";
  const rightPath = "M440 170 C510 165 540 170 645 165";

  return (
    <g>
      {/* Left flowing dots — multiple sizes */}
      <FlowingDot path={leftPath} delay={0} color="#22D3EE" r={5} />
      <FlowingDot path={leftPath} delay={0.8} color="#0EA5E9" r={4} />
      <FlowingDot path={leftPath} delay={1.6} color="#67E8F9" r={3} />

      {/* Right flowing dots */}
      <FlowingDot path={rightPath} delay={0.3} color="#22D3EE" r={5} />
      <FlowingDot path={rightPath} delay={1.1} color="#0EA5E9" r={4} />
      <FlowingDot path={rightPath} delay={1.9} color="#67E8F9" r={3} />

      {/* Document icon flowing left → center */}
      <g opacity="0.85">
        <animateMotion dur="3.5s" begin="2.5s" repeatCount="indefinite" path={leftPath} />
        <rect x="-7" y="-9" width="14" height="18" rx="2.5" fill="#155E75" stroke="#22D3EE" strokeWidth="0.8" />
        <line x1="-3" y1="-4" x2="4" y2="-4" stroke="#67E8F9" strokeWidth="1.2" />
        <line x1="-3" y1="-0.5" x2="3" y2="-0.5" stroke="#67E8F9" strokeWidth="1.2" opacity="0.7" />
        <line x1="-3" y1="3" x2="2" y2="3" stroke="#67E8F9" strokeWidth="1.2" opacity="0.5" />
      </g>

      {/* Money/coin icon flowing center → right */}
      <g opacity="0.9">
        <animateMotion dur="3s" begin="3s" repeatCount="indefinite" path={rightPath} />
        <circle r="9" fill="url(#coinGrad)" />
        <text y="4" textAnchor="middle" fill="#92400E" fontSize="11" fontWeight="bold">$</text>
      </g>

      {/* Check icon flowing center → right */}
      <g opacity="0.8">
        <animateMotion dur="3.5s" begin="4s" repeatCount="indefinite" path={rightPath} />
        <circle r="8" fill="#065F46" />
        <path d="M-3 0 L-1 3 L4 -3" fill="none" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </g>
  );
}
