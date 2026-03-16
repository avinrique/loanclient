"use client";

export default function LenderGroup() {
  return (
    <g>
      {/* Label */}
      <text x="690" y="95" textAnchor="middle" fill="#155E75" fontSize="13" fontWeight="600">
        Lenders
      </text>
      {/* Bank building */}
      <g>
        {/* Roof */}
        <polygon points="650,130 690,110 730,130" fill="#0891B2" opacity={0.9} />
        {/* Body */}
        <rect x={655} y={130} width={70} height={50} fill="#0891B2" opacity={0.8} />
        {/* Columns */}
        <rect x={662} y={135} width={8} height={40} rx={2} fill="white" opacity={0.4} />
        <rect x={678} y={135} width={8} height={40} rx={2} fill="white" opacity={0.4} />
        <rect x={694} y={135} width={8} height={40} rx={2} fill="white" opacity={0.4} />
        <rect x={710} y={135} width={8} height={40} rx={2} fill="white" opacity={0.4} />
        {/* Base */}
        <rect x={648} y={180} width={84} height={6} rx={2} fill="#155E75" />
      </g>

      {/* Coins */}
      <g>
        <circle cx={660} cy={220} r={16} fill="#0EA5E9" opacity={0.7} />
        <text x="660" y="225" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">$</text>
        <circle cx={700} cy={230} r={12} fill="#22D3EE" opacity={0.6} />
        <text x="700" y="234" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">$</text>
        <circle cx={730} cy={215} r={14} fill="#0891B2" opacity={0.7} />
        <text x="730" y="220" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">$</text>
      </g>
    </g>
  );
}
