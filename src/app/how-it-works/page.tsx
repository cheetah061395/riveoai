import type { Metadata } from "next";

import { PageHeader } from "@/components/PageHeader";
import { HowItWorksStage } from "@/components/HowItWorksStage";
import DifferenceSection from "@/components/DifferenceSection";
import { NewsletterSection } from "@/components/NewsletterSection";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Scan your face, get your shades, buy it once. How Riveo reads undertone and depth separately — and why that beats picking by eye.",
};

/**
 * Product page: how it works, and why it beats guessing. The scroll stack
 * carries the "how"; the compare sliders carry the "why it's better".
 */
export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="[Section label]"
        title="[Page heading — the method, in one line]"
        intro="[Intro — one or two sentences setting up why the method is different from the default way of doing this. Keep it short; the sections below carry the detail.]"
      />
      <HowItWorksStage />
      <DifferenceSection />
      <NewsletterSection />
    </>
  );
}
