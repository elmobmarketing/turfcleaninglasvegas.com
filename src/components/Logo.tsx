interface LogoProps {
  variant?: 'full' | 'mark';
  className?: string;
  dark?: boolean;
}

export function Logo({ variant = 'full', className = '', dark = false }: LogoProps) {
  const textColor = dark ? '#ffffff' : '#0a0f1a';
  const greenColor = '#059669';

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
      </defs>
      <rect width="44" height="44" rx="12" fill="url(#logoGrad)" />
      <path d="M13 36 C13 36, 13 22, 17 14" stroke="white" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M20 36 C20 36, 20 18, 22 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M27 36 C27 36, 28 24, 31 16" stroke="white" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M17 14 C17 14, 11 16, 10 20 C10 20, 14 18, 17 14Z" fill="white" opacity="0.85" />
      <path d="M22 9 C22 9, 26 13, 26 17 C26 17, 23 13, 22 9Z" fill="white" opacity="0.85" />
      <path d="M31 16 C31 16, 35 18, 36 22 C36 22, 33 19, 31 16Z" fill="white" opacity="0.85" />
      <circle cx="35" cy="10" r="3" fill="white" opacity="0.9" />
      <circle cx="32" cy="7" r="1" fill="white" opacity="0.5" />
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
          TURF CLEANING
        </span>
        <span
          className="text-[10px] font-bold tracking-[0.22em] uppercase mt-0.5"
          style={{ color: greenColor }}
        >
          Las Vegas
        </span>
      </div>
    </div>
  );
}
