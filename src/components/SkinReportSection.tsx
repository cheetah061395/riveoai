import { SkinReportPhoneAlt } from "@/components/SkinReportPhoneAlt";

/**
 * Homepage section three: the skin report, given its own room.
 *
 * Sits on the brand blue so the section reads as distinct from the white and
 * warm-neutral blocks above it, and the cream phone lifts off it.
 *
 * The phone is nudged just above the section's top edge: enough to shave the
 * flat top of the frame while leaving the corner curves visible, so it reads as
 * carrying on past the boundary. The in-app wordmark stays in view. It runs off
 * the bottom rather than being shrunk to fit.
 *
 * Heading only, no eyebrow, body copy or CTA.
 */
export function SkinReportSection() {
  return (
    <section
      aria-label="Your skin report"
      className="overflow-hidden bg-secondary"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-10 md:grid-cols-2 md:gap-16">
        <div className="pt-20 pb-4 md:py-28">
          <h2 className="font-display text-[clamp(18px,2vw,26px)] font-extralight uppercase leading-[1.6] tracking-[0.2em] text-paper">
            Understand your skin tone. Never guess your foundation shade
            again.
          </h2>
        </div>

        {/* Cropped just below the matches card. The phone is 874px tall but
            its content ends at 464px, so the rest is empty screen, at this
            scale the card bottom lands near 490px, and the container stops
            there. Scaled past 1 to bring the report copy up to a size that
            reads at a glance. */}
        <div className="relative h-[493px] md:h-[533px]">
          <div className="absolute -top-4 left-1/2 origin-top -translate-x-1/2 scale-[1.08] md:left-0 md:translate-x-0">
            <SkinReportPhoneAlt />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkinReportSection;
