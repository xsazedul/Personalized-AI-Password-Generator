import { QuestionDefinition } from '../types';

export const QUESTIONS: QuestionDefinition[] = [
  {
    id: 'first_love',
    stepNumber: 1,
    title: {
      en: 'What was the name of your first love?',
      bn: 'আপনার প্রথম ভালোবাসার মানুষের নাম কী ছিল?'
    },
    hint: {
      en: 'A name or nickname that still echoes in your memories.',
      bn: 'একটি নাম বা ডাকনাম যা এখনও স্মৃতির কোণে রয়ে গেছে।'
    },
    placeholder: {
      en: 'e.g. Maya, Alex, Sophia...',
      bn: 'যেমন: মায়া, তানিয়া, রোদেলা...'
    },
    type: 'text',
    iconName: 'Heart'
  },
  {
    id: 'first_crush',
    stepNumber: 2,
    title: {
      en: 'Who was your very first secret crush?',
      bn: 'আপনার জীবনের সর্বপ্রথম গোপন ক্রাশ কে ছিল?'
    },
    hint: {
      en: 'That one person you secretly looked at during childhood or school days.',
      bn: 'ছোটবেলায় বা স্কুলজীবনে যাকে আপনি দূর থেকে লুকিয়ে দেখতেন।'
    },
    placeholder: {
      en: 'e.g. Elena, Ryan, Teacher, Neighbor...',
      bn: 'যেমন: নীলা, প্রতিবেশী, সিনিয়র আপু/ভাইয়া...'
    },
    type: 'text',
    iconName: 'Sparkles'
  },
  {
    id: 'favorite_classmate',
    stepNumber: 3,
    title: {
      en: 'Who was your favorite classmate?',
      bn: 'আপনার সবচেয়ে প্রিয় সহপাঠী (ক্লাসমেট) কে ছিল?'
    },
    hint: {
      en: 'The friend you loved sharing lunch or backbench secrets with.',
      bn: 'টিফিন ভাগ করে খাওয়া বা পেছনের বেঞ্চের আড্ডার সেরা সঙ্গী।'
    },
    placeholder: {
      en: 'e.g. Liam, Jessica, David...',
      bn: 'যেমন: রাফাত, সাকিব, সুমাইয়া...'
    },
    type: 'text',
    iconName: 'Users'
  },
  {
    id: 'unconfessed_classmate',
    stepNumber: 4,
    title: {
      en: 'Name a classmate you liked, but never had the courage to tell.',
      bn: 'এমন কোনো সহপাঠীর নাম যাকে আপনি পছন্দ করতেন, কিন্তু কখনো বলতে পারেননি?'
    },
    hint: {
      en: 'An unspoken unspoken confession locked away in time.',
      bn: 'না-বলা সেই অনুভূতির নাম যা কখনো প্রকাশ করা হয়নি।'
    },
    placeholder: {
      en: 'e.g. Chloe, Ethan...',
      bn: 'যেমন: অবন্তী, ফারহান, দৃষ্টি...'
    },
    type: 'text',
    iconName: 'EyeOff'
  },
  {
    id: 'married_crush',
    stepNumber: 5,
    title: {
      en: 'A married person or celebrity you secretly admired or had a crush on?',
      bn: 'এমন কোনো বিবাহিত ব্যক্তি বা সেলিব্রিটি যার ওপর আপনার গোপন ক্রাশ ছিল বা আছে?'
    },
    hint: {
      en: 'Guilty pleasure or innocent daydreaming — your secret is safe with math.',
      bn: 'কোনো তারকা বা পরিচিত মুখ — আপনার এই তথ্য গণিত ও ক্রিপ্টোগ্রাফিতে সুরক্ষিত।'
    },
    placeholder: {
      en: 'e.g. Keanu, Scarlett, Senior neighbor...',
      bn: 'যেমন: জয়া আহসান, শাহরুখ, পাশের বাড়ির ভাবি...'
    },
    type: 'text',
    iconName: 'Flame'
  },
  {
    id: 'body_count',
    stepNumber: 6,
    title: {
      en: 'What is your body count?',
      bn: 'আপনার বডি কাউন্ট কত?'
    },
    hint: {
      en: 'Enter a number or estimate. Transformed into an entropy seed.',
      bn: 'যেকোনো সংখ্যা বা অনুমান লিখুন। এটি উচ্চ এনট্রপি বীজে রূপান্তরিত হবে।'
    },
    placeholder: {
      en: 'e.g. 0, 1, 3, 7...',
      bn: 'যেমন: ০, ১, ৩, ৭...'
    },
    type: 'text',
    iconName: 'Zap'
  },
  {
    id: 'class10_roll',
    stepNumber: 7,
    title: {
      en: 'What was your Class 10 roll number?',
      bn: 'দশম শ্রেণীতে (ক্লাস ১০) আপনার রোল নম্বর কত ছিল?'
    },
    hint: {
      en: 'That unforgettable exam digit you used to fill in circles on answer sheets.',
      bn: 'বোর্ড পরীক্ষার ওএমআর শিটে বারবার গোল পূরণ করা সেই রোল নম্বর।'
    },
    placeholder: {
      en: 'e.g. 07, 14, 42, 105...',
      bn: 'যেমন: ০৭, ১২, ২১, ১০৫...'
    },
    type: 'text',
    iconName: 'Hash'
  },
  {
    id: 'biggest_mistake',
    stepNumber: 8,
    title: {
      en: 'The biggest mistake or sin of your life?',
      bn: 'আপনার জীবনের সবচেয়ে বড় ভুল বা পাপ কী ছিল?'
    },
    hint: {
      en: 'A word or memory you regret: a missed opportunity, a broken heart, a foolish choice.',
      bn: 'একটি শব্দ বা অনুশোচনার স্মৃতি: সুযোগ হারানো, ভুল সিদ্ধান্ত, বা বিশ্বাসঘাতকতা।'
    },
    placeholder: {
      en: 'e.g. Trust, Silence, Bitcoin, Procrastination...',
      bn: 'যেমন: অতিরিক্ত বিশ্বাস, ভুল মানুষকে ভালোবাসা, সুযোগ হারানো...'
    },
    type: 'text',
    iconName: 'ShieldAlert'
  }
];

