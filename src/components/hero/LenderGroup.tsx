"use client";

export default function LenderGroup() {
  return (
    <g>
      {/* Soft background circle */}
      <circle cx="690" cy="185" r="75" fill="#0EA5E9" opacity="0.06" />

      {/* Label */}
      <text
        x="690"
        y="90"
        textAnchor="middle"
        fill="#A5F3FC"
        fontSize="12"
        fontWeight="700"
        letterSpacing="1.5"
      >
        LENDERS
      </text>
      <line x1="660" y1="97" x2="720" y2="97" stroke="#22D3EE" strokeWidth="1.5" opacity="0.4" />

      {/* Bank building */}
      <g filter="url(#shadow)">
        {/* Roof - triangle with pediment */}
        <polygon points="645,135 690,108 735,135" fill="url(#bankGrad)" />
        {/* Roof accent line */}
        <line x1="655" y1="135" x2="725" y2="135" stroke="#22D3EE" strokeWidth="1.5" />

        {/* Body */}
        <rect x={650} y={135} width={80} height={55} fill="url(#bankGrad)" opacity="0.9" />

        {/* Columns */}
        {[660, 674, 688, 702, 716].map((x) => (
          <g key={x}>
            <rect x={x} y={138} width={6} height={48} rx={3} fill="white" opacity={0.25} />
            <rect x={x} y={138} width={6} height={4} rx={1} fill="white" opacity={0.35} />
            <rect x={x} y={182} width={6} height={4} rx={1} fill="white" opacity={0.35} />
          </g>
        ))}

        {/* Base / steps */}
        <rect x={643} y={190} width={94} height={5} rx={2} fill="#155E75" />
        <rect x={647} y={195} width={86} height={4} rx={2} fill="#155E75" opacity="0.7" />
      </g>

      {/* Coins with golden gradient */}
      <g>
        <circle cx={655} cy={230} r={18} fill="url(#coinGrad)" filter="url(#glow)">
          <animate attributeName="r" values="18;19;18" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="655" y="236" textAnchor="middle" fill="#92400E" fontSize="16" fontWeight="bold">$</text>

        <circle cx={700} cy={240} r={14} fill="url(#coinGrad)" opacity="0.85" filter="url(#glow)">
          <animate attributeName="r" values="14;15;14" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <text x="700" y="245" textAnchor="middle" fill="#92400E" fontSize="12" fontWeight="bold">$</text>

        <circle cx={735} cy={225} r={16} fill="url(#coinGrad)" opacity="0.9" filter="url(#glow)">
          <animate attributeName="r" values="16;17;16" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <text x="735" y="231" textAnchor="middle" fill="#92400E" fontSize="14" fontWeight="bold">$</text>
      </g>

      {/* Small percentage badge */}
      <g transform="translate(720, 140)" opacity="0.8">
        <rect x={0} y={0} width={30} height={18} rx={9} fill="#065F46" stroke="#34D399" strokeWidth="0.8" />
        <text x="15" y="13" textAnchor="middle" fill="#6EE7B7" fontSize="9" fontWeight="bold">%</text>
      </g>
    </g>
  );
}
