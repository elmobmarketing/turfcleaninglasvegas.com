interface LogoProps {
  variant?: 'full' | 'mark';
  className?: string;
  dark?: boolean;
}

export function Logo({ variant = 'full', className = '', dark = false }: LogoProps) {
  const navyColor = dark ? '#ffffff' : '#0f2942';
  const greenColor = '#16a34a';

  const mark = (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={variant === 'mark' ? className || 'w-10 h-10' : 'w-10 h-10'}
    >
      {/* Rounded square background */}
      <rect width="48" height="48" rx="12" fill={greenColor} />

      {/* Three grass blades rising from bottom */}
      <path
        d="M14 38 C14 38, 14 24, 18 16"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M22 38 C22 38, 22 20, 24 10"
        stroke="white"
        strokeWidth="2.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M30 38 C30 38, 31 26, 34 18"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Leaf shapes on the blades */}
      <path
        d="M18 16 C18 16, 12 18, 11 22 C11 22, 15 20, 18 16Z"
        fill="white"
        opacity="0.9"
      />
      <path
        d="M24 10 C24 10, 28 14, 28 18 C28 18, 25 14, 24 10Z"
        fill="white"
        opacity="0.9"
      />
      <path
        d="M34 18 C34 18, 38 20, 39 24 C39 24, 36 21, 34 18Z"
        fill="white"
        opacity="0.9"
      />

      {/* Water droplet / sparkle - cleaning element */}
      <circle cx="37" cy="11" r="4" fill="white" opacity="0.95" />
      <circle cx="37" cy="11" r="2" fill={greenColor} opacity="0.6" />

      {/* Small sparkle dots */}
      <circle cx="33" cy="8" r="1" fill="white" opacity="0.7" />
      <circle cx="41" cy="14" r="1" fill="white" opacity="0.7" />
    </svg>
  );

  if (variant === 'mark') return mark;

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {mark}
      <div className="flex flex-col leading-tight">
        <span
          className="text-[15px] font-extrabold tracking-tight"
          style={{ color: navyColor }}
        >
          TURF CLEANING
        </span>
        <span
          className="text-[11px] font-bold tracking-[0.2em] uppercase"
          style={{ color: greenColor }}
        >
          Las Vegas
        </span>
      </div>
    </div>
  );
}
