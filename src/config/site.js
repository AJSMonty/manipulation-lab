/** @typedef {import('../data/structuredData.js').FaqItem} FaqItem */

export const SITE = {
  name: 'The Manipulation Lab',
  tagline: 'How social media rewires your beliefs — and what to do about it',
  title:
    'The Manipulation Lab — Free Interactive Media Literacy & Manipulation Training',
  description:
    'Free interactive experience for parents, educators, and teens. Run a live belief-shift experiment, learn four manipulation tricks used on social media every day, practice spotting disinformation, and use a ready-to-run 30-minute classroom lesson plan based on Cambridge inoculation theory and the SIFT method.',
  keywords: [
    'media literacy',
    'disinformation education',
    'prebunking',
    'inoculation theory',
    'social media manipulation',
    'misinformation training',
    'fake news lesson plan',
    'digital citizenship',
    'SIFT method',
    'spot fake experts',
    'social proof manipulation',
    'emotional hijack',
    'classroom media literacy',
    'parents guide social media',
  ],
  locale: 'en_GB',
  language: 'en',
  author: 'The Manipulation Lab',
  twitterHandle: '@AJSMonty',
  themeColor: '#0a0a0a',
  ogImageAlt:
    'The Manipulation Lab — interactive training on social media manipulation and media literacy',
};

/** Resolve at build time (vite.config) and runtime (import.meta.env). */
export function getSiteUrl(fallback = 'https://manipulationlab.io') {
  if (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SITE_URL) {
    return import.meta.env.VITE_SITE_URL.replace(/\/$/, '');
  }
  return fallback.replace(/\/$/, '');
}

/** @type {FaqItem[]} */
export const FAQ_ITEMS = [
  {
    question: 'What is The Manipulation Lab?',
    answer:
      'The Manipulation Lab is a free, interactive educational experience that shows how social media posts can shift your beliefs in minutes — even when every claim is fabricated. It teaches four manipulation tricks, includes a spotting quiz, a build-your-own-post exercise, research-backed evidence, and a printable 30-minute classroom lesson plan for ages 10–12.',
  },
  {
    question: 'What are the four social media manipulation tricks?',
    answer:
      'The four tricks are: (1) The Fake Expert — using credentialed-sounding titles to bypass critical thinking; (2) Emotional Hijack — triggering strong feelings before facts can be evaluated; (3) Social Proof — using likes, shares, and engagement numbers as false evidence of truth; and (4) False Urgency — creating time pressure that switches off verification.',
  },
  {
    question: 'What is prebunking or inoculation theory?',
    answer:
      'Prebunking (also called inoculation theory) exposes people to a weakened dose of a manipulation technique before they encounter it in the wild, building cognitive resistance. Research from Cambridge University shows technique-based prebunking outperforms fact-checking specific claims because recognition transfers across topics — teaching someone to spot a fake expert protects them from every post that uses that trick.',
  },
  {
    question: 'How can I teach media literacy in the classroom?',
    answer:
      'The Manipulation Lab includes a scripted 30-minute lesson plan for ages 10–12: run the belief-shift experiment (8–10 min), teach the four tricks (8 min), run the three-post spotting quiz (10 min), have students build a manipulative post (7 min), and finish with three lifelong takeaways (2 min). No prior media literacy background is required.',
  },
  {
    question: 'What is the SIFT method for checking information?',
    answer:
      'SIFT stands for Stop, Investigate the source, Find better coverage, and Trace claims to the original context. Developed by Mike Caulfield at the University of Washington, SIFT prioritises lateral reading — checking what other sources say about a claim — over deep vertical reading of a single suspicious page.',
  },
  {
    question: 'How do I spot a fake expert on social media?',
    answer:
      'Check whether the person has a verifiable institution, publication history, and searchable identity. Manipulators use phrases like "off the record" or "I cannot speak for my institution" to borrow authority while blocking verification. Real experts can be found through their university, journal publications, or professional registry in seconds.',
  },
  {
    question: 'Why does social media change our beliefs so quickly?',
    answer:
      'Emotional responses fire in milliseconds while rational evaluation takes 5–10 seconds. Manipulation techniques exploit authority bias, social proof, urgency, and repetition (illusory truth). After several aligned posts, ideas feel familiar — and familiarity feels like evidence even when every post was fabricated.',
  },
  {
    question: 'What should I do when a post makes me feel strong emotions?',
    answer:
      'Use the 5-second rule: if a post makes you feel something very strongly, very fast, wait five seconds before sharing, believing, or acting. Then ask "Who made this, and why?" — not just "Is this true?" Almost all manipulation collapses when you pause and examine motive and source.',
  },
];

export const MANIPULATION_TRICKS = [
  {
    name: 'The Fake Expert',
    description:
      'Uses credentialed-sounding titles (PhD, Dr., Senior Researcher) to lower your critical threshold before you read the claim. Defence: verify credentials through institutions and publications.',
  },
  {
    name: 'Emotional Hijack',
    description:
      'Triggers fear, outrage, or sadness to create a window where you share or believe before analytical thinking engages. Defence: pause when emotion fires fast.',
  },
  {
    name: 'Social Proof',
    description:
      'Uses large engagement numbers (likes, shares, comments) as false evidence of truth. Defence: remember that engagement can be purchased and is not a vote for accuracy.',
  },
  {
    name: 'False Urgency',
    description:
      'Creates time pressure ("share before deleted", "breaking now") that deprioritises verification. Defence: real information does not expire in ten minutes.',
  },
];
