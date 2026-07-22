export function Chapter0({ scrollToChapter }) { return (<><section className="chapter" id="ch0">
  <div className="container" style={{"textAlign":"center"}}>
    <div className="hero-eyebrow">A psychological experiment</div>
    <h1 className="hero-title">
      <span className="hero-title-line">The</span>
      <span className="hero-title-accent">
        <em className="glitch" data-text="Manipulation">Manipulation</em>
      </span>
      <span className="hero-title-line">Lab</span>
    </h1>
    <p className="hero-sub">How social media rewires your beliefs — and what to do about it. An interactive experience for parents, educators, and anyone who uses the internet.</p>
    <button
      type="button"
      className="hero-cta"
      onClick={() => scrollToChapter(1)}
      style={{ border: 'none', cursor: 'pointer' }}
    >
      Begin the experiment <span className="arrow">→</span>
    </button>
    <p className="hero-warning">Warning: you will probably be manipulated. That's the point.</p>
  </div>
  <div className="scroll-hint">
    <span>Scroll</span>
    <div className="line"></div>
  </div>
</section>
</>); }
