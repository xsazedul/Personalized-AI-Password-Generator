import React, { useState, useEffect } from 'react';
import {
  Copy,
  Check,
  Edit3,
  RefreshCw,
  RotateCcw,
  ShieldCheck,
  HelpCircle,
  Brain,
  AlertTriangle,
  Eye,
  EyeOff,
  Globe,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { GeneratedPasswordItem, Language } from '../types';
import { UI_TEXT } from '../locales/translations';
import { evaluatePasswordStrength } from '../lib/strength';

interface ResultViewProps {
  passwords: GeneratedPasswordItem[];
  language: Language;
  onRegenerate: () => void;
  onStartOver: () => void;
  onToggleLanguage: () => void;
  onUpdatePassword: (id: string, newPassword: string) => void;
}

export const ResultView: React.FC<ResultViewProps> = ({
  passwords,
  language,
  onRegenerate,
  onStartOver,
  onToggleLanguage,
  onUpdatePassword
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [revealedMap, setRevealedMap] = useState<Record<string, boolean>>({});
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<string>('');

  const t = UI_TEXT.results;

  useEffect(() => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#4f46e5', '#0284c7', '#10b981', '#f59e0b']
      });
    } catch {
      // ignore
    }
  }, []);

  const handleCopy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => {
        setCopiedId((prev) => (prev === id ? null : prev));
      }, 2500);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedId(id);
      setTimeout(() => {
        setCopiedId((prev) => (prev === id ? null : prev));
      }, 2500);
    }
  };

  const toggleReveal = (id: string) => {
    setRevealedMap((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const startEdit = (item: GeneratedPasswordItem) => {
    setEditingId(item.id);
    setEditValue(item.password);
  };

  const saveEdit = (id: string) => {
    if (editValue.trim().length > 0) {
      onUpdatePassword(id, editValue);
    }
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditValue('');
  };

  return (
    <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">
      
      {/* Top Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm font-semibold mb-3 shadow-sm">
          <ShieldCheck className="w-4 h-4" />
          <span>{language === 'en' ? 'CSPRNG Hardened • Cryptographically Verified' : 'সিএসপিআরএনজি সুরক্ষিত • গাণিতিকভাবে পরীক্ষিত'}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
          {t.heading[language]}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {t.subheading[language]}
        </p>
      </div>

      {/* 5 Password Cards Stack */}
      <div className="space-y-6 mb-12">
        {passwords.map((item, index) => {
          const isCopied = copiedId === item.id;
          const isRevealed = !!revealedMap[item.id];
          const isEditing = editingId === item.id;

          const liveStrength = isEditing
            ? evaluatePasswordStrength(editValue)
            : item.strength;

          const isWeak = liveStrength.score <= 1;
          const isModerate = liveStrength.score === 2;

          return (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover rounded-3xl p-5 sm:p-7 border border-slate-200/90 dark:border-indigo-500/25 relative overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              
              {/* Card Header: Strategy Badge + Index + Strength Indicator */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-xl bg-indigo-50 dark:bg-indigo-500/20 border border-indigo-200 dark:border-indigo-500/40 text-indigo-700 dark:text-indigo-300 text-xs font-bold flex items-center justify-center font-mono-pwd shadow-sm">
                    #{index + 1}
                  </span>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white tracking-wide">
                      {item.strategyName[language]}
                    </span>
                  </div>
                  {item.isEdited && (
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-500/15 border border-amber-200 dark:border-amber-500/30 text-amber-700 dark:text-amber-300 font-bold">
                      {language === 'en' ? 'Edited' : 'এডিট করা'}
                    </span>
                  )}
                </div>

                {/* Strength Meter Badge */}
                <div className="flex items-center gap-2">
                  <div
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm"
                    style={{
                      backgroundColor: `${liveStrength.color}15`,
                      borderColor: `${liveStrength.color}40`,
                      borderWidth: '1px',
                      color: liveStrength.color
                    }}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: liveStrength.color }}
                    />
                    <span>{liveStrength.label[language]}</span>
                  </div>
                  
                  {/* Estimated Crack Time Pill */}
                  <span className="hidden sm:inline-block text-[11px] text-slate-500 dark:text-slate-400 font-mono-pwd font-semibold">
                    {liveStrength.crackTimeDisplay[language]}
                  </span>
                </div>
              </div>

              {/* Password Display / Edit Field */}
              <div className="mb-5">
                {isEditing ? (
                  <div className="space-y-2">
                    <div className="relative">
                      <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        autoFocus
                        className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-600 focus:border-cyan-500 text-slate-900 dark:text-white font-mono-pwd text-base sm:text-lg tracking-wider outline-none shadow-sm"
                      />
                    </div>

                    {/* Edit Controls */}
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => saveEdit(item.id)}
                          className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-sm"
                        >
                          {t.saveBtn[language]}
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold transition-colors border border-slate-200 dark:border-slate-700"
                        >
                          {t.cancelBtn[language]}
                        </button>
                      </div>

                      {item.isEdited && (
                        <button
                          onClick={() => {
                            onUpdatePassword(item.id, item.originalGenerated);
                            cancelEdit();
                          }}
                          className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                        >
                          {t.resetEditBtn[language]}
                        </button>
                      )}
                    </div>

                    {/* Warning if edited password becomes weak */}
                    {(isWeak || isModerate) && (
                      <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs mt-2">
                        <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
                        <span>{t.weakWarning[language]}</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-slate-50/90 dark:bg-slate-950/80 border border-slate-200/90 dark:border-slate-800/90 group shadow-sm">
                    
                    {/* Password String with Mask Toggle */}
                    <div className="flex items-center gap-3 overflow-hidden">
                      <span className="font-mono-pwd text-base sm:text-xl font-bold tracking-wider text-slate-900 dark:text-slate-100 select-all break-all">
                        {isRevealed
                          ? item.password
                          : '•'.repeat(Math.min(item.password.length, 18))}
                      </span>
                    </div>

                    {/* Quick Card Actions */}
                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                      
                      {/* Reveal Toggle */}
                      <button
                        onClick={() => toggleReveal(item.id)}
                        className="p-2.5 rounded-xl bg-white dark:bg-slate-800/70 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors border border-slate-200 dark:border-slate-700 shadow-sm"
                        title={isRevealed ? 'Hide' : 'Reveal'}
                        aria-label="Toggle password visibility"
                      >
                        {isRevealed ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>

                      {/* Edit Button */}
                      <button
                        onClick={() => startEdit(item)}
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800/70 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-xs font-bold transition-colors border border-slate-200 dark:border-slate-700 shadow-sm"
                        title="Edit password"
                      >
                        <Edit3 className="w-3.5 h-3.5 text-indigo-600" />
                        <span>{t.editBtn[language]}</span>
                      </button>

                      {/* Copy Button */}
                      <button
                        onClick={() => handleCopy(item.id, item.password)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs transition-all duration-200 shadow-md ${
                          isCopied
                            ? 'bg-emerald-600 text-white shadow-emerald-500/25 ring-2 ring-emerald-400'
                            : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/25'
                        }`}
                        title="Copy to clipboard"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-4 h-4 text-white" />
                            <span>{t.copiedBtn[language]}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>{t.copyBtn[language]}</span>
                          </>
                        )}
                      </button>

                    </div>

                  </div>
                )}
              </div>

              {/* Password Explanation & Mnemonic Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                
                {/* 1. Why this password? */}
                <div className="rounded-2xl p-4 bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
                  <div className="flex items-center gap-2 text-xs font-bold text-indigo-700 dark:text-indigo-300 mb-2">
                    <HelpCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span>{t.whyHeading[language]}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {item.why[language]}
                  </p>
                </div>

                {/* 2. How to remember it? */}
                <div className="rounded-2xl p-4 bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
                  <div className="flex items-center gap-2 text-xs font-bold text-cyan-700 dark:text-cyan-300 mb-2">
                    <Brain className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span>{t.howHeading[language]}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-2.5 font-medium">
                    {item.mnemonic[language]}
                  </p>
                  
                  {/* Memory Chunks Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.memoryChunks[language].map((chunk, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[10px] font-mono-pwd px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-cyan-500/10 border border-indigo-200 dark:border-cyan-500/25 text-indigo-700 dark:text-cyan-300 font-semibold shadow-sm"
                      >
                        {chunk}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          );
        })}
      </div>

      {/* Bottom Global Actions */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-200/90 dark:border-indigo-500/30 shadow-lg">
        
        {/* Left: Start Over */}
        <button
          onClick={onStartOver}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-rose-50 dark:bg-rose-500/10 hover:bg-rose-100 dark:hover:bg-rose-500/20 border border-rose-200 dark:border-rose-500/30 text-rose-700 dark:text-rose-300 text-sm font-bold transition-all shadow-sm"
        >
          <RotateCcw className="w-4 h-4" />
          <span>{t.startOverBtn[language]}</span>
        </button>

        {/* Right: Language switch & Regenerate Passwords */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          
          <button
            onClick={onToggleLanguage}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold transition-all shadow-sm"
          >
            <Globe className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>{language === 'en' ? 'বাংলায় দেখুন' : 'View in English'}</span>
          </button>

          <button
            onClick={onRegenerate}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-indigo-600/25 hover:shadow-cyan-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            <RefreshCw className="w-4 h-4" />
            <span>{t.regenerateBtn[language]}</span>
          </button>

        </div>

      </div>

    </div>
  );
};
