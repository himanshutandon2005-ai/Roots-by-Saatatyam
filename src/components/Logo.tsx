interface LogoProps {
  dark?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showTagline?: boolean;
  badgeOnly?: boolean;
}

export const LogoBadge = ({
  size = 'md',
  className = '',
}: {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
}) => {
  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    hero: 'w-24 h-24 sm:w-28 sm:h-28',
  };

  return (
    <div
      className={`relative rounded-full overflow-hidden shrink-0 shadow-md ring-1 ring-[#C86D51]/40 bg-[#422B1E] ${sizeClasses[size]} ${className}`}
    >
      <img
        src="/logo-badge.jpg"
        alt="Roots by सातत्यम् — Nature Curated Logo"
        className="w-full h-full object-cover rounded-full"
        loading="eager"
      />
    </div>
  );
};

export default function Logo({
  dark = false,
  size = 'md',
  showTagline = true,
  badgeOnly = false,
}: LogoProps) {
  if (badgeOnly) {
    return <LogoBadge size={size} />;
  }

  return (
    <div className="flex items-center gap-3 group">
      <LogoBadge size={size} className="transition-transform duration-300 group-hover:scale-105" />
      <div className="flex flex-col leading-none">
        <span
          className={`font-serif tracking-tight flex items-baseline gap-1.5 ${
            size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl'
          } ${dark ? 'text-cream' : 'text-ink'}`}
        >
          <span className="font-medium">Roots</span>
          <span className="text-[11px] font-sans font-light opacity-60">by</span>
          <span className="font-devanagari text-terra font-medium">सातत्यम्</span>
        </span>
        {showTagline && (
          <span
            className={`font-mono text-[9px] uppercase tracking-[0.28em] mt-1 ${
              dark ? 'text-sage' : 'text-inkmuted'
            }`}
          >
            Nature Curated
          </span>
        )}
      </div>
    </div>
  );
}
