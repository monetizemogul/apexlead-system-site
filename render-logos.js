import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// 1. Sleek, Ultra-Crisp Brand Mark / Icon (For Navbar, Favicon, Mobile App Icon)
// Focused on the 3D Chrome Delta Summit + Glowing Blue Neural Node & Peak Surge
const brandIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <defs>
    <radialGradient id="iconBg" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#071b30" />
      <stop offset="60%" stop-color="#020814" />
      <stop offset="100%" stop-color="#000000" />
    </radialGradient>

    <linearGradient id="chrome3D" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="25%" stop-color="#e2e8f0" />
      <stop offset="50%" stop-color="#64748b" />
      <stop offset="75%" stop-color="#f8fafc" />
      <stop offset="100%" stop-color="#94a3b8" />
    </linearGradient>

    <linearGradient id="cyanNeon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="50%" stop-color="#00d8ff" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>

    <linearGradient id="peakLight" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="40%" stop-color="#cbd5e1" />
      <stop offset="100%" stop-color="#334155" />
    </linearGradient>

    <linearGradient id="peakDark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="35%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>

    <filter id="iconGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="5" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <filter id="intenseGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="8" result="b1" />
      <feGaussianBlur stdDeviation="16" result="b2" />
      <feMerge>
        <feMergeNode in="b2" />
        <feMergeNode in="b1" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <!-- Rounded Squircle Dark Container -->
  <rect width="200" height="200" rx="44" fill="url(#iconBg)" />
  <rect x="3" y="3" width="194" height="194" rx="41" fill="none" stroke="url(#cyanNeon)" stroke-width="2.5" opacity="0.85" />
  
  <!-- Subtle Inner Cyber Grid -->
  <g opacity="0.18" stroke="#00f0ff" stroke-width="1">
    <line x1="20" y1="100" x2="180" y2="100" />
    <line x1="100" y1="20" x2="100" y2="180" />
    <circle cx="100" cy="100" r="70" fill="none" />
  </g>

  <!-- Outer Neon Delta Aura -->
  <polygon points="100,24 175,160 25,160" fill="none" stroke="#00f0ff" stroke-width="6" opacity="0.4" filter="url(#intenseGlow)" />

  <!-- 3D Chrome Beveled Delta Frame -->
  <polygon points="100,28 170,156 142,156 100,74 58,156 30,156" fill="url(#chrome3D)" stroke="#0f172a" stroke-width="1" />
  <!-- Bevel Shading & Highlights -->
  <polygon points="100,28 100,74 142,156 170,156" fill="#ffffff" opacity="0.35" />
  <polygon points="100,28 100,74 58,156 30,156" fill="#020617" opacity="0.45" />

  <!-- Inner Cyan Neon Accent Frame -->
  <polygon points="100,68 140,150 60,150" fill="none" stroke="#00f0ff" stroke-width="2.5" filter="url(#iconGlow)" />

  <!-- Mountain Summit Inside Delta -->
  <g transform="translate(100, 114)">
    <!-- Dark Shaded Ridge -->
    <polygon points="0,-48 -36,12 -58,34 0,34" fill="url(#peakDark)" />
    <!-- Bright Snow Highlight Ridge -->
    <polygon points="0,-48 30,8 58,34 0,34" fill="url(#peakLight)" />
    <!-- Crevice Details -->
    <polygon points="-24,0 -40,24 -15,34" fill="#020617" opacity="0.75" />
    <polygon points="20,-2 42,22 10,34" fill="#f8fafc" opacity="0.9" />
    <!-- Apex Summit Snowcap -->
    <polygon points="0,-48 -10,-18 0,-4 10,-12" fill="#ffffff" />
    
    <!-- Top Summit Starburst Sparkle -->
    <circle cx="0" cy="-50" r="9" fill="#ffffff" filter="url(#intenseGlow)" opacity="0.95" />
    <circle cx="0" cy="-50" r="3.5" fill="#00d8ff" />
    <line x1="0" y1="-62" x2="0" y2="-38" stroke="#ffffff" stroke-width="1.8" />
    <line x1="-12" y1="-50" x2="12" y2="-50" stroke="#ffffff" stroke-width="1.8" />
  </g>

  <!-- Upward Soaring Growth Arrow Indicator -->
  <g transform="translate(100, 118)">
    <path d="M -22 30 Q -5 12 6 -10 L 0 -10 L 12 -28 L 20 -8 L 14 -8 Q 0 16 -14 34 Z" 
          fill="#ffffff" stroke="#00d8ff" stroke-width="1.5" filter="url(#iconGlow)" />
  </g>
