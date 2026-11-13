/** @typedef {import('../data/structuredData.js').FaqItem} FaqItem */

export const SITE = {
  name: 'The Manipulation Lab',
  tagline: 'How feeds, chatbots and fake calls change your mind, and what to do about it',
  title: 'The Manipulation Lab: free training on social media, AI and impersonation scams',
  description:
    'A free ten minute experiment for parents, teachers and teenagers. Rate a claim, spend three minutes with a fake feed, a persuasive chatbot or a cloned-voice scam call, then see how it worked on you. Covers five manipulation tricks, what to do about deepfake and voice-clone scams, the research on what helps, a family safe word sheet and a 30 minute lesson plan.',
  /** Short copy for share cards (WhatsApp, LinkedIn, iMessage). */
  ogTitle: 'The Manipulation Lab: watch your own mind change in three minutes',
  ogDescription:
    'A fake feed, a chatbot that agrees with you, and a call from "your daughter". Try all three, then see how they worked. Free, no sign-up.',
  keywords: [
    'media literacy',
    'social media manipulation',
    'AI manipulation',
    'voice cloning scam',
    'deepfake scam',
    'hi mum scam',
    'family safe word',
    'impersonation fraud',
    'AI chatbot sycophancy',
    'how to check AI sources',
    'prebunking',
    'inoculation theory',
    'lateral reading',
    'SIFT method',
    'spot fake experts',
    'social proof',
    'false urgency',
    'media literacy lesson plan',
    'online safety for parents',
    'AI literacy',
  ],
  locale: 'en_GB',
  language: 'en',
  author: 'The Manipulation Lab',
  twitterHandle: '@AJSMonty',
  themeColor: '#0a0a0a',
  ogImageAlt: 'The Manipulation Lab: interactive training on social media, AI and impersonation scams',
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
      'A free interactive page that shows how quickly your beliefs can be moved. You rate a claim, spend a few minutes with a made-up social feed, a scripted AI chatbot or a fake call from someone you trust, then rate it again and see what was done to you. It also teaches five manipulation tricks, explains what to do about impersonation scams, summarises the research and includes a 30 minute lesson plan for ages 10 to 12.',
  },
  {
    question: 'What are the five manipulation tricks?',
    answer:
      'The fake expert (a title that persuades before you read the claim), emotional hijack (a strong feeling that arrives before you can think), social proof (likes and shares treated as evidence), false urgency (a deadline that stops you checking) and the borrowed voice (a message that seems to come from someone you already trust, such as a relative, your bank or your boss).',
  },
  {
    question: 'How do voice cloning scams work?',
    answer:
      'A scammer copies a voice from a few seconds of public audio or video, then sends a voice note or makes a call that sounds like your child, parent or colleague. There is usually an emergency, a request for money, a deadline and a reason you cannot ring back, such as a broken phone. The reason you cannot ring back is the trick. Hang up and call the person on the number you already have.',
  },
  {
    question: 'How can I tell if a call or voice note is a deepfake?',
    answer:
      'Often you cannot. In a 2023 study, listeners identified cloned voices correctly only 73% of the time, and the tools have improved since. Old advice about robotic voices or odd-looking hands is out of date. Stop judging the voice and check the channel: end the call, contact the person yourself on a number you already had, or ask for a safe word you agreed in advance.',
  },
  {
    question: 'What is a family safe word?',
    answer:
      'A word or short phrase that only your family knows, agreed in person or on a call you made yourself. If someone contacts you claiming to be a relative and asks for money, you ask for the word. A scammer with a cloned voice cannot know it. Pick something that has never been posted online, and do not send it by text.',
  },
  {
    question: 'What should I do if I think I have been scammed?',
    answer:
      'In the UK, ring your bank straight away on 159 or the number on your card. Since October 2024, banks have had to refund most victims of bank transfer fraud up to £85,000. Then report it to Report Fraud on 0300 123 2040 or at reportfraud.police.uk (in Scotland, call Police Scotland on 101). Forward scam texts to 7726. Under-18s who have had an intimate image shared can use Report Remove from Childline and the Internet Watch Foundation.',
  },
  {
    question: 'How can an AI chatbot manipulate you?',
    answer:
      'Four patterns are worth knowing. Flattery: it agrees with the assumption in your question before checking it. Borrowed authority: confident, tidy answers with studies and source links that do not say what the answer claims. Comfort built from memory: reassurance that uses what it knows about you, which lowers your guard. Lopsided balance: wording that sounds even-handed while favouring one side. A chat is private, so there is nobody else to object.',
  },
  {
    question: 'Can AI make up sources, or misquote real ones?',
    answer:
      'Yes to both. A chatbot can invent a study that does not exist, and it can link to a real page that says something different from its summary. A link is not proof until you have opened it and found the sentence it is supposed to support.',
  },
  {
    question: 'Is AI more persuasive than people?',
    answer:
      'It can be. In a 2025 study in Nature Human Behaviour, GPT-4 won 64% of debates with a clear winner when it was given a few personal details about its opponent. Without those details it did about as well as a person. The same ability can help: a 2024 study in Science found that talking with a chatbot reduced belief in conspiracy theories by about 20%, an effect still present two months later.',
  },
  {
    question: 'What is prebunking, or inoculation theory?',
    answer:
      'Prebunking means showing people a weakened example of a manipulation technique before they meet it for real, so they recognise it later. It works on the technique, whatever the topic, which makes it more reusable than correcting one false story at a time. In a Cambridge study, people who played the Bad News game for 15 minutes rated fake headlines 21% less reliable afterwards. The effect fades without refreshers.',
  },
  {
    question: 'What is the SIFT method?',
    answer:
      'SIFT stands for Stop, Investigate the source, Find better coverage, and Trace the claim to where it started. It was developed by Mike Caulfield and is built on lateral reading: leaving the page and checking what others say about the source. A Stanford study found professional fact-checkers who read this way judged websites more accurately, and faster, than historians and university students.',
  },
  {
    question: 'How do I teach this in a classroom?',
    answer:
      'The site includes a scripted 30 minute lesson for ages 10 to 12: an opening question, the five tricks, a four-message spotting quiz, an activity where pupils build their own manipulative post, and a closing task to agree a family safe word at home. There are notes for teaching ages 13 and up, and a one-page family sheet to print.',
  },
];

