export function Chapter6() {
  return (
    <section className="chapter" id="ch6">
      <div className="container">
        <div className="ch-label">Chapter 06 — The 30-Minute Session</div>
        <h2 className="ch-title">
          A ready-to-run lesson plan
          <br />
          for ages 10–12
        </h2>
        <p className="ch-intro">
          Built on the inoculation theory research from Cambridge and the SIFT method from
          Washington University. Everything is scripted. No media literacy background required
          to run it.
        </p>

        <div
          className="fade-up"
          style={{
            padding: '20px 24px',
            background: 'rgba(214,60,47,0.06)',
            border: '1px solid rgba(214,60,47,0.2)',
            borderRadius: '4px',
            marginBottom: '32px',
          }}
        >
          <p
            style={{
              fontSize: '11px',
              fontFamily: 'var(--font-head)',
              fontWeight: 700,
              letterSpacing: '0.12em',
              color: 'var(--red)',
              marginBottom: '10px',
            }}
          >
            FACILITATOR NOTES
          </p>
          <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '10px' }}>
            Scenario topics in the online experiment (climate, finance, global affairs, etc.) are
            intentionally provocative. For younger or sensitive groups, pre-select{' '}
            <strong style={{ color: 'var(--white)' }}>health</strong> or{' '}
            <strong style={{ color: 'var(--white)' }}>fitness</strong>; skip finance and global
            if needed.
          </p>
          <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7 }}>
            Examples use UK framing (FCA, Manchester, Treasury references). Ask students to
            generate local equivalents when you name tricks — their examples are always more
            memorable than yours.
          </p>
        </div>

        <div className="lesson-steps">
          <div className="lesson-step fade-up">
            <div className="step-num">
              OPTIONAL
              <br />
              <span
                className="time-pill"
                style={{ display: 'inline-block', marginTop: '8px', fontSize: '10px' }}
              >
                +8 mins
              </span>
            </div>
            <div className="step-content">
              <div className="step-title">Belief-shift experiment (devices)</div>
              <div className="step-desc">
                If students have phones or tablets, run Chapter 1 of this site first — it is the
                strongest hook in the whole experience. Debrief the slider shift before naming
                tricks.
              </div>
              <div className="say-block">
                <div className="say-tag">SAY</div>
                <p>
                  &quot;You just rated how true a claim felt, then scrolled a fake feed, then
                  rated it again. However much your score moved — up or down — that happened on
                  content we told you was an experiment. In the real world there is no warning.&quot;
                </p>
              </div>
              <div className="do-block">
                <div className="do-tag">DO</div>
                <p>
                  Open this page at the start of the session. Each student picks a scenario,
                  locks a belief score, scrolls the feed, re-rates, and hits reveal. Ask two or
                  three volunteers: &quot;Did your number go up? Down? Why?&quot; Then continue to
                  Step 1.
                </p>
                <p style={{ marginTop: '10px' }}>
                  <strong>No devices?</strong> Read one scenario claim aloud. Show of hands: how
                  true does it feel? Then read three fabricated posts from the board. Re-vote.
                  Reveal that every post was invented.
                </p>
              </div>
            </div>
          </div>

          <div className="lesson-step fade-up">
            <div className="step-num">
              STEP 01
              <br />
              <span
                className="time-pill"
                style={{ display: 'inline-block', marginTop: '8px', fontSize: '10px' }}
              >
                Mins 0–3
              </span>
            </div>
            <div className="step-content">
              <div className="step-title">The opening hook</div>
              <div className="step-desc">
                Start with something they know — not a lecture. This creates immediate buy-in
                before you explain anything.
              </div>
              <div className="say-block">
                <div className="say-tag">SAY</div>
                <p>
                  &quot;Put your hand up if you&apos;ve ever seen something online that turned out
                  to be fake or exaggerated. Keep it up if you&apos;ve nearly believed it, or
                  shared it before checking. Nobody loses points — this happens to adults,
                  journalists, and scientists too.&quot;
                </p>
              </div>
              <div className="do-block">
                <div className="do-tag">DO</div>
                <p>
                  Write on the board:{' '}
                  <strong>&quot;Why do smart people believe fake things?&quot;</strong> — tell
                  them by the end of 30 minutes they&apos;ll be able to answer it, and
                  they&apos;ll be harder to fool than most adults.
                </p>
              </div>
            </div>
          </div>

          <div className="lesson-step fade-up">
            <div className="step-num">
              STEP 02
              <br />
              <span
                className="time-pill"
                style={{ display: 'inline-block', marginTop: '8px', fontSize: '10px' }}
              >
                Mins 3–11
              </span>
            </div>
            <div className="step-content">
              <div className="step-title">Name the 4 tricks</div>
              <div className="step-desc">
                Teach the mechanism, not the specific claims. Topic debunking expires — technique
                recognition transfers to every piece of content they&apos;ll ever encounter.
              </div>
              <div className="say-block">
                <div className="say-tag">SAY</div>
                <p>
                  &quot;Online content doesn&apos;t try to trick your intelligence — it tries to
                  trick your feelings. Once you know the name of a trick, it stops working on you.
                  It&apos;s like knowing how a magic trick works — it loses its power.&quot;
                </p>
              </div>
              <div className="do-block">
                <div className="do-tag">DO</div>
                <p>
                  For each of the 4 tricks (Fake Expert, Emotional Hijack, Social Proof, False
                  Urgency): name it, give a simple example, then ask &quot;Where have you seen
                  this?&quot; and wait for hands. Their examples are always better than yours. Do
                  not move on until someone has generated their own.
                </p>
              </div>
            </div>
          </div>

          <div className="lesson-step fade-up">
            <div className="step-num">
              STEP 03
              <br />
              <span
                className="time-pill"
                style={{ display: 'inline-block', marginTop: '8px', fontSize: '10px' }}
              >
                Mins 11–21
              </span>
            </div>
            <div className="step-content">
              <div className="step-title">Spot it — the quiz round</div>
              <div className="step-desc">
                Three fake posts. Students identify which trick is being used. Run as a class vote
                or in pairs. The first post is deliberately tricky — it uses all four
                simultaneously — so that getting it wrong becomes a teaching moment rather than an
                embarrassment.
              </div>
              <div className="do-block">
                <div className="do-tag">DO</div>
                <p>
                  Show a post. Ask for hands — &quot;Which trick?&quot; Get a few different
                  answers, then reveal. Don&apos;t correct wrong answers punitively; explore why
                  they chose that one. The discussion matters more than the answer. Award points if
                  you want gamification — students who get it right explain their reasoning.
                </p>
              </div>
            </div>
          </div>

          <div className="lesson-step fade-up">
            <div className="step-num">
              STEP 04
              <br />
              <span
                className="time-pill"
                style={{ display: 'inline-block', marginTop: '8px', fontSize: '10px' }}
              >
                Mins 21–28
              </span>
            </div>
            <div className="step-content">
              <div className="step-title">Build a fake post — the most important activity</div>
              <div className="step-desc">
                Students create their own manipulative post using one of the four tricks. This is
                where real immunity is built. Building requires understanding construction — passive
                observation never achieves the same depth of encoding.
              </div>
              <div className="say-block">
                <div className="say-tag">SAY</div>
                <p>
                  &quot;You&apos;re going to make one. This feels strange — we&apos;re not making
                  fake posts to fool anyone, we&apos;re doing it so your brain learns exactly how
                  they work from the inside. Chefs taste bad food to understand flavour.
                  You&apos;re building a bad post to understand manipulation.&quot;
                </p>
              </div>
              <div className="do-block">
                <div className="do-tag">DO</div>
                <p>
                  Work in pairs. 3 minutes to create. Then pairs share — the class calls out which
                  trick was used. Award points for the most convincingly manipulative post.
                  Students who win this activity usually go home and explain it to their parents.
                  That&apos;s the goal.
                </p>
              </div>
            </div>
          </div>

          <div className="lesson-step fade-up">
            <div className="step-num">
              STEP 05
              <br />
              <span
                className="time-pill"
                style={{ display: 'inline-block', marginTop: '8px', fontSize: '10px' }}
              >
                Mins 28–30
              </span>
            </div>
            <div className="step-content">
              <div className="step-title">Lock it in — the exit move</div>
              <div className="step-desc">
                Three things. That&apos;s all. Everything else is detail. These three ideas are the
                only things they need to carry.
              </div>
              <div className="say-block">
                <div className="say-tag">SAY — the closing line</div>
                <p>
                  &quot;The people who make manipulative content are counting on you to react
                  without thinking. Every time you pause — every single time — you win. You
                  don&apos;t have to share the good post. You just have to pause. That&apos;s the
                  whole thing.&quot;
                </p>
              </div>
              <div className="do-block">
                <div className="do-tag">DO — exit ticket</div>
                <p>
                  Ask each student to write one trick name + one example of where they might see it
                  this week. Collect them. Reading them back next session is the highest-ROI 2
                  minutes of recall reinforcement available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
