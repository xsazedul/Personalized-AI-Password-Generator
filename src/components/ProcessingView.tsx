import React, { useEffect, useState } from 'react';
import { Sparkles, Cpu, CheckCircle2, BookOpen } from 'lucide-react';
import { Language } from '../types';
import { UI_TEXT } from '../locales/translations';

interface ProcessingViewProps {
  language: Language;
  onComplete: () => void;
}

export const ProcessingView: React.FC<ProcessingViewProps> = ({ language, onComplete }) => {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [percent, setPercent] = useState(10);
  const [activeLogIndex, setActiveLogIndex] = useState(0);

  const stages = UI_TEXT.processing.stages;
  const logs = UI_TEXT.processing.terminalLog[language];

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 450);
          return 100;
        }

        const next = prev + 3;
        if (next >= 75) {
          setCurrentStageIndex(3);
        } else if (next >= 50) {
          setCurrentStageIndex(2);
        } else if (next >= 25) {
          setCurrentStageIndex(1);
        }
        return next;
      });
    }, 90);

    const logInterval = setInterval(() => {
      setActiveLogIndex((prev) => (prev < logs.length - 1 ? prev + 1 : prev));
    }, 450);

    return () => {
      clearInterval(interval);
      clearInterval(logInterval);
    };
  }, [logs.length, onComplete]);

  return (
    <div className="relative z-10 w-full max-w-xl mx-auto px-4 py-10 sm:py-16 flex flex-col items-center text-center">
      
      {/* 3D Hologram Spinner Core */}
      <div className="relative w-44 h-44 sm:w-52 sm:h-52 mb-8 flex items-center justify-center">
        
        {/* Outer Pulsing Aura */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-300/40 via-sky-300/30 to-pink-300/30 dark:from-indigo-600/30 dark:to-cyan-500/30 blur-2xl animate-pulse" />

        {/* 3D Ring 1 - Outer Clockwise */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-400 dark:border-indigo-500/40 animate-spin-slow" />

        {/* 3D Ring 2 - Reverse Counter-Clockwise */}
        <div
          className="absolute inset-3 rounded-full border-2 border-cyan-500 dark:border-cyan-400/50"
          style={{ animation: 'spin 8s linear infinite reverse' }}
        />

        {/* 3D Ring 3 - Tilted Ellipse Effect */}
        <div
          className="absolute inset-6 rounded-full border-2 border-indigo-500/40"
          style={{
            transform: 'rotateX(60deg) rotateZ(45deg)',
            animation: 'spin 6s linear infinite'
          }}
        />

        {/* Center Neural Node with Memory Book Icon */}
        <div className="relative w-24 h-24 rounded-3xl bg-white dark:bg-slate-900 border-2 border-indigo-500/60 dark:border-cyan-400/80 shadow-xl flex flex-col items-center justify-center backdrop-blur-xl">
          <BookOpen className="w-8 h-8 text-indigo-600 dark:text-cyan-400 animate-bounce" />
          <span className="text-xs font-mono-pwd font-extrabold text-slate-800 dark:text-white mt-1">
            {percent}%
          </span>
        </div>

      </div>

      {/* Main Title & Subtitle */}
      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
        {UI_TEXT.processing.mainTitle[language]}
      </h2>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 max-w-md font-medium">
        {UI_TEXT.processing.subtitle[language]}
      </p>

      {/* Active Stage Banner */}
      <div className="w-full glass-panel rounded-2xl p-5 mb-6 border border-slate-200/90 dark:border-cyan-500/30 shadow-lg">
        <div className="flex items-center justify-center gap-3 text-indigo-700 dark:text-cyan-300 font-bold text-base sm:text-lg">
          <Sparkles className="w-5 h-5 text-indigo-600 dark:text-cyan-400 animate-spin-slow" />
          <span>{stages[currentStageIndex][language]}</span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 mt-4 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-600 via-cyan-500 to-emerald-500 transition-all duration-150 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      {/* Terminal Telemetry Logs (Crisp & High-Contrast) */}
      <div className="w-full rounded-2xl bg-slate-900 text-slate-200 border border-slate-800 p-4 text-left font-mono-pwd text-[11px] space-y-1.5 shadow-md">
        <div className="flex items-center justify-between text-slate-400 text-[10px] pb-2 border-b border-slate-800 font-sans font-semibold">
          <span className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            LIVE CSPRNG VAULT TELEMETRY
          </span>
          <span className="text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-2.5 h-2.5" /> SECURE
          </span>
        </div>

        <div className="h-16 overflow-hidden flex flex-col justify-end">
          {logs.slice(0, activeLogIndex + 1).slice(-3).map((log, i) => (
            <div key={i} className="text-slate-300 truncate">
              <span className="text-cyan-400">&gt; </span>
              {log}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
