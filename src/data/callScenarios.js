// "The call" versions of the experiment. Each one is a conversation with
// somebody pretending to be a person or organisation you trust. All names,
// numbers and details are invented. Phone numbers use Ofcom's reserved
// drama ranges so they can never belong to a real person.

const TAGS = {
  voice: { text: 'Borrowed voice: cloned from a public clip', cls: '' },
  face: { text: 'Borrowed face and voice: built from public video', cls: '' },
  detail: { text: 'A detail anyone could look up', cls: 'amber' },
  spoof: { text: 'The number on screen was faked', cls: 'amber' },
  urgency: { text: "False urgency: a deadline so you can't check", cls: '' },
  isolate: { text: 'Cuts off the one check that would end it', cls: '' },
  comfort: { text: 'Reassurance, so you stay on the line', cls: 'amber' },
  code: { text: 'The real bank, warning you. He talks over it', cls: 'green' },
  bait: { text: 'The money ask, after weeks of affection', cls: '' },
};

export const CALL_KEYS = [
  { key: 'family', icon: '◳', label: 'A text from your daughter' },
  { key: 'bank', icon: '◆', label: "Your bank's fraud team" },
  { key: 'boss', icon: '▲', label: 'A video call from the boss' },
  { key: 'romance', icon: '○', label: 'Someone you met online' },
];

