import type { Chip, ShowcaseCard, ShowcaseStep } from "@/types/showcase";

export const CHIPS: Chip[] = [
  {
    slug: "color-capture",
    label: "Salon-grade color capture",
    oneLiner: "Undertone, depth and surface tone — read in one scan"
  },
  {
    slug: "any-light",
    label: "Standardized lighting",
    oneLiner: "The same reading in a bathroom, an office or daylight"
  },
  {
    slug: "exact-shades",
    label: "Your exact shades",
    oneLiner: "Foundation, concealer and blush, named down to the SKU"
  },
  {
    slug: "brand-coverage",
    label: "Across 400+ brands",
    oneLiner: "Every shade, every finish, one catalog"
  },
  {
    slug: "seasonal-drift",
    label: "Adapts as you change",
    oneLiner: "Re-scan when your tone shifts and the matches follow"
  },
  {
    slug: "formula-decoder",
    label: "Formula decoder",
    oneLiner: "18,000 products, every ingredient and finish tracked"
  },
  {
    slug: "why-this-shade",
    label: "Why this shade",
    oneLiner: "See the reasoning, not just a product code"
  },
  {
    slug: "ask-riveo",
    label: "Ask Riveo anything",
    oneLiner: "Hyper-personalized answers from your own scans"
  },
];

export const getChip = (slug: string) => CHIPS.find((c) => c.slug === slug);

// Photography hasn't been shot yet, so every card renders a labelled
// Placeholder. Swap those for real <img>/<picture> markup in HowItWorksStage.
export const CARDS: ShowcaseCard[] = [
  {
    slug: "scan",
    name: "Scan",
    photoAlt: "A person holding the Riveo device to their jawline by a window.",
    chipSlugs: ["color-capture", "any-light"],
    screenSlugs: [],
    theme: "dark",
  },
  {
    slug: "match",
    name: "Match",
    photoAlt:
      "The Riveo app showing three matched foundation shades against a warm neutral wall.",
    chipSlugs: ["exact-shades", "brand-coverage", "seasonal-drift"],
    screenSlugs: ["shades", "undertone", "routine"],
    theme: "light",
  },
  {
    slug: "shop",
    name: "Shop",
    photoAlt:
      "Two hands holding a phone running the Riveo app against a warm mocha wall.",
    chipSlugs: ["formula-decoder", "why-this-shade", "ask-riveo"],
    screenSlugs: ["compare", "formula", "ask"],
    theme: "dark",
  },
];

export const STEPS: ShowcaseStep[] = [
  {
    slug: "scan",
    number: "01",
    title: "Scan your face",
  },
  {
    slug: "match",
    number: "02",
    title: "Get your shades",
  },
  {
    slug: "shop",
    number: "03",
    title: "Buy it once, right",
  },
];

/** Placeholder captions per card layer, shown until real photography lands. */
export const CARD_PLACEHOLDER_LABEL: Record<string, string> = {
  scan: "Photo — device held to jawline, natural window light",
  match: "Photo — app showing matched shades, warm neutral wall",
  shop: "Photo — hands holding phone, mocha studio wall",
};

/** Placeholder captions for the app-screen overlays. */
export const SCREEN_PLACEHOLDER_LABEL: Record<string, string> = {
  shades: "App screen — matched shades",
  undertone: "App screen — undertone read",
  routine: "App screen — daily routine",
  compare: "App screen — shade comparison",
  formula: "App screen — formula breakdown",
  ask: "App screen — Ask Riveo",
};
