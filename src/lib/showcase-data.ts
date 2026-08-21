import type { Chip, ShowcaseCard, ShowcaseStep } from "@/types/showcase";

// Copy stripped to bracketed notes — structure only. Replace the strings, keep
// the shape: three cards, each with two or three supporting points.

export const CHIPS: Chip[] = [
  {
    slug: "chip-1a",
    label: "[Step 1 — point A]",
    oneLiner: "[One line. What it does, concretely.]",
  },
  {
    slug: "chip-1b",
    label: "[Step 1 — point B]",
    oneLiner: "[One line. The condition or constraint it removes.]",
  },
  {
    slug: "chip-2a",
    label: "[Step 2 — point A]",
    oneLiner: "[One line. What the user gets back.]",
  },
  {
    slug: "chip-2b",
    label: "[Step 2 — point B]",
    oneLiner: "[One line. Scope or coverage.]",
  },
  {
    slug: "chip-2c",
    label: "[Step 2 — point C]",
    oneLiner: "[One line. How it stays accurate over time.]",
  },
  {
    slug: "chip-3a",
    label: "[Step 3 — point A]",
    oneLiner: "[One line. The decision it makes easier.]",
  },
  {
    slug: "chip-3b",
    label: "[Step 3 — point B]",
    oneLiner: "[One line. Why the answer is trustworthy.]",
  },
  {
    slug: "chip-3c",
    label: "[Step 3 — point C]",
    oneLiner: "[One line. The ongoing value after the first use.]",
  },
];

export const getChip = (slug: string) => CHIPS.find((c) => c.slug === slug);

// Photography does not exist yet, so each card renders a labelled Placeholder.
// Swap those for real <img> / <picture> markup in HowItWorksStage.
export const CARDS: ShowcaseCard[] = [
  {
    slug: "step-1",
    name: "[Step 1]",
    photoAlt: "[Photo — step 1]",
    chipSlugs: ["chip-1a", "chip-1b"],
    screenSlugs: [],
    theme: "dark",
  },
  {
    slug: "step-2",
    name: "[Step 2]",
    photoAlt: "[Photo — step 2]",
    chipSlugs: ["chip-2a", "chip-2b", "chip-2c"],
    screenSlugs: ["screen-2a", "screen-2b", "screen-2c"],
    theme: "light",
  },
  {
    slug: "step-3",
    name: "[Step 3]",
    photoAlt: "[Photo — step 3]",
    chipSlugs: ["chip-3a", "chip-3b", "chip-3c"],
    screenSlugs: ["screen-3a", "screen-3b", "screen-3c"],
    theme: "dark",
  },
];

export const STEPS: ShowcaseStep[] = [
  { slug: "step-1", number: "01", title: "[Step 1 — the action they take]" },
  { slug: "step-2", number: "02", title: "[Step 2 — what comes back]" },
  { slug: "step-3", number: "03", title: "[Step 3 — what they do with it]" },
];

/** Placeholder captions per card layer, shown until real photography lands. */
export const CARD_PLACEHOLDER_LABEL: Record<string, string> = {
  "step-1": "[Photo — step 1, the action]",
  "step-2": "[Photo — step 2, the result]",
  "step-3": "[Photo — step 3, in daily use]",
};

/** Placeholder captions for the app-screen overlays. */
export const SCREEN_PLACEHOLDER_LABEL: Record<string, string> = {
  "screen-2a": "[App screen — 2a]",
  "screen-2b": "[App screen — 2b]",
  "screen-2c": "[App screen — 2c]",
  "screen-3a": "[App screen — 3a]",
  "screen-3b": "[App screen — 3b]",
  "screen-3c": "[App screen — 3c]",
};
