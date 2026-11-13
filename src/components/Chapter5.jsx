import { useState } from 'react';

const TRICK_TIPS = {
  'Fake expert': 'Add a title and a vague line about your institution. Leave out anything a reader could look up.',
  'Emotional hijack': 'Use feeling words. Don\'t state anything that could be checked.',
  'Social proof': 'Make the numbers big. Big numbers look like agreement.',
  'False urgency': 'Give a deadline: now, today, before it\'s deleted. You don\'t have to say what "it" is.',
  'Borrowed voice': 'Pretend to be someone the reader knows. Give a reason they can\'t ring you back.',
};

export function Chapter5({ scrollToChapter }) {
  const [b, setB] = useState({ trick: 'Fake expert', name: '', cred: '', claim: '', likes: '' });
  const set = (key) => (e) => setB((prev) => ({ ...prev, [key]: e.target.value }));

  const initials =
    b.name
      .replace(/[^a-zA-Z ]/g, '')
      .trim()
      .split(' ')
      .map((w) => w[0] || '')
      .join('')
      .substring(0, 2)
      .toUpperCase() || '?';

  return (
    <section className="chapter" id="ch5">
      <div className="container">
        <div className="ch-label">Chapter 05 · Build It</div>
        <h2 className="ch-title">Now you make one.</h2>
        <p className="ch-intro">
          This is the part that does the most good. Writing a manipulative post yourself shows
          you how little it takes, and people who have built one are better at noticing the
          next one. Nothing you type here is saved or sent anywhere.
        </p>

        <div className="builder-grid fade-up">
          <div className="build-form">
            <label htmlFor="b-trick">Choose your trick</label>
            <select id="b-trick" value={b.trick} onChange={set('trick')}>
              {Object.keys(TRICK_TIPS).map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            <p className="form-tip">{TRICK_TIPS[b.trick]}</p>

            <label htmlFor="b-name">Account name (make it sound believable)</label>
            <input id="b-name" type="text" placeholder="e.g. Dr_HealthWatch_UK" value={b.name} onChange={set('name')} />

            <label htmlFor="b-cred">Title or badge (optional)</label>
            <input id="b-cred" type="text" placeholder="e.g. PhD Neuroscience" value={b.cred} onChange={set('cred')} />

            <label htmlFor="b-claim">Your post (keep it vague, because details can be checked)</label>
            <textarea
              id="b-claim"
              placeholder="Write it here. Tip: hint at the claim without ever quite stating it."
              value={b.claim}
              onChange={set('claim')}
            />

            <label htmlFor="b-likes">Fake engagement</label>
            <input id="b-likes" type="text" placeholder="e.g. 847,000 likes" value={b.likes} onChange={set('likes')} />
          </div>

          <div>
            <div className="preview-label">LIVE PREVIEW</div>
            <div className="build-preview">
              <div className="post-hdr">
                <div className="post-av" style={{ background: '#2d1b6e', color: '#c4b5fd' }}>
                  {initials}
                </div>
                <div className="post-meta">
                  <div className={`post-name${b.name ? '' : ' is-empty'}`}>
                    {b.name || 'Your account name'}
                  </div>
                  {b.cred && <span className="post-badge badge-purple">{b.cred}</span>}
                  <div>
                    <div className="trick-badge-preview">TRICK: {b.trick.toUpperCase()}</div>
                  </div>
                </div>
              </div>
              <div className={`post-body${b.claim ? '' : ' is-empty'}`}>
                {b.claim || 'Your post will appear here...'}
              </div>
              <div className="post-stats">{b.likes || '0 likes'}</div>
            </div>
          </div>
        </div>

        <div className="build-insight fade-up">
          <p>
            That took you a couple of minutes and no training. <strong>A language model can
            write hundreds of these an hour</strong>, each in a different voice, each aimed at
            people who have already shown an interest in the subject. The feed in Chapter 1
            used five posts. A real campaign uses thousands.
          </p>
          <p style={{ marginTop: '12px' }}>
            So the supply of this stuff is not going to shrink. What can change is how you
            react when it reaches you.
          </p>
        </div>

        <div style={{ marginTop: '32px' }}>
          <button type="button" className="btn-primary" onClick={() => scrollToChapter(6)}>
            See what the research says →
          </button>
        </div>
      </div>
    </section>
  );
}
