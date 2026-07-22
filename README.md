# The Manipulation Lab

Interactive experience about how social media rewires beliefs — converted from a single HTML file to a React + Vite app.

The experiment in Chapter 1 has two modes, switchable via tabs:

- **The social feed** — a phone-framed fabricated feed with live-ticking engagement counts and working like/repost buttons. At reveal, every post is stamped with an evidence tag and the learner is shown which fabricated posts they personally engaged with.
- **The AI chat** — the same fabricated claim, asked to a scripted AI assistant in private. Demonstrates four AI manipulation patterns (sycophancy, false authority / invented citations, fake comfort, illusory balance), annotated at reveal alongside a social-vs-AI comparison table.

## Audience

Parents, educators, and general internet users. The built-in lesson plan targets ages 10–12 but the core experiment works for teens and adults.

## Learning objectives

After completing the experience, learners should be able to:

1. **Name four manipulation tricks** (fake expert, emotional hijack, social proof, false urgency) and recognise them in unfamiliar posts.
2. **Explain why belief shifts on fabricated content** — and why technique-based recognition transfers across topics better than fact-checking single claims.
3. **Apply two lifelong heuristics** — pause when emotion fires fast; ask "who made this, and why?"

## Suggested session flow

| Section | Time | Activity |
|---------|------|----------|
| The Experiment | 8–10 min | Belief-shift slider + fabricated feed (strongest hook) |
| The 4 Tricks | 8 min | Name mechanisms; learners generate their own examples |
| Spot It | 10 min | Three-post quiz |
| Build It | 7 min | Construct a manipulative post (highest-impact activity) |
| Takeaways | 2 min | Three rules for life |

Optional: **The Evidence** (research backing) and **Lesson Plan** (scripted 30-minute classroom version with facilitator notes).

## Facilitator notes

- All scenario claims and posts are **entirely fictional** for training purposes.
- Topics include health, politics, climate, finance, and global affairs — pre-select **health** or **fitness** for sensitive groups; skip finance/global if needed.
- Examples use **UK framing**; ask students to generate local equivalents.

## Research citations

- Lewandowsky & van der Linden (2021) — inoculation / prebunking theory
- Roozenbeek & van der Linden (2019) — Cambridge "Bad News" game
- McGrew et al. (2019) — lateral reading (SIFT), Stanford History Education Group
- Caulfield — SIFT methodology, University of Washington

## Development

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (typically http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```
