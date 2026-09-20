import zxcvbn from 'zxcvbn';
import { StrengthAssessment, StrengthLevel } from '../types';

export function evaluatePasswordStrength(password: string): StrengthAssessment {
  if (!password || password.length === 0) {
    return {
      score: 0,
      level: 'weak',
      label: { en: 'Too Short', bn: 'খুবই সংক্ষিপ্ত' },
      color: '#ef4444',
      crackTimeDisplay: { en: 'Instant', bn: 'মুহূর্তের মধ্যে' },
      warning: {
        en: 'Password cannot be empty.',
        bn: 'পাসওয়ার্ড ফাঁকা রাখা যাবে না।'
      }
    };
  }

  const result = zxcvbn(password);
  const score = result.score; // 0, 1, 2, 3, 4
  const rawCrack = result.crack_times_display.offline_slow_hashing_1e4_per_second;
  const crackTime = String(rawCrack || 'centuries');

  // Localize crack time to Bangla
  let crackBn = crackTime;
  if (crackTime.includes('less than a second') || crackTime.includes('instant')) {
    crackBn = 'এক সেকেন্ডেরও কম';
  } else if (crackTime.includes('seconds')) {
    crackBn = `${crackTime.replace('seconds', '')} সেকেন্ড`;
  } else if (crackTime.includes('minutes')) {
    crackBn = `${crackTime.replace('minutes', '')} মিনিট`;
  } else if (crackTime.includes('hours')) {
    crackBn = `${crackTime.replace('hours', '')} ঘণ্টা`;
  } else if (crackTime.includes('days')) {
    crackBn = `${crackTime.replace('days', '')} দিন`;
  } else if (crackTime.includes('months')) {
    crackBn = `${crackTime.replace('months', '')} মাস`;
  } else if (crackTime.includes('years')) {
    crackBn = `${crackTime.replace('years', '')} বছর`;
  } else if (crackTime.includes('centuries')) {
    crackBn = 'শত শত বছর';
  }

  let level: StrengthLevel = 'weak';
  let color = '#ef4444'; // Red
  let label = { en: 'Weak', bn: 'দুর্বল' };
  let warning: { en: string; bn: string } | undefined = undefined;

  switch (score) {
    case 0:
    case 1:
      level = 'weak';
      color = '#ef4444';
      label = { en: 'Weak', bn: 'দুর্বল' };
      warning = {
        en: result.feedback.warning || 'Easy to crack. Add more length, numbers, and symbols.',
        bn: 'সহজেই ক্র্যাক করা সম্ভব। আরও দৈর্ঘ্য, সংখ্যা ও প্রতীক যোগ করুন।'
      };
      break;
    case 2:
      level = 'moderate';
      color = '#f59e0b';
      label = { en: 'Moderate', bn: 'মাঝারি' };
      warning = {
        en: 'Decent, but vulnerable to advanced dictionary attacks.',
        bn: 'চলনসই, তবে উন্নত ডিকশনারি অ্যাটাকের ঝুঁকিতে রয়েছে।'
      };
      break;
    case 3:
      level = 'strong';
      color = '#06b6d4';
      label = { en: 'Strong', bn: 'শক্তিশালী' };
      break;
    case 4:
    default:
      level = 'very_strong';
      color = '#10b981';
      label = { en: 'Very Strong', bn: 'খুবই শক্তিশালী' };
      break;
  }

  return {
    score,
    level,
    label,
    color,
    crackTimeDisplay: {
      en: crackTime,
      bn: crackBn
    },
    warning
  };
}
