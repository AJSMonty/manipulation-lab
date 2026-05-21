export function Chapter7({ shareThis, printThis }) { return (<><section className="chapter" id="ch7">
  <div className="container">
    <div className="ch-label">Chapter 07 — What to Remember</div>
    <h2 className="ch-title">Three things.<br />For life.</h2>
    <p className="ch-intro">If someone remembers nothing else from this experience, these three ideas are worth carrying.</p>

    <div className="takeaway-items">
      <div className="takeaway-item fade-up">
        <div className="ti-num">1</div>
        <div className="ti-content">
          <div className="ti-title">The 5-second rule</div>
          <div className="ti-body">If a post makes you feel something very strongly, very fast — wait 5 seconds before doing anything. That gap is long enough for your thinking brain to catch up with your feeling brain. The tricks only work at speed. Every manipulative technique you've seen today relies on you acting before the analytical pause fires. That pause is the entire defence.</div>
        </div>
      </div>

      <div className="takeaway-item fade-up">
        <div className="ti-num">2</div>
        <div className="ti-content">
          <div className="ti-title">The one question</div>
          <div className="ti-body">"Who made this, and why?" — not "is this true?" Asking "is this true?" requires a fact-check. Asking "who made this and why?" takes five seconds and exposes motive. Almost all manipulation collapses the moment you ask it out loud. A genuine expert has an institution you can verify. A genuine news story has a publication. A genuine claim has a named source. The absence of these isn't proof of nothing — but it's always a signal to pause.</div>
        </div>
      </div>

      <div className="takeaway-item fade-up">
        <div className="ti-num">3</div>
        <div className="ti-content">
          <div className="ti-title">Changing your mind is strength</div>
          <div className="ti-body">If you believed something and then found out it was wrong, that is not embarrassing — it is exactly what a well-functioning brain does. The only people who never update their beliefs are people who have stopped engaging with evidence. This applies to adults as much as children, and it needs to be said out loud: in this culture, changing your mind is treated as weakness. It is the opposite of weakness. It is the entire point of thinking.</div>
        </div>
      </div>
    </div>

    <div className="final-cta fade-up">
      <h2>Share this with someone<br />who needs it</h2>
      <p>The best inoculation is a conversation. Who in your life is most susceptible to this kind of content?</p>
      <button className="share-btn" onClick={shareThis}>Copy link</button>
      <button className="share-btn" onClick={printThis}>Print lesson plan</button>
      <p style={{"marginTop":"12px","fontSize":"12px","color":"var(--muted)"}}>Prints Chapter 6 only — the 30-minute classroom script.</p>
      <p style={{"marginTop":"32px","fontSize":"13px","color":"var(--muted)","fontStyle":"italic"}}>Built using inoculation theory research from Cambridge University and the SIFT methodology from the University of Washington. All example posts are entirely fictional.</p>
    </div>
  </div>
</section>
</>); }