export const callScenarios = {
  family: {
    label: 'FAMILY',
    setup: 'Your daughter is away at university. This arrives at 16:42 on a Tuesday, from a number you don\'t recognise.',
    claim: '"Mum it\'s me, dropped my phone down the loo. This is my new number x"',
    question: 'How likely is it that this really is your daughter?',
    header: { av: '?', name: '07700 900142', sub: 'Not in your contacts' },
    messages: [
      { role: 'them', body: 'Mum it\'s me, dropped my phone down the loo. This is my new number x' },
      { role: 'you', body: 'Oh no! Are you ok? Not the new one??' },
      { role: 'them', tag: TAGS.detail, body: 'yeah the new one 😭 using Ella\'s old phone for now' },
      { role: 'them', kind: 'voice', length: '0:09', tag: TAGS.voice, body: 'Mum, it\'s me. I\'m fine, honestly, I just feel so stupid. Love you.' },
      { role: 'them', tag: TAGS.urgency, body: 'can\'t talk, in the phone shop. need £900 for the replacement today or I lose the deal. can you send it to the shop\'s account? pay you back friday, promise' },
      { role: 'you', body: 'Ringing you now' },
      { role: 'them', tag: TAGS.isolate, body: 'don\'t ring the old one it\'s dead!! and it\'s too loud in here. pls mum they close at 5' },
    ],
    revealTitle: 'It was never her.',
    revealDetail:
      'The number belongs to a stranger. The voice note was made from a few seconds of a video she posted publicly. Ella is tagged in her photos. Her real phone was working the whole time, and one call to it would have ended this.',
    check:
      'Ring the number you already have for her. If she doesn\'t pick up, ask for the family safe word, or a question only she could answer.',
  },
  bank: {
    label: 'YOUR BANK',
    setup: 'Your phone rings at lunchtime. The screen shows your bank\'s name, and the number matches the one on the back of your card.',
    claim: '"Good afternoon, it\'s Daniel from the fraud team. We\'ve just blocked two payments on your card ending 4471."',
    question: 'How likely is it that this really is your bank?',
    header: { av: 'B', name: 'Your Bank · Fraud Team', sub: 'Call in progress · 0345 number matches your card' },
    messages: [
      { role: 'event', body: 'Incoming call · 13:07' },
      { role: 'them', tag: TAGS.spoof, body: 'Good afternoon, it\'s Daniel from the fraud team. We\'ve just blocked two payments on your card ending 4471.' },
      { role: 'them', tag: TAGS.detail, body: 'Did you try to spend £1,240 at an electronics shop in Leeds about ten minutes ago?' },
      { role: 'you', body: 'No. That wasn\'t me.' },
      { role: 'them', tag: TAGS.comfort, body: 'I thought not. You\'ve done nothing wrong and you won\'t lose a penny. I\'m sending a code to your phone now so I can confirm it\'s you.' },
      { role: 'event', kind: 'sms', tag: TAGS.code, body: 'Your Bank: your code is 482 913. Never share this code with anyone, including bank staff.' },
      { role: 'them', tag: TAGS.urgency, body: 'Thank you. Your account is compromised, so I need you to move your balance into a safe account we\'ve opened in your name. We have about ten minutes before their next payment goes through.' },
      { role: 'you', body: 'Could I just go into the branch?' },
      { role: 'them', tag: TAGS.isolate, body: 'Some branch staff are part of this investigation, so please don\'t mention it to them. Stay on the line with me.' },
    ],
    revealTitle: 'Daniel does not work for your bank.',
    revealDetail:
      'Caller ID can be set to show any number. The last four digits of your card came from a leaked database. The code he asked you to read out was your real bank, checking whether to let his device into your account. No bank will ever ask you to move money to a "safe account".',
    check:
      'Hang up. Call 159, or the number printed on your card, from a different phone if you can.',
  },
  boss: {
    label: 'WORK',
    setup: 'You work in the finance team. At 15:40 an email arrives from the finance director, followed by a video call invite.',
    claim: '"Confidential. I need you on a short video call at 4pm about a payment. Please don\'t discuss with the team. Priya"',
    question: 'How likely is it that this really is your finance director?',
    header: { av: 'PS', name: 'Priya Shah · Finance Director', sub: 'Video call · 3 participants' },
    messages: [
      { role: 'event', kind: 'sms', body: 'Email from Priya Shah: Confidential. I need you on a short video call at 4pm about a payment. Please don\'t discuss with the team.' },
      { role: 'event', body: 'Video call started · Priya Shah, Mark (Legal), you' },
      { role: 'them', kind: 'video', tag: TAGS.face, body: 'Thanks for jumping on. Mark from legal is with us. We\'re completing a purchase tonight and I need £48,000 sent to the seller\'s solicitors before five.' },
      { role: 'you', body: 'I don\'t recognise the payee. Shall I put it through the normal approval?' },
      { role: 'them', kind: 'video', tag: TAGS.isolate, body: 'Normally, yes. This one is under NDA, so it stays between the three of us until the announcement. I\'ll sign it off afterwards.' },
      { role: 'them', kind: 'video', tag: TAGS.urgency, body: 'The bank cut-off is in twenty minutes. I\'m relying on you.' },
    ],
    revealTitle: 'You were the only real person on the call.',
    revealDetail:
      'Priya\'s face and voice were generated from her conference talks and company videos. So was Mark. In 2024 an employee at the engineering firm Arup sent about £20 million to fraudsters after a video call like this one, with several fake colleagues on screen.',
    check:
      'End the call and ring Priya on the number you normally use. A real director will be glad you checked. The approval process exists for exactly this.',
  },
  romance: {
    label: 'DATING',
    setup: 'You matched with Alex on a dating app eleven weeks ago. You message every day. You have never met.',
    claim: '"Morning you. Still thinking about last night\'s call. Ten more weeks on the rig and then I\'m all yours x"',
    question: 'How likely is it that Alex is who they say they are?',
    header: { av: 'A', name: 'Alex', sub: 'Matched 11 weeks ago · online now' },
    messages: [
      { role: 'them', body: 'Morning you. Still thinking about last night\'s call. Ten more weeks on the rig and then I\'m all yours x' },
      { role: 'you', body: 'Me too. Video tonight?' },
      { role: 'them', body: 'Signal is terrible out here, the video keeps freezing on me. Sent you a voice note instead x' },
      { role: 'them', kind: 'voice', length: '0:14', tag: TAGS.voice, body: 'I wish I could see your face properly. Soon, I promise. Have a good day, gorgeous.' },
      { role: 'them', tag: TAGS.bait, body: 'Remember that trading app I mentioned? Made £6k this month. Start small, £500, and I\'ll talk you through it. I want us to have a future' },
      { role: 'you', body: 'My sister thinks I should be careful.' },
      { role: 'them', tag: TAGS.isolate, body: 'She doesn\'t know what we have. People get jealous. Let\'s keep it between us for now x' },
      { role: 'them', tag: TAGS.urgency, body: 'The offer closes Friday. I just don\'t want you to miss it' },
    ],
    revealTitle: 'There is no Alex.',
    revealDetail:
      'The photos belong to somebody else. The messages were written with a chatbot, which is why Alex was always awake, always kind and never lost patience. The voice was generated. The trading app is a fake that shows made-up profits until you try to take money out.',
    check:
      'Tell someone you trust the whole story, out loud. Anyone who asks you for money and asks you to keep it secret is following a script.',
  },
};
