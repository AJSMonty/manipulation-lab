const STEPS = [
  {
    num: 'OPTIONAL',
    time: '+8 mins',
    title: 'The experiment, on devices',
    desc: 'If pupils have phones or tablets, start with Chapter 1 of this site. It is the best hook in the session. Talk about how their scores moved before you name any tricks.',
    say: 'You rated how true something felt, scrolled a feed, and rated it again. Whichever way your score moved, that happened on posts we told you were fake. Your own feed doesn\'t tell you.',
    do: [
      'Each pupil picks a topic in "The feed", locks a score, scrolls, rates again and presses reveal. Ask two or three volunteers which way their number went and why. Then go to Step 1.',
      'No devices? Read one claim aloud and take a show of hands on how true it feels. Read out three of the made-up posts. Vote again. Then tell them every post was invented.',
    ],
  },
  {
    num: 'STEP 01',
    time: 'Mins 0–3',
    title: 'The opening question',
    desc: 'Start with what they already know. Don\'t explain anything yet.',
    say: 'Hands up if you\'ve seen something online that turned out to be fake. Keep your hand up if you nearly believed it, or shared it before checking. Nobody\'s in trouble. This happens to teachers, journalists and scientists.',
    do: [
      'Write on the board: "Why do clever people believe fake things?" Tell them that in half an hour they\'ll be able to answer it.',
    ],
  },
  {
    num: 'STEP 02',
    time: 'Mins 3–11',
    title: 'Name the five tricks',
    desc: 'Teach the trick, not the topic. A corrected rumour is forgotten by next week. A trick they can name turns up again in every subject.',
    say: 'Most fake stuff online doesn\'t try to outsmart you. It tries to get you feeling something before you\'ve had time to think. Once you know the names of the tricks you start seeing them everywhere, a bit like knowing how a magic trick is done.',
    do: [
      'Take the five in turn: Fake Expert, Emotional Hijack, Social Proof, False Urgency, Borrowed Voice. Name it, give one example, then ask "Where have you seen this?" and wait. Don\'t move on until a pupil has given an example of their own.',
      'For Borrowed Voice, ask whether anyone at home has had a "Hi Mum, new number" text. Usually several have.',
    ],
  },
  {
    num: 'STEP 03',
    time: 'Mins 11–20',
    title: 'Spot it',
    desc: 'Use the four fake messages from Chapter 4. The first one uses four tricks at once on purpose, so most of the class gets it wrong and nobody feels singled out.',
    do: [
      'Show a message and ask "Which trick?" Take a few different answers before you reveal. When someone is wrong, ask what made them choose it. That conversation is worth more than the right answer.',
    ],
  },
  {
    num: 'STEP 04',
    time: 'Mins 20–27',
    title: 'Make a fake post',
    desc: 'This is the most useful seven minutes of the session. Pupils who have built a manipulative post understand how little goes into one.',
    say: 'Now you\'re going to make one. We\'re not doing it to fool anybody. We\'re doing it because the quickest way to see how a trick works is to do it yourself.',
    do: [
      'Pairs, three minutes, one trick each, on paper or in Chapter 5. Pairs read theirs out and the class calls the trick. Give a point for the most convincing.',
      'Make sure every post is binned or deleted at the end, and say why.',
    ],
  },
  {
    num: 'STEP 05',
    time: 'Mins 27–30',
    title: 'Two things to take home',
    desc: 'Finish with one habit and one job.',
    say: 'People who make this stuff are counting on you to react straight away. So the habit is: when something makes you feel a lot, very fast, wait. And the job is: tonight, agree a safe word with your family. A silly word only you lot know. If anyone ever rings saying they\'re you and they need money, your family asks for the word.',
    do: [
      'Exit ticket: each pupil writes one trick and where they might see it this week. Collect them and read a few back at the start of the next lesson.',
      'Hand out the family sheet below, or tell them where to find it.',
    ],
  },
];

