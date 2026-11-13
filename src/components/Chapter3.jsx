const MOVES = [
  {
    title: 'Agree a family safe word',
    body: 'Pick a word or a short phrase tonight. Make it something daft that has never been posted anywhere. If anyone rings or messages in a crisis and asks for money, they say the word or you hang up. Tell grandparents in person, or on a call that you made. Don\'t text it round.',
  },
  {
    title: 'Hang up and call back',
    body: 'Use a number you already had: the saved contact, the back of your card, the staff directory. Never the number in the message. In the UK you can dial 159 to reach most banks safely. If they\'re real, they won\'t mind.',
  },
  {
    title: 'No money on the same call',
    body: 'Your bank, the police and HMRC will never need your money moved in the next ten minutes. Neither will your children. For any amount you\'d miss, wait until tomorrow.',
  },
  {
    title: 'Tell someone before you pay',
    body: 'Every one of these scripts asks you to keep it quiet. Say the whole story out loud to one other person first. Often you\'ll hear the problem yourself before they say a word.',
  },
];

const SHAPES = [
  ['"Hi Mum" messages', 'A new number, a broken phone, a bill that needs paying today. Sometimes with a voice note in your child\'s voice.'],
  ['The bank\'s fraud team', 'A caller who already knows your name and part of your card number, and wants your money moved somewhere "safe".'],
  ['The boss on a video call', 'A senior colleague, on camera, asking for an urgent and confidential payment.'],
  ['The famous face', 'An advert or clip of a well-known presenter recommending an investment they have never heard of.'],
  ['The long romance', 'Weeks of daily, attentive messages from someone you never quite manage to meet. Then an investment tip, or an emergency.'],
  ['Aimed at teenagers', 'Someone posing as a girl or boy their age asks for a photo, then demands money to keep it private. Or a classmate uses an app to make a fake nude from an ordinary picture.'],
];

export function Chapter3({ scrollToChapter }) {
  return (
    <section className="chapter" id="ch3">
      <div className="container">
        <div className="ch-label">Chapter 03 · Impersonation</div>
        <h2 className="ch-title">
          When it sounds like
          <br />
          someone you know
        </h2>
        <p className="ch-intro">
          Most of this site is about what you believe. This chapter is about who you think
          you&apos;re talking to. The old advice (listen for the robotic voice, look at the
          hands) has stopped working, and scams built on cloned voices and faces are now
          common. Four habits deal with nearly all of them.
        </p>

        <div className="moves-grid fade-up">
          {MOVES.map((m, i) => (
            <div key={m.title} className="move-card">
              <div className="tc-num">MOVE {String(i + 1).padStart(2, '0')}</div>
              <div className="move-title">{m.title}</div>
              <p>{m.body}</p>
            </div>
          ))}
        </div>

        <div className="reveal-block info fade-up">
          <h3>What it looks like at the moment</h3>
          <p className="reveal-lede">
            The details change every few months. The shape stays the same: someone you trust,
            a problem, a deadline, and a reason you can&apos;t check.
          </p>
          <ul className="trick-list">
            {SHAPES.map(([name, detail], i) => (
              <li key={name}>
                <span className="trick-num">{String(i + 1).padStart(2, '0')}</span>
                <span>
                  <strong>{name}.</strong> {detail}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal-block green fade-up">
          <h3>If it has already happened</h3>
          <p>
            Ring your bank straight away, on 159 or the number on your card. Since October
            2024, UK banks have had to refund most people who were tricked into making a bank
            transfer, up to £85,000, and speed helps. Then report it: Report Fraud on 0300 123
            2040 or reportfraud.police.uk in England, Wales and Northern Ireland, or Police
            Scotland on 101. Forward scam texts to 7726 and scam emails to
            report@phishing.gov.uk.
          </p>
          <p style={{ marginTop: '10px' }}>
            If you&apos;re under 18 and someone has a nude image of you, real or fake, Report
            Remove (run by Childline and the Internet Watch Foundation) can get it taken down.
            You won&apos;t be in trouble. If an adult is pressuring a child online, report it to
            CEOP.
          </p>
          <p style={{ marginTop: '10px' }}>
            Being caught out says nothing about how clever you are. These scripts are written
            by professionals and tested on thousands of people. Outside the UK the numbers
            differ, and the four moves above work anywhere.
          </p>
        </div>

        <div style={{ marginTop: '32px' }}>
          <button type="button" className="btn-primary" onClick={() => scrollToChapter(4)}>
            Test yourself →
          </button>
        </div>
      </div>
    </section>
  );
}
