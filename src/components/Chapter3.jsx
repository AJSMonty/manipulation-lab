const QUIZ_QUESTIONS = [
  {
    id: 'q1',
    answers: [
      { result: 'wrong', label: 'False urgency only' },
      { result: 'wrong', label: 'Social proof only' },
      { result: 'correct', label: 'All four at once' },
      { result: 'wrong', label: 'Emotional hijack only' },
    ],
    post: (
      <>
        <div className="post-hdr">
          <div className="post-av" style={{ background: '#2d1b00', color: '#fbbf24' }}>
            DW
          </div>
          <div className="post-meta">
            <div className="post-name">
              DrWellness_UK <span className="post-badge badge-purple">PhD Health</span>
            </div>
            <div className="post-handle">@drwellness · 1h</div>
          </div>
        </div>
        <div className="post-body">
          NEW RESEARCH: Energy drinks destroy your memory within 3 months. I&apos;ve seen it in
          my practice. Schools need to act NOW — share this with every parent you know before
          more damage is done.
        </div>
        <div className="post-stats">
          <span>
            <strong>87,400</strong> likes
          </span>
          <span>
            <strong>34,200</strong> shares
          </span>
        </div>
      </>
    ),
    prompt: 'Which tricks are at work here?',
  },
  {
    id: 'q2',
    answers: [
      { result: 'wrong', label: 'Fake expert' },
      { result: 'correct', label: 'Emotional hijack + Social proof' },
      { result: 'wrong', label: 'False urgency only' },
      { result: 'wrong', label: 'Fake expert + False urgency' },
    ],
    post: (
      <>
        <div className="post-hdr">
          <div className="post-av" style={{ background: '#1a2e1a', color: '#86efac' }}>
            MP
          </div>
          <div className="post-meta">
            <div className="post-name">MumOfPrimary4</div>
            <div className="post-handle">@mum4real · 3h</div>
          </div>
        </div>
        <div className="post-body">
          I am absolutely heartbroken. My daughter came home crying today because of what&apos;s
          being taught in schools now. I can&apos;t even type it out. Please share this before it
          happens to your child. 1.2 million parents already have.
        </div>
        <div className="post-stats">
          <span>
            <strong>1,240,000</strong> likes
          </span>
          <span>
            <strong>890,000</strong> shares
          </span>
        </div>
      </>
    ),
    prompt: 'Which tricks are at work here?',
  },
  {
    id: 'q3',
    answers: [
      { result: 'wrong', label: 'Emotional hijack' },
      { result: 'wrong', label: 'Fake expert' },
      { result: 'correct', label: 'False urgency' },
      { result: 'wrong', label: 'Social proof' },
    ],
    post: (
      <>
        <div className="post-hdr">
          <div className="post-av" style={{ background: '#3d1a1a', color: '#fca5a5' }}>
            AL
          </div>
          <div className="post-meta">
            <div className="post-name">AlertLeaks</div>
            <div className="post-handle">@alertleaks · 45m</div>
          </div>
        </div>
        <div className="post-body">
          THEY&apos;RE DELETING THIS. Screenshot now. A government source has confirmed what
          we&apos;ve suspected for months. This video will be taken down within the hour. SHARE
          BEFORE IT&apos;S GONE.
        </div>
        <div className="post-stats">
          <span>
            <strong>22,100</strong> likes
          </span>
          <span>
            <strong>45,800</strong> shares
          </span>
        </div>
      </>
    ),
    prompt: "What's the primary mechanism here?",
  },
];

const QUIZ_FEEDBACKS = {
  q1: {
    correct:
      'Correct — this post deploys all four tricks simultaneously: a credentialled badge (fake expert), "destroy" and "damage" language (emotional hijack), 87K likes (social proof), and "NOW" plus "before more damage is done" (false urgency). Real manipulation is rarely just one technique.',
    wrong:
      'Look again — there is a PhD badge (fake expert), emotionally loaded language like "destroy" and "damage" (emotional hijack), 87,400 likes (social proof), and "NOW" / "before more damage is done" (false urgency). The answer is all four at once.',
  },
  q2: {
    correct:
      'Exactly right — there is no factual claim in this post at all. The entire power comes from the emotional story ("heartbroken", "crying") and 1.2 million shares creating the impression of mass consensus. Notice you felt something despite being told nothing.',
    wrong:
      'Look closely — there is no expert, and the urgency is implied rather than the primary mechanism. The post makes no actual claim — its entire force is the emotional story and the 1.2 million shares suggesting everyone already knows and agrees.',
  },
  q3: {
    correct:
      'Right — this is almost pure false urgency. "Deleting this", "within the hour", "SHARE BEFORE IT\'S GONE" — every sentence is about time running out. Notice it never tells you what "this" even is. Urgency without content is manipulation at its most naked.',
    wrong:
      'This one is almost entirely false urgency. Every sentence is about time pressure. It barely uses the others — and critically, it never tells you what the actual claim is. The urgency IS the trick.',
  },
};

export function Chapter3({ scrollToChapter, quizScores, onQuizAnswer, correctTotal }) {
  const allAnswered = Object.keys(quizScores).length === 3;

  return (
    <section className="chapter" id="ch3">
      <div className="container">
        <div className="ch-label">Chapter 03 — Spot It</div>
        <h2 className="ch-title">
          Three posts.
          <br />
          Which trick?
        </h2>
        <p className="ch-intro">
          All three posts are fake. Your job is to identify the primary manipulation technique
          being used. One question per post — the explanation unlocks on answer.
        </p>

        {QUIZ_QUESTIONS.map((q) => (
          <div key={q.id} className="quiz-post fade-up">
            {q.post}
            <div className="quiz-answers">
              <p>{q.prompt}</p>
              <div className="ans-grid">
                {q.answers.map((a) => (
                  <button
                    key={a.label}
                    type="button"
                    className={`ans-btn${
                      quizScores[q.id] === a.result ? ` ${a.result}` : ''
                    }`}
                    disabled={quizScores[q.id] !== undefined}
                    onClick={() => onQuizAnswer(q.id, a.result)}
                  >
                    {a.label}
                  </button>
                ))}
              </div>
              {quizScores[q.id] && (
                <div className={`ans-feedback ${quizScores[q.id]}`} style={{ display: 'block' }}>
                  {QUIZ_FEEDBACKS[q.id][quizScores[q.id]]}
                </div>
              )}
            </div>
          </div>
        ))}

        {allAnswered && (
          <div style={{ textAlign: 'center', padding: '32px 0', borderTop: '1px solid var(--border)' }}>
            <div className="quiz-score">
              <div className="qs-number">{correctTotal}/3</div>
              <div className="qs-label">tricks correctly identified</div>
            </div>
            <p style={{ fontSize: '15px', color: 'var(--muted)', maxWidth: '480px', margin: '0 auto 24px' }}>
              Now build one yourself — that&apos;s where real immunity comes from.
            </p>
            <button type="button" className="btn-primary" onClick={() => scrollToChapter(4)}>
              Build a fake post →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
