import Image from "next/image";

import { SkinReportPhone } from "@/components/SkinReportPhone";

/**
 * Section 2 — one viewport tall: centred text block over a three-panel row.
 *
 * The `min-h-0` on the row and `min-w-0` on each cell are load-bearing. Without
 * them the media's intrinsic size pushes the grid tracks past the viewport and
 * the section stops fitting in 100vh.
 *
 * All three cells are equal width and every image crops to fill (`cover`), so
 * the panels read as one row of matching pictures. This overrides the handoff,
 * which sized the centre track at 1.05fr and used `contain`; with 1536x2752
 * masters there is enough resolution that `cover` no longer costs sharpness.
 */
export function PerfectMatchSection() {
  return (
    <section
      id="how"
      data-screen-label="Perfect Match"
      className="flex h-screen flex-col border-t border-ink/12 bg-surface"
    >
      <div className="flex flex-[0_0_auto] flex-col items-center gap-5 px-10 pt-[6vh] pb-[3vh] text-center">
        <h2 className="m-0 font-display text-[clamp(28px,3.4vw,46px)] font-light leading-[1.2] tracking-[0.05em] text-ink">
          Perfect Match Every Time
        </h2>
        <p className="m-0 max-w-[54ch] font-sans text-base leading-[1.7] text-muted [text-wrap:pretty]">
          Scan your face with a lab grade device and we match you with your
          foundation shade. It&rsquo;s that easy.
        </p>
      </div>

      <div className="grid min-h-0 flex-[1_1_auto] grid-cols-3 bg-surface">
        <div className="relative min-w-0 overflow-hidden">
          <Image
            src="/home/product-left.jpg"
            alt="A woman holding the Riveo device to her cheek."
            fill
            sizes="(max-width: 900px) 100vw, 33vw"
            className="object-cover"
            priority
          />
          <span className="pointer-events-none absolute top-[18px] left-[18px] text-xs text-label">
            New
          </span>
        </div>

        <div className="relative min-w-0 overflow-hidden">
          <Image
            src="/home/campaign-portrait.jpg"
            alt="A woman applying foundation with a brush, holding the bottle."
            fill
            sizes="(max-width: 900px) 100vw, 34vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Third panel is the report itself, rendered live rather than as a
            screenshot so it stays sharp and editable. Zoomed past the cell and
            anchored to the top so the shade profile and matches card are
            legible — the phone deliberately bleeds off the bottom edge, the
            same way the two photographs crop. */}
        <div className="relative min-w-0 overflow-hidden bg-[#EFEDE9]">
          {/* Near-native scale so the report copy stays legible. Top-aligned
              and cropped at the bottom rather than shrunk to fit — the phone is
              meant to run off the edge. Kept just under the narrowest cell
              width so the left and right edges never clip the text. */}
          <div className="absolute top-0 left-1/2 origin-top -translate-x-1/2 scale-[0.94]">
            <SkinReportPhone />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PerfectMatchSection;