export const UI_TEXT = {
  appName: {
    en: 'CryptaVault 3D',
    bn: 'ক্রিপ্টাভল্ট ৩ডি'
  },
  appTagline: {
    en: 'AI-Powered Personalized Password Generator',
    bn: 'এআই-চালিত পারসোনালাইজড পাসওয়ার্ড জেনারেটর'
  },
  badgeZeroStorage: {
    en: '100% In-Memory • Zero Stored Data',
    bn: '১০০% মেমোরি ভিত্তিক • কোনো তথ্য সংরক্ষণ হয় না'
  },
  nav: {
    switchLang: {
      en: 'বাংলা',
      bn: 'English'
    },
    clientOnly: {
      en: 'Client-Side CSPRNG Security',
      bn: 'ক্লায়েন্ট-সাইড সিএসপিআরএনজি নিরাপত্তা'
    }
  },
  landing: {
    heroTitle: {
      en: 'Strong, Memorable & Personalized Passwords.',
      bn: 'অটুট শক্তিশালী, স্মরণীয় ও ব্যক্তিগত পাসওয়ার্ড।'
    },
    heroSubtitle: {
      en: 'Answer a few nostalgic questions. Our cryptographic AI model transforms your memories into 5 unbreakable, easy-to-remember passwords without ever revealing your raw answers.',
      bn: 'স্মৃতির কয়েকটি সহজ প্রশ্নের উত্তর দিন। আমাদের ক্রিপ্টোগ্রাফিক এআই আপনার মূল উত্তরগুলো কখনোই প্রকাশ না করে স্মৃতি-সহায়ক ৫টি শক্তিশালী পাসওয়ার্ড তৈরি করবে।'
    },
    ctaStart: {
      en: 'Create My Passwords',
      bn: 'আমার পাসওয়ার্ড তৈরি করুন'
    },
    feature1Title: {
      en: 'No Account Required',
      bn: 'কোনো অ্যাকাউন্ট বা লগইন লাগবে না'
    },
    feature1Desc: {
      en: 'Start immediately. No emails, no sign-ups, no tracking cookies.',
      bn: 'সরাসরি শুরু করুন। কোনো ইমেইল বা রেজিস্ট্রেশনের প্রয়োজন নেই।'
    },
    feature2Title: {
      en: 'Cryptographic Privacy',
      bn: 'ক্রিপ্টোগ্রাফিক গোপনীয়তা'
    },
    feature2Desc: {
      en: 'Your answers are irreversibly transformed. "Rahim" never becomes "Rahim123!".',
      bn: 'উত্তরগুলো জটিল রূপান্তরের মধ্য দিয়ে যায়। কোনো শব্দই সরাসরি পাসওয়ার্ডে থাকবে না।'
    },
    feature3Title: {
      en: 'Mnemonic Memorability',
      bn: 'সহজে মনে রাখার কৌশল'
    },
    feature3Desc: {
      en: 'Every password comes with a simple mental chunking guide you can remember.',
      bn: 'প্রতিটি পাসওয়ার্ডের সাথে থাকে সহজ স্মৃতি-কৌশল যা আপনি সহজে মনে রাখতে পারবেন।'
    },
    feature4Title: {
      en: 'CSPRNG Randomness',
      bn: 'সর্বোচ্চ ক্রিপ্টো র‍্যান্ডমনেস'
    },
    feature4Desc: {
      en: 'Powered by the Web Crypto API ensuring entropy exceeds standard brute-force limits.',
      bn: 'ওয়েব ক্রিপ্টো এপিআই দিয়ে উৎপন্ন উচ্চ এনট্রপি যা হ্যাকিং প্রতিরোধে সক্ষম।'
    }
  },
  stepper: {
    stepOf: {
      en: 'Step',
      bn: 'ধাপ'
    },
    ofTotal: {
      en: 'of',
      bn: 'এর'
    },
    skipBtn: {
      en: 'Skip this question',
      bn: 'এই প্রশ্নটি স্কিপ করুন'
    },
    nextBtn: {
      en: 'Next Question',
      bn: 'পরবর্তী প্রশ্ন'
    },
    backBtn: {
      en: 'Back',
      bn: 'পূর্ববর্তী'
    },
    finishBtn: {
      en: 'Synthesize Passwords ✨',
      bn: 'পাসওয়ার্ড প্রস্তুত করুন ✨'
    },
    privacyNotice: {
      en: '🔒 Your input is processed entirely in transient device RAM. Never saved or transmitted.',
      bn: '🔒 আপনার উত্তর শুধুমাত্র ডিভাইসের অস্থায়ী র‍্যামে সংরক্ষিত হয়। কোথাও সেভ হয় না।'
    },
    optionalNote: {
      en: 'Skipping is fine! We will compensate with higher mathematical entropy.',
      bn: 'স্কিপ করলেও সমস্যা নেই! গণিতভিত্তিক র‍্যান্ডম অ্যালগরিদম দিয়ে শূন্যস্থান পূরণ হবে।'
    },
    maskPlaceholder: {
      en: 'Type your answer...',
      bn: 'আপনার উত্তর লিখুন...'
    },
    showInput: {
      en: 'Show answer',
      bn: 'উত্তর দেখুন'
    },
    hideInput: {
      en: 'Hide answer',
      bn: 'উত্তর লুকান'
    }
  },
  processing: {
    mainTitle: {
      en: 'Synthesizing Neural Passwords',
      bn: 'এআই ক্রিপ্টো পাসওয়ার্ড বিশ্লেষণ চলছে'
    },
    subtitle: {
      en: 'Blending personal memories with cryptographic pseudo-randomness...',
      bn: 'ব্যক্তিগত স্মৃতির সাথে ক্রিপ্টোগ্রাফিক র‍্যান্ডমনেসের সমন্বয় করা হচ্ছে...'
    },
    stages: [
      {
        en: 'Analyzing your answers & emotional tokens...',
        bn: 'আপনার উত্তর ও সংবেদনশীল টোকেন বিশ্লেষণ করা হচ্ছে...'
      },
      {
        en: 'Creating personalized, non-invertible password patterns...',
        bn: 'ব্যক্তিগত কিন্তু গোপনীয় পাসওয়ার্ড প্যাটার্ন তৈরি করা হচ্ছে...'
      },
      {
        en: 'Strengthening randomness with Web Crypto CSPRNG...',
        bn: 'ওয়েব ক্রিপ্টো সিএসপিআরএনজি দ্বারা র‍্যান্ডমনেস ও শক্তি বৃদ্ধি করা হচ্ছে...'
      },
      {
        en: 'Generating your 5 final hardened passwords & mnemonics...',
        bn: 'আপনার চূড়ান্ত ৫টি সুরক্ষিত পাসওয়ার্ড ও স্মৃতি-কৌশল প্রস্তুত হচ্ছে...'
      }
    ],
    terminalLog: {
      en: [
        'INITIALIZING VAULT MEMORY ENCLAVE...',
        'HASHING SEED WITH PBKDF2 PHONEMES...',
        'STRIPPING RAW WORDS: 100% OBFUSCATED',
        'ENTROPY INJECTION: CSPRNG 128-BIT RANDOM VALUES',
        'GENERATING 5 MULTI-TIER ARCHITECTURES...',
        'VERIFYING BRUTE-FORCE RESISTANCE...',
        'READY'
      ],
      bn: [
        'অস্থায়ী সুরক্ষিত মেমরি এনক্লেভ চালু হচ্ছে...',
        'উত্তরগুলোকে বিশেষ ফোনেটিক কোডে রূপান্তর করা হচ্ছে...',
        'সরাসরি শব্দ অপসারণ: ১০০% রূপান্তর সম্পন্ন',
        'উচ্চ এনট্রপি সংযোজন: ১২৮-বিট নিরাপদ র‍্যান্ডম উপাদান',
        '৫টি স্বতন্ত্র ও সুরক্ষিত আর্কিটেকচার তৈরি হচ্ছে...',
        'ব্রুট-ফোর্স প্রতিরোধ ক্ষমতা যাচাই করা হচ্ছে...',
        'প্রস্তুত'
      ]
    }
  },
  results: {
    heading: {
      en: 'Your 5 Personalized Passwords',
      bn: 'আপনার ৫টি ব্যক্তিগত পাসওয়ার্ড'
    },
    subheading: {
      en: 'Synthesized using your personal nostalgic patterns fortified with cryptographically secure random characters. Your original answers are not exposed.',
      bn: 'আপনার স্মৃতি থেকে অনুপ্রাণিত কিন্তু সর্বোচ্চ ক্রিপ্টোগ্রাফিক সুরক্ষা দিয়ে তৈরি। কোনো উত্তরই সরাসরি প্রকাশিত নয়।'
    },
    copiedToast: {
      en: 'Password copied to clipboard!',
      bn: 'পাসওয়ার্ড ক্লিপবোর্ডে কপি করা হয়েছে!'
    },
    copyBtn: {
      en: 'Copy',
      bn: 'কপি'
    },
    copiedBtn: {
      en: 'Copied!',
      bn: 'কপি হয়েছে!'
    },
    editBtn: {
      en: 'Edit',
      bn: 'এডিট'
    },
    saveBtn: {
      en: 'Save',
      bn: 'সংরক্ষণ'
    },
    cancelBtn: {
      en: 'Cancel',
      bn: 'বাতিল'
    },
    resetEditBtn: {
      en: 'Reset to Original',
      bn: 'আগের অবস্থায় ফিরুন'
    },
    whyHeading: {
      en: 'Why this password?',
      bn: 'কেন এই পাসওয়ার্ডটি তৈরি করা হলো?'
    },
    howHeading: {
      en: 'How to remember it?',
      bn: 'এটি যেভাবে সহজে মনে রাখবেন'
    },
    strengthHeading: {
      en: 'Strength:',
      bn: 'পাসওয়ার্ড শক্তি:'
    },
    crackTimeLabel: {
      en: 'Estimated crack time:',
      bn: 'ভাঙ্গা সম্ভব হতে সময় লাগবে:'
    },
    regenerateBtn: {
      en: 'Generate 5 New Passwords',
      bn: 'নতুন ৫টি পাসওয়ার্ড তৈরি করুন'
    },
    startOverBtn: {
      en: 'Start Over (Clear All Answers)',
      bn: 'নতুন করে শুরু করুন (সব মুছুন)'
    },
    weakWarning: {
      en: '⚠️ Warning: This edited password has weak entropy! Consider adding special characters, length, or numbers.',
      bn: '⚠️ সতর্কতা: এডিট করা পাসওয়ার্ডটি দুর্বল হয়ে গেছে! বিশেষ চিহ্ন, দৈর্ঘ্য বা সংখ্যা যোগ করুন।'
    }
  },
  strengthLabels: {
    weak: {
      en: 'Weak',
      bn: 'দুর্বল'
    },
    moderate: {
      en: 'Moderate',
      bn: 'মাঝারি'
    },
    strong: {
      en: 'Strong',
      bn: 'শক্তিশালী'
    },
    very_strong: {
      en: 'Very Strong',
      bn: 'খুবই শক্তিশালী'
    }
  }
};
