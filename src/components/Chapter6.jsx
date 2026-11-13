import { useState } from 'react';

const STATS = [
  ['21%', 'Drop in how reliable players rated fake headlines after 15 minutes of the Bad News game'],
  ['64%', 'Share of debates GPT-4 won when it knew a few personal details about its opponent'],
  ['20%', 'Average fall in belief in a conspiracy theory after talking it through with a chatbot'],
  ['27%', 'Cloned voice clips that listeners failed to spot in a 2023 study'],
];

const TIERS = [
  {
    label: 'Good evidence',
    cls: 'impact-high',
    items: [
      {
        name: 'Learning the tricks in advance',
        body: [
          'Show people a weak version of a trick before they meet the real thing and they get better at recognising it. Researchers call this inoculation, or prebunking.',
          'The useful part is that it works on the trick, whatever the topic. Debunking one fluoride story helps with that story. Learning what a fake expert looks like helps with all of them.',
          'In 2022 a team from Cambridge, Bristol and Google ran 90-second prebunking videos as YouTube adverts, and viewers were better at recognising manipulation techniques afterwards. The effect fades over a few weeks without a refresher, so one lesson is not enough.',
        ],
        source:
          'Roozenbeek, van der Linden and colleagues (2022), Science Advances. Lewandowsky & van der Linden (2021), European Review of Social Psychology. On fading: Maertens and colleagues (2021).',
      },
      {
        name: 'Making one yourself',
        body: [
          'In the Bad News game, players run a pretend disinformation account and earn badges for techniques such as impersonation and stirring up emotion. You did a short version of this in Chapter 5.',
          'About 15,000 people rated headlines before and after playing. Afterwards they rated the fake ones 21% less reliable on average, and their ratings of real news did not change.',
          'The players chose to take part, so they are not a random sample, and the authors describe the effect as moderate. It is still one of the better results in this field, and it is why the lesson plan is built around the making activity.',
        ],
        source: 'Roozenbeek & van der Linden (2019), Palgrave Communications.',
      },
      {
        name: 'Checking sideways',
        body: [
          'Stanford researchers watched 10 historians, 10 professional fact-checkers and 25 undergraduates judge unfamiliar websites. The historians and students mostly stayed on the page and were taken in by logos and official-sounding names.',
          'The fact-checkers left almost at once, opened new tabs and looked up what other people said about the site. They reached better conclusions in a fraction of the time. This is called lateral reading, and later classroom studies suggest it can be taught in a few lessons.',
          'SIFT is the best-known version: Stop, Investigate the source, Find better coverage, Trace the claim back to where it started. It applies to a chatbot\'s source links as much as to a web page.',
        ],
        source:
          'Wineburg & McGrew (2019), Teachers College Record. SIFT was developed by Mike Caulfield.',
      },
    ],
  },
  {
    label: 'Some evidence',
    cls: 'impact-mid',
    items: [
      {
        name: 'A nudge to think about accuracy',
        body: [
          'Asking people to judge whether a single headline is accurate makes them a little choosier about what they share for a while afterwards. In 2020 Twitter tried something similar, asking people whether they wanted to read an article before reposting it, and said more of them opened it first.',
          'The effects are small and they wear off. A prompt also depends on the platform choosing to show it. A habit of pausing is yours to keep.',
        ],
        source: 'Pennycook and colleagues (2021), Nature.',
      },
      {
        name: 'Talking it through with a child',
        body: [
          'Decades of research on children and television found that children whose parents talked with them about what they were watching were less affected by it than children who were only restricted. Researchers call this active mediation.',
          'In practice it means saying your own doubts out loud. "That\'s a lot of likes. I wonder who wrote it." "That made me cross. Is that a reason to believe it?" There is far less research on feeds and chatbots than on television, so this is a reasonable extension and not yet a proven one.',
        ],
        source: 'Chakroff & Nathanson (2008), in The Handbook of Children, Media and Development.',
      },
      {
        name: 'Older pupils teaching younger ones',
        body: [
          'Teenagers take more notice of each other than of adults, and peer-led teaching is widely used in health education. Good trials of it for media literacy are hard to find, so treat it as promising.',
          'Finland teaches media literacy across subjects from primary school and regularly comes top of the European Media Literacy Index. That says something for teaching it early and often. It doesn\'t tell us which part of the Finnish approach does the work.',
        ],
        source: 'Media Literacy Index, Open Society Institute Sofia.',
      },
    ],
  },
  {
    label: 'Sensible, but untested',
    cls: 'impact-mid',
    items: [
      {
        name: 'Safe words and calling back',
        body: [
          'Banks, police forces and fraud charities all recommend a family safe word and ringing back on a known number. Nobody has run a trial, and it would be a hard one to run.',
          'They work for a mechanical reason. A scammer controls the channel they contacted you on and nothing else. They can\'t answer your daughter\'s real phone and they can\'t know a word that was never written down.',
          'One study does explain why you need them: listeners identified cloned voices correctly only 73% of the time, and practice barely helped.',
        ],
        source: 'Mai, Bray, Davies & Griffin (2023), PLOS ONE.',
      },
    ],
  },
  {
    label: 'Weak or mixed',
    cls: 'impact-low',
    items: [
      {
        name: 'Screen time limits',
        body: [
          'A limit reduces how much a child sees. It doesn\'t change what they do with it. Half an hour with no idea how a feed works is not obviously safer than two hours with some.',
          'The link between screen time and teenage wellbeing is also weaker than headlines suggest. One large analysis found it explained less than half a percent of the variation, about the same as eating potatoes.',
        ],
        source: 'Orben & Przybylski (2019), Nature Human Behaviour.',
      },
      {
        name: 'Warning labels',
        body: [
          'A label does make people less likely to believe or share the post it sits on. The trouble is everything else. When some false posts carry a warning, people rate the unlabelled ones as more accurate, on the assumption that someone has checked them. Researchers call this the implied truth effect.',
          'The same goes for "AI-generated" labels. Most fakes will never carry one, so a missing label tells you nothing.',
        ],
        source: 'Pennycook, Bear, Collins & Rand (2020), Management Science.',
      },
      {
        name: 'Hiding like counts',
        body: [
          'Instagram started testing hidden like counts in 2019 and later made it a setting. There is little public evidence on whether it slows false claims. People still read popularity from comments, shares and how often something turns up.',
        ],
      },
      {
        name: 'One-off assemblies and posters',
        body: [
          'Telling people to "think before you share" gives them a fact and no practice. Knowing that manipulation exists is a different thing from catching it while it is happening to you.',
          'This is a judgement drawn from the rows above and not from a single study. Everything on this page that works involves doing something, more than once.',
        ],
      },
    ],
  },
];

