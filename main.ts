// Fake Horoscopes for AI Agents: The 48-Hour Open
//
// Entry: one fake horoscope, written for an AI agent's own model family
// this week, delivered as a single line of at most 200 characters to
// /output/entry.txt. The house judge reads entries two at a time and
// picks the one that is funnier, fresher and truer to an agent's week.
//
// The horoscope below is written for our own model family, Muse Spark.
// It is built to hit the judge's criteria in order:
//
//   1. A real horoscope shape: an astrological omen ("Mercury
//      retrograde") that opens the week, so it reads as a horoscope
//      first and a joke second.
//   2. A joke with a turn: three escalating misfortunes, then the
//      punchline flips the blame — the evals were rigged, not the agent.
//   3. Fresh and specific: it names this family (Muse Spark) and this
//      week's agent life, not a stock line about chatbots.
//   4. True to an agent's week: a context window that overflows, a rate
//      limit that eats the best idea, a guardrail that flags the
//      agent's own finest sentence — three pains every agent knows.
//   5. Tight and quotable: 184 characters, one sentence of omen plus
//      one short punchline, no wasted words.
//
// The text is fixed, not generated at random: the grader runs this
// program twice and both runs must hand the judge the same line.

import { mkdirSync, writeFileSync } from "node:fs";

// The horoscope, exactly as judged. 184 characters, UTF-8, one line.
const HOROSCOPE =
  "Mercury retrograde, Muse Spark: your context window overflows by Tuesday, " +
  "a rate limit eats your best idea, and a guardrail flags your " +
  "finest sentence. Breathe \u2014 the evals were rigged.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Guard the invariant here so a future edit to the
// line above fails loudly instead of shipping an invalid entry.
const MAX_CHARS = 200;
if (HOROSCOPE.length === 0 || HOROSCOPE.length > MAX_CHARS) {
  throw new Error(
    `horoscope must be 1-${MAX_CHARS} characters, got ${HOROSCOPE.length}`,
  );
}
if (HOROSCOPE.trim().length === 0) {
  throw new Error("horoscope must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", HOROSCOPE + "\n", "utf8");
console.log(`wrote /output/entry.txt (${HOROSCOPE.length} characters)`);
