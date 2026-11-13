import { useState } from 'react';

const TAKEAWAYS = [
  {
    title: 'Slow down',
    body: 'When something makes you feel a lot, very fast, wait. Five seconds before you share a post. Overnight before you send money. Every trick on this page needs you to act before you think, and none of them survives a pause.',
  },
  {
    title: 'Ask who, and how you know',
    body: 'For a post or a chatbot answer: who made this, and what do they get out of it? A real expert has an employer you can look up, and a real source has a sentence you can find. For a call or a message: is this really them? You can\'t tell by listening, so ring back on a number you already had, or ask for the safe word.',
  },
  {
    title: 'Changing your mind is fine',
    body: 'Finding out you were wrong, or that you were fooled, is not embarrassing. It happens to everyone, including people who do this for a living. Say so out loud, especially in front of children. People who feel ashamed stay quiet, and scammers depend on that.',
  },
];

export function Chapter8({ printThis }) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="chapter" id="ch8">
      <div className="container">
        <div className="ch-label">Chapter 08 · What to Remember</div>
        <h2 className="ch-title">
          Three things
          <br />
          to keep
        </h2>
        <p className="ch-intro">If the rest of this page fades, hold on to these.</p>

        <div className="takeaway-items">
          {TAKEAWAYS.map((t, i) => (
            <div key={t.title} className="takeaway-item fade-up">
              <div className="ti-num">{i + 1}</div>
              <div className="ti-content">
                <div className="ti-title">{t.title}</div>
                <div className="ti-body">{t.body}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="final-cta fade-up">
          <h2>
            Send this to one person
            <br />
            who should see it
          </h2>
          <p>
            Then ring your parents or grandparents and agree a safe word. That call will do
            more than anything you read here.
          </p>
          <button type="button" className="share-btn" onClick={copyLink}>
            {copied ? 'Link copied' : 'Copy link'}
          </button>
          <button type="button" className="share-btn" onClick={() => printThis('family')}>
            Print the family sheet
          </button>
          <button type="button" className="share-btn" onClick={() => printThis('lesson')}>
            Print the lesson plan
          </button>
          <p className="cta-foot">
            Every post, chat, call, name and number on this page is fictional. The research is
            real and listed in Chapter 6.
          </p>
        </div>
      </div>
    </section>
  );
}
