import React from 'react';
import { ArrowRight, UserX, ShieldCheck, Brain, Lock, CheckCircle2, BookHeart } from 'lucide-react';
import { Language } from '../types';
import { UI_TEXT } from '../locales/translations';
import { BookIllustration } from './BookIllustration';

interface LandingViewProps {
  language: Language;
  onStart: () => void;
}

export const LandingView: React.FC<LandingViewProps> = ({ language, onStart }) => {
  const t = UI_TEXT.landing;

  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-6 sm:py-12 flex flex-col items-center">
      
      {/* 3D Floating Hero Container */}
      <div className="relative w-full text-center mb-10 sm:mb-14">
        
        {/* Glow ambient background aura (Bright & Soft) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[32rem] h-80 sm:h-[32rem] bg-gradient-to-tr from-indigo-200/60 via-sky-200/50 to-pink-200/50 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

        {/* Hero Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-indigo-200 text-indigo-700 text-xs sm:text-sm font-bold mb-6 shadow-sm transform hover:scale-105 transition-transform duration-300">
          <BookHeart className="w-4 h-4 text-rose-500" />
          <span>{UI_TEXT.badgeZeroStorage[language]}</span>
        </div>

        {/* 3D Visual Memory Book to Vault Showcase */}
        <div className="flex justify-center mb-6">
          <BookIllustration type="hero_book" size="hero" />
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-tight sm:leading-none mb-5">
          <span className="block">{t.heroTitle[language]}</span>
          <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-indigo-600 via-cyan-600 to-indigo-800 bg-clip-text text-transparent">
            {language === 'en' ? 'Uncrackable Yet Memorable.' : 'স্মৃতিতে সহজ, নিরাপত্তায় অটুট।'}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 font-medium leading-relaxed mb-8 px-2">
          {t.heroSubtitle[language]}
        </p>

        {/* Primary CTA Button with 3D Depth */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStart}
            className="group relative inline-flex items-center justify-center gap-3 px-9 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-lg shadow-xl shadow-indigo-500/25 hover:shadow-2xl hover:shadow-cyan-500/25 hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
          >
            <span>{t.ctaStart[language]}</span>
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1.5 transition-transform duration-200" />
            <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </button>
        </div>

        {/* Quick Highlights Under CTA */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-6 text-xs text-slate-600 font-semibold">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            {language === 'en' ? '8 Nostalgic Memory Questions' : '৮টি স্মৃতিচারণ প্রশ্ন'}
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            {language === 'en' ? 'Skip Any Question Anytime' : 'যেকোনো প্রশ্ন স্কিপ করার সুবিধা'}
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            {language === 'en' ? '5 Distinct Password Architectures' : '৫টি সম্পূর্ণ ভিন্ন পাসওয়ার্ড'}
          </span>
        </div>

      </div>

      {/* 4 Feature Cards (Bright & Glassmorphic) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
        
        {/* Card 1 */}
        <div className="glass-panel glass-panel-hover rounded-2xl p-6 relative overflow-hidden group border border-slate-200/90">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-all duration-300 shadow-sm">
            <UserX className="w-6 h-6" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
            {t.feature1Title[language]}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            {t.feature1Desc[language]}
          </p>
        </div>

        {/* Card 2 */}
        <div className="glass-panel glass-panel-hover rounded-2xl p-6 relative overflow-hidden group border border-slate-200/90">
          <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 mb-4 group-hover:scale-110 transition-all duration-300 shadow-sm">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
            {t.feature2Title[language]}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            {t.feature2Desc[language]}
          </p>
        </div>

        {/* Card 3 */}
        <div className="glass-panel glass-panel-hover rounded-2xl p-6 relative overflow-hidden group border border-slate-200/90">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-all duration-300 shadow-sm">
            <Brain className="w-6 h-6" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
            {t.feature3Title[language]}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            {t.feature3Desc[language]}
          </p>
        </div>

        {/* Card 4 */}
        <div className="glass-panel glass-panel-hover rounded-2xl p-6 relative overflow-hidden group border border-slate-200/90">
          <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-all duration-300 shadow-sm">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
            {t.feature4Title[language]}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            {t.feature4Desc[language]}
          </p>
        </div>

      </div>

      {/* Bottom Privacy Reassurance */}
      <div className="mt-12 text-center text-xs text-slate-500 max-w-lg font-medium">
        {language === 'en'
          ? '🔒 Cryptographic Guarantee: Answers are processed in volatile client memory only. No analytics, no server requests, no cookies.'
          : '🔒 ক্রিপ্টোগ্রাফিক নিশ্চয়তা: সমস্ত উত্তর কেবল আপনার ব্রাউজারের অস্থায়ী মেমরিতে প্রক্রিয়া করা হয়। কোনো সার্ভারে পাঠানো হয় না।'}
      </div>

    </div>
  );
};
