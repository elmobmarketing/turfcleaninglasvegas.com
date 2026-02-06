interface LogoProps {
  variant?: 'full' | 'mark';
  className?: string;
  dark?: boolean;
}

export function Logo({ variant = 'full', className = '', dark = false }: LogoProps) {
  const textColor = dark ? '#ffffff' : '#0a0f1a';
  const accentColor = '#059669';
  const mutedColor = dark ? 'rgba(255,255,255,0.4)' : '#94a3b8';

  // Unique IDs to avoid SVG gradient conflicts when multiple logos render
  const uid = dark ? 'd' : 'l';

  const mark = (
    <svg
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={variant === 'mark' ? className || 'w-10 h-10' : 'w-10 h-10'}
    >
      <defs>
        <linearGradient id={`bg${uid}`} x1="4" y1="4" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#047857" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id={`bl${uid}`} x1="26" y1="8" x2="26" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.65)" />
        </linearGradient>
        <filter id={`glow${uid}`}>
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Shield shape - distinctive, not a boring square */}
      <path
        d="M26 2 C26 2, 46 6, 48 10 C50 14, 50 30, 46 38 C42 46, 26 50, 26 50 C26 50, 10 46, 6 38 C2 30, 2 14, 4 10 C6 6, 26 2, 26 2Z"
        fill={`url(#bg${uid})`}
      />
      {/* Inner highlight */}
      <path
        d="M26 2 C26 2, 46 6, 48 10 C50 14, 50 30, 46 38 C42 46, 26 50, 26 50 C26 50, 10 46, 6 38 C2 30, 2 14, 4 10 C6 6, 26 2, 26 2Z"
        fill="white"
        opacity="0.08"
      />

      {/* Left blade - leans left with natural curve */}
      <path
        d="M18 40 C18 38, 16 30, 14 24 C12.5 19, 10.5 14, 12 10 C13 13, 14 17, 15 22 C16.5 28, 18 35, 18.5 40Z"
        fill={`url(#bl${uid})`}
        opacity="0.85"
      />

      {/* Center blade - tallest, proud */}
      <path
        d="M25 40 C25 38, 24 28, 24 20 C24 15, 24.5 9, 26 5 C27 9, 27.5 15, 27.5 20 C27.5 28, 27 38, 27 40Z"
        fill="white"
        opacity="0.95"
      />

      {/* Right blade - leans right */}
      <path
        d="M34 40 C34 38, 36 30, 38 24 C39.5 19, 41.5 14, 40 10 C39 13, 38 17, 37 22 C35.5 28, 34 35, 33.5 40Z"
        fill={`url(#bl${uid})`}
        opacity="0.85"
      />

      {/* Dynamic cleaning swoosh - the key differentiator */}
      <path
        d="M8 32 Q18 18, 32 16 Q40 15, 44 18"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
        filter={`url(#glow${uid})`}
      />

      {/* 4-point sparkle star - top right, the "clean" symbol */}
      <g transform="translate(39, 9)" opacity="0.95" filter={`url(#glow${uid})`}>
        <path
          d="M0 -5 C0.8 -1.5, 1.5 -0.8, 5 0 C1.5 0.8, 0.8 1.5, 0 5 C-0.8 1.5, -1.5 0.8, -5 0 C-1.5 -0.8, -0.8 -1.5, 0 -5Z"
          fill="white"
        />
      </g>

      {/* Tiny sparkle - left side */}
      <g transform="translate(9, 15)" opacity="0.5">
        <path
          d="M0 -3 C0.5 -1, 1 -0.5, 3 0 C1 0.5, 0.5 1, 0 3 C-0.5 1, -1 0.5, -3 0 C-1 -0.5, -0.5 -1, 0 -3Z"
          fill="white"
        />
      </g>
    </svg>
  );

  if (variant === 'mark') return mark;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {mark}
      <div className="flex flex-col leading-none">
        <span
          className="text-[15.5px] font-black tracking-tight leading-tight"
          style={{ color: textColor }}
        >
          TURF <span style={{ color: accentColor }}>CLEANING</span>
        </span>
        <div className="flex items-center gap-1.5 mt-[3px]">
          <span
            className="block w-3 h-[1.5px] rounded-full"
            style={{ background: accentColor, opacity: 0.5 }}
          />
          <span
            className="text-[9px] font-semibold tracking-[0.2em] uppercase"
            style={{ color: mutedColor }}
          >
            Las Vegas
          </span>
          <span
            className="block w-3 h-[1.5px] rounded-full"
            style={{ background: accentColor, opacity: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
}
