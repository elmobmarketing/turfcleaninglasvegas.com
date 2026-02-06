interface LogoProps {
  variant?: 'full' | 'mark';
  className?: string;
  dark?: boolean;
}

export function Logo({ variant = 'full', className = '', dark = false }: LogoProps) {
  const textColor = dark ? '#ffffff' : '#0a0f1a';
  const subColor = dark ? '#10b981' : '#059669';
  const mutedColor = dark ? 'rgba(255,255,255,0.45)' : '#9ca3af';

  const mark = (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={variant === 'mark' ? className || 'w-10 h-10' : 'w-10 h-10'}
    >
      <defs>
        <linearGradient id="logoBg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#047857" />
          <stop offset="50%" stopColor="#059669" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="logoShine" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="white" stopOpacity="0.18" />
          <stop offset="50%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="bladeGrad" x1="24" y1="12" x2="24" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      {/* Background with rounded corners */}
      <rect width="48" height="48" rx="13" fill="url(#logoBg)" />
      <rect width="48" height="48" rx="13" fill="url(#logoShine)" />

      {/* Three grass blades - elegant tapered shapes */}
      {/* Left blade - curves left */}
      <path
        d="M16 36 C16 36, 14.5 28, 13 22 C12 18, 11 15, 13 12 C14.5 15, 15 19, 15.5 24 C16 28, 16 33, 16 36Z"
        fill="url(#bladeGrad)"
      />

      {/* Center blade - tallest, straight */}
      <path
        d="M24 36 C24 36, 23.5 28, 23 21 C22.5 16, 23 11, 24 8 C25 11, 25.5 16, 25 21 C24.5 28, 24 36, 24 36Z"
        fill="white"
      />

      {/* Right blade - curves right */}
      <path
        d="M32 36 C32 36, 33.5 28, 35 22 C36 18, 37 15, 35 12 C33.5 15, 33 19, 32.5 24 C32 28, 32 33, 32 36Z"
        fill="url(#bladeGrad)"
      />

      {/* Clean sweep arc - represents cleaning action */}
      <path
        d="M10 30 C14 24, 20 20, 28 19 C32 18.5, 36 19.5, 38 21"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />

      {/* Sparkle - top right */}
      <g opacity="0.9">
        <line x1="37" y1="8" x2="37" y2="14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="34" y1="11" x2="40" y2="11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Small sparkle */}
      <g opacity="0.5">
        <line x1="9" y1="10" x2="9" y2="14" stroke="white" strokeWidth="1" strokeLinecap="round" />
        <line x1="7" y1="12" x2="11" y2="12" stroke="white" strokeWidth="1" strokeLinecap="round" />
      </g>
    </svg>
  );

  if (variant === 'mark') return mark;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {mark}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-[3px]">
          <span
            className="text-[16px] font-black tracking-tight"
            style={{ color: textColor }}
          >
            TURF
          </span>
          <span
            className="text-[16px] font-black tracking-tight"
            style={{ color: subColor }}
          >
            CLEANING
          </span>
        </div>
        <span
          className="text-[9.5px] font-semibold tracking-[0.18em] uppercase mt-[3px]"
          style={{ color: mutedColor }}
        >
          Las Vegas, NV
        </span>
      </div>
    </div>
  );
}