</svg>`;

// 2. High-Resolution Master Brand Logo (Poster / High Detail)
const masterLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <defs>
    <radialGradient id="masterBg" cx="50%" cy="46%" r="65%">
      <stop offset="0%" stop-color="#08223d" stop-opacity="0.95" />
      <stop offset="40%" stop-color="#031024" stop-opacity="0.98" />
      <stop offset="80%" stop-color="#020617" stop-opacity="1" />
      <stop offset="100%" stop-color="#000000" stop-opacity="1" />
    </radialGradient>

    <linearGradient id="neonCyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="50%" stop-color="#00e5ff" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>

    <linearGradient id="chromeSilver3D" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="20%" stop-color="#e2e8f0" />
      <stop offset="45%" stop-color="#64748b" />
      <stop offset="70%" stop-color="#f1f5f9" />
      <stop offset="100%" stop-color="#94a3b8" />
    </linearGradient>

    <linearGradient id="chromeLead3D" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="20%" stop-color="#38bdf8" />
      <stop offset="50%" stop-color="#0284c7" />
      <stop offset="80%" stop-color="#67e8f9" />
      <stop offset="100%" stop-color="#0369a1" />
    </linearGradient>

    <linearGradient id="mountainSnow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="40%" stop-color="#cbd5e1" />
      <stop offset="100%" stop-color="#334155" />
    </linearGradient>

    <linearGradient id="mountainShadow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="30%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>

    <filter id="masterGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="10" result="b1" />
      <feGaussianBlur stdDeviation="20" result="b2" />
      <feMerge>
        <feMergeNode in="b2" />
        <feMergeNode in="b1" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="5" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <!-- Deep Midnight Black Canvas -->
  <rect width="1000" height="1000" fill="url(#masterBg)" />

  <!-- Global Digital Network Background (Globe with Nodes on Right) -->
  <g opacity="0.45" transform="translate(690, 220)">
    <circle cx="0" cy="0" r="160" fill="none" stroke="#0284c7" stroke-width="1.8" opacity="0.6" />
    <ellipse cx="0" cy="0" rx="160" ry="60" fill="none" stroke="#38bdf8" stroke-width="1.2" opacity="0.5" />
    <ellipse cx="0" cy="0" rx="160" ry="110" fill="none" stroke="#38bdf8" stroke-width="1.2" opacity="0.5" />
    <ellipse cx="0" cy="0" rx="60" ry="160" fill="none" stroke="#38bdf8" stroke-width="1.2" opacity="0.5" />
    <ellipse cx="0" cy="0" rx="110" ry="160" fill="none" stroke="#38bdf8" stroke-width="1.2" opacity="0.5" />
    <!-- Glowing Nodes -->
    <circle cx="-50" cy="-40" r="3.5" fill="#38bdf8" filter="url(#softGlow)" />
    <circle cx="30" cy="-70" r="4.5" fill="#ffffff" filter="url(#softGlow)" />
    <circle cx="80" cy="20" r="3.5" fill="#38bdf8" />
    <circle cx="-90" cy="50" r="4.5" fill="#00d8ff" filter="url(#softGlow)" />
    <circle cx="40" cy="90" r="3.5" fill="#38bdf8" />
    <line x1="-50" y1="-40" x2="30" y2="-70" stroke="#38bdf8" stroke-width="1" opacity="0.7" />
    <line x1="30" y1="-70" x2="80" y2="20" stroke="#38bdf8" stroke-width="1" opacity="0.7" />
    <line x1="80" y1="20" x2="40" y2="90" stroke="#38bdf8" stroke-width="1" opacity="0.7" />
  </g>

  <!-- Left Side: AI Neural Brain Profile -->
  <g opacity="0.85" transform="translate(190, 260)">
    <ellipse cx="40" cy="0" rx="90" ry="110" fill="#0284c7" opacity="0.2" filter="url(#masterGlow)" />
    <path d="M 60 -90 C 110 -90 140 -50 140 10 C 140 50 120 70 120 90 C 120 110 90 130 60 140 C 40 110 20 80 10 50 C 0 20 10 -40 60 -90 Z" 
          fill="none" stroke="#00f0ff" stroke-width="2" opacity="0.45" />
    
    <g stroke="#38bdf8" stroke-width="1.8" fill="none">
      <path d="M 10 -40 Q 40 -60 70 -40 T 110 -20" />
      <path d="M 0 0 Q 35 -10 65 15 T 115 20" />
      <path d="M 15 40 Q 50 20 80 50 T 100 80" />
      <path d="M 40 -70 L 60 -30 L 40 10 L 70 40 L 50 80" stroke-dasharray="3,3" />
    </g>

    <circle cx="10" cy="-40" r="3.5" fill="#ffffff" filter="url(#softGlow)" />
    <circle cx="70" cy="-40" r="4" fill="#00f0ff" filter="url(#softGlow)" />
    <circle cx="110" cy="-20" r="4.5" fill="#ffffff" filter="url(#softGlow)" />
    <circle cx="65" cy="15" r="4.5" fill="#00f0ff" filter="url(#softGlow)" />
    <circle cx="115" cy="20" r="3.5" fill="#ffffff" />
    <circle cx="80" cy="50" r="4" fill="#38bdf8" />
    
    <!-- Microchip Badge -->
    <rect x="42" y="-12" width="30" height="26" rx="5" fill="#020617" stroke="#00f0ff" stroke-width="1.8" />
    <text x="57" y="5" fill="#00f0ff" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="900" text-anchor="middle">AI</text>
  </g>

  <!-- CENTER: 3D Chrome Delta Pyramid Frame & Mountain Summit -->
  <g transform="translate(500, 310)">
    <polygon points="0,-240 280,170 -280,170" fill="none" stroke="#00f0ff" stroke-width="16" opacity="0.35" filter="url(#masterGlow)" />

    <!-- 3D Chrome Beveled Outer Delta Triangle -->
    <polygon points="0,-230 270,165 220,165 0,-165 -220,165 -270,165" fill="url(#chromeSilver3D)" stroke="#0f172a" stroke-width="2" />
    <polygon points="0,-230 0,-165 220,165 270,165" fill="#ffffff" opacity="0.35" />
    <polygon points="0,-230 0,-165 -220,165 -270,165" fill="#020617" opacity="0.45" />

    <!-- Inner Neon Accent Line -->
    <polygon points="0,-160 210,155 -210,155" fill="none" stroke="#00f0ff" stroke-width="4.5" filter="url(#softGlow)" />

    <!-- Mountain Peaks -->
    <g transform="translate(0, 10)">
      <polygon points="0,-120 -90,40 -160,140 0,140" fill="url(#mountainShadow)" />
      <polygon points="0,-120 70,20 160,140 0,140" fill="url(#mountainSnow)" />
      <polygon points="-70,-20 -130,90 -40,140" fill="#0f172a" opacity="0.8" />
      <polygon points="60,-10 130,80 30,140" fill="#cbd5e1" opacity="0.9" />
      <polygon points="0,-120 -20,-40 0,0 20,-30" fill="#ffffff" />
      <polygon points="-60,30 -40,70 -80,120" fill="#38bdf8" opacity="0.75" />
      <polygon points="50,40 30,80 70,120" fill="#ffffff" opacity="0.95" />
      
      <!-- Top Summit Starburst Glow -->
      <circle cx="0" cy="-125" r="18" fill="#ffffff" filter="url(#masterGlow)" opacity="0.95" />
      <circle cx="0" cy="-125" r="7" fill="#00f0ff" />
      <line x1="0" y1="-160" x2="0" y2="-90" stroke="#ffffff" stroke-width="2.5" />
      <line x1="-35" y1="-125" x2="35" y2="-125" stroke="#ffffff" stroke-width="2.5" />
    </g>

    <!-- Upward Growth Arrow -->
    <g transform="translate(0, 20)">
      <path d="M -70 110 Q -20 50 15 -35 L 0 -35 L 30 -85 L 50 -30 L 35 -30 Q 0 45 -45 125 Z" 
            fill="url(#chromeSilver3D)" stroke="#00f0ff" stroke-width="3.5" filter="url(#softGlow)" />
      <path d="M 0 -35 L 30 -85 L 50 -30 Z" fill="#ffffff" />
    </g>
  </g>

  <!-- TYPOGRAPHY: APEXLEAD -->
  <g transform="translate(500, 580)">
    <text x="-12" y="0" 
          font-family="'Montserrat', 'Arial Black', sans-serif" 
          font-size="106" 
          font-weight="900" 
          letter-spacing="2" 
          text-anchor="end" 
          fill="url(#chromeSilver3D)" 
          stroke="#0f172a" 
          stroke-width="3" 
          filter="drop-shadow(0 6px 12px rgba(0,0,0,0.8))">APEX</text>
    
    <text x="0" y="0" 
          font-family="'Montserrat', 'Arial Black', sans-serif" 
          font-size="106" 
          font-weight="900" 
          letter-spacing="2" 
          text-anchor="start" 
          fill="url(#chromeLead3D)" 
          stroke="#00d8ff" 
          stroke-width="3" 
          filter="url(#masterGlow)">LEAD</text>
  </g>

  <!-- SUBTITLE: SYSTEMS -->
  <g transform="translate(500, 640)">
    <line x1="-390" y1="-10" x2="-230" y2="-10" stroke="url(#chromeSilver3D)" stroke-width="4" stroke-linecap="round" />
    <line x1="-360" y1="-3" x2="-230" y2="-3" stroke="#00f0ff" stroke-width="2" stroke-linecap="round" />

    <text x="0" y="0" 
          font-family="'Montserrat', 'Arial Black', sans-serif" 
          font-size="46" 
          font-weight="800" 
          letter-spacing="14" 
          text-anchor="middle" 
          fill="url(#chromeSilver3D)" 
          stroke="#020617" 
          stroke-width="1.5">SYSTEMS</text>

    <line x1="230" y1="-10" x2="390" y2="-10" stroke="url(#chromeSilver3D)" stroke-width="4" stroke-linecap="round" />
    <line x1="230" y1="-3" x2="360" y2="-3" stroke="#00f0ff" stroke-width="2" stroke-linecap="round" />
  </g>

  <!-- BADGE: AI VISIBILITY SOLUTIONS -->
  <g transform="translate(500, 725)">
    <path d="M -390 -35 L -355 35 L 355 35 L 390 -35 L 355 -35 L -355 -35 Z" 
          fill="#020617" stroke="#00d8ff" stroke-width="3.5" filter="url(#masterGlow)" />
    <path d="M -380 -28 L -350 28 L 350 28 L 380 -28 Z" 
          fill="#051226" stroke="#0284c7" stroke-width="1.5" />
    
    <text x="0" y="8" 
          font-family="'Montserrat', 'Arial', sans-serif" 
          font-size="28" 
          font-weight="900" 
          letter-spacing="8" 
          text-anchor="middle" 
          fill="#ffffff" 
          stroke="#0066cc" 
          stroke-width="1">AI VISIBILITY SOLUTIONS</text>
  </g>

  <!-- VALUE PILLARS -->
  <g transform="translate(500, 805)">
    <text x="0" y="0" 
          font-family="'JetBrains Mono', 'Montserrat', sans-serif" 
          font-size="20" 
          font-weight="800" 
          letter-spacing="10" 
          text-anchor="middle" 
          fill="#94a3b8">
      <tspan fill="#38bdf8">SEEN</tspan>
      <tspan fill="#64748b">  |  </tspan>
      <tspan fill="#38bdf8">FOUND</tspan>
      <tspan fill="#64748b">  |  </tspan>
      <tspan fill="#38bdf8">TRUSTED</tspan>
      <tspan fill="#64748b">  |  </tspan>
      <tspan fill="#38bdf8">CHOSEN</tspan>
    </text>
  </g>

  <!-- 6 CAPABILITY ICONS ROW -->
  <g transform="translate(500, 890)">
    <!-- 1. Search -->
    <g transform="translate(-325, 0)">
      <circle cx="0" cy="0" r="34" fill="#030d1d" stroke="#00f0ff" stroke-width="2.5" filter="url(#softGlow)" />
      <circle cx="-4" cy="-4" r="12" fill="none" stroke="#ffffff" stroke-width="2.5" />
      <line x1="5" y1="5" x2="15" y2="15" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" />
    </g>

    <!-- 2. Location Pin -->
    <g transform="translate(-195, 0)">
      <circle cx="0" cy="0" r="34" fill="#030d1d" stroke="#00f0ff" stroke-width="2.5" filter="url(#softGlow)" />
      <path d="M 0 -16 C -9 -16 -14 -9 -14 0 C -14 9 0 18 0 18 C 0 18 14 9 14 0 C 14 -9 9 -16 0 -16 Z" fill="#ffffff" />
      <circle cx="0" cy="-2" r="5" fill="#030d1d" />
    </g>

    <!-- 3. AI Chip -->
    <g transform="translate(-65, 0)">
      <circle cx="0" cy="0" r="34" fill="#030d1d" stroke="#00f0ff" stroke-width="2.5" filter="url(#softGlow)" />
      <rect x="-14" y="-14" width="28" height="28" rx="4" fill="none" stroke="#ffffff" stroke-width="2" />
      <text x="0" y="5" fill="#00f0ff" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="900" text-anchor="middle">AI</text>
      <line x1="-8" y1="-18" x2="-8" y2="-14" stroke="#38bdf8" stroke-width="2" />
      <line x1="8" y1="-18" x2="8" y2="-14" stroke="#38bdf8" stroke-width="2" />
      <line x1="-8" y1="14" x2="-8" y2="18" stroke="#38bdf8" stroke-width="2" />
      <line x1="8" y1="14" x2="8" y2="18" stroke="#38bdf8" stroke-width="2" />
      <line x1="-18" y1="-8" x2="-14" y2="-8" stroke="#38bdf8" stroke-width="2" />
      <line x1="-18" y1="8" x2="-14" y2="8" stroke="#38bdf8" stroke-width="2" />
      <line x1="14" y1="-8" x2="18" y2="-8" stroke="#38bdf8" stroke-width="2" />
      <line x1="14" y1="8" x2="18" y2="8" stroke="#38bdf8" stroke-width="2" />
    </g>

    <!-- 4. Global Web -->
    <g transform="translate(65, 0)">
      <circle cx="0" cy="0" r="34" fill="#030d1d" stroke="#00f0ff" stroke-width="2.5" filter="url(#softGlow)" />
      <circle cx="0" cy="0" r="16" fill="none" stroke="#ffffff" stroke-width="2" />
      <line x1="-16" y1="0" x2="16" y2="0" stroke="#ffffff" stroke-width="1.5" />
      <line x1="0" y1="-16" x2="0" y2="16" stroke="#ffffff" stroke-width="1.5" />
      <ellipse cx="0" cy="0" rx="8" ry="16" fill="none" stroke="#ffffff" stroke-width="1.5" />
    </g>

    <!-- 5. Growth Bar Chart -->
    <g transform="translate(195, 0)">
      <circle cx="0" cy="0" r="34" fill="#030d1d" stroke="#00f0ff" stroke-width="2.5" filter="url(#softGlow)" />
      <line x1="-15" y1="14" x2="15" y2="14" stroke="#ffffff" stroke-width="2" />
      <rect x="-13" y="6" width="5" height="8" fill="#38bdf8" />
      <rect x="-5" y="0" width="5" height="14" fill="#00f0ff" />
      <rect x="3" y="-8" width="5" height="22" fill="#ffffff" />
      <polyline points="2,-12 14,-14 12,-2" fill="none" stroke="#00f0ff" stroke-width="2" />
    </g>

    <!-- 6. Megaphone Broadcast -->
    <g transform="translate(325, 0)">
      <circle cx="0" cy="0" r="34" fill="#030d1d" stroke="#00f0ff" stroke-width="2.5" filter="url(#softGlow)" />
      <path d="M -12 -4 L -2 -9 L 10 -15 L 10 9 L -2 3 L -12 -2 Z" fill="#ffffff" stroke="#020617" stroke-width="1" />
      <rect x="-14" y="-5" width="4" height="8" rx="1" fill="#38bdf8" />
      <path d="M -4 3 L -2 12 L 2 12 L 0 3 Z" fill="#ffffff" />
      <path d="M 13 -9 Q 17 -3 13 3" fill="none" stroke="#00f0ff" stroke-width="2" stroke-linecap="round" />
      <path d="M 16 -13 Q 22 -3 16 7" fill="none" stroke="#00f0ff" stroke-width="2" stroke-linecap="round" />
    </g>
  </g>
</svg>`;

