import { FAQ_ITEMS } from '../config/site.js';

export function SeoFaq() {
  return (
    <section
      className="chapter seo-faq"
      id="faq"
      aria-labelledby="faq-heading"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="container">
        <div className="ch-label">Reference · Common questions</div>
        <h2 className="ch-title" id="faq-heading">
          Short answers
        </h2>
        <p className="ch-intro">
          The main points from this page, for anyone who skipped to the end or arrived from a
          search.
        </p>

        <dl className="faq-list fade-up">
          {FAQ_ITEMS.map((item) => (
            <div
              key={item.question}
              className="faq-item"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <dt className="faq-question" itemProp="name">
                {item.question}
              </dt>
              <dd
                className="faq-answer"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <span itemProp="text">{item.answer}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
