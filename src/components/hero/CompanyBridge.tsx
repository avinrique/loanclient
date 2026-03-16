"use client";

export default function CompanyBridge() {
  return (
    <g>
      {/* Outer glow ring */}
      <circle cx="400" cy="175" r="72" fill="none" stroke="#0EA5E9" strokeWidth="1" opacity="0.2" strokeDasharray="4 4">
        <animateTransform attributeName="transform" type="rotate" from="0 400 175" to="360 400 175" dur="20s" repeatCount="indefinite" />
      </circle>
      <circle cx="400" cy="175" r="85" fill="none" stroke="#22D3EE" strokeWidth="0.5" opacity="0.1" strokeDasharray="2 6">
        <animateTransform attributeName="transform" type="rotate" from="360 400 175" to="0 400 175" dur="30s" repeatCount="indefinite" />
      </circle>

      {/* Shield shape with glow */}
      <g filter="url(#glow-strong)" className="animate-pulse-glow">
        {/* Shield outer */}
        <path
          d="M370 115 L430 115 L445 150 L430 210 L400 230 L370 210 L355 150 Z"
          fill="url(#shieldGrad)"
          stroke="#22D3EE"
          strokeWidth="1.5"
        />
        {/* Shield inner glow */}
        <path
          d="M378 128 L422 128 L432 155 L422 200 L400 215 L378 200 L368 155 Z"
          fill="#0EA5E9"
          opacity={0.25}
        />
        {/* Inner highlight */}
        <path
          d="M390 128 L410 128 L415 140 L400 135 L385 140 Z"
          fill="white"
          opacity={0.15}
        />
      </g>

      {/* LC text */}
      <text
        x="400"
        y="175"
        textAnchor="middle"
        fill="white"
        fontSize="26"
        fontWeight="bold"
        letterSpacing="2"
      >
        LC
      </text>

      {/* Label */}
      <text
        x="400"
        y="260"
        textAnchor="middle"
        fill="#A5F3FC"
        fontSize="12"
        fontWeight="700"
        letterSpacing="1.5"
      >
        LOANCONNECT
      </text>
      <text
        x="400"
        y="278"
        textAnchor="middle"
        fill="#67E8F9"
        fontSize="11"
        opacity="0.7"
      >
        We find your best match
      </text>

      {/* Decorative dots around shield */}
      {[0, 60, 120, 180, 240, 300].map((angle) => {
        const r = 60;
        const rad = (angle * Math.PI) / 180;
        const x = 400 + r * Math.cos(rad);
        const y = 175 + r * Math.sin(rad);
        return (
          <circle key={angle} cx={x} cy={y} r="2" fill="#22D3EE" opacity="0.4">
            <animate
              attributeName="opacity"
              values="0.2;0.6;0.2"
              dur={`${2 + angle / 100}s`}
              repeatCount="indefinite"
            />
          </circle>
        );
      })}
    </g>
  );
}
