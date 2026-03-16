"use client";

import { motion } from "framer-motion";

interface LogoMarkProps {
  size?: number;
  className?: string;
  /** animate subtle glow pulse */
  animated?: boolean;
}

/**
 * LogoMark — SVG-based brand mark for Ing. Marlon Pérez.
 * Transparent background, scales perfectly at any resolution.
 * No image dependency, no white-box artifacts.
 */
export function LogoMark({ size = 80, className = "", animated = true }: LogoMarkProps) {
  const cx = size / 2;
  const cy = size / 2;
  const r = (size / 2) * 0.9;

  const glowId = `logo-glow-${size}`;
  const maskId = `logo-mask-${size}`;

  const Wrapper = animated ? motion.svg : "svg";
  const animateProps = animated
    ? {
        initial: { opacity: 0.8 },
        animate: { opacity: [0.8, 1, 0.8] },
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const },
      }
    : {};

  return (
    <Wrapper
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Ing. Marlon Pérez Logo"
      role="img"
      {...animateProps}
    >
      <defs>
        {/* Neon cyan glow filter */}
        <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        {/* Gradient for MP letters — metallic cyan */}
        <linearGradient id={`mp-grad-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="40%" stopColor="#a0f4ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#00c8e0" stopOpacity="1" />
        </linearGradient>
        {/* Radial gradient for inner background */}
        <radialGradient id={`bg-grad-${size}`} cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#071828" />
          <stop offset="100%" stopColor="#020813" />
        </radialGradient>
        {/* Clip to circle */}
        <clipPath id={maskId}>
          <circle cx={cx} cy={cy} r={r - 2} />
        </clipPath>
      </defs>

      {/* Outer glow ring */}
      <circle
        cx={cx} cy={cy} r={r}
        stroke="#00E5FF"
        strokeWidth={size * 0.025}
        filter={`url(#${glowId})`}
        opacity={0.6}
      />

      {/* Main border ring */}
      <circle
        cx={cx} cy={cy} r={r}
        stroke="#00E5FF"
        strokeWidth={size * 0.018}
      />

      {/* Dark inner background */}
      <circle cx={cx} cy={cy} r={r - 2} fill={`url(#bg-grad-${size})`} />

      {/* Circuit traces — clipped to circle */}
      <g clipPath={`url(#${maskId})`} opacity={0.35} stroke="#00E5FF" strokeWidth={size * 0.007} strokeLinecap="round">
        {/* Top traces */}
        <line x1={cx} y1={cy * 0.22} x2={cx} y2={cy * 0.45} />
        <circle cx={cx} cy={cy * 0.22} r={size * 0.018} fill="#00E5FF" />
        <line x1={cx * 0.55} y1={cy * 0.32} x2={cx * 0.78} y2={cy * 0.45} />
        <circle cx={cx * 0.55} cy={cy * 0.32} r={size * 0.014} fill="#00E5FF" />
        <line x1={cx * 1.45} y1={cy * 0.32} x2={cx * 1.22} y2={cy * 0.45} />
        <circle cx={cx * 1.45} cy={cy * 0.32} r={size * 0.014} fill="#00E5FF" />
        {/* Right traces */}
        <line x1={cx * 1.7} y1={cy} x2={cx * 1.45} y2={cy} />
        <circle cx={cx * 1.7} cy={cy} r={size * 0.016} fill="#00E5FF" />
        <line x1={cx * 1.58} y1={cy * 0.62} x2={cx * 1.4} y2={cy * 0.7} />
        <circle cx={cx * 1.58} cy={cy * 0.62} r={size * 0.012} fill="#00E5FF" />
        {/* Left traces */}
        <line x1={cx * 0.3} y1={cy} x2={cx * 0.55} y2={cy} />
        <circle cx={cx * 0.3} cy={cy} r={size * 0.016} fill="#00E5FF" />
        <line x1={cx * 0.42} y1={cy * 0.62} x2={cx * 0.6} y2={cy * 0.7} />
        <circle cx={cx * 0.42} cy={cy * 0.62} r={size * 0.012} fill="#00E5FF" />
        {/* Bottom traces */}
        <line x1={cx * 0.7} y1={cy * 1.55} x2={cx * 0.85} y2={cy * 1.38} />
        <circle cx={cx * 0.7} cy={cy * 1.55} r={size * 0.013} fill="#00E5FF" />
        <line x1={cx * 1.3} y1={cy * 1.55} x2={cx * 1.15} y2={cy * 1.38} />
        <circle cx={cx * 1.3} cy={cy * 1.55} r={size * 0.013} fill="#00E5FF" />
      </g>

      {/* Central lens flare / spark */}
      <circle cx={cx * 1.02} cy={cy * 0.92} r={size * 0.025} fill="white" opacity={0.7} filter={`url(#${glowId})`} />

      {/* MP Lettermark — bold, modern */}
      <text
        x={cx}
        y={cy + size * 0.115}
        textAnchor="middle"
        fontFamily="'Arial Black', 'Michroma', sans-serif"
        fontWeight="900"
        fontSize={size * 0.34}
        fill={`url(#mp-grad-${size})`}
        letterSpacing={-size * 0.01}
      >
        MP
      </text>

      {/* Inner thin ring accent */}
      <circle
        cx={cx} cy={cy} r={r * 0.76}
        stroke="#00E5FF"
        strokeWidth={size * 0.006}
        strokeDasharray={`${size * 0.04} ${size * 0.02}`}
        opacity={0.3}
      />
    </Wrapper>
  );
}
