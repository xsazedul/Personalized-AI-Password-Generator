import React, { useState } from 'react';
import { Background3D } from './components/Background3D';
import { Header } from './components/Header';
import { LandingView } from './components/LandingView';
import { QuestionnaireView } from './components/QuestionnaireView';
import { ProcessingView } from './components/ProcessingView';
import { ResultView } from './components/ResultView';
import { AppStep, Language, UserAnswers, GeneratedPasswordItem } from './types';
import { QUESTIONS } from './locales/translations';
import { generatePersonalizedPasswords } from './lib/cryptoEngine';
import { evaluatePasswordStrength } from './lib/strength';

export const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>('landing');
  const [language, setLanguage] = useState<Language>('en');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [passwords, setPasswords] = useState<GeneratedPasswordItem[]>([]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'bn' : 'en'));
  };

  const handleStart = () => {
    setCurrentIndex(0);
    setAnswers({});
    setStep('questionnaire');
  };

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setStep('processing');
    }
  };

  const handleSkip = () => {
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setStep('processing');
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleProcessingComplete = () => {
    const generated = generatePersonalizedPasswords(answers);
    setPasswords(generated);
    setStep('results');
  };

  const handleRegenerate = () => {
    const freshPasswords = generatePersonalizedPasswords(answers);
    setPasswords(freshPasswords);
  };

  const handleStartOver = () => {
    setAnswers({});
    setPasswords([]);
    setCurrentIndex(0);
    setStep('landing');
  };

  const handleUpdatePassword = (id: string, newPassword: string) => {
    setPasswords((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            password: newPassword,
            strength: evaluatePasswordStrength(newPassword),
            isEdited: true
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col relative selection:bg-indigo-500/20 selection:text-indigo-700">
      
      {/* Interactive 3D Canvas Background */}
      <Background3D />

      {/* Main Global Header */}
      <Header
        language={language}
        onToggleLanguage={toggleLanguage}
        onLogoClick={handleStartOver}
      />

      {/* Dynamic View State Router */}
      <main className="flex-1 flex flex-col justify-center items-center relative z-10">
        {step === 'landing' && (
          <LandingView
            language={language}
            onStart={handleStart}
          />
        )}

        {step === 'questionnaire' && (
          <QuestionnaireView
            questions={QUESTIONS}
            currentIndex={currentIndex}
            answers={answers}
            language={language}
            onAnswerChange={handleAnswerChange}
            onNext={handleNext}
            onSkip={handleSkip}
            onBack={handleBack}
            onRestart={handleStartOver}
          />
        )}

        {step === 'processing' && (
          <ProcessingView
            language={language}
            onComplete={handleProcessingComplete}
          />
        )}

        {step === 'results' && (
          <ResultView
            passwords={passwords}
            language={language}
            onRegenerate={handleRegenerate}
            onStartOver={handleStartOver}
            onToggleLanguage={toggleLanguage}
            onUpdatePassword={handleUpdatePassword}
          />
        )}
      </main>

      {/* Minimalist Light Footer */}
      <footer className="relative z-10 py-6 text-center text-xs text-slate-500 border-t border-slate-200/90">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 font-medium">
          <p>
            {language === 'en'
              ? 'CryptaVault 3D — Client-side privacy-first AI password synthesis.'
              : 'ক্রিপ্টাভল্ট ৩ডি — ক্লায়েন্ট-সাইড প্রাইভেসিবান্ধব এআই পাসওয়ার্ড জেনারেটর।'}
          </p>
          <div className="flex items-center gap-4 text-slate-600">
            <span>Web Crypto CSPRNG</span>
            <span>•</span>
            <span>Zero Tracking</span>
            <span>•</span>
            <span>Bangla &amp; English</span>
          </div>
        </div>
      </footer>

    </div>
  );
};
