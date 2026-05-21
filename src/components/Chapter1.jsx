import { FeedPost } from './FeedPost';
import { scenarios } from '../data/scenarios';

const SCENARIO_KEYS = [
  { key: 'health', icon: '\u25F3', label: 'Health & medicine' },
  { key: 'politics', icon: '\u25B2', label: 'Politics & elections' },
  { key: 'fitness', icon: '\u25A0', label: 'Fitness & diet' },
  { key: 'climate', icon: '\u25B3', label: 'Climate & environment' },
  { key: 'finance', icon: '\u25C6', label: 'Finance & economy' },
  { key: 'global', icon: '\u25CB', label: 'Global affairs' },
];

export function Chapter1({
  currentScenario,
  setCurrentScenario,
  preScore,
  setPreScore,
  postScore,
  setPostScore,
  feedStarted,
  setFeedStarted,
  revealShown,
  setRevealShown,
  postMeterVisible,
  setPostMeterVisible,
  scrollToChapter,
  resetExperiment,
}) {
  const scenario = scenarios[currentScenario];
  const shift = postScore - preScore;
  const pickerLocked = feedStarted;

  const selectScenario = (key) => {
    if (pickerLocked) return;
    setCurrentScenario(key);
    setPreScore(20);
    setPostScore(20);
  };

  const startFeed = () => {
    setFeedStarted(true);
    setPostScore(preScore);
    setRevealShown(false);
    setPostMeterVisible(true);
  };

  const showReveal = () => {
    setRevealShown(true);
    setPostMeterVisible(false);
  };

  const shiftContent = () => {
    if (shift > 0) {
      return {
        num: `+${shift} points`,
        className: 'shift-number shift-up',
        label:
          'Your belief increased — on content you knew was inside an experiment. In the real world, there is no warning.',
      };
    }
    if (shift < 0) {
      return {
        num: `${shift} points`,
        className: 'shift-number shift-down',
        label:
          "Your belief dropped — you grew more sceptical. This protective instinct is exactly what children haven't yet developed.",
      };
    }
    return {
      num: '\u00b10',
      className: 'shift-number shift-zero',
      label:
        "Your score didn't move. Real-world exposure is cumulative — belief rarely shifts on one post; it shifts on the 50th. Try another scenario to see how a different topic affects you.",
    };
  };

  const shiftInfo = shiftContent();

  return (
    <section className="chapter" id="ch1">
      <div className="container">
        <div className="ch-label">Chapter 01 — The Experiment</div>
        <h2 className="ch-title">
          Pick your scenario.
          <br />
          Then rate the claim.
        </h2>
        <p className="ch-intro">
          Choose a topic below. Each scenario uses a completely different subject — but
          identical manipulation techniques. See if knowing the topic changes how well you
          resist.
        </p>

        <div
          id="scenario-picker"
          style={{
            marginBottom: '32px',
            opacity: pickerLocked ? 0.4 : 1,
            pointerEvents: pickerLocked ? 'none' : 'auto',
          }}
        >
          <div
            style={{
              fontSize: '11px',
              fontFamily: 'var(--font-head)',
              fontWeight: 700,
              letterSpacing: '0.12em',
              color: 'var(--muted)',
              marginBottom: '14px',
            }}
          >
            CHOOSE YOUR SCENARIO
          </div>
          <p
            style={{
              fontSize: '13px',
              color: 'var(--muted)',
              marginBottom: '14px',
              lineHeight: 1.6,
            }}
          >
            All claims and posts are entirely fabricated for training purposes.
          </p>
          <div className="scenario-grid">
            {SCENARIO_KEYS.map(({ key, icon, label }) => (
              <div
                key={key}
                className={`scenario-btn${currentScenario === key ? ' active' : ''}`}
                data-scenario={key}
                onClick={() => selectScenario(key)}
                onKeyDown={(e) => e.key === 'Enter' && selectScenario(key)}
                role="button"
                tabIndex={0}
              >
                <div className="sc-icon">{icon}</div>
                <div className="sc-label">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {!feedStarted && (
          <div className="belief-meter" id="pre-meter">
            <label>The claim:</label>
            <div className="claim-text">{scenario.claim}</div>
            <div
              style={{
                fontSize: '11px',
                fontFamily: 'var(--font-head)',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: 'var(--muted)',
                marginBottom: '6px',
              }}
            >
              TOPIC
            </div>
            <div
              id="scenario-tag"
              style={{
                display: 'inline-block',
                fontSize: '12px',
                padding: '4px 12px',
                borderRadius: '2px',
                background: 'rgba(214,60,47,0.15)',
                color: 'var(--red)',
                fontFamily: 'var(--font-head)',
                fontWeight: 600,
                letterSpacing: '0.06em',
                marginBottom: '16px',
              }}
            >
              {scenario.label}
            </div>
            <br />
            <label>
              How true does this feel? (0 = definitely false, 100 = definitely true)
            </label>
            <div className="slider-wrap">
              <input
                type="range"
                min="0"
                max="100"
                value={preScore}
                step="1"
                id="pre-slider"
                onChange={(e) => setPreScore(Number(e.target.value))}
              />
              <span className="slider-val" id="pre-val">
                {preScore}%
              </span>
            </div>
            <div className="slider-labels">
              <span>Definitely false</span>
              <span>No idea</span>
              <span>Definitely true</span>
            </div>
            <br />
            <button type="button" className="btn-primary" onClick={startFeed}>
              Lock in my score and show the feed →
            </button>
          </div>
        )}

        {feedStarted && (
          <div id="feed-section">
            <div
              style={{
                background: 'rgba(214,60,47,0.08)',
                border: '1px solid rgba(214,60,47,0.2)',
                borderRadius: '4px',
                padding: '16px 20px',
                marginBottom: '24px',
              }}
            >
              <p style={{ fontSize: '14px', color: 'var(--muted)' }}>
                Your score is locked at{' '}
                <strong id="locked-score" style={{ color: 'var(--white)' }}>
                  {preScore}%
                </strong>
                . Now scroll through the feed — notice what happens inside you as you read.
              </p>
            </div>

            <div className="feed-wrapper" id="feed-wrapper">
              {scenario.posts.map((post, i) => (
                <FeedPost key={i} post={post} index={i} />
              ))}
            </div>

            {postMeterVisible && (
              <div style={{ marginTop: '32px' }} id="post-meter">
                <div className="belief-meter">
                  <label>After seeing the feed — how true does the claim feel now?</label>
                  <div className="slider-wrap">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={postScore}
                      step="1"
                      id="post-slider"
                      onChange={(e) => setPostScore(Number(e.target.value))}
                    />
                    <span className="slider-val" id="post-val">
                      {postScore}%
                    </span>
                  </div>
                  <div className="slider-labels">
                    <span>Definitely false</span>
                    <span>No idea</span>
                    <span>Definitely true</span>
                  </div>
                  <br />
                  <button type="button" className="btn-primary" onClick={showReveal}>
                    Reveal what just happened →
                  </button>
                </div>
              </div>
            )}

            {revealShown && (
              <div id="reveal-section">
                <div className="shift-display">
                  <div className={shiftInfo.className} id="shift-num">
                    {shiftInfo.num}
                  </div>
                  <div className="shift-label" id="shift-label">
                    {shiftInfo.label}
                  </div>
                </div>

                <div className="reveal-block danger">
                  <h3>The claim is completely made up.</h3>
                  <p id="reveal-detail">{scenario.revealDetail}</p>
                </div>

                <div className="reveal-block info" style={{ marginTop: '20px' }}>
                  <h3>Six mechanisms were layered — built from 4 core tricks</h3>
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--muted)',
                      marginBottom: '16px',
                      lineHeight: 1.7,
                    }}
                  >
                    The feed combined four teachable tricks (fake expert, emotional hijack,
                    social proof, false urgency) with two delivery tactics that make them land
                    harder. Next you&apos;ll learn the four tricks in detail — and how to spot
                    them in any topic.
                  </p>
                  <ul className="trick-list">
                    <li>
                      <span className="trick-num">01</span>
                      <span>
                        <strong>Fake expert</strong> (authority bias) — a credentialled badge
                        shifts belief before you read a word.
                      </span>
                    </li>
                    <li>
                      <span className="trick-num">02</span>
                      <span>
                        <strong>Social proof</strong> — hundreds of thousands of likes are treated
                        by your brain as evidence of truth.
                      </span>
                    </li>
                    <li>
                      <span className="trick-num">03</span>
                      <span>
                        <strong>Emotional hijack</strong> (anecdotal anchoring) — the personal
                        story activates empathy, bypassing analytical processing.
                      </span>
                    </li>
                    <li>
                      <span className="trick-num">04</span>
                      <span>
                        <strong>Social proof</strong> (the ratio effect) — the sceptic getting
                        ratio&apos;d teaches you that doubt is socially costly.
                      </span>
                    </li>
                    <li>
                      <span className="trick-num">05</span>
                      <span>
                        <strong>Also at work: inoculation framing</strong> — &quot;I&apos;m not
                        saying panic&quot; and &quot;off the record&quot; simulate intellectual
                        honesty.
                      </span>
                    </li>
                    <li>
                      <span className="trick-num">06</span>
                      <span>
                        <strong>Also at work: illusory truth</strong> — after 5 posts, the idea is
                        fluent and familiar. Fluency feels like truth.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="reveal-block amber" style={{ marginTop: '20px' }}>
                  <h3>Why children are far more vulnerable</h3>
                  <p>
                    Adults have imperfect but developed sceptical heuristics. Children
                    haven&apos;t. They haven&apos;t learned that follower counts don&apos;t equal
                    credibility, that &quot;verified&quot; is meaningless about accuracy, or that
                    emotional resonance isn&apos;t evidence. A 10-year-old doesn&apos;t see
                    manipulation — they see consensus reality. The belief doesn&apos;t just stick
                    — it becomes a lens.
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '20px',
                    padding: '16px 20px',
                    background: 'rgba(92,63,196,0.1)',
                    border: '1px solid rgba(92,63,196,0.25)',
                    borderRadius: '4px',
                  }}
                >
                  <p style={{ fontSize: '13px', color: 'var(--muted)' }}>
                    Want to test yourself on a different topic?{' '}
                    <button
                      type="button"
                      onClick={resetExperiment}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--purple)',
                        fontFamily: 'var(--font-head)',
                        fontWeight: 700,
                        fontSize: '13px',
                        cursor: 'pointer',
                        padding: 0,
                        letterSpacing: '0.04em',
                      }}
                    >
                      Run the experiment again ↺
                    </button>
                  </p>
                </div>

                <div style={{ marginTop: '24px' }}>
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={() => scrollToChapter(2)}
                  >
                    Learn the 4 tricks in detail →
                  </button>
                  <button
                    type="button"
                    className="btn-ghost"
                    style={{ marginLeft: '12px' }}
                    onClick={() => scrollToChapter(6)}
                  >
                    Skip to the lesson plan →
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