export function Chapter7({ printThis }) {
  return (
    <section className="chapter" id="ch7">
      <div className="container">
        <div className="ch-label">Chapter 07 · Teach It</div>
        <h2 className="ch-title">
          A 30 minute lesson
          <br />
          for ages 10 to 12
        </h2>
        <p className="ch-intro">
          Scripted from start to finish, so you don&apos;t need any background in media
          literacy to run it. It follows the research in Chapter 6: learn the tricks, spot
          them, then make one. There are notes for teenagers and a one-page sheet for families
          underneath.
        </p>

        <div className="facilitator-notes fade-up">
          <p className="facilitator-notes-label">BEFORE YOU START</p>
          <p>
            The topics in the experiment are meant to provoke. With younger or more anxious
            groups, stick to <strong>health</strong> or <strong>fitness</strong> and leave out
            finance and global affairs. In &quot;The call&quot;, use the{' '}
            <strong>family</strong> scenario and skip the dating one.
          </p>
          <p>
            The examples are British (FCA, Manchester, the Treasury). Ask pupils for their own.
            Theirs will be better than these.
          </p>
        </div>

        <div className="lesson-steps">
          {STEPS.map((s) => (
            <div key={s.num} className="lesson-step fade-up">
              <div className="step-num">
                {s.num}
                <br />
                <span className="time-pill">{s.time}</span>
              </div>
              <div className="step-content">
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
                {s.say && (
                  <div className="say-block">
                    <div className="say-tag">SAY</div>
                    <p>&quot;{s.say}&quot;</p>
                  </div>
                )}
                <div className="do-block">
                  <div className="do-tag">DO</div>
                  {s.do.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="facilitator-notes teen-notes fade-up">
          <p className="facilitator-notes-label">WITH AGES 13 AND UP</p>
          <p>
            Run the same lesson and use <strong>The chatbot</strong> for the opening
            experiment. Most teenagers already ask an AI things they wouldn&apos;t ask an
            adult. Have them open one of the source links in a real chatbot answer and find the
            sentence it is supposed to support.
          </p>
          <p>
            Give ten minutes to two things that are aimed at their age group. The first is
            sextortion: a stranger posing as someone their age gets a photo, then demands
            money. The second is fake nude images made from ordinary photos of classmates.
            Follow your safeguarding policy and tell your safeguarding lead beforehand. The
            messages that matter are: making or sharing these images of under-18s is illegal
            even as a joke, it is never the victim&apos;s fault, don&apos;t pay, and tell an
            adult. Report Remove (Childline and the Internet Watch Foundation) can get an image
            taken down, and CEOP takes reports about adults.
          </p>
        </div>

        <div className="family-sheet fade-up" id="family-sheet">
          <p className="facilitator-notes-label">ONE PAGE FOR THE FRIDGE</p>
          <h3>If someone rings, texts or video calls asking for money</h3>
          <ol className="plain-list">
            <li>
              <strong>Ask for our safe word.</strong> No word, no money. It doesn&apos;t matter
              how much it sounds like them.
            </li>
            <li>
              <strong>Hang up and ring back</strong> on the number you already have. For the
              bank, dial 159 or use the number on your card.
            </li>
            <li>
              <strong>Never pay on the same call.</strong> The bank, the police and HMRC will
              never ask you to move money or read out a code.
            </li>
            <li>
              <strong>Tell one of us first.</strong> Anyone who says &quot;keep this between
              us&quot; is not who they say they are.
            </li>
          </ol>
          <div className="sheet-lines">
            <p>
              Our safe word: <span className="write-line" />
            </p>
            <p>
              Ring first: <span className="write-line" />
            </p>
            <p>
              My bank&apos;s real number: <span className="write-line" />
            </p>
          </div>
          <p className="sheet-foot">
            Voices and faces can be copied by a computer now. If you are caught out, it is not
            your fault. Ring your bank straight away, then Report Fraud on 0300 123 2040
            (Police Scotland: 101). Write the safe word in by hand and don&apos;t send it in a
            message.
          </p>
        </div>

        <div className="btn-row">
          <button type="button" className="btn-primary" onClick={() => printThis('lesson')}>
            Print the lesson plan
          </button>
          <button type="button" className="btn-ghost" onClick={() => printThis('family')}>
            Print the family sheet
          </button>
        </div>
      </div>
    </section>
  );
}
