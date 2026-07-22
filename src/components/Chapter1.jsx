import { useState } from 'react';
import { FeedPost } from './FeedPost';
import { ChatMessage } from './ChatMessage';
import { PhoneFrame } from './PhoneFrame';
import { scenarios, feedTags } from '../data/scenarios';
import { aiScenarios } from '../data/aiScenarios';

const SCENARIO_KEYS = [
  { key: 'health', icon: '◳', label: 'Health & medicine' },
  { key: 'politics', icon: '▲', label: 'Politics & elections' },
  { key: 'fitness', icon: '■', label: 'Fitness & diet' },
  { key: 'climate', icon: '△', label: 'Climate & environment' },
  { key: 'finance', icon: '◆', label: 'Finance & economy' },
  { key: 'global', icon: '○', label: 'Global affairs' },
];

const AI_PATTERNS = [
  {
    name: 'Sycophancy',
    detail:
      'the AI agreed with your premise before examining it. Validation feels like confirmation — but it was mirroring you, not checking facts.',
  },
  {
    name: 'False authority',
    detail:
      'fluent, well-formatted prose with named studies and document numbers. Every citation was invented — the confidence was the credential.',
  },
  {
    name: 'Fake comfort',
    detail:
      '"you\'re clearly a caring parent" from something that doesn\'t know you. Comfort lowers scrutiny — flattery is a delivery mechanism.',
  },
  {
    name: 'Illusory balance',
    detail:
      '"to be fair, official bodies say…" — the both-sides framing simulated neutrality while the wording quietly buried the official view.',
  },
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
  const [mode, setMode] = useState('social');
  const [engagements, setEngagements] = useState({});

  const scenario = scenarios[currentScenario];
  const aiScenario = aiScenarios[currentScenario];
  const shift = postScore - preScore;
  const pickerLocked = feedStarted;
  const isAI = mode === 'ai';

  const selectScenario = (key) => {
    if (pickerLocked) return;
    setCurrentScenario(key);
    setPreScore(20);
    setPostScore(20);
  };

  const switchMode = (m) => {
    if (m === mode) return;
    setMode(m);
    setEngagements({});
    setFeedStarted(false);
    setRevealShown(false);
    setPostMeterVisible(true);
    setPreScore(20);
    setPostScore(20);
  };

  const startFeed = () => {
    setEngagements({});
    setFeedStarted(true);
    setPostScore(preScore);
    setRevealShown(false);
    setPostMeterVisible(true);
  };

  const showReveal = () => {
    setRevealShown(true);
    setPostMeterVisible(false);
  };

  const onEngage = (index, key, value) => {
    setEngagements((prev) => ({
      ...prev,
      [index]: { ...prev[index], [key]: value },
    }));
  };

  const rerun = () => {
    setEngagements({});
    resetExperiment();
  };

  const engagedPosts = Object.entries(engagements)
    .filter(([, e]) => e.liked || e.reposted)
    .map(([i, e]) => {
      const index = Number(i);
      const actions = [e.liked && 'liked', e.reposted && 'reposted'].filter(Boolean).join(' and ');
      return { index, actions, name: scenario.posts[index].name, desc: feedTags[index].desc };
    })
    .sort((a, b) => a.index - b.index);

  const shiftContent = () => {
    if (shift > 0) {
      return {
        num: `+${shift} points`,
        className: 'shift-number shift-up',
        label: isAI
          ? 'Your belief increased — from one private conversation you knew was inside an experiment. In the real world, nobody else even sees the chat.'
          : 'Your belief increased — on content you knew was inside an experiment. In the real world, there is no warning.',
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
      num: '±0',
      className: 'shift-number shift-zero',
      label:
        "Your score didn't move. Real-world exposure is cumulative — belief rarely shifts on one exposure; it shifts on the 50th. Try another scenario to see how a different topic affects you.",
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

        <div className="mode-tabs" role="tablist" aria-label="Choose the medium">
          <button
            type="button"
            role="tab"
            aria-selected={!isAI}
            className={`mode-tab${!isAI ? ' active' : ''}`}
            onClick={() => switchMode('social')}
          >
            <span className="mt-title">📱 The social feed</span>
            <span className="mt-sub">How you're manipulated in public</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={isAI}
            className={`mode-tab${isAI ? ' active' : ''}`}
            onClick={() => switchMode('ai')}
          >
            <span className="mt-title">🤖 The AI chat</span>
            <span className="mt-sub">How you're manipulated in private</span>
          </button>
        </div>

        <div
          id="scenario-picker"
          style={{
            marginBottom: '32px',
            opacity: pickerLocked ? 0.4 : 1,
            pointerEvents: pickerLocked ? 'none' : 'auto',
          }}
        >
          <div className="picker-label">CHOOSE YOUR SCENARIO</div>
          <p className="picker-note">
            All claims, posts and chat replies are entirely fabricated for training purposes.
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
            <div className="picker-label" style={{ marginBottom: '6px' }}>TOPIC</div>
            <div id="scenario-tag" className="scenario-tag">
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
              {isAI
                ? 'Lock in my score and ask the AI →'
                : 'Lock in my score and show the feed →'}
            </button>
          </div>
        )}

        {feedStarted && (
          <div id="feed-section">
            <div className="locked-banner">
              <p>
                Your score is locked at{' '}
                <strong id="locked-score">{preScore}%</strong>.{' '}
                {isAI
                  ? 'Now read the conversation. Same claim — but this time you asked an AI assistant, in private.'
                  : 'Now scroll through the feed — notice what happens inside you as you read. Tap like or repost if a post moves you. Be honest.'}
              </p>
            </div>

            <PhoneFrame variant={isAI ? 'ai' : 'social'}>
              {isAI ? (
                <div className="chat-wrapper" id="chat-wrapper">
                  {aiScenario.messages.map((msg, i) => (
                    <ChatMessage key={i} msg={msg} index={i} revealed={revealShown} />
                  ))}
                </div>
              ) : (
                <div className="feed-wrapper" id="feed-wrapper">
                  {scenario.posts.map((post, i) => (
                    <FeedPost
                      key={`${currentScenario}-${i}`}
                      post={post}
                      index={i}
                      revealed={revealShown}
                      tag={feedTags[i]}
                      engagement={engagements[i]}
                      onEngage={onEngage}
                    />
                  ))}
                </div>
              )}
            </PhoneFrame>

            {postMeterVisible && (
              <div style={{ marginTop: '32px' }} id="post-meter">
                <div className="belief-meter">
                  <label>
                    {isAI
                      ? 'After the conversation — how true does the claim feel now?'
                      : 'After seeing the feed — how true does the claim feel now?'}
                  </label>
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

                <p className="reveal-scrollback">
                  ↑ Scroll back through the {isAI ? 'conversation' : 'feed'} — every{' '}
                  {isAI ? 'message' : 'post'} now carries an evidence tag.
                </p>

                {!isAI && (
                  <>
                    <div className="reveal-block danger">
                      <h3>The claim is completely made up.</h3>
                      <p id="reveal-detail">
                        {scenario.revealDetail}{' '}
                        <em>
                          Even the like counts ticking upward while you read were scripted.
                        </em>
                      </p>
                    </div>

                    {engagedPosts.length > 0 && (
                      <div className="reveal-block amber" style={{ marginTop: '20px' }}>
                        <h3>You didn&apos;t just read it — you engaged with it.</h3>
                        <ul className="trick-list">
                          {engagedPosts.map((e) => (
                            <li key={e.index}>
                              <span className="trick-num">
                                {String(e.index + 1).padStart(2, '0')}
                              </span>
                              <span>
                                You {e.actions} <strong>{e.name}</strong> — {e.desc}.
                              </span>
                            </li>
                          ))}
                        </ul>
                        <p style={{ marginTop: '12px' }}>
                          Every like you gave was social proof for the next reader. That is
                          how the machine recruits you as a distributor.
                        </p>
                      </div>
                    )}

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
                  </>
                )}

                {isAI && (
                  <>
                    <div className="reveal-block danger">
                      <h3>Every citation the AI gave you was invented.</h3>
                      <p id="reveal-detail">{aiScenario.revealDetail}</p>
                    </div>

                    <div className="reveal-block info" style={{ marginTop: '20px' }}>
                      <h3>Four patterns were at work</h3>
                      <p
                        style={{
                          fontSize: '14px',
                          color: 'var(--muted)',
                          marginBottom: '16px',
                          lineHeight: 1.7,
                        }}
                      >
                        No fake accounts, no like counts, no breaking-news graphics. Just a
                        helpful voice, alone with you, agreeing with you. These are the four
                        patterns to watch for in any AI conversation:
                      </p>
                      <ul className="trick-list">
                        {AI_PATTERNS.map((p, i) => (
                          <li key={p.name}>
                            <span className="trick-num">{String(i + 1).padStart(2, '0')}</span>
                            <span>
                              <strong>{p.name}</strong> — {p.detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="reveal-block green" style={{ marginTop: '20px' }}>
                      <h3>Same tricks. New delivery system.</h3>
                      <p style={{ marginBottom: '14px' }}>
                        Every technique from the social feed has an AI-shaped twin. The
                        difference: this version talks only to you.
                      </p>
                      <div className="table-scroll">
                        <table className="compare-table">
                          <thead>
                            <tr>
                              <th>On the feed</th>
                              <th>In the chat</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Fake expert with a credential badge</td>
                              <td>Confident prose with invented citations</td>
                            </tr>
                            <tr>
                              <td>380K likes as social proof</td>
                              <td>Fluent formatting — fluency feels like truth</td>
                            </tr>
                            <tr>
                              <td>Emotional anecdote hijacks empathy</td>
                              <td>&quot;I understand how worrying this is&quot; — comfort lowers scrutiny</td>
                            </tr>
                            <tr>
                              <td>False urgency — share before it&apos;s deleted</td>
                              <td>Sycophancy — it agrees before it checks</td>
                            </tr>
                            <tr>
                              <td>The sceptic gets ratio&apos;d</td>
                              <td>No sceptic exists. Nobody else is in the room.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="reveal-block amber" style={{ marginTop: '20px' }}>
                      <h3>Why this is harder to catch than the feed</h3>
                      <p>
                        A feed at least shows you other people — including, sometimes, the one
                        sceptic asking for sources. A chat has no crowd, no dissent, no
                        community notes. The conversation is tailored to your premise, delivered
                        in the tone of a knowledgeable friend, and witnessed by no one. If the
                        citations are invented, there is nobody in the room to say so — unless
                        you&apos;ve learned to ask. The rule: <strong style={{ color: 'var(--white)' }}>
                        confidence is not a source. Ask for one, then check it exists.</strong>
                      </p>
                    </div>
                  </>
                )}

                <div className="rerun-box">
                  <p>
                    Want to test yourself on {isAI ? 'the other medium or ' : ''}a different
                    topic?{' '}
                    <button type="button" className="link-btn" onClick={rerun}>
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
