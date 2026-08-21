export interface Chip {
  slug: string;
  label: string;
  oneLiner: string;
}

export interface ShowcaseCard {
  slug: string;
  name: string;
  /** Describes the photograph this card is waiting on. */
  photoAlt: string;
  chipSlugs: string[];
  /** App screens that cross-fade on an interval; empty means photo only. */
  screenSlugs: string[];
  /** Drives which gradient scrim sits over the card. */
  theme: "light" | "dark";
}

export interface ShowcaseStep {
  slug: string;
  number: string;
  title: string;
}

export interface StackState {
  active: number;
  prev: number;
  direction: 1 | -1;
  hasSwapped: boolean;
  jumped: boolean;
}
