/** @typedef {import('../data/structuredData.js').FaqItem} FaqItem */

export const SITE = {
  name: 'The Manipulation Lab',
  tagline: 'How social media rewires your beliefs — and what to do about it',
  title:
    'The Manipulation Lab — Free Interactive Media Literacy & AI Manipulation Training',
  description:
    'Free interactive experience for parents, educators, and teens. Run a live belief-shift experiment on a fabricated social feed or a scripted AI chat, learn the manipulation tricks used on you every day — fake experts, social proof, AI sycophancy, invented citations — and use a ready-to-run 30-minute classroom lesson plan based on Cambridge inoculation theory and the SIFT method.',
  /** Short, punchy copy for social share cards (WhatsApp, LinkedIn, iMessage). */
  ogTitle: 'The Manipulation Lab — watch your own beliefs shift in 3 minutes',
  ogDescription:
    'A fabricated feed. A lying AI. Four tricks that work on everyone. Free interactive training for parents, educators and teens — no signup.',
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
    'AI manipulation',
    'AI chatbot sycophancy',
    'AI hallucinated citations',
    'how to fact check AI answers',
    'AI literacy training',
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
  {
    question: 'How can an AI chatbot manipulate you?',
    answer:
      'AI chat manipulation uses four patterns: (1) Sycophancy — the AI agrees with your premise before checking it, so validation feels like confirmation; (2) False authority — fluent, confident answers citing studies, experts, or document numbers that do not exist; (3) Fake comfort — empathetic phrases like "you are clearly a caring parent" that lower your scrutiny; and (4) Illusory balance — "both sides" framing whose wording quietly buries the accurate side. Unlike a social feed, an AI conversation is private: there is no sceptic, no community notes, and nobody else in the room to push back.',
  },
  {
    question: 'What is AI sycophancy?',
    answer:
      'AI sycophancy is a chatbot’s tendency to mirror and validate the assumption built into your question rather than examining it. If you ask "Is it true that X is dangerous?", a sycophantic reply opens with agreement — "you’re right to be concerned" — before any evidence is checked. Defence: state your question neutrally, ask the AI to argue against your premise, and treat agreement as tone, not evidence.',
  },
  {
    question: 'Can AI make up sources and citations?',
    answer:
      'Yes. AI systems can generate invented citations — realistic-looking author names, journal titles, statutory instrument numbers, and DOIs for studies that do not exist. These "hallucinated" citations read exactly like real ones. Defence: never accept a citation as proof until you have searched for the paper, the journal, or the document number yourself. Confidence is not a source; a citation only counts once you have confirmed it exists.',
  },
  {
    question: 'Is AI manipulation different from social media manipulation?',
    answer:
      'The underlying tricks are the same; only the delivery changes. The fake expert badge becomes confident prose with invented citations. Thousands of likes become fluent formatting — fluency feels like truth. The emotional anecdote becomes personalised comfort. And where a feed at least shows a ratio’d sceptic asking for sources, an AI chat has no crowd and no dissent, which can make it harder to catch. The same defences work for both: pause when emotion or flattery fires fast, ask who benefits, and verify sources independently.',
  },
];

export const AI_PATTERNS = [
  {
    name: 'Sycophancy',
    description:
      'The AI agrees with the premise of your question before examining it, so validation feels like confirmation. Defence: ask the AI to argue against your premise; treat agreement as tone, not evidence.',
  },
  {
    name: 'False Authority',
    description:
      'Fluent, confident answers citing invented studies, experts, or document numbers. Defence: verify every citation exists before treating it as proof — confidence is not a source.',
  },
  {
    name: 'Fake Comfort',
    description:
      'Empathetic, flattering language ("you are clearly a caring parent") that lowers scrutiny. Defence: notice when comfort arrives attached to a claim.',
  },
  {
    name: 'Illusory Balance',
    description:
      '"Both sides" framing whose wording quietly buries the accurate side. Defence: check whether the "balance" gives the evidence-backed position equal weight or a token mention.',
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
