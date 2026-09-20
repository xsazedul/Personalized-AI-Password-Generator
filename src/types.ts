export type Language = 'en' | 'bn';

export interface QuestionDefinition {
  id: string;
  stepNumber: number;
  title: {
    en: string;
    bn: string;
  };
  hint: {
    en: string;
    bn: string;
  };
  placeholder: {
    en: string;
    bn: string;
  };
  type: 'text' | 'number';
  iconName: string;
}

export type UserAnswers = Record<string, string>;

export type PasswordStrategy =
  | 'syllable_salt'
  | 'mnemonic_flow'
  | 'phoneme_fusion'
  | 'rhythm_cadence'
  | 'vault_cipher';

export type StrengthLevel = 'weak' | 'moderate' | 'strong' | 'very_strong';

export interface StrengthAssessment {
  score: number; // 0 to 4
  level: StrengthLevel;
  label: {
    en: string;
    bn: string;
  };
  color: string;
  crackTimeDisplay: {
    en: string;
    bn: string;
  };
  warning?: {
    en: string;
    bn: string;
  };
}

export interface GeneratedPasswordItem {
  id: string;
  password: string;
  originalGenerated: string;
  strategy: PasswordStrategy;
  strategyName: {
    en: string;
    bn: string;
  };
  why: {
    en: string;
    bn: string;
  };
  mnemonic: {
    en: string;
    bn: string;
  };
  memoryChunks: {
    en: string[];
    bn: string[];
  };
  strength: StrengthAssessment;
  isEdited: boolean;
}

export type AppStep = 'landing' | 'questionnaire' | 'processing' | 'results';