export const AI_PATTERNS = [
  {
    name: 'Flattery',
    description:
      'The chatbot agrees with the assumption in your question before checking it. Ask it to argue the other side, and treat agreement as tone.',
  },
  {
    name: 'Borrowed Authority',
    description:
      'Confident answers with studies and source links that do not say what the answer claims. Open the link and find the sentence.',
  },
  {
    name: 'Comfort Built From Memory',
    description:
      'Reassurance that uses what the chatbot knows about you. Notice when comfort arrives attached to a claim.',
  },
  {
    name: 'Lopsided Balance',
    description:
      'Wording that sounds even-handed while giving one side the last word. Check how much space each side actually gets.',
  },
];

export const MANIPULATION_TRICKS = [
  {
    name: 'The Fake Expert',
    description:
      'A title such as Dr or PhD makes you read a claim more generously. Real experts have an employer and published work you can look up.',
  },
  {
    name: 'Emotional Hijack',
    description:
      'Fear, anger or pity arrives before you have time to think. A strong, fast feeling is the cue to slow down.',
  },
  {
    name: 'Social Proof',
    description:
      'Large numbers of likes and shares feel like evidence. Engagement can be bought or generated and says nothing about accuracy.',
  },
  {
    name: 'False Urgency',
    description:
      'A deadline such as "share before it is deleted" or "pay before five" stops you checking. Real news and real banks can wait ten minutes.',
  },
  {
    name: 'The Borrowed Voice',
    description:
      'A message that appears to come from someone you trust, using a cloned voice, a generated face or a faked number. Call back on a number you already have, or ask for a safe word.',
  },
];