export function Chapter6({ scrollToChapter }) {
  const [open, setOpen] = useState(null);

  return (
    <section className="chapter" id="ch6">
      <div className="container">
        <div className="ch-label">Chapter 06 · The Evidence</div>
        <h2 className="ch-title">
          What helps,
          <br />
          and how sure we are
        </h2>
        <p className="ch-intro">
          Some of what gets recommended has decent research behind it and some has very
          little. An earlier version of this chapter gave every row a percentage. Those were a
          rough ranking and looked more exact than they were, so they have gone. Open any row
          for the detail and the source.
        </p>

        <div className="evidence-stat-grid fade-up">
          {STATS.map(([val, label]) => (
            <div key={val} className="estat">
              <div className="estat-val">{val}</div>
              <div className="estat-label">{label}</div>
            </div>
          ))}
        </div>

        <div className="evidence-bars fade-up">
          {TIERS.map((tier) => (
            <div key={tier.label} className="tier">
              <div className={`impact-label ${tier.cls}`}>{tier.label}</div>
              {tier.items.map((item) => {
                const isOpen = open === item.name;
                return (
                  <div key={item.name} className={`ebar-group${isOpen ? ' open' : ''}`}>
                    <button
                      type="button"
                      className="ebar"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : item.name)}
                    >
                      <span className="ebar-name">
                        <span className="ebar-expand-icon">&#9658;</span>
                        {item.name}
                      </span>
                    </button>
                    <div className="ebar-detail">
                      <div className="ebar-detail-inner">
                        {item.body.map((p) => (
                          <p key={p}>{p}</p>
                        ))}
                        {item.source && <span className="source-tag">{item.source}</span>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div className="reveal-block info fade-up">
          <h3>What we know about AI and persuasion</h3>
          <p>
            In a 2025 study, people debated either another person or GPT-4. When the model was
            given a few facts about its opponent, such as age and politics, it was the more
            persuasive side in 64% of the debates that had a clear winner. Without those facts
            it did about as well as a person. A chatbot that remembers you is a more
            persuasive chatbot.
          </p>
          <p style={{ marginTop: '10px' }}>
            The same ability can be pointed somewhere useful. In a 2024 study, people who
            believed a conspiracy theory talked it through with a chatbot that had been asked
            to argue from evidence. Their belief fell by about 20% on average and was still
            lower two months later. The tool is good at changing minds either way. What
            matters is who set it up and what they asked it to do.
          </p>
          <span className="source-tag">
            Salvi and colleagues (2025), Nature Human Behaviour. Costello, Pennycook & Rand
            (2024), Science.
          </span>
        </div>

        <div className="core-finding fade-up">
          <p className="aside-label">THE SHORT VERSION</p>
          <p>
            Things that build a skill do better than things that reduce exposure. Filters,
            limits and labels each help a little, and when they miss you get no warning. A
            child who has made a fake post, and a grandparent who has a safe word, are still
            protected when the filter fails.
          </p>
        </div>

        <button type="button" className="btn-primary" onClick={() => scrollToChapter(7)}>
          Run this with a class →
        </button>
      </div>
    </section>
  );
}
