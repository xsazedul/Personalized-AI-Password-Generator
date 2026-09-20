import React from 'react';

interface BookIllustrationProps {
  type: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export const BookIllustration: React.FC<BookIllustrationProps> = ({ type, size = 'md' }) => {
  // Dimension presets
  const dim =
    size === 'hero'
      ? 'w-64 h-52 sm:w-80 sm:h-64'
      : size === 'lg'
      ? 'w-24 h-24 sm:w-28 sm:h-28'
      : size === 'md'
      ? 'w-16 h-16 sm:w-20 sm:h-20'
      : 'w-10 h-10';

  if (type === 'hero_book') {
    return (
      <div className={`relative ${dim} flex items-center justify-center select-none`}>
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/25 via-sky-400/20 to-pink-500/25 rounded-full blur-2xl animate-pulse-slow" />
        
        {/* 3D Isometric Memory Book to Vault SVG */}
        <svg viewBox="0 0 320 260" className="w-full h-full drop-shadow-2xl overflow-visible">
          <defs>
            <linearGradient id="bookCover" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="pageGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
            <linearGradient id="goldRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <filter id="shadowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#4f46e5" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Book Spine Shadow */}
          <ellipse cx="160" cy="220" rx="110" ry="18" fill="#cbd5e1" opacity="0.6" />

          {/* Left Book Page Layers (3D Stacking) */}
          <path d="M 60 180 Q 110 190 160 195 L 160 85 Q 110 80 60 70 Z" fill="#e2e8f0" />
          <path d="M 55 183 Q 107 193 158 198 L 158 88 Q 107 83 55 73 Z" fill="#f1f5f9" />
          <path d="M 50 185 Q 105 195 160 200 L 160 90 Q 105 85 50 75 Z" fill="url(#pageGrad)" filter="url(#shadowFilter)" stroke="#cbd5e1" strokeWidth="1.5" />

          {/* Right Book Page Layers (3D Stacking) */}
          <path d="M 260 180 Q 210 190 160 195 L 160 85 Q 210 80 260 70 Z" fill="#e2e8f0" />
          <path d="M 265 183 Q 213 193 162 198 L 162 88 Q 213 83 265 73 Z" fill="#f1f5f9" />
          <path d="M 270 185 Q 215 195 160 200 L 160 90 Q 215 85 270 75 Z" fill="url(#pageGrad)" filter="url(#shadowFilter)" stroke="#cbd5e1" strokeWidth="1.5" />

          {/* Memory Book Cover Wings */}
          <path d="M 45 190 Q 105 200 160 205 L 160 92 Q 105 87 45 77 Z" fill="url(#bookCover)" opacity="0.9" />
          <path d="M 275 190 Q 215 200 160 205 L 160 92 Q 215 87 275 77 Z" fill="url(#bookCover)" opacity="0.9" />

          {/* Spine Ribbon Marker */}
          <path d="M 160 75 Q 160 150 175 225 L 168 232 L 160 220 L 152 232 L 145 225 Q 160 150 160 75 Z" fill="url(#goldRibbon)" />

          {/* Handwritten Slam Book Memory Notes on Left Page */}
          <g transform="translate(68, 100) rotate(-3)">
            <text x="0" y="10" fill="#64748b" fontSize="9" fontFamily="'Hind Siliguri', sans-serif" fontWeight="600">📖 Memory Log #01</text>
            <line x1="0" y1="18" x2="68" y2="18" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="2,2" />
            <text x="0" y="32" fill="#4f46e5" fontSize="10" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="bold">First Love: M...</text>
            <line x1="0" y1="40" x2="72" y2="40" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="2,2" />
            <text x="0" y="54" fill="#0284c7" fontSize="10" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="bold">Classmate: S...</text>
            <line x1="0" y1="62" x2="65" y2="62" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="2,2" />
            <text x="0" y="76" fill="#10b981" fontSize="9" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="bold">Roll: #17</text>
          </g>

          {/* Floating Cryptographic Transformation on Right Page */}
          <g transform="translate(175, 95) rotate(3)">
            <text x="0" y="10" fill="#64748b" fontSize="9" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600">🔒 AI Vault Synthesis</text>
            <rect x="0" y="18" width="76" height="24" rx="6" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1" />
            <text x="6" y="34" fill="#4338ca" fontSize="11" fontFamily="'Fira Code', monospace" fontWeight="bold">My&amp;Rbn$19#</text>
            
            <rect x="0" y="48" width="76" height="22" rx="6" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1" />
            <text x="6" y="63" fill="#0369a1" fontSize="10" fontFamily="'Fira Code', monospace" fontWeight="bold">[Mk@74#Np9]</text>
          </g>

          {/* Floating Golden Lock & Key Particle in Center */}
          <g transform="translate(142, 40)" filter="url(#shadowFilter)">
            <circle cx="18" cy="18" r="22" fill="#ffffff" stroke="#f59e0b" strokeWidth="2.5" />
            <path d="M 12 18 L 12 12 Q 12 6 18 6 Q 24 6 24 12 L 24 18" fill="none" stroke="#d97706" strokeWidth="3" strokeLinecap="round" />
            <rect x="9" y="16" width="18" height="14" rx="3" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
            <circle cx="18" cy="22" r="2" fill="#78350f" />
            <line x1="18" y1="24" x2="18" y2="27" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Floating Sparkle Stars */}
          <g transform="translate(40, 45)" fill="#f59e0b" opacity="0.85">
            <polygon points="10,0 12,7 19,10 12,13 10,20 8,13 1,10 8,7" />
          </g>
          <g transform="translate(265, 50)" fill="#6366f1" opacity="0.85">
            <polygon points="8,0 10,6 16,8 10,10 8,16 6,10 0,8 6,6" />
          </g>
        </svg>
      </div>
    );
  }

  // Question Step Illustrations (Detailed 3D Book & Memorabilia Badges)
  switch (type) {
    case 'Heart': // Step 1: First Love Memory Book
      return (
        <div className={`relative ${dim} flex items-center justify-center`}>
          <div className="absolute inset-0 bg-rose-400/20 rounded-2xl blur-lg" />
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="q1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="100%" stopColor="#e11d48" />
              </linearGradient>
            </defs>
            {/* Book Body */}
            <rect x="18" y="20" width="64" height="60" rx="8" fill="#ffffff" stroke="#fecdd3" strokeWidth="2" />
            <path d="M 18 20 Q 50 25 82 20 L 82 80 Q 50 85 18 80 Z" fill="#fff1f2" />
            <line x1="50" y1="22" x2="50" y2="83" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3,2" />
            {/* Ribbon */}
            <path d="M 50 22 L 50 48 L 54 44 L 58 48 L 58 22" fill="#f43f5e" />
            {/* Floating 3D Heart */}
            <path
              d="M 50 64 C 50 64 36 54 36 44 C 36 38 41 34 46 34 C 48.5 34 50 36 50 36 C 50 36 51.5 34 54 34 C 59 34 64 38 64 44 C 64 54 50 64 50 64 Z"
              fill="url(#q1Grad)"
              stroke="#ffffff"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      );

    case 'Sparkles': // Step 2: First Secret Crush Diary
      return (
        <div className={`relative ${dim} flex items-center justify-center`}>
          <div className="absolute inset-0 bg-amber-400/20 rounded-2xl blur-lg" />
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="q2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
            </defs>
            <rect x="20" y="18" width="60" height="64" rx="8" fill="#ffffff" stroke="#fde68a" strokeWidth="2" />
            <rect x="25" y="23" width="50" height="54" rx="5" fill="#fef3c7" />
            <path d="M 20 45 L 80 45" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,3" />
            {/* Star Sparkle Bookmark */}
            <polygon points="50,28 53,38 64,41 55,48 57,58 50,52 43,58 45,48 36,41 47,38" fill="url(#q2Grad)" stroke="#ffffff" strokeWidth="1.5" />
          </svg>
        </div>
      );

    case 'Users': // Step 3: Favorite Classmate Yearbook
      return (
        <div className={`relative ${dim} flex items-center justify-center`}>
          <div className="absolute inset-0 bg-cyan-400/20 rounded-2xl blur-lg" />
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <rect x="18" y="20" width="64" height="60" rx="8" fill="#ffffff" stroke="#bae6fd" strokeWidth="2" />
            <path d="M 22 24 L 78 24 L 78 76 L 22 76 Z" fill="#f0f9ff" />
            {/* Two Classmate Avatars in Yearbook Frame */}
            <rect x="28" y="32" width="20" height="24" rx="4" fill="#38bdf8" />
            <circle cx="38" cy="40" r="4.5" fill="#ffffff" />
            <path d="M 31 52 Q 38 47 45 52" stroke="#ffffff" strokeWidth="2" fill="none" />

            <rect x="52" y="32" width="20" height="24" rx="4" fill="#6366f1" />
            <circle cx="62" cy="40" r="4.5" fill="#ffffff" />
            <path d="M 55 52 Q 62 47 69 52" stroke="#ffffff" strokeWidth="2" fill="none" />

            {/* Friendship Ribbon */}
            <rect x="28" y="62" width="44" height="6" rx="2" fill="#0284c7" />
          </svg>
        </div>
      );

    case 'EyeOff': // Step 4: Unconfessed Love Letter Journal
      return (
        <div className={`relative ${dim} flex items-center justify-center`}>
          <div className="absolute inset-0 bg-purple-400/20 rounded-2xl blur-lg" />
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <rect x="20" y="20" width="60" height="60" rx="8" fill="#ffffff" stroke="#e9d5ff" strokeWidth="2" />
            {/* Folded Envelope on Book */}
            <rect x="26" y="32" width="48" height="34" rx="4" fill="#f3e8ff" stroke="#c084fc" strokeWidth="1.5" />
            <path d="M 26 34 L 50 52 L 74 34" stroke="#a855f7" strokeWidth="2" fill="none" />
            {/* Wax Seal Lock */}
            <circle cx="50" cy="52" r="7" fill="#9333ea" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="50" cy="52" r="3" fill="#f3e8ff" />
          </svg>
        </div>
      );

    case 'Flame': // Step 5: Celebrity / Married Crush Golden Book
      return (
        <div className={`relative ${dim} flex items-center justify-center`}>
          <div className="absolute inset-0 bg-orange-400/20 rounded-2xl blur-lg" />
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <rect x="18" y="18" width="64" height="64" rx="10" fill="#ffffff" stroke="#fed7aa" strokeWidth="2" />
            <rect x="24" y="24" width="52" height="52" rx="6" fill="#fff7ed" />
            {/* Golden Star Flame */}
            <path
              d="M 50 30 Q 55 42 62 46 Q 54 52 56 64 Q 50 58 44 64 Q 46 52 38 46 Q 45 42 50 30 Z"
              fill="#f97316"
              stroke="#ea580c"
              strokeWidth="1.5"
            />
            <circle cx="50" cy="49" r="4" fill="#ffedd5" />
          </svg>
        </div>
      );

    case 'Zap': // Step 6: Body Count / Entropy Seed Pad
      return (
        <div className={`relative ${dim} flex items-center justify-center`}>
          <div className="absolute inset-0 bg-yellow-400/20 rounded-2xl blur-lg" />
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <rect x="20" y="20" width="60" height="60" rx="8" fill="#ffffff" stroke="#fef08a" strokeWidth="2" />
            <rect x="26" y="26" width="48" height="48" rx="6" fill="#fefce8" />
            {/* Lightning bolt seed */}
            <path d="M 54 30 L 40 48 L 50 48 L 44 68 L 62 46 L 52 46 Z" fill="#eab308" stroke="#ca8a04" strokeWidth="1.5" />
          </svg>
        </div>
      );

    case 'Hash': // Step 7: Class 10 Exam Roll Sheet Book
      return (
        <div className={`relative ${dim} flex items-center justify-center`}>
          <div className="absolute inset-0 bg-emerald-400/20 rounded-2xl blur-lg" />
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <rect x="20" y="16" width="60" height="68" rx="6" fill="#ffffff" stroke="#a7f3d0" strokeWidth="2" />
            <path d="M 26 22 L 74 22" stroke="#10b981" strokeWidth="2" />
            {/* OMR Roll Bubbles */}
            <circle cx="34" cy="34" r="3.5" fill="#10b981" />
            <circle cx="44" cy="34" r="3.5" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
            <circle cx="54" cy="34" r="3.5" fill="#10b981" />
            <circle cx="64" cy="34" r="3.5" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />

            <circle cx="34" cy="46" r="3.5" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
            <circle cx="44" cy="46" r="3.5" fill="#10b981" />
            <circle cx="54" cy="46" r="3.5" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
            <circle cx="64" cy="46" r="3.5" fill="#10b981" />

            {/* Roll Tag */}
            <rect x="30" y="58" width="40" height="16" rx="4" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" />
            <text x="35" y="70" fill="#047857" fontSize="10" fontFamily="'Fira Code', monospace" fontWeight="bold">#ROLL</text>
          </svg>
        </div>
      );

    case 'ShieldAlert': // Step 8: Confession Vault Journal
      return (
        <div className={`relative ${dim} flex items-center justify-center`}>
          <div className="absolute inset-0 bg-indigo-400/20 rounded-2xl blur-lg" />
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <rect x="20" y="20" width="60" height="60" rx="8" fill="#ffffff" stroke="#c7d2fe" strokeWidth="2" />
            <rect x="25" y="25" width="50" height="50" rx="6" fill="#eef2ff" />
            {/* Vault Keylock on Book */}
            <rect x="36" y="44" width="28" height="22" rx="4" fill="#4f46e5" />
            <path d="M 42 44 L 42 38 Q 42 30 50 30 Q 58 30 58 38 L 58 44" fill="none" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round" />
            <circle cx="50" cy="53" r="2.5" fill="#ffffff" />
            <line x1="50" y1="55" x2="50" y2="60" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      );

    default:
      return null;
  }
};
