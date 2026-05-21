export function Chapter2({ scrollToChapter, toggleTrick }) {
  return (
    <>
      <section className="chapter" id="ch2">
        <div className="container--wide">
          <div className="container" style={{ padding: '0' }}>
            <div className="ch-label">Chapter 02 — The Toolkit</div>
            <h2 className="ch-title">
              The 4 tricks used on
              <br />
              everyone, every day
            </h2>
            <p className="ch-intro">
              These aren&apos;t sophisticated techniques requiring expertise. They are simple,
              scalable, and devastatingly effective. In the experiment you saw six mechanisms at
              work — they all boil down to these four. Click each to understand the mechanism.
            </p>
          </div>

          <div className="tricks-grid fade-up">
            <div className="trick-card" onClick={(e) => toggleTrick(e.currentTarget)}>
              <div className="tc-num">TRICK 01</div>
              <div className="tc-name">The Fake Expert</div>
              <div className="tc-hook">A badge does the convincing before you read a word</div>
              <div className="tc-toggle">Tap to reveal the mechanism ↓</div>
              <div className="tc-body">
                <p>
                  Your brain uses authority as a shortcut. When someone has a
                  credentialed-sounding title — &quot;PhD&quot;, &quot;Dr.&quot;, &quot;Senior
                  Researcher&quot; — you unconsciously lower your critical threshold before
                  engaging with their claim. This is called <em>authority bias</em>, and
                  it&apos;s a completely rational heuristic that manipulators exploit trivially.
                </p>
                <p style={{ marginTop: '10px' }}>
                  The defence: credentials are verifiable. If a &quot;Dr. Patel&quot; makes a
                  claim, searching &quot;Dr R Patel neuroscience&quot; takes 10 seconds. Real
                  experts have institutions, publications, and histories. Invented ones
                  don&apos;t.
                </p>
                <div className="tc-example">
                  &quot;I&apos;ve spent 18 years studying this. I cannot speak for my institution
                  but...&quot;
                  <br />— The institution caveat is designed to block verification while borrowing
                  the authority of having one.
                </div>
              </div>
            </div>

            <div className="trick-card" onClick={(e) => toggleTrick(e.currentTarget)}>
              <div className="tc-num">TRICK 02</div>
              <div className="tc-name">Emotional Hijack</div>
              <div className="tc-hook">Your feeling fires before your thinking can</div>
              <div className="tc-toggle">Tap to reveal the mechanism ↓</div>
              <div className="tc-body">
                <p>
                  Emotional responses fire in milliseconds. Rational evaluation takes 5–10
                  seconds. Any content that triggers a strong emotion — fear, outrage, sadness,
                  disgust — creates a window where you are most likely to share, believe, or act
                  before your analytical brain has engaged.
                </p>
                <p style={{ marginTop: '10px' }}>
                  In the Spot It quiz, the mum&apos;s post contained zero factual claims. It was
                  entirely emotional — and it worked. The brain doesn&apos;t distinguish between
                  emotionally resonant content and evidenced content. Strong feeling registers as
                  strong signal.
                </p>
                <div className="tc-example">
                  &quot;I am heartbroken. My daughter came home crying. I can&apos;t even type it
                  out.&quot;
                  <br />— No claim. Just emotion. But you believed something.
                </div>
              </div>
            </div>

            <div className="trick-card" onClick={(e) => toggleTrick(e.currentTarget)}>
              <div className="tc-num">TRICK 03</div>
              <div className="tc-name">Social Proof</div>
              <div className="tc-hook">380K likes is treated as evidence of truth</div>
              <div className="tc-toggle">Tap to reveal the mechanism ↓</div>
              <div className="tc-body">
                <p>
                  Social proof is an entirely sensible heuristic in the physical world: if
                  everyone is running away from something, you probably should too. Online, this
                  instinct gets weaponised. Large engagement numbers feel like a peer-reviewed
                  consensus. They&apos;re not. 100,000 fake likes can be purchased for under £20.
                </p>
                <p style={{ marginTop: '10px' }}>
                  The ratio effect adds another layer: when the sceptic gets 29K downvotes,
                  onlookers learn that expressing doubt is socially costly. This isn&apos;t just
                  about believing the claim — it&apos;s about suppressing your own contrary
                  instinct to avoid social punishment. After several posts, repetition also
                  creates fluency — and fluency feels like truth.
                </p>
                <div className="tc-example">
                  &quot;1.2 million parents already know about this.&quot;
                  <br />— A number is not a vote for truth. It is a number.
                </div>
              </div>
            </div>

            <div className="trick-card" onClick={(e) => toggleTrick(e.currentTarget)}>
              <div className="tc-num">TRICK 04</div>
              <div className="tc-name">False Urgency</div>
              <div className="tc-hook">Speed switches off your checking instinct</div>
              <div className="tc-toggle">Tap to reveal the mechanism ↓</div>
              <div className="tc-body">
                <p>
                  Urgency is a decision-making override. When something feels time-sensitive, the
                  brain deprioritises verification in favour of action. This is why scams,
                  phishing emails, and manipulation campaigns all use the same language:
                  &quot;NOW&quot;, &quot;before it&apos;s deleted&quot;, &quot;they don&apos;t
                  want you to see this.&quot;
                </p>
                <p style={{ marginTop: '10px' }}>
                  Real important information does not expire in ten minutes. No genuine scientific
                  finding, government document, or breaking news story disappears if you take 30
                  seconds to check the source. Urgency is almost always a signal to pause, not to
                  act.
                </p>
                <div className="tc-example">
                  &quot;SHARE BEFORE IT&apos;S GONE. They&apos;re deleting this within the
                  hour.&quot;
                  <br />— Notice it never tells you what &quot;this&quot; is. Urgency without
                  content is pure manipulation.
                </div>
              </div>
            </div>
          </div>

          <div
            className="container fade-up"
            style={{
              padding: '0',
              marginTop: '32px',
              paddingBottom: '0',
            }}
          >
            <div
              style={{
                padding: '20px 24px',
                background: 'rgba(92,63,196,0.1)',
                border: '1px solid rgba(92,63,196,0.25)',
                borderRadius: '4px',
              }}
            >
              <p
                style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-head)',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: 'var(--purple)',
                  marginBottom: '10px',
                }}
              >
                ALSO AT WORK IN THE FEED
              </p>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7 }}>
                <strong style={{ color: 'var(--white)' }}>Inoculation framing</strong> — phrases
                like &quot;off the record&quot; and &quot;I&apos;m not saying panic&quot; borrow
                the tone of honesty while avoiding checkable claims.{' '}
                <strong style={{ color: 'var(--white)' }}>Illusory truth</strong> — after five
                posts on the same topic, the idea feels familiar; familiarity feels like
                evidence even when every post was fabricated.
              </p>
            </div>
          </div>

          <div className="container" style={{ padding: '0', marginTop: '32px' }}>
            <button
              type="button"
              className="btn-primary"
              onClick={() => scrollToChapter(3)}
            >
              Test yourself: spot the tricks →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
