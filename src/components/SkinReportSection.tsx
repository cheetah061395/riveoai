import { SkinReportStage } from "@/components/SkinReportStage";

/**
 * Homepage section three: the skin report, given its own room.
 *
 * Sits on the brand blue so the section reads as distinct from the white and
 * warm-neutral blocks above it, and the cream phone lifts off it.
 *
 * The phone sizes itself to the column rather than to a fixed scale, so the
 * report copy is never cut off on a narrow screen. See SkinReportStage.
 *
 * Heading only, no eyebrow, body copy or CTA.
 */
export function SkinReportSection() {
  return (
    <section
      aria-label="Your skin report"
      className="overflow-hidden bg-secondary"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2 md:gap-16 md:px-10">
        <div className="pt-20 pb-4 md:py-28">
          <h2 className="font-display text-[clamp(18px,2vw,26px)] font-extralight uppercase leading-[1.6] tracking-[0.2em] text-paper">
            Understand your skin tone. Never guess your foundation shade
            again.
          </h2>
        </div>

        <SkinReportStage />
      </div>
    </section>
  );
}

export default SkinReportSection;
