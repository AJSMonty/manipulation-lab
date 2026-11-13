export function Chapter0({ scrollToChapter }) {
  return (
    <section className="chapter" id="ch0">
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="hero-eyebrow">A ten minute experiment</div>
        <h1 className="hero-title">
          <span className="hero-title-line">The</span>
          <span className="hero-title-accent">
            <em className="glitch" data-text="Manipulation">
              Manipulation
            </em>
          </span>
          <span className="hero-title-line">Lab</span>
        </h1>
        <p className="hero-sub">
          A feed, a chatbot and a phone call are about to try to change your mind. Afterwards
          you&apos;ll see how each one did it, and what to do when it happens for real. For
          parents, teachers and anyone with a phone.
        </p>
        <button type="button" className="hero-cta" onClick={() => scrollToChapter(1)}>
          Start the experiment <span className="arrow">→</span>
        </button>
        <p className="hero-warning">It will probably work on you. It works on most people.</p>
      </div>
      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="line"></div>
      </div>
    </section>
  );
}
