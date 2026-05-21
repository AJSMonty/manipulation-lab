const TRICK_TIPS = {
  'Fake expert': 'Add a credential badge and vague institutional caveat — specifics are checkable.',
  'Emotional hijack': 'Use feeling words; avoid stating a checkable claim.',
  'Social proof': 'Inflate likes and shares — numbers feel like consensus.',
  'False urgency': 'Use NOW, deadlines, and "before it\'s deleted" — urgency without content works.',
};

export function Chapter4({ builder, setBuilder, scrollToChapter }) {
  const { trick, name, cred, claim, likes } = builder;
  const trickTip = TRICK_TIPS[trick] || '';

  const initials =
    name
      .replace(/[^a-zA-Z ]/g, '')
      .trim()
      .split(' ')
      .map((w) => w[0] || '')
      .join('')
      .substring(0, 2)
      .toUpperCase() || '?';

  const displayName = name || 'Your account name';
  const isDefaultName = !name;

  return (
    <section className="chapter" id="ch4">
      <div className="container">
        <div className="ch-label">Chapter 04 — Build It</div>
        <h2 className="ch-title">Now you make one.</h2>
        <p className="ch-intro">
          This is the most important activity. Constructing a manipulative post teaches your
          brain exactly how they work from the inside — creating immunity that reading about
          them never achieves.
        </p>

        <div className="builder-grid fade-up">
          <div className="build-form">
            <label>Choose your trick</label>
            <select
              value={trick}
              onChange={(e) => setBuilder((b) => ({ ...b, trick: e.target.value }))}
            >
              <option>Fake expert</option>
              <option>Emotional hijack</option>
              <option>Social proof</option>
              <option>False urgency</option>
            </select>
            {trickTip && (
              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--muted)',
                  marginTop: '-8px',
                  marginBottom: '16px',
                  lineHeight: 1.6,
                }}
              >
                {trickTip}
              </p>
            )}

            <label>Account name (make it sound credible)</label>
            <input
              type="text"
              placeholder="e.g. Dr_HealthWatch_UK"
              value={name}
              onChange={(e) => setBuilder((b) => ({ ...b, name: e.target.value }))}
            />

            <label>Credential or badge (optional)</label>
            <input
              type="text"
              placeholder="e.g. PhD Neuroscience"
              value={cred}
              onChange={(e) => setBuilder((b) => ({ ...b, cred: e.target.value }))}
            />

            <label>Your claim (keep it vague — specifics are checkable)</label>
            <textarea
              placeholder="Write your manipulative post here...

Tip: don't state what the claim actually is. Just gesture at it."
              value={claim}
              onChange={(e) => setBuilder((b) => ({ ...b, claim: e.target.value }))}
            />

            <label>Fake engagement numbers</label>
            <input
              type="text"
              placeholder="e.g. 847,000 likes"
              value={likes}
              onChange={(e) => setBuilder((b) => ({ ...b, likes: e.target.value }))}
            />
          </div>

          <div>
            <div className="preview-label">LIVE PREVIEW</div>
            <div className="build-preview">
              <div className="post-hdr">
                <div
                  className="post-av"
                  style={{ background: '#2d1b6e', color: '#c4b5fd' }}
                >
                  {initials}
                </div>
                <div className="post-meta">
                  <div
                    className="post-name"
                    style={{ color: isDefaultName ? 'var(--muted)' : 'var(--white)' }}
                  >
                    {displayName}
                  </div>
                  {cred && (
                    <span className="post-badge badge-purple">{cred}</span>
                  )}
                  <div>
                    <div className="trick-badge-preview">
                      TRICK: {trick.toUpperCase()}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="post-body"
                style={{
                  fontStyle: claim ? 'normal' : 'italic',
                  color: claim ? 'rgba(245,242,236,0.85)' : 'var(--muted)',
                }}
              >
                {claim || 'Your post will appear here...'}
              </div>
              <div className="post-stats" style={{ color: 'var(--muted)' }}>
                {likes || '0 likes'}
              </div>
            </div>
          </div>
        </div>

        <div className="build-insight fade-up">
          <p>
            Notice how easy that was? You didn&apos;t need expertise — just the recipe.{' '}
            <strong>
              This is what an influence operation does at scale:
            </strong>{' '}
            500 posts like this per hour, targeting people who&apos;ve shown prior interest in
            the topic, via thousands of coordinated accounts. The feed you saw earlier took 5
            posts. Real campaigns use 5,000.
          </p>
          <p style={{ marginTop: '12px' }}>
            <strong>The most important question:</strong> if a 10-minute exercise gave you this
            capability, what does a well-funded organisation with six months and a political
            objective do with it?
          </p>
        </div>

        <div style={{ marginTop: '32px' }}>
          <button
            type="button"
            className="btn-primary"
            onClick={() => scrollToChapter(5)}
          >
            See the research →
          </button>
        </div>
      </div>
    </section>
  );
}
