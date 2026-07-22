import { AI_PATTERNS, FAQ_ITEMS, MANIPULATION_TRICKS, SITE } from '../config/site.js';

/**
 * @typedef {{ question: string, answer: string }} FaqItem
 */

/**
 * @param {string} siteUrl
 * @returns {object[]}
 */
export function buildStructuredData(siteUrl) {
  const url = siteUrl.replace(/\/$/, '');

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${url}/#website`,
      url,
      name: SITE.name,
      description: SITE.description,
      inLanguage: SITE.language,
      image: `${url}/og-image.png`,
      publisher: { '@id': `${url}/#organization` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${url}/#organization`,
      name: SITE.name,
      url,
      description: SITE.tagline,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      '@id': `${url}/#app`,
      name: SITE.name,
      url,
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires JavaScript',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'GBP',
      },
      description: SITE.description,
      inLanguage: SITE.language,
      audience: {
        '@type': 'Audience',
        audienceType: 'Parents, educators, teens, and general internet users',
      },
      image: `${url}/og-image.png`,
      about: [...MANIPULATION_TRICKS, ...AI_PATTERNS].map((trick) => ({
        '@type': 'DefinedTerm',
        name: trick.name,
        description: trick.description,
      })),
      isPartOf: { '@id': `${url}/#website` },
      publisher: { '@id': `${url}/#organization` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      '@id': `${url}/#learning-resource`,
      name: SITE.name,
      description: SITE.description,
      url,
      inLanguage: SITE.language,
      learningResourceType: 'Interactive lesson',
      educationalLevel: 'Middle school through adult',
      teaches: [
        'Recognising social media manipulation techniques',
        'Recognising AI chatbot manipulation patterns: sycophancy, false authority, fake comfort, illusory balance',
        'Verifying AI-generated citations before trusting them',
        'Prebunking and inoculation theory',
        'The SIFT method for source verification',
        'Media literacy heuristics for daily use',
      ],
      isPartOf: { '@id': `${url}/#website` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${url}/#faq`,
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      '@id': `${url}/#lesson-plan`,
      name: '30-minute classroom media literacy session using The Manipulation Lab',
      description:
        'A scripted lesson plan for ages 10–12 based on Cambridge inoculation theory and the SIFT method. No prior media literacy background required.',
      totalTime: 'PT30M',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Run the belief-shift experiment',
          text: 'Learners choose a scenario, set a belief slider, scroll through a fabricated social feed, and observe how their confidence shifts — even though every post is fictional.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Teach the four manipulation tricks',
          text: 'Introduce fake expert, emotional hijack, social proof, and false urgency. Ask learners to generate their own local examples.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Run the Spot It quiz',
          text: 'Present three posts and ask learners to identify which manipulation techniques are at work.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Build a manipulative post',
          text: 'Learners construct their own post using the tricks — the highest-impact activity for building detection skill.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Close with three lifelong takeaways',
          text: 'The 5-second rule, the question "Who made this, and why?", and the idea that changing your mind is strength.',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'DefinedTermSet',
      '@id': `${url}/#manipulation-tricks`,
      name: 'Four social media manipulation tricks',
      hasDefinedTerm: MANIPULATION_TRICKS.map((trick) => ({
        '@type': 'DefinedTerm',
        name: trick.name,
        description: trick.description,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'DefinedTermSet',
      '@id': `${url}/#ai-manipulation-patterns`,
      name: 'Four AI chatbot manipulation patterns',
      hasDefinedTerm: AI_PATTERNS.map((pattern) => ({
        '@type': 'DefinedTerm',
        name: pattern.name,
        description: pattern.description,
      })),
    },
  ];
}

/**
 * @param {string} siteUrl
 * @returns {string}
 */
export function structuredDataJson(siteUrl) {
  return JSON.stringify(buildStructuredData(siteUrl));
}