// 3. Horizontal Sleek Lockup (Width 600 x Height 120) for Headers, Banners & Clean Navigation
const horizontalLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 120" width="600" height="120">
  <defs>
    <linearGradient id="hChromeSilver" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="30%" stop-color="#cbd5e1" />
      <stop offset="60%" stop-color="#64748b" />
      <stop offset="90%" stop-color="#f8fafc" />
      <stop offset="100%" stop-color="#94a3b8" />
    </linearGradient>

    <linearGradient id="hNeonCyan" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="50%" stop-color="#00d8ff" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>

    <filter id="hGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="4" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <!-- Left Icon Mark (x: 10 to 110) -->
  <g transform="translate(10, 10) scale(0.5)">
    ${brandIconSvg.replace('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">', '').replace('</svg>', '')}
  </g>

  <!-- Typography Block -->
  <g transform="translate(130, 48)">
    <!-- APEX (Silver Chrome) -->
    <text x="0" y="0" 
          font-family="'Montserrat', 'Arial Black', sans-serif" 
          font-size="38" 
          font-weight="900" 
          letter-spacing="1" 
          fill="url(#hChromeSilver)">APEX</text>
    <!-- LEAD (Neon Cyan) -->
    <text x="126" y="0" 
          font-family="'Montserrat', 'Arial Black', sans-serif" 
          font-size="38" 
          font-weight="900" 
          letter-spacing="1" 
          fill="url(#hNeonCyan)" 
          filter="url(#hGlow)">LEAD</text>
    <!-- SYSTEMS (Caps Pill) -->
    <rect x="250" y="-30" width="105" height="34" rx="8" fill="#0f172a" stroke="#00d8ff" stroke-width="1.2" />
    <text x="302" y="-8" 
          font-family="'Montserrat', 'Arial', sans-serif" 
          font-size="14" 
          font-weight="800" 
          letter-spacing="3" 
          text-anchor="middle" 
          fill="#e2e8f0">SYSTEMS</text>
  </g>

  <!-- Subtitle: AI VISIBILITY SOLUTIONS -->
  <g transform="translate(132, 86)">
    <text x="0" y="0" 
          font-family="'JetBrains Mono', 'Montserrat', sans-serif" 
          font-size="13" 
          font-weight="800" 
          letter-spacing="5" 
          fill="#38bdf8">AI VISIBILITY SOLUTIONS</text>
    <circle cx="280" cy="-4" r="3" fill="#00d8ff" filter="url(#hGlow)" />
    <text x="295" y="0" 
          font-family="'JetBrains Mono', sans-serif" 
          font-size="11" 
          font-weight="700" 
          letter-spacing="2" 
          fill="#94a3b8">AEO • SEO • GEO</text>
  </g>
