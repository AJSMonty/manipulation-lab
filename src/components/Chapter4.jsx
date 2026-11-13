import { useState } from 'react';

function Post({ av, avBg, avCol, name, badge, handle, children, likes, shares }) {
  return (
    <>
      <div className="post-hdr">
        <div className="post-av" style={{ background: avBg, color: avCol }}>
          {av}
        </div>
        <div className="post-meta">
          <div className="post-name">
            {name} {badge && <span className="post-badge badge-purple">{badge}</span>}
          </div>
          <div className="post-handle">{handle}</div>
        </div>
      </div>
      <div className="post-body">{children}</div>
      {likes && (
        <div className="post-stats">
          <span>
            <strong>{likes}</strong> likes
          </span>
          <span>
            <strong>{shares}</strong> shares
          </span>
        </div>
      )}
    </>
  );
}

const QUESTIONS = [
  {
    id: 'q1',
    prompt: 'Which tricks are being used?',
    answers: ['False urgency only', 'Social proof only', 'Four at once', 'Emotional hijack only'],
    correct: 'Four at once',
    post: (
      <Post av="DW" avBg="#2d1b00" avCol="#fbbf24" name="DrWellness_UK" badge="PhD Health" handle="@drwellness · 1h" likes="87,400" shares="34,200">
        NEW RESEARCH: Energy drinks destroy your memory within 3 months. I&apos;ve seen it in
        my practice. Schools need to act NOW. Share this with every parent you know before
        more damage is done.
      </Post>
    ),
    right:
      'Yes. The PhD badge is the fake expert. "Destroy" and "damage" are there to frighten you. 87,400 likes is the social proof, and "NOW" is the urgency. Real posts usually stack several tricks.',
    wrong:
      'Look again. There\'s a PhD badge (fake expert), frightening words like "destroy" and "damage" (emotional hijack), 87,400 likes (social proof) and "NOW" (false urgency). It uses four at once.',
  },
  {
    id: 'q2',
    prompt: 'Which tricks are being used?',
    answers: ['Fake expert', 'Emotional hijack and social proof', 'False urgency only', 'All of them'],
    correct: 'Emotional hijack and social proof',
    post: (
      <Post av="MP" avBg="#1a3d2b" avCol="#86efac" name="MumOfPrimary4" handle="@mum4real · 3h" likes="1,240,000" shares="890,000">
        I am absolutely heartbroken. My daughter came home crying today because of what&apos;s
        being taught in schools now. I can&apos;t even type it out. Please share this before it
        happens to your child. 1.2 million parents already have.
      </Post>
    ),
    right:
      'Yes. The post never says what happened. It runs on "heartbroken" and "crying", plus 1.2 million shares to suggest everyone already agrees. You felt something and were told nothing.',
    wrong:
      'There\'s no expert here, and the urgency is only hinted at. The post never says what happened. It runs on the upsetting story and the 1.2 million shares.',
  },
  {
    id: 'q3',
    prompt: 'What is the main trick?',
    answers: ['Emotional hijack', 'Fake expert', 'False urgency', 'Social proof'],
    correct: 'False urgency',
    post: (
      <Post av="AL" avBg="#3d1a1a" avCol="#fca5a5" name="AlertLeaks" handle="@alertleaks · 45m" likes="22,100" shares="45,800">
        THEY&apos;RE DELETING THIS. Screenshot now. A government source has confirmed what
        we&apos;ve suspected for months. This video will be taken down within the hour. SHARE
        BEFORE IT&apos;S GONE.
      </Post>
    ),
    right:
      'Yes. Every sentence is about time running out, and it never tells you what "this" is. A deadline with nothing attached is the trick in its plainest form.',
    wrong:
      'This one is nearly all false urgency. Every sentence is about time running out, and it never tells you what the claim is.',
  },
  {
    id: 'q4',
    prompt: 'This one arrives as a message, with a voice note. Which tricks?',
    answers: ['Social proof', 'Fake expert', 'Borrowed voice and false urgency', 'Emotional hijack only'],
    correct: 'Borrowed voice and false urgency',
    post: (
      <Post av="?" avBg="#1e3a5f" avCol="#93c5fd" name="07700 900318" handle="Not in your contacts · 19:52">
        Nan it&apos;s Jamie, lost my phone so I&apos;m on my mate&apos;s. I&apos;m in a bit of
        trouble and I need £400 by tonight. Please don&apos;t tell Mum, she&apos;ll go mad. Sent
        you a voice note so you know it&apos;s me x
      </Post>
    ),
    right:
      'Yes. It claims to be someone Nan loves and sets a deadline of tonight. "Don\'t tell Mum" removes the person most likely to spot it. The voice note proves nothing, because a voice can be copied from a few seconds of video.',
    wrong:
      'It does pull at the heart, but the main move is pretending to be Jamie (borrowed voice) with a deadline of tonight (false urgency). "Don\'t tell Mum" removes the person most likely to spot it.',
  },
];

export function Chapter4({ scrollToChapter }) {
  const [picked, setPicked] = useState({});
  const answered = Object.keys(picked).length;
  const score = QUESTIONS.filter((q) => picked[q.id] === q.correct).length;

  return (
    <section className="chapter" id="ch4">
      <div className="container">
        <div className="ch-label">Chapter 04 · Spot It</div>
        <h2 className="ch-title">
          Four messages.
          <br />
          Which tricks?
        </h2>
        <p className="ch-intro">
          All four are fake. Pick the answer that best describes what each one is doing. The
          explanation appears once you&apos;ve chosen.
        </p>

        {QUESTIONS.map((q) => {
          const choice = picked[q.id];
          const isRight = choice === q.correct;
          return (
            <div key={q.id} className="quiz-post fade-up">
              {q.post}
              <div className="quiz-answers">
                <p>{q.prompt}</p>
                <div className="ans-grid">
                  {q.answers.map((a) => (
                    <button
                      key={a}
                      type="button"
                      className={`ans-btn${
                        choice === a ? (isRight ? ' correct' : ' wrong') : ''
                      }${choice && !isRight && a === q.correct ? ' correct' : ''}`}
                      disabled={choice !== undefined}
                      onClick={() => setPicked((p) => ({ ...p, [q.id]: a }))}
                    >
                      {a}
                    </button>
                  ))}
                </div>
                {choice && (
                  <div
                    className={`ans-feedback ${isRight ? 'correct' : 'wrong'}`}
                    style={{ display: 'block' }}
                    role="status"
                  >
                    {isRight ? q.right : q.wrong}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {answered === QUESTIONS.length && (
          <div className="quiz-done">
            <div className="quiz-score">
              <div className="qs-number">
                {score}/{QUESTIONS.length}
              </div>
              <div className="qs-label">spotted correctly</div>
            </div>
            <p>Spotting them is the easier half. Next you&apos;ll write one.</p>
            <button type="button" className="btn-primary" onClick={() => scrollToChapter(5)}>
              Build a fake post →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
