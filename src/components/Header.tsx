import React from 'react';
import { Globe, Cpu, BookOpen } from 'lucide-react';
import { Language } from '../types';
import { UI_TEXT } from '../locales/translations';

interface HeaderProps {
  language: Language;
  onToggleLanguage: () => void;
  onLogoClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onToggleLanguage,
  onLogoClick
}) => {
  return (
    <header className="relative z-30 w-full max-w-6xl mx-auto px-4 sm:px-6 py-4">
      <div className="glass-panel rounded-2xl px-4 sm:px-6 py-3.5 flex items-center justify-between shadow-lg backdrop-blur-xl border border-slate-200/90">
        
        {/* Brand Logo & Name */}
        <button
          onClick={onLogoClick}
          className="flex items-center gap-3 group focus:outline-none text-left"
          title="Return to Home"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-cyan-600 flex items-center justify-center shadow-md shadow-indigo-500/25 transform group-hover:scale-105 group-hover:rotate-2 transition-transform duration-300">
            <BookOpen className="w-5 h-5 text-white" />
            <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-indigo-800 bg-clip-text text-transparent">
                {UI_TEXT.appName[language]}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700">
                <Cpu className="w-2.5 h-2.5" />
                AI CSPRNG
              </span>
            </div>
            <p className="text-[11px] text-slate-500 hidden sm:block font-medium">
              {UI_TEXT.appTagline[language]}
            </p>
          </div>
        </button>

        {/* Right Controls: Security Badge + Language Switcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Ephemeral Privacy Pill */}
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>{UI_TEXT.badgeZeroStorage[language]}</span>
          </div>

          {/* Language Switcher */}
          <button
            onClick={onToggleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 hover:text-indigo-600 transition-all duration-200 shadow-sm font-bold text-xs sm:text-sm"
            aria-label="Switch Language"
          >
            <Globe className="w-4 h-4 text-cyan-600" />
            <span className="tracking-wide">
              {language === 'en' ? '🇧🇩 বাংলা' : '🇬🇧 English'}
            </span>
          </button>

        </div>
      </div>
    </header>
  );
};
