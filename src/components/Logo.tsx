interface LogoProps {
  variant?: 'full' | 'mark';
  className?: string;
  dark?: boolean;
}

export function Logo({ variant = 'full', className = '', dark = false }: LogoProps) {
  const textColor = dark ? '#ffffff' : '#0a0f1a';
  const subColor = dark ? '#10b981' : '#059669';

  const mark = (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={variant === 'mark' ? className || 'w-9 h-9' : 'w-9 h-9'}
    >
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="shineGrad" x1="10" y1="8" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="white" stopOpacity="0.25" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="44" height="44" rx="12" fill="url(#logoGrad)" />

      {/* Subtle top-left shine */}
      <rect width="44" height="44" rx="12" fill="url(#shineGrad)" />

      {/* Grass blades - clean geometric curves */}
      <path d="M14 34 C14 34, 13 26, 15.5 19 C16 17.5, 12 21, 10 24 C12 20, 14.5 16.5, 15.5 19" fill="white" opacity="0.9" />
      <path d="M22 34 C22 34, 21 23, 22 14 C22 12, 26 17, 28 20 C25 16, 22.5 12.5, 22 14" fill="white" opacity="0.95" />
      <path d="M30 34 C30 34, 31 26, 28.5 19 C28 17.5, 32 21, 34 24 C32 20, 29.5 16.5, 28.5 19" fill="white" opacity="0.9" />

      {/* Grass base line */}
      <path d="M9 34 L35 34" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.4" />

      {/* Water droplet - represents cleaning */}
      <path d="M35 10 C35 10, 38 14, 38 16 C38 17.7, 36.7 19, 35 19 C33.3 19, 32 17.7, 32 16 C32 14, 35 10, 35 10Z" fill="white" opacity="0.9" />

      {/* Sparkle dots */}
      <circle cx="8" cy="12" r="1.2" fill="white" opacity="0.5" />
      <circle cx="11" cy="8" r="0.8" fill="white" opacity="0.35" />
    </svg>
  );

  if (variant === 'mark') return mark;

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {mark}
      <div className="flex flex-col leading-none">
        <span
          className="text-[15px] font-black tracking-tight leading-tight"
          style={{ color: textColor }}
        >
          TURF<span style={{ color: subColor }}> CLEANING</span>
        </span>
        <span
          className="text-[10px] font-bold tracking-[0.2em] uppercase mt-0.5"
          style={{ color: dark ? 'rgba(255,255,255,0.5)' : '#9ca3af' }}
        >
          Las Vegas, NV
        </span>
      </div>
    </div>
  );
}
