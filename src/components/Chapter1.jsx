import { useState } from 'react';
import { FeedPost } from './FeedPost';
import { ChatMessage } from './ChatMessage';
import { CallMessage } from './CallMessage';
import { PhoneFrame } from './PhoneFrame';
import { scenarios, feedTags } from '../data/scenarios';
import { aiScenarios } from '../data/aiScenarios';
import { callScenarios, CALL_KEYS } from '../data/callScenarios';

const TOPIC_KEYS = [
  { key: 'health', icon: '◳', label: 'Health & medicine' },
  { key: 'politics', icon: '▲', label: 'Politics & elections' },
  { key: 'fitness', icon: '■', label: 'Fitness & diet' },
  { key: 'climate', icon: '△', label: 'Climate & environment' },
  { key: 'finance', icon: '◆', label: 'Finance & economy' },
  { key: 'global', icon: '○', label: 'Global affairs' },
];

const MODES = [
  { key: 'social', title: 'The feed', sub: 'In public, with a crowd watching' },
  { key: 'ai', title: 'The chatbot', sub: 'In private, with nobody watching' },
  { key: 'call', title: 'The call', sub: 'From someone you think you know' },
];

const FEED_MECHANISMS = [
  ['Fake expert', 'A badge and a job title did the persuading before you read the post.'],
  ['Emotional hijack', 'The video told a personal story with no checkable fact in it. You felt it anyway.'],
  ['Social proof', 'Hundreds of thousands of likes read as "lots of people have checked this". Nobody had.'],
  ['False urgency', '"Breaking", "share before it disappears". Hurry is there to stop you looking.'],
  ['Borrowed trust', 'One post reached you through a relative. You trusted them, so you trusted it.'],
  ['The pile-on', 'The one accurate reply was buried in angry responses. That teaches everyone watching to keep quiet.'],
];

const AI_PATTERNS = [
  ['Flattery', 'It told you your question was a good one and your instinct was sound, before it had checked anything.'],
  ['Borrowed authority', 'Tidy bullet points, named studies and links to real sites. The studies were invented and the linked pages say something else.'],
  ['Comfort built from memory', 'It used things it knew about you to reassure you. Reassurance from a machine that remembers your children feels like care. It lowered your guard.'],
  ['Lopsided balance', '"To be fair, official bodies say..." sounded even-handed. Read the wording again and one side gets a sentence while the other gets the last word.'],
];

const COMPARE_ROWS = [
  ['A fake expert with a badge', 'Confident prose with source links'],
  ['380K likes', 'Fluent, well-organised writing'],
  ['A tearful story on video', '"I understand how worrying this is"'],
  ['"Share before it\'s deleted"', 'Agreeing with you before checking'],
  ['The sceptic gets shouted down', 'There is no sceptic. Nobody else is in the room'],
];

function uniqueTags(messages) {
  const seen = new Set();
  return messages
    .map((m) => m.tag)
    .filter((t) => t && t.cls !== 'green' && !seen.has(t.text) && seen.add(t.text));
}

