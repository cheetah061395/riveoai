import type { Metadata } from "next";

import { PageHeader } from "@/components/PageHeader";
import StorySection from "@/components/StorySection";
import { FounderNote } from "@/components/FounderNote";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Riveo exists: an $80B makeup industry that still runs on guessing, and what it costs the people buying into it.",
};

/**
 * About page: why this was built. The story beats set up the problem; the
 * founder note is the personal half.
 */
export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Why we built it"
        title="Nobody should need three tries to buy foundation"
      />
      <StorySection />
      <FounderNote />
    </>
  );
}
