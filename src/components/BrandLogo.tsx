import React, { useState } from 'react';

interface BrandLogoProps {
  variant?: 'responsive' | 'full-master' | 'horizontal' | 'compact' | 'icon-only' | 'badge-lg';
  className?: string;
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'responsive',
  className = '',
  showSubtitle = true,
}) => {
  const [imageError, setImageError] = useState(false);

  // If Full Master Artwork variant is chosen (For Hero Centerpiece, About section, Showcase)
  if (variant === 'full-master' || variant === 'badge-lg') {
    return (
      <div className={`relative group select-none max-w-[340px] sm:max-w-[400px] w-full mx-auto ${className}`}>
        {/* Glowing electric cyan ambient aura */}
        <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/40 via-sky-400/30 to-blue-600/40 rounded-3xl blur-xl opacity-80 group-hover:opacity-100 transition duration-500" />
        
        <div className="relative rounded-2xl bg-slate-950 p-2 sm:p-3 border border-cyan-400/50 shadow-2xl shadow-cyan-950/90 overflow-hidden">
          <img
            src="/logo.png"
            alt="ApexLead Systems - AI Visibility Solutions Custom Logo"
            className="w-full h-auto aspect-square object-contain rounded-xl"
            loading="eager"
            decoding="async"
            onError={() => setImageError(true)}
          />
        </div>
      </div>
    );
  }

  // If Horizontal Banner variant is chosen
  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center select-none ${className}`}>
        <img
          src="/logo-horizontal.png"
          alt="ApexLead Systems"
          className="h-10 sm:h-12 w-auto max-w-[280px] sm:max-w-[340px] object-contain"
          loading="eager"
        />
      </div>
    );
  }

  // Icon dimensions for standard responsive logo
  const getIconWrapperClass = () => {
    switch (variant) {
      case 'icon-only':
        return 'w-11 h-11 sm:w-13 sm:h-13';
      case 'compact':
        return 'w-9 h-9 sm:w-10 sm:h-10';
      case 'responsive':
      default:
        // Perfectly sized for mobile phone screens (320px-420px) up to desktop monitors
        return 'w-10 h-10 min-[380px]:w-11 min-[380px]:h-11 sm:w-12 sm:h-12 md:w-13 md:h-13';
    }
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      
      {/* Custom Made Logo Artwork Container */}
      <div 
        className={`relative flex-shrink-0 flex items-center justify-center rounded-xl bg-slate-950 p-0.5 border border-cyan-400/60 shadow-lg shadow-cyan-500/25 group-hover:border-cyan-300 group-hover:shadow-cyan-400/50 group-hover:scale-105 transition-all duration-300 overflow-hidden ${getIconWrapperClass()}`}
      >
        <img
          src="/logo.png"
          alt="ApexLead Systems Custom Logo"
          className="w-full h-full object-contain"
          loading="eager"
          decoding="async"
          onError={(e) => {
            // Fallback to SVG if PNG is temporarily loading
            if (!imageError) {
              setImageError(true);
              (e.currentTarget as HTMLImageElement).src = '/logo.svg';
            }
          }}
        />
      </div>

      {/* Brand Typography Block */}
      {variant !== 'icon-only' && (
        <div className="flex flex-col justify-center min-w-0">
          <div className="flex items-center gap-1 sm:gap-1.5 flex-nowrap">
            <span className="font-extrabold text-[15px] min-[380px]:text-base sm:text-lg md:text-xl tracking-tight text-white font-sans whitespace-nowrap leading-tight">
              Apex<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">Lead</span>
            </span>
            
            <span className="text-[8px] min-[380px]:text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-cyan-200 border border-cyan-500/40 bg-cyan-950/80 px-1 min-[380px]:px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap leading-tight">
              Systems
            </span>
          </div>

          {showSubtitle && (
            <span className="text-[7.5px] min-[380px]:text-[8.5px] sm:text-[9.5px] md:text-[10px] text-cyan-300/90 font-semibold tracking-wider uppercase flex items-center gap-1 mt-0.5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse flex-shrink-0" />
              <span>AI Visibility Solutions</span>
            </span>
          )}
        </div>
      )}

    </div>
  );
};
