import React, { useState } from 'react';

interface BrandLogoProps {
  variant?: 'responsive' | 'full' | 'compact' | 'icon-only' | 'hero-badge';
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'responsive',
  className = '',
  showSubtitle = true,
  size = 'md',
}) => {
  const [imageError, setImageError] = useState(false);

  // High-precision vector SVG of the Chrome Delta Summit & AI Node (Guaranteed 100% render with zero load delay)
  const renderVectorIcon = () => (
    <svg 
      viewBox="0 0 200 200" 
      className="w-full h-full object-contain"
      aria-label="ApexLead Systems Emblem"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="vectorBg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#071b30" />
          <stop offset="60%" stopColor="#020814" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        <linearGradient id="vectorChrome" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="25%" stopColor="#e2e8f0" />
          <stop offset="50%" stopColor="#64748b" />
          <stop offset="75%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
        <linearGradient id="vectorCyan" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#00d8ff" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="vectorSnow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
        <linearGradient id="vectorDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="35%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
      </defs>

      {/* Rounded Dark Container */}
      <rect width="200" height="200" rx="44" fill="url(#vectorBg)" />
      <rect x="3" y="3" width="194" height="194" rx="41" fill="none" stroke="url(#vectorCyan)" strokeWidth="2.5" opacity="0.85" />
      
      {/* Cyber Grid */}
      <g opacity="0.22" stroke="#00f0ff" strokeWidth="1">
        <line x1="20" y1="100" x2="180" y2="100" />
        <line x1="100" y1="20" x2="100" y2="180" />
        <circle cx="100" cy="100" r="70" fill="none" />
      </g>

      {/* 3D Chrome Delta Frame */}
      <polygon points="100,24 175,160 25,160" fill="none" stroke="#00f0ff" strokeWidth="4" opacity="0.4" />
      <polygon points="100,28 170,156 142,156 100,74 58,156 30,156" fill="url(#vectorChrome)" stroke="#0f172a" strokeWidth="1" />
      <polygon points="100,28 100,74 142,156 170,156" fill="#ffffff" opacity="0.35" />
      <polygon points="100,28 100,74 58,156 30,156" fill="#020617" opacity="0.45" />

      {/* Inner Neon Delta */}
      <polygon points="100,68 140,150 60,150" fill="none" stroke="#00f0ff" strokeWidth="2.5" />

      {/* Mountain Summit Inside Delta */}
      <g transform="translate(100, 114)">
        <polygon points="0,-48 -36,12 -58,34 0,34" fill="url(#vectorDark)" />
        <polygon points="0,-48 30,8 58,34 0,34" fill="url(#vectorSnow)" />
        <polygon points="-24,0 -40,24 -15,34" fill="#020617" opacity="0.75" />
        <polygon points="20,-2 42,22 10,34" fill="#f8fafc" opacity="0.9" />
        <polygon points="0,-48 -10,-18 0,-4 10,-12" fill="#ffffff" />
        
        {/* Top Summit Sparkle Star */}
        <circle cx="0" cy="-50" r="8" fill="#ffffff" opacity="0.95" />
        <circle cx="0" cy="-50" r="3.5" fill="#00d8ff" />
        <line x1="0" y1="-62" x2="0" y2="-38" stroke="#ffffff" strokeWidth="1.8" />
        <line x1="-12" y1="-50" x2="12" y2="-50" stroke="#ffffff" strokeWidth="1.8" />
      </g>

      {/* Upward Growth Surge Curve */}
      <g transform="translate(100, 118)">
        <path d="M -22 30 Q -5 12 6 -10 L 0 -10 L 12 -28 L 20 -8 L 14 -8 Q 0 16 -14 34 Z" 
              fill="#ffffff" stroke="#00d8ff" strokeWidth="1.5" />
      </g>
    </svg>
  );

  // Icon sizing
  const getIconWrapperClass = () => {
    switch (variant) {
      case 'icon-only':
        return 'w-10 h-10 sm:w-12 sm:h-12';
      case 'hero-badge':
        return 'w-14 h-14 sm:w-20 sm:h-20';
      case 'compact':
        return 'w-8 h-8 sm:w-9 sm:h-9';
      case 'responsive':
      default:
        return 'w-10 h-10 min-[400px]:w-11 min-[400px]:h-11 sm:w-12 sm:h-12';
    }
  };

  return (
    <div className={`flex items-center gap-2 sm:gap-3 select-none ${className}`}>
      
      {/* Emblem Frame */}
      <div 
        className={`relative flex-shrink-0 flex items-center justify-center rounded-xl bg-slate-950 p-0.5 border border-cyan-500/50 shadow-md shadow-cyan-500/20 group-hover:border-cyan-400 group-hover:shadow-cyan-400/40 group-hover:scale-105 transition-all duration-300 overflow-hidden ${getIconWrapperClass()}`}
      >
        {!imageError ? (
          <img
            src="/logo.png"
            alt="ApexLead Systems Logo"
            className="w-full h-full object-contain"
            onError={() => setImageError(true)}
            loading="eager"
            decoding="async"
          />
        ) : (
          renderVectorIcon()
        )}
      </div>

      {/* Typography Block */}
      {variant !== 'icon-only' && (
        <div className="flex flex-col justify-center min-w-0">
          <div className="flex items-center gap-1 sm:gap-1.5 flex-nowrap">
            <span className="font-extrabold text-base min-[400px]:text-lg sm:text-xl tracking-tight text-white font-sans whitespace-nowrap leading-tight">
              Apex<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">Lead</span>
            </span>
            
            <span className="text-[9px] min-[400px]:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-cyan-200 border border-cyan-500/40 bg-cyan-950/80 px-1 min-[400px]:px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap leading-tight">
              Systems
            </span>
          </div>

          {showSubtitle && (
            <span className="text-[8px] min-[400px]:text-[9px] sm:text-[10px] text-cyan-300/90 font-semibold tracking-wider uppercase flex items-center gap-1 mt-0.5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse flex-shrink-0" />
              <span>AI Visibility Solutions</span>
            </span>
          )}
        </div>
      )}

    </div>
  );
};