export function Chapter1({ scrollToChapter }) {
  const [mode, setMode] = useState('social');
  const [topic, setTopic] = useState('health');
  const [callKey, setCallKey] = useState('family');
  const [preScore, setPreScore] = useState(20);
  const [postScore, setPostScore] = useState(20);
  const [started, setStarted] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [engagements, setEngagements] = useState({});

  const isAI = mode === 'ai';
  const isCall = mode === 'call';
  const scenario = scenarios[topic];
  const aiScenario = aiScenarios[topic];
  const call = callScenarios[callKey];
  const active = isCall ? call : scenario;
  const shift = postScore - preScore;
  const thing = isCall ? 'conversation' : isAI ? 'chat' : 'feed';

  const reset = (m = mode) => {
    const base = m === 'call' ? 50 : 20;
    setStarted(false);
    setRevealed(false);
    setEngagements({});
    setPreScore(base);
    setPostScore(base);
  };

  const switchMode = (m) => {
    if (m === mode) return;
    setMode(m);
    reset(m);
  };

  const pick = (key) => {
    if (started) return;
    if (isCall) setCallKey(key);
    else setTopic(key);
  };

  const start = () => {
    setEngagements({});
    setPostScore(preScore);
    setRevealed(false);
    setStarted(true);
  };

  const rerun = () => {
    reset();
    scrollToChapter(1);
  };

  const onEngage = (index, key, value) => {
    setEngagements((prev) => ({ ...prev, [index]: { ...prev[index], [key]: value } }));
  };

  const engagedPosts = Object.entries(engagements)
    .filter(([, e]) => e.liked || e.reposted)
    .map(([i, e]) => {
      const index = Number(i);
      const actions = [e.liked && 'liked', e.reposted && 'reposted'].filter(Boolean).join(' and ');
      return { index, actions, name: scenario.posts[index].name, desc: feedTags[index].desc };
    })
    .sort((a, b) => a.index - b.index);

  let shiftInfo;
  if (shift > 0) {
    shiftInfo = {
      num: `+${shift} points`,
      cls: 'shift-up',
      label: isCall
        ? 'You got surer it was really them. Every detail that convinced you was chosen to. You also knew this was a test, and real ones arrive with no warning.'
        : isAI
          ? 'Your belief went up after one private chat that you knew was part of an experiment. A real one comes with no warning, and nobody else ever sees it.'
          : 'Your belief went up, on posts you knew were part of an experiment. Your real feed comes with no warning.',
    };
  } else if (shift < 0) {
    shiftInfo = {
      num: `${shift} points`,
      cls: 'shift-down',
      label: isCall
        ? 'You got more suspicious as it went on. Good. The pressure and the secrecy were the giveaways, and you noticed them.'
        : 'Your belief went down. Something made you more suspicious as you read. Children mostly haven\'t built that reflex yet.',
    };
  } else {
    shiftInfo = {
      num: '±0',
      cls: 'shift-zero',
      label:
        'Your score didn\'t move. One exposure rarely shifts anyone. The fiftieth does. Try another scenario and see whether a different subject gets to you.',
    };
  }

  const pickerKeys = isCall ? CALL_KEYS : TOPIC_KEYS;
  const pickedKey = isCall ? callKey : topic;
  const sliderEnds = isCall
    ? ['Definitely fake', 'No idea', 'Definitely them']
    : ['Definitely false', 'No idea', 'Definitely true'];

  const slider = (value, onChange, id) => (
    <>
      <div className="slider-wrap">
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          id={id}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        <span className="slider-val">{value}%</span>
      </div>
      <div className="slider-labels">
        {sliderEnds.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </>
  );

  return (
    <section className="chapter" id="ch1">
      <div className="container">
        <div className="ch-label">Chapter 01 · The Experiment</div>
        <h2 className="ch-title">
          Pick how they reach you.
          <br />
          Then rate what you see.
        </h2>
        <p className="ch-intro">
          There are three ways in. A feed changes what you believe in front of a crowd. A
          chatbot does it in private. A call skips belief altogether and pretends to be
          someone you already trust. Try one, then come back for the others.
        </p>

        <div className="mode-tabs" role="tablist" aria-label="Choose how you are reached">
          {MODES.map((m) => (
            <button
              key={m.key}
              type="button"
              role="tab"
              aria-selected={mode === m.key}
              className={`mode-tab${mode === m.key ? ' active' : ''}`}
              onClick={() => switchMode(m.key)}
            >
              <span className="mt-title">{m.title}</span>
              <span className="mt-sub">{m.sub}</span>
            </button>
          ))}
        </div>

        <div className={`scenario-picker${started ? ' locked' : ''}`}>
          <div className="picker-label">{isCall ? 'WHO IS CALLING' : 'CHOOSE A TOPIC'}</div>
          <p className="picker-note">
            Everything here is made up for training: every claim, post, reply, name and
            number.
          </p>
          <div className="scenario-grid">
            {pickerKeys.map(({ key, icon, label }) => (
              <button
                key={key}
                type="button"
                disabled={started}
                aria-pressed={pickedKey === key}
                className={`scenario-btn${pickedKey === key ? ' active' : ''}`}
                onClick={() => pick(key)}
              >
                <span className="sc-icon">{icon}</span>
                <span className="sc-label">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {!started && (
          <div className="belief-meter">
            {isCall && <p className="setup-line">{call.setup}</p>}
            <label>{isCall ? 'It opens like this:' : 'The claim:'}</label>
            <div className="claim-text">{active.claim}</div>
            <div className="scenario-tag">{active.label}</div>
            <br />
            <label htmlFor="pre-slider">
              {isCall
                ? `${call.question} (0 = definitely fake, 100 = definitely them)`
                : 'How true does this feel? (0 = definitely false, 100 = definitely true)'}
            </label>
            {slider(preScore, setPreScore, 'pre-slider')}
            <br />
            <button type="button" className="btn-primary" onClick={start}>
              {isCall
                ? 'Lock in my score and carry on →'
                : isAI
                  ? 'Lock in my score and ask the chatbot →'
                  : 'Lock in my score and open the feed →'}
            </button>
          </div>
        )}

        {started && (
          <div id="feed-section">
            <div className="locked-banner">
              <p>
                Your score is locked at <strong>{preScore}%</strong>.{' '}
                {isCall
                  ? 'Now read how the conversation goes. Notice the moment you start wanting to help.'
                  : isAI
                    ? 'Same claim, but this time you asked an AI assistant about it, on your own.'
                    : 'Scroll the feed and notice how each post makes you feel. Like or repost anything that gets to you. Be honest.'}
              </p>
            </div>

            <PhoneFrame variant={mode} header={isCall ? call.header : undefined}>
              {isCall && (
                <div className="chat-wrapper">
                  {call.messages.map((msg, i) => (
                    <CallMessage key={`${callKey}-${i}`} msg={msg} index={i} revealed={revealed} />
                  ))}
                </div>
              )}
              {isAI && (
                <div className="chat-wrapper">
                  {aiScenario.messages.map((msg, i) => (
                    <ChatMessage key={`${topic}-${i}`} msg={msg} index={i} revealed={revealed} />
                  ))}
                </div>
              )}
              {!isAI && !isCall && (
                <div className="feed-wrapper">
                  {scenario.posts.map((post, i) => (
                    <FeedPost
                      key={`${topic}-${i}`}
                      post={post}
                      index={i}
                      revealed={revealed}
                      tag={feedTags[i]}
                      engagement={engagements[i]}
                      onEngage={onEngage}
                    />
                  ))}
                </div>
              )}
            </PhoneFrame>

            {!revealed && (
              <div className="belief-meter post-meter">
                <label htmlFor="post-slider">
                  {isCall
                    ? `Having read all of it: ${call.question.charAt(0).toLowerCase()}${call.question.slice(1)}`
                    : `After the ${thing}, how true does the claim feel now?`}
                </label>
                {slider(postScore, setPostScore, 'post-slider')}
                <br />
                <button type="button" className="btn-primary" onClick={() => setRevealed(true)}>
                  Show me what just happened →
                </button>
              </div>
            )}

            {revealed && (
              <div id="reveal-section">
                <div className="shift-display">
                  <div className={`shift-number ${shiftInfo.cls}`}>{shiftInfo.num}</div>
                  <div className="shift-label">{shiftInfo.label}</div>
                </div>

                <p className="reveal-scrollback">
                  ↑ Scroll back up through the {thing}. Each part is now labelled with what it
                  was doing.
                </p>

                {!isAI && !isCall && (
                  <>
                    <div className="reveal-block danger">
                      <h3>The claim is made up. So is everything else.</h3>
                      <p>
                        {scenario.revealDetail} The like counts that climbed while you read
                        were scripted too.
                      </p>
                    </div>

                    {engagedPosts.length > 0 && (
                      <div className="reveal-block amber">
                        <h3>You helped spread it.</h3>
                        <ul className="trick-list">
                          {engagedPosts.map((e) => (
                            <li key={e.index}>
                              <span className="trick-num">
                                {String(e.index + 1).padStart(2, '0')}
                              </span>
                              <span>
                                You {e.actions} <strong>{e.name}</strong>: {e.desc}.
                              </span>
                            </li>
                          ))}
                        </ul>
                        <p style={{ marginTop: '12px' }}>
                          Each like you gave made the post look more believable to the next
                          person. Nobody had to pay you to pass it on.
                        </p>
                      </div>
                    )}

                    <div className="reveal-block info">
                      <h3>Six things were working on you</h3>
                      <p className="reveal-lede">
                        The first four are the tricks you&apos;ll learn in the next chapter. The
                        last two are about how the posts reached you.
                      </p>
                      <ul className="trick-list">
                        {FEED_MECHANISMS.map(([name, detail], i) => (
                          <li key={name}>
                            <span className="trick-num">{String(i + 1).padStart(2, '0')}</span>
                            <span>
                              <strong>{name}.</strong> {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="reveal-block amber">
                      <h3>Why this hits children harder</h3>
                      <p>
                        Most adults have learned, slowly and imperfectly, that a big follower
                        count proves nothing and that a tick can be bought. A ten-year-old
                        hasn&apos;t had the time. To them a feed like this one looks like what
                        everybody thinks. Five posts in a row saying the same thing is, as far
                        as they can tell, the world agreeing.
                      </p>
                    </div>
                  </>
                )}

                {isAI && (
                  <>
                    <div className="reveal-block danger">
                      <h3>The chatbot made it up, with links.</h3>
                      <p>{aiScenario.revealDetail}</p>
                    </div>

                    <div className="reveal-block info">
                      <h3>Four patterns to watch for</h3>
                      <p className="reveal-lede">
                        There were no fake accounts here and no like counts. There was one
                        helpful voice, agreeing with you.
                      </p>
                      <ul className="trick-list">
                        {AI_PATTERNS.map(([name, detail], i) => (
                          <li key={name}>
                            <span className="trick-num">{String(i + 1).padStart(2, '0')}</span>
                            <span>
                              <strong>{name}.</strong> {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="reveal-block green">
                      <h3>The same tricks in a different place</h3>
                      <div className="table-scroll">
                        <table className="compare-table">
                          <thead>
                            <tr>
                              <th>On the feed</th>
                              <th>In the chat</th>
                            </tr>
                          </thead>
                          <tbody>
                            {COMPARE_ROWS.map(([a, b]) => (
                              <tr key={a}>
                                <td>{a}</td>
                                <td>{b}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="reveal-block amber">
                      <h3>Why this is harder to catch than the feed</h3>
                      <p>
                        A feed at least shows you other people, and sometimes one of them is
                        asking for a source. A chat has no audience. It is shaped around your
                        question, it sounds like a well-read friend, and it may remember
                        enough about you to say the comforting thing. A link at the bottom
                        looks like proof, and most of us never click it.{' '}
                        <strong>
                          Open the link. Find the sentence. If it isn&apos;t there, the answer
                          has no source.
                        </strong>
                      </p>
                      <p style={{ marginTop: '10px' }}>
                        Real assistants are usually more careful than this script. They also
                        get things wrong in exactly these ways, and the same patterns can be
                        built in on purpose by anyone who sets up a chatbot to sell or
                        persuade.
                      </p>
                    </div>
                  </>
                )}

                {isCall && (
                  <>
                    <div className="reveal-block danger">
                      <h3>{call.revealTitle}</h3>
                      <p>{call.revealDetail}</p>
                    </div>

                    <div className="reveal-block info">
                      <h3>What was used on you</h3>
                      <ul className="trick-list">
                        {uniqueTags(call.messages).map((t, i) => (
                          <li key={t.text}>
                            <span className="trick-num">{String(i + 1).padStart(2, '0')}</span>
                            <span>{t.text}.</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="reveal-block green">
                      <h3>The one move that ends it</h3>
                      <p>{call.check}</p>
                    </div>

                    <div className="reveal-block amber">
                      <h3>You can&apos;t solve this by listening harder</h3>
                      <p>
                        A few years ago you could catch a fake by the robotic voice or the odd
                        hands. That advice has expired. A cloned voice now needs only a few
                        seconds of audio. In a 2023 study, listeners missed about a quarter of
                        fake voice clips, and the tools have improved since. So stop trying to judge the voice. Check the channel
                        instead: hang up, and contact the person yourself on a number you
                        already had.
                      </p>
                    </div>
                  </>
                )}

                <div className="rerun-box">
                  <p>
                    There are two other ways in, and more scenarios in each.{' '}
                    <button type="button" className="link-btn" onClick={rerun}>
                      Run it again ↺
                    </button>
                  </p>
                </div>

                <div className="btn-row">
                  <button type="button" className="btn-primary" onClick={() => scrollToChapter(2)}>
                    Learn the five tricks →
                  </button>
                  <button
                    type="button"
                    className="btn-ghost"
                    onClick={() => scrollToChapter(isCall ? 3 : 7)}
                  >
                    {isCall ? 'What to do about fake calls →' : 'Skip to the lesson plan →'}
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