</svg>`;

async function renderAllOptimizedAssets() {
  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // 1. Save SVGs
  fs.writeFileSync(path.join(publicDir, 'brand-icon.svg'), brandIconSvg, 'utf-8');
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), brandIconSvg, 'utf-8');
  fs.writeFileSync(path.join(publicDir, 'logo.svg'), masterLogoSvg, 'utf-8');
  fs.writeFileSync(path.join(publicDir, 'logo-horizontal.svg'), horizontalLogoSvg, 'utf-8');
  console.log('Saved SVG vector assets.');

  // 2. Render brand-icon.png (512x512 crisp PNG)
  await sharp(Buffer.from(brandIconSvg))
    .resize(512, 512)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'brand-icon.png'));
  console.log('Rendered /public/brand-icon.png (512x512)');

  // 3. Render master logo.png (1200x1200 high-res)
  await sharp(Buffer.from(masterLogoSvg))
    .resize(1200, 1200)
    .png({ quality: 100, compressionLevel: 7 })
    .toFile(path.join(publicDir, 'logo.png'));
  console.log('Rendered /public/logo.png (1200x1200)');

  // 4. Render logo-horizontal.png (1200x240 crisp banner)
  await sharp(Buffer.from(horizontalLogoSvg))
    .resize(1200, 240)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'logo-horizontal.png'));
  console.log('Rendered /public/logo-horizontal.png');

  // 5. Render Open Graph Social Preview (1200x630)
  const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
    <rect width="1200" height="630" fill="#020617" />
    <circle cx="600" cy="315" r="450" fill="#08223d" opacity="0.6" />
    <g transform="translate(300, 15) scale(0.6)">
      ${masterLogoSvg.replace('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">', '').replace('</svg>', '')}
    </g>
  </svg>`;

  await sharp(Buffer.from(ogSvg))
    .resize(1200, 630)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'og-image.png'));
  console.log('Rendered /public/og-image.png (1200x630)');

  // 6. Render Favicons
  await sharp(Buffer.from(brandIconSvg))
    .resize(64, 64)
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));
  
  await sharp(Buffer.from(brandIconSvg))
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Rendered favicons.');
}

renderAllOptimizedAssets().catch(console.error);
