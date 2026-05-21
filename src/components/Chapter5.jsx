export function Chapter5({ toggleEbar, scrollToChapter }) { return (<>{/* ===== CHAPTER 5: THE EVIDENCE ===== */}
<section className="chapter" id="ch5">
  <div className="container">
    <div className="ch-label">Chapter 05 — The Evidence</div>
    <h2 className="ch-title">What actually works<br />to build immunity</h2>
    <p className="ch-intro">The research is more hopeful than the problem suggests — but it points in a very different direction than most people expect. Click any bar to read the evidence behind it.</p>

    <div className="evidence-stat-grid fade-up">
      <div className="estat">
        <div className="estat-val">3×</div>
        <div className="estat-label">Prebunking outperforms fact-checking on belief persistence at 30 days</div>
      </div>
      <div className="estat">
        <div className="estat-val">21%</div>
        <div className="estat-label">Improvement in manipulation detection after the "build a fake post" exercise</div>
      </div>
      <div className="estat">
        <div className="estat-val">51%</div>
        <div className="estat-label">Reduction in false information sharing from a single "pause and consider" prompt</div>
      </div>
      <div className="estat">
        <div className="estat-val">#1</div>
        <div className="estat-label">Finland's global ranking for disinformation resistance after 7 years of embedded media literacy</div>
      </div>
    </div>

    <div className="evidence-bars fade-up">
      <div style={{"marginBottom":"20px","display":"flex","alignItems":"center","justifyContent":"space-between","flexWrap":"wrap","gap":"12px"}}>
        <span style={{"fontSize":"12px","color":"var(--muted)","letterSpacing":"0.08em"}}>EVIDENCE STRENGTH INDEX (RELATIVE RANKING, NOT EFFECT SIZES) — click any row to expand</span>
        <div style={{"display":"flex","gap":"16px","fontSize":"11px"}}>
          <span style={{"color":"#86efac"}}>&#9632; High impact</span>
          <span style={{"color":"#fcd34d"}}>&#9632; Moderate</span>
          <span style={{"color":"#fca5a5"}}>&#9632; Weak</span>
        </div>
      </div>

      {/* GREEN BARS */}
      <div className="ebar-group" onClick={(e) => toggleEbar(e.currentTarget)}>
        <div className="ebar">
          <div className="ebar-name"><span className="ebar-expand-icon">&#9658;</span>Technique prebunking</div>
          <div className="ebar-track"><div className="ebar-fill fill-green" style={{"width":"0%"}} data-w="88%"></div></div>
          <div className="ebar-pct" style={{"color":"var(--green)"}}>88%</div>
        </div>
        <div className="ebar-detail"><div className="ebar-detail-inner">
          <div className="impact-label impact-high">Highest impact</div>
          <p>This is the single most evidence-backed intervention available — the equivalent of a vaccine for the mind. Rather than correcting specific false claims after exposure, prebunking exposes people to a <strong>weakened dose of the manipulation technique itself</strong> before they encounter it in the wild. The result is that people develop what researchers call "cognitive antibodies."</p>
          <p>The critical distinction is technique-based versus topic-based: teaching someone that the fluoride story was false protects them from one post. Teaching them what an "appeal to false authority" looks like protects them from every post that uses it — forever. Topic debunking expires. Technique recognition transfers.</p>
          <p>Effects persist for at least two weeks with a single exposure, and significantly longer when reinforced through practice.</p>
          <span className="source-tag">Lewandowsky & van der Linden (2021) — inoculation theory meta-analysis, University of Cambridge.</span>
        </div></div>
      </div>

      <div className="ebar-group" onClick={(e) => toggleEbar(e.currentTarget)}>
        <div className="ebar">
          <div className="ebar-name"><span className="ebar-expand-icon">&#9658;</span>Active "build a fake post"</div>
          <div className="ebar-track"><div className="ebar-fill fill-green" style={{"width":"0%"}} data-w="82%"></div></div>
          <div className="ebar-pct" style={{"color":"var(--green)"}}>82%</div>
        </div>
        <div className="ebar-detail"><div className="ebar-detail-inner">
          <div className="impact-label impact-high">Highest impact</div>
          <p>Children who are asked to <strong>create</strong> a fake persuasive post show dramatically stronger resistance to manipulation than those who merely read about how manipulation works. You experienced a version of this in Chapter 4. The mechanism is encoding depth: producing something requires understanding its construction, not just its appearance.</p>
          <p>Cambridge&apos;s &quot;Bad News&quot; game — in which players run a disinformation operation using six core techniques — demonstrated a 21% improvement in participants&apos; ability to detect manipulation in real-world content. Those six map onto the four tricks you learned here: impersonation and conspiracy map to fake expert; emotion to emotional hijack; polarisation and discrediting to social proof; trolling to false urgency. The effect held across age groups, including children from age 10.</p>
          <p>This is why the lesson plan in Chapter 6 centres on the build activity, not the quiz. Spotting tricks is useful. Making them is transformative.</p>
          <span className="source-tag">Roozenbeek & van der Linden (2019) — "Bad News" game study, University of Cambridge.</span>
        </div></div>
      </div>

      <div className="ebar-group" onClick={(e) => toggleEbar(e.currentTarget)}>
        <div className="ebar">
          <div className="ebar-name"><span className="ebar-expand-icon">&#9658;</span>Lateral reading (SIFT)</div>
          <div className="ebar-track"><div className="ebar-fill fill-green" style={{"width":"0%"}} data-w="78%"></div></div>
          <div className="ebar-pct" style={{"color":"var(--green)"}}>78%</div>
        </div>
        <div className="ebar-detail"><div className="ebar-detail-inner">
          <div className="impact-label impact-high">High impact</div>
          <p>SIFT stands for Stop, Investigate the source, Find better coverage, Trace claims. Developed by Mike Caulfield at the University of Washington, it gives anyone a four-step process for evaluating any online claim in under two minutes.</p>
          <p>The breakthrough insight is <strong>lateral reading</strong>: instead of reading a source deeply to evaluate it, you open new tabs to see what other credible sources say <em>about</em> that source. This is what professional fact-checkers do instinctively. Students don't know to do it.</p>
          <p>In a landmark study, students trained in lateral reading <strong>outperformed PhD historians</strong> at identifying whether sources were credible — because the historians relied on reading the source itself, while the trained students checked what the wider web said about it.</p>
          <span className="source-tag">McGrew et al. (2019) — Stanford History Education Group. Lateral reading study.</span>
        </div></div>
      </div>

      <div className="ebar-group" onClick={(e) => toggleEbar(e.currentTarget)}>
        <div className="ebar">
          <div className="ebar-name"><span className="ebar-expand-icon">&#9658;</span>Co-viewing + commentary</div>
          <div className="ebar-track"><div className="ebar-fill fill-green" style={{"width":"0%"}} data-w="74%"></div></div>
          <div className="ebar-pct" style={{"color":"var(--green)"}}>74%</div>
        </div>
        <div className="ebar-detail"><div className="ebar-detail-inner">
          <div className="impact-label impact-high">High impact</div>
          <p>Watching content alongside a child and <strong>narrating your own scepticism out loud</strong> — "I notice this post has huge likes, but who actually wrote it?" or "That made me feel worried — is that a reason to believe it?" — is one of the strongest protective interventions available to parents without any specialist training.</p>
          <p>Children rapidly internalise the internal monologue of the adult next to them. Researchers call this <em>mediated critical viewing</em>. The parent's running commentary becomes the child's own inner voice over time — the one that fires automatically when they're scrolling alone at 11pm.</p>
          <p>Critically, this works because the parent is modelling a <em>process</em>, not delivering verdicts. "I'm not sure about this — let's check" is far more powerful than "that's fake."</p>
          <span className="source-tag">Chakroff & Nathanson (2008) — active mediation and content effects in children.</span>
        </div></div>
      </div>

      <div className="ebar-group" onClick={(e) => toggleEbar(e.currentTarget)}>
        <div className="ebar">
          <div className="ebar-name"><span className="ebar-expand-icon">&#9658;</span>Peer-to-peer delivery</div>
          <div className="ebar-track"><div className="ebar-fill fill-green" style={{"width":"0%"}} data-w="70%"></div></div>
          <div className="ebar-pct" style={{"color":"var(--green)"}}>70%</div>
        </div>
        <div className="ebar-detail"><div className="ebar-detail-inner">
          <div className="impact-label impact-high">High impact</div>
          <p>When older students (15–17) teach manipulation techniques to younger ones (10–12), knowledge transfer and sustained attitude change are significantly stronger than when the same content is delivered by an adult teacher. The reason is straightforward: <strong>adolescents weight peer testimony more heavily than adult testimony.</strong></p>
          <p>This is a feature of adolescent development that most schools treat as a problem. It isn't — it's a mechanism. Harness it correctly and you get a self-propagating education system where resistant older students immunise younger ones, who in turn become resistant older students.</p>
          <p>Finland's cross-curricular media literacy model explicitly uses this. It is part of why the country's programme has worked when single-subject approaches in other countries have not.</p>
          <span className="source-tag">Paluck & Green (2009) — peer influence in adolescent attitude formation. Applied to media literacy: IREX (2020).</span>
        </div></div>
      </div>

      {/* AMBER BARS */}
      <div className="ebar-group" onClick={(e) => toggleEbar(e.currentTarget)}>
        <div className="ebar">
          <div className="ebar-name"><span className="ebar-expand-icon">&#9658;</span>Share friction prompts</div>
          <div className="ebar-track"><div className="ebar-fill fill-amber" style={{"width":"0%"}} data-w="51%"></div></div>
          <div className="ebar-pct" style={{"color":"var(--amber)"}}>51%</div>
        </div>
        <div className="ebar-detail"><div className="ebar-detail-inner">
          <div className="impact-label impact-mid">Moderate impact</div>
          <p>When platforms insert a single prompt before resharing — "Are you sure you want to share this?" or simply displaying a headline about the content's accuracy — false information sharing drops by 17–51% depending on the study. The mechanism is elegantly simple.</p>
          <p>The emotional impulse to share fires in milliseconds. Rational evaluation takes 5–10 seconds. A friction prompt <strong>creates that gap artificially</strong>. You can't choose to pause instinctively; a UI that forces a micro-pause does it for you. Twitter/X tested a version of this in 2020 on articles people hadn't read before sharing — it worked.</p>
          <p>The limitation is that it doesn't build internal skill. Remove the prompt and the behaviour reverts. This is a platform-level patch, not a cure.</p>
          <span className="source-tag">Pennycook et al. (2020) — accuracy nudge study, Nature. Oeldorf-Hirsch & Sundar (2015).</span>
        </div></div>
      </div>

      <div className="ebar-group" onClick={(e) => toggleEbar(e.currentTarget)}>
        <div className="ebar">
          <div className="ebar-name"><span className="ebar-expand-icon">&#9658;</span>Hiding like counts</div>
          <div className="ebar-track"><div className="ebar-fill fill-amber" style={{"width":"0%"}} data-w="34%"></div></div>
          <div className="ebar-pct" style={{"color":"var(--amber)"}}>34%</div>
        </div>
        <div className="ebar-detail"><div className="ebar-detail-inner">
          <div className="impact-label impact-mid">Moderate impact</div>
          <p>Social proof bias — the mechanism you experienced in Chapter 1 when 380K likes made the fluoride story feel more credible — is powered by visible engagement metrics. Instagram tested hiding like counts in 2019. Studies found reduced anxiety in young users and a meaningful reduction in false-amplification of viral misinformation.</p>
          <p>The effect is real but partial. People infer popularity through other signals (comment count, share numbers, how far a post has spread) even without explicit like counts. <strong>You can't remove the instinct, only the most obvious trigger for it.</strong></p>
          <p>It also has an unintended effect: some evidence suggests hiding counts makes users rely more on the identity of the poster — accelerating authority bias as a substitute for social proof. Reducing one heuristic can inflate another.</p>
          <span className="source-tag">Burrow & Rainone (2017) — like counts and adolescent self-worth. Instagram internal data (2021, via WSJ).</span>
        </div></div>
      </div>

      {/* RED BARS */}
      <div className="ebar-group" onClick={(e) => toggleEbar(e.currentTarget)}>
        <div className="ebar">
          <div className="ebar-name"><span className="ebar-expand-icon">&#9658;</span>Screen time limits</div>
          <div className="ebar-track"><div className="ebar-fill fill-red" style={{"width":"0%"}} data-w="18%"></div></div>
          <div className="ebar-pct" style={{"color":"var(--red)"}}>18%</div>
        </div>
        <div className="ebar-detail"><div className="ebar-detail-inner">
          <div className="impact-label impact-low">Weak evidence</div>
          <p>Time limits reduce exposure but not vulnerability. This is the critical distinction. A child with 30 minutes of screen time who lacks critical evaluation skills is <strong>more at risk per-minute</strong> than a child with 3 hours who understands how manipulation works. Caps are a gate, not armour.</p>
          <p>The research on screen time and wellbeing is itself frequently misrepresented in media. Orben & Przybylski (2019) found that the effect size of screen time on adolescent wellbeing is roughly equivalent to eating potatoes — smaller than is popularly assumed, and heavily mediated by individual differences, content type, and context of use.</p>
          <p>More practically: children given strict limits without explanation often consume more content when limits are removed (university, first smartphone without parental controls) and have built no resistance during the restriction period. <strong>Restriction without education is a delay, not a defence.</strong></p>
          <span className="source-tag">Orben & Przybylski (2019) — screen time effect sizes, PNAS. Valkenburg (2022) — individual differences dominate.</span>
        </div></div>
      </div>

      <div className="ebar-group" onClick={(e) => toggleEbar(e.currentTarget)}>
        <div className="ebar">
          <div className="ebar-name"><span className="ebar-expand-icon">&#9658;</span>Warning labels</div>
          <div className="ebar-track"><div className="ebar-fill fill-red" style={{"width":"0%"}} data-w="12%"></div></div>
          <div className="ebar-pct" style={{"color":"var(--red)"}}>12%</div>
        </div>
        <div className="ebar-detail"><div className="ebar-detail-inner">
          <div className="impact-label impact-low">Weak evidence</div>
          <p>Content warning labels on disputed posts reduce sharing by approximately 8% on average. This sounds useful — until you consider the cost: they also create what researchers have named the <strong>"implied truth effect."</strong></p>
          <p>When some posts carry warning labels and others don't, unlabelled false content is perceived as more credible precisely because it wasn't flagged. Labels signal what the system caught. They also implicitly vouch for everything they didn't catch — which is most things, because labelling at scale is impossible.</p>
          <p>In other words: a labelling system that catches 10% of misinformation makes the other 90% harder to question, not easier.</p>
          <span className="source-tag">Pennycook et al. (2020) — implied truth effect from selective labelling, Psychological Science.</span>
        </div></div>
      </div>

      <div className="ebar-group" onClick={(e) => toggleEbar(e.currentTarget)}>
        <div className="ebar">
          <div className="ebar-name"><span className="ebar-expand-icon">&#9658;</span>Generic awareness campaigns</div>
          <div className="ebar-track"><div className="ebar-fill fill-red" style={{"width":"0%"}} data-w="6%"></div></div>
          <div className="ebar-pct" style={{"color":"var(--red)"}}>6%</div>
        </div>
        <div className="ebar-detail"><div className="ebar-detail-inner">
          <div className="impact-label impact-low">Near-zero evidence</div>
          <p>Assemblies, posters, one-day workshops, and campaigns that tell people to "think before you share" or "be careful online" produce near-zero measurable change in behaviour at 30 days. This is one of the most consistent findings across the media literacy literature.</p>
          <p>The reason is the gap between <strong>declarative knowledge</strong> ("misinformation exists and is bad") and <strong>procedural skill</strong> ("I can identify a manipulated post in real time"). You can know that manipulation happens without being able to spot it happening to you — in the same way that knowing drunk driving is dangerous doesn't make you better at assessing your own impairment.</p>
          <p>Only practice with real content, applied repeatedly across time, closes this gap. A single awareness day does not. This is why the lesson plan in Chapter 6 is built entirely on active exercises, not information delivery.</p>
          <span className="source-tag">European Digital Media Observatory (2021) — media literacy intervention review. Mihailidis & Viotty (2017).</span>
        </div></div>
      </div>
    </div>

    <div style={{"padding":"24px 28px","background":"rgba(214,60,47,0.06)","border":"1px solid rgba(214,60,47,0.2)","borderRadius":"4px"}} className="fade-up">
      <p style={{"fontSize":"11px","fontFamily":"var(--font-head)","fontWeight":"700","letterSpacing":"0.12em","color":"var(--red)","marginBottom":"10px"}}>THE CORE FINDING</p>
      <p style={{"fontSize":"16px","lineHeight":"1.75","color":"var(--muted)"}}>Interventions that build <strong style={{"color":"var(--white)"}}>internal cognitive skill</strong> vastly outperform those that reduce external exposure. The goal is not a child who sees less — it's a child who <strong style={{"color":"var(--white)"}}>processes what they see differently.</strong> Restriction without education is a delay, not a defence. The evidence for this is not contested.</p>
    </div>

    <div style={{"marginTop":"32px"}}>
      <button type="button" className="btn-primary" onClick={() => scrollToChapter(6)}>Run this with a class →</button>
    </div>
  </div>
</section>
</>); }