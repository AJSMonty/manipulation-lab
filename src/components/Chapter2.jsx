import { useState } from 'react';

const TRICKS = [
  {
    name: 'The Fake Expert',
    hook: 'A title does the persuading before you read a word',
    body: [
      'We lean on experts because we have to. Nobody can check everything. So a "Dr" or a "PhD" in a bio makes us read the next sentence more generously. Anyone can type those letters.',
      'A real expert is easy to find. They have a university page, published work, a professional register. Search the name and the field together. If nothing comes back, the title was decoration.',
      'AI has made this cheaper. A profile photo, a believable bio and a year of plausible posts can be generated in an afternoon.',
    ],
    example: '"I\'ve spent 18 years studying this. I can\'t speak for my institution, but..."',
    note: 'The line about the institution borrows its authority and stops you ringing it.',
  },
  {
    name: 'Emotional Hijack',
    hook: 'The feeling arrives before the thinking',
    body: [
      'Fear, anger and pity are fast. Checking is slow. A post that makes you furious in two seconds has had its effect before you\'ve asked whether it\'s true.',
      'Look at the mum\'s post in the quiz further down. It makes no claim at all, and most people still come away believing something happened.',
      'A strong feeling tells you how the post was built. It tells you nothing about whether the post is accurate. Treat it as the cue to slow down.',
    ],
    example: '"I am heartbroken. My daughter came home crying. I can\'t even type it out."',
    note: 'Nothing is stated, so there is nothing you could check.',
  },
  {
    name: 'Social Proof',
    hook: '380K likes feels like 380K people checked',
    body: [
      'Following the crowd is sensible offline. If everyone is leaving the building, leave. Online, the crowd can be manufactured. Likes are sold in bulk, and one person with AI tools can run thousands of accounts that each write in their own style.',
      'It works in reverse too. When the one person asking for evidence gets buried under angry replies, everyone watching learns to keep their doubts to themselves.',
      'Seeing a claim five times also makes it feel familiar, and familiar things feel true. Psychologists call that the illusory truth effect.',
    ],
    example: '"1.2 million parents already know about this."',
    note: 'That is a number. It says nothing about whether the thing is true.',
  },
  {
    name: 'False Urgency',
    hook: 'The hurry is there to stop you checking',
    body: [
      'Under time pressure, people act first and check later, if they check at all. Every scam and most viral hoaxes come with a deadline: now, today, before it\'s deleted, before the shop shuts.',
      'Real news will still be there in ten minutes. Your real bank will still be your bank after you hang up and ring back. When a message gives you a reason you can\'t wait, that is your reason to wait.',
    ],
    example: '"SHARE BEFORE IT\'S GONE. They\'re deleting this within the hour."',
    note: 'It never says what "this" is. The deadline is all you get.',
  },
  {
    name: 'The Borrowed Voice',
    hook: 'It arrives as someone you already trust',
    isNew: true,
    body: [
      'The first four tricks try to make a stranger believable. This one skips that step and turns up as your daughter, your bank or your boss. A voice can be cloned from a few seconds of video. A face can be generated live on a call. The number on your screen can be faked.',
      'You can\'t reliably hear or see the difference any more, so don\'t try to. The thing a fake can\'t do is pick up when you ring the real person on the number you already have.',
      'It nearly always travels with false urgency: someone you love, in trouble, with a deadline.',
    ],
    example: '"Mum it\'s me, I\'ve got a new number. Don\'t ring the old one, it\'s dead."',
    note: 'The second sentence is the trick. It removes the one check that would have worked.',
  },
];

export function Chapter2({ scrollToChapter }) {
  const [open, setOpen] = useState(null);

  return (
    <section className="chapter" id="ch2">
      <div className="container--wide">
        <div className="container" style={{ padding: '0' }}>
          <div className="ch-label">Chapter 02 · The Toolkit</div>
          <h2 className="ch-title">
            Five tricks.
            <br />
            You just met them.
          </h2>
          <p className="ch-intro">
            None of this needs skill or money. Four of the tricks are as old as advertising.
            The fifth used to need an actor and a good script, and now needs a laptop. Open
            each one to see how it works and what to do about it.
          </p>
        </div>

        <div className="tricks-grid fade-up">
          {TRICKS.map((t, i) => {
            const isOpen = open === i;
            return (
              <div key={t.name} className={`trick-card${isOpen ? ' open' : ''}`}>
                <button
                  type="button"
                  className="tc-head"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="tc-num">
                    TRICK {String(i + 1).padStart(2, '0')}
                    {t.isNew && <span className="tc-new">New</span>}
                  </span>
                  <span className="tc-name">{t.name}</span>
                  <span className="tc-hook">{t.hook}</span>
                  <span className="tc-toggle">{isOpen ? 'Close ↑' : 'How it works ↓'}</span>
                </button>
                <div className={`tc-body${isOpen ? ' open' : ''}`}>
                  {t.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  <div className="tc-example">
                    {t.example}
                    <br />
                    {t.note}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="container fade-up" style={{ padding: '0' }}>
          <div className="aside-box">
            <p className="aside-label">TWO SMALLER THINGS TO LISTEN FOR</p>
            <p>
              <strong>Honest-sounding hedges.</strong> &quot;I&apos;m not saying panic&quot;,
              &quot;off the record&quot;, &quot;draw your own conclusions&quot;. They sound
              careful and commit to nothing you could check.{' '}
              <strong>Giving a little ground.</strong> &quot;That oversimplifies it, but...&quot;
              A small concession makes whatever comes next sound fair.
            </p>
          </div>
        </div>

        <div className="container" style={{ padding: '0', marginTop: '32px' }}>
          <button type="button" className="btn-primary" onClick={() => scrollToChapter(3)}>
            What to do when it&apos;s a call →
          </button>
        </div>
      </div>
    </section>
  );
}
