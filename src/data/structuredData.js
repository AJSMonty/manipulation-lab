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
        audienceType: 'Parents, teachers, teenagers and older relatives',
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
        'Recognising five manipulation tricks on social media',
        'Recognising impersonation scams that use cloned voices, deepfake video and faked numbers',
        'Using a family safe word and call-back checks',
        'Recognising persuasion patterns in AI chatbots',
        'Checking that an AI source link says what the answer claims',
        'Prebunking and inoculation theory',
        'Lateral reading and the SIFT method',
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
      name: '30 minute classroom lesson using The Manipulation Lab',
      description:
        'A scripted lesson for ages 10 to 12 on manipulation tricks and impersonation scams. No background in media literacy needed.',
      totalTime: 'PT30M',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Ask the opening question',
          text: 'Ask who has seen, believed or shared something online that turned out to be fake. Optionally run the belief-shift experiment on devices first.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Name the five tricks',
          text: 'Introduce fake expert, emotional hijack, social proof, false urgency and borrowed voice. Ask pupils for their own examples of each.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Run the Spot It quiz',
          text: 'Show four fake messages and ask the class which tricks each one uses.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Make a fake post',
          text: 'In pairs, pupils write a manipulative post using one trick, read it out, and the class names the trick.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Set the take-home task',
          text: 'Pupils note one trick they expect to see this week and agree a family safe word at home.',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'DefinedTermSet',
      '@id': `${url}/#manipulation-tricks`,
      name: 'Five manipulation tricks',
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
      name: 'Four AI chatbot persuasion patterns',
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
