import React from 'react';
import { Globe, Cpu, Sun, Moon, BookOpen } from 'lucide-react';
import { Language } from '../types';
import { UI_TEXT } from '../locales/translations';

interface HeaderProps {
  language: Language;
  isDark: boolean;
  onToggleLanguage: () => void;
  onToggleTheme: () => void;
  onLogoClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  isDark,
  onToggleLanguage,
  onToggleTheme,
  onLogoClick
}) => {
  return (
    <header className="relative z-30 w-full max-w-6xl mx-auto px-4 sm:px-6 py-4">
      <div className="glass-panel rounded-2xl px-4 sm:px-6 py-3.5 flex items-center justify-between shadow-lg backdrop-blur-xl border border-slate-200/80 dark:border-indigo-500/20">
        
        {/* Brand Logo & Name */}
        <button
          onClick={onLogoClick}
          className="flex items-center gap-3 group focus:outline-none text-left"
          title="Return to Home"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-cyan-500 flex items-center justify-center shadow-md shadow-indigo-500/25 transform group-hover:scale-105 group-hover:rotate-2 transition-transform duration-300">
            <BookOpen className="w-5 h-5 text-white" />
            <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-indigo-900 to-indigo-700 dark:from-white dark:via-slate-100 dark:to-indigo-200 bg-clip-text text-transparent">
                {UI_TEXT.appName[language]}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-500/15 border border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-300">
                <Cpu className="w-2.5 h-2.5" />
                AI CSPRNG
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block font-medium">
              {UI_TEXT.appTagline[language]}
            </p>
          </div>
        </button>

        {/* Right Controls: Security Badge + Theme Switcher + Language Switcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Ephemeral Privacy Pill */}
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>{UI_TEXT.badgeZeroStorage[language]}</span>
          </div>

          {/* Theme Toggle (Light / Dark) */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 shadow-sm"
            title={isDark ? 'Switch to Bright Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* Language Switcher */}
          <button
            onClick={onToggleLanguage}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white transition-all duration-200 shadow-sm font-semibold text-xs sm:text-sm"
            aria-label="Switch Language"
          >
            <Globe className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span className="tracking-wide">
              {language === 'en' ? '🇧🇩 বাংলা' : '🇬🇧 English'}
            </span>
          </button>

        </div>
      </div>
    </header>
  );
};
