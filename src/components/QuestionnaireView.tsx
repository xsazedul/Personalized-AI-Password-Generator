import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  FastForward,
  Eye,
  EyeOff,
  RotateCcw
} from 'lucide-react';
import { Language, QuestionDefinition, UserAnswers } from '../types';
import { UI_TEXT } from '../locales/translations';
import { BookIllustration } from './BookIllustration';

interface QuestionnaireViewProps {
  questions: QuestionDefinition[];
  currentIndex: number;
  answers: UserAnswers;
  language: Language;
  onAnswerChange: (questionId: string, value: string) => void;
  onNext: () => void;
  onSkip: () => void;
  onBack: () => void;
  onRestart: () => void;
}

export const QuestionnaireView: React.FC<QuestionnaireViewProps> = ({
  questions,
  currentIndex,
  answers,
  language,
  onAnswerChange,
  onNext,
  onSkip,
  onBack,
  onRestart
}) => {
  const [isMasked, setIsMasked] = useState(false);
  const currentQuestion = questions[currentIndex];
  const currentAnswer = answers[currentQuestion.id] || '';
  const totalSteps = questions.length;
  const isLastStep = currentIndex === totalSteps - 1;
  const progressPercent = Math.round(((currentIndex + 1) / totalSteps) * 100);

  const tStepper = UI_TEXT.stepper;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onNext();
    }
  };

  return (
    <div className="relative z-10 w-full max-w-2xl mx-auto px-4 py-6 sm:py-10">
      
      {/* Top Header & Progress Stepper */}
      <div className="mb-6">
        
        <div className="flex items-center justify-between text-xs sm:text-sm text-slate-600 mb-2.5 font-medium">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold shadow-sm">
              {tStepper.stepOf[language]} {currentIndex + 1} {tStepper.ofTotal[language]} {totalSteps}
            </span>
            <span className="hidden sm:inline text-slate-400">•</span>
            <span className="hidden sm:inline text-slate-600 font-semibold">
              {Math.round(progressPercent)}% {language === 'en' ? 'Completed' : 'সম্পন্ন'}
            </span>
          </div>

          {/* Restart Button */}
          <button
            onClick={onRestart}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-rose-600 transition-colors px-2.5 py-1 rounded-md hover:bg-rose-50 font-semibold"
            title="Restart Questionnaire"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Restart' : 'নতুন করে শুরু'}</span>
          </button>
        </div>

        {/* Dynamic Glowing Progress Bar */}
        <div className="w-full h-2.5 rounded-full bg-slate-200 overflow-hidden border border-slate-300/60 relative shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-indigo-600 via-cyan-500 to-emerald-500 rounded-full transition-all duration-500 ease-out shadow-sm"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Step Indicator Dots */}
        <div className="flex items-center justify-between mt-3 px-1">
          {questions.map((q, idx) => {
            const isCompleted = answers[q.id] && answers[q.id].trim().length > 0;
            const isCurrent = idx === currentIndex;
            return (
              <div
                key={q.id}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  isCurrent
                    ? 'bg-indigo-600 ring-4 ring-indigo-500/25 scale-125'
                    : isCompleted
                    ? 'bg-indigo-400'
                    : idx < currentIndex
                    ? 'bg-slate-400'
                    : 'bg-slate-200 border border-slate-300'
                }`}
                title={`Step ${idx + 1}`}
              />
            );
          })}
        </div>

      </div>

      {/* 3D Glass Question Card */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden transition-all duration-300 border border-slate-200/90">
        
        {/* Soft Ambient Corner Auras */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none" />

        {/* Question Header: 3D Memory Book Illustration + Step Tag */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <BookIllustration type={currentQuestion.iconName} size="md" />
            <div className="flex flex-col">
              <span className="text-[11px] uppercase tracking-wider font-bold text-indigo-600">
                {language === 'en' ? 'Slam Book Memory' : 'স্মৃতি ডায়রি'}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {language === 'en' ? `Question ${currentIndex + 1} of ${totalSteps}` : `প্রশ্ন ${currentIndex + 1} / ${totalSteps}`}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 shadow-sm">
            <span>{language === 'en' ? 'Step' : 'ধাপ'} {currentIndex + 1}</span>
          </div>
        </div>

        {/* Question Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 tracking-tight leading-snug">
          {currentQuestion.title[language]}
        </h2>

        {/* Hint / Subtitle */}
        <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed font-normal">
          {currentQuestion.hint[language]}
        </p>

        {/* Input Field with Privacy Mask Toggle */}
        <div className="relative mb-4">
          <input
            type={isMasked ? 'password' : 'text'}
            value={currentAnswer}
            onChange={(e) => onAnswerChange(currentQuestion.id, e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={currentQuestion.placeholder[language]}
            autoFocus
            className="w-full px-5 py-4 sm:py-4.5 pr-28 rounded-2xl bg-white border-2 border-slate-300 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 text-slate-900 placeholder:text-slate-400 text-base sm:text-lg transition-all duration-200 outline-none shadow-sm font-medium"
          />

          {/* Mask / Unmask Button */}
          <button
            type="button"
            onClick={() => setIsMasked(!isMasked)}
            className="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors border border-slate-200 shadow-sm"
            title={isMasked ? tStepper.showInput[language] : tStepper.hideInput[language]}
          >
            {isMasked ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">
              {isMasked ? tStepper.showInput[language] : tStepper.hideInput[language]}
            </span>
          </button>
        </div>

        {/* Transient privacy & skip note */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-8 px-1 font-medium">
          <span>{tStepper.privacyNotice[language]}</span>
        </div>

        {/* Action Buttons: Back, Skip, Next */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 pt-5 border-t border-slate-100">
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {/* Back Button */}
            {currentIndex > 0 && (
              <button
                type="button"
                onClick={onBack}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 text-sm font-bold transition-all duration-200 shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{tStepper.backBtn[language]}</span>
              </button>
            )}

            {/* Skip Button */}
            <button
              type="button"
              onClick={onSkip}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-600 hover:text-indigo-600 text-sm font-bold transition-all duration-200"
              title="Skip this question"
            >
              <FastForward className="w-4 h-4 text-slate-500" />
              <span>{tStepper.skipBtn[language]}</span>
            </button>
          </div>

          {/* Next / Finish Button */}
          <button
            type="button"
            onClick={onNext}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-base shadow-lg shadow-indigo-600/25 hover:shadow-cyan-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>{isLastStep ? tStepper.finishBtn[language] : tStepper.nextBtn[language]}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>

      {/* Helpful reassurance footer */}
      <div className="mt-6 text-center text-xs text-slate-500 font-medium">
        {tStepper.optionalNote[language]}
      </div>

    </div>
  );
};
