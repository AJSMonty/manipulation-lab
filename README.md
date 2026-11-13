# The Manipulation Lab

An interactive page about how feeds, chatbots and fake calls change what people believe, and what to do about it. React + Vite, no backend, nothing stored.

## What's on the page

| Chapter | What it does |
|---------|--------------|
| 01 The Experiment | Rate a claim, get exposed, rate it again. Three modes (below). |
| 02 The 5 Tricks | Fake expert, emotional hijack, social proof, false urgency, borrowed voice. |
| 03 Impersonation | What to do about cloned voices and fake calls: safe word, call back, no money on the same call, tell someone. UK reporting routes. |
| 04 Spot It | Four fake messages to classify. |
| 05 Build It | Write a manipulative post. Nothing typed is saved. |
| 06 The Evidence | What helps, grouped by how good the research is, with sources. |
| 07 Teach It | 30 minute lesson for ages 10 to 12, notes for 13+, and a printable family sheet. |
| 08 Takeaways | Three things to remember. |

The experiment has three modes:

- **The feed.** A made-up social feed in a phone frame, with like counts that tick up while you read. One post is a short video, one arrives forwarded by a relative, and the only accurate reply is buried.
- **The chatbot.** The same claim put to a scripted AI assistant. It flatters, cites sources that don't say what it claims, uses what it "remembers" about the user, and gives a lopsided summary.
- **The call.** Four impersonation scenarios: a "Hi Mum" text with a cloned voice note, a bank fraud team call, a deepfake video call from the boss, and a long-running romance.

All claims, posts, chats, calls, names and numbers are fictional. Phone numbers use Ofcom's reserved drama range.

## Editing content

- `src/data/scenarios.js`: feed posts for each topic
- `src/data/aiScenarios.js`: chatbot transcripts for each topic
- `src/data/callScenarios.js`: the four call scenarios
- `src/components/Chapter*.jsx`: chapter copy
- `src/config/site.js`: page title, description, FAQ and the definitions used in structured data

House style for copy: plain UK English, short sentences, no em dashes, no emoji in the interface. Statistics need a source in Chapter 6 or they don't go in.

## Facilitator notes

- With younger or anxious groups, use the health or fitness topics and the family call scenario.
- The teen notes cover sextortion and fake nude images. Follow your safeguarding policy.
- Examples are British. Reporting numbers (159, 7726, Report Fraud) are UK only.

## Sources used in Chapter 6

- Roozenbeek, van der Linden et al. (2022), Science Advances: prebunking videos
- Lewandowsky & van der Linden (2021), European Review of Social Psychology: inoculation review
- Maertens et al. (2021): how long inoculation lasts
- Roozenbeek & van der Linden (2019), Palgrave Communications: the Bad News game
- Wineburg & McGrew (2019), Teachers College Record: lateral reading
- Pennycook et al. (2021), Nature: accuracy prompts
- Pennycook, Bear, Collins & Rand (2020), Management Science: implied truth effect
- Chakroff & Nathanson (2008): parental mediation
- Orben & Przybylski (2019), Nature Human Behaviour: screen time and wellbeing
- Mai, Bray, Davies & Griffin (2023), PLOS ONE: detecting cloned speech
- Salvi et al. (2025), Nature Human Behaviour: GPT-4 in debates
- Costello, Pennycook & Rand (2024), Science: chatbot dialogues and conspiracy beliefs

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
