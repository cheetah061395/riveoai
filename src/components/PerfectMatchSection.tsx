import Image from "next/image";

import { SkinReportPanel } from "@/components/SkinReportPanel";

/**
 * Section 2, a centred heading over a three-panel image row, each captioned.
 *
 * `object-cover` with the crop window pushed down (`FOCUS`). The panels are
 * shorter than the sources' 1536×2752 ratio, so ~34% of each photo is cut.
 * Anchoring to the top spends all of that on the bottom and lands the cut on
 * the jaw, which reads as a severed chin. Dropping the window trades headroom
 *, hair the composition does not need, for the neck and shoulders that let a
 * face sit on something.
 *
 * An earlier attempt inset the photos and continued their backdrop in CSS, to
 * even out the different shooting distances. It does not work: sampling the
 * edge pixels shows the subjects run to the frame on the lower half of every
 * file (skin at the margins, not backdrop), so there is nothing to extend and
 * the join lands on the hairline. Evening out the scale needs the photos
 * re-exported with real margin around the subject.
 *
 * PANEL_ASPECT is the dial for tile height, larger is shorter.
 * FOCUS is the vertical crop window: 0% pins the top, 100% pins the bottom.
 */
const PANEL_ASPECT = 0.85;
const FOCUS = "50% 32%";

const PANELS: {
  src?: string;
  alt: string;
  caption: string;
  phone?: boolean;
}[] = [
  {
    src: "/home/product-left.jpg",
    alt: "A woman holding the Riveo device to her cheek.",
    caption: "Scan your face at home",
  },
  {
    src: "/home/shade-swatch.jpg",
    alt: "A woman pointing at a foundation swatch drawn along her cheek.",
    caption: "Get your perfect match",
  },
  {
    // The report itself rather than a photo, rendered live so the type stays
    // crisp. Scaled to fill the tile width and anchored top, so it crops just
    // past the matches card.
    phone: true,
    alt: "",
    caption: "Shades matches from the top brands",
  },
];

const CAPTION =
  "shrink-0 px-6 pt-6 pb-7 text-center font-display text-[14px] font-normal uppercase leading-[1.5] tracking-[0.16em] text-ink";

export function PerfectMatchSection() {
  return (
    <section
      id="how"
      data-screen-label="Perfect Match"
      className="flex min-h-screen flex-col border-t border-ink/12 bg-surface"
    >
      <div className="flex flex-[0_0_auto] flex-col items-center gap-5 px-10 pt-[7vh] pb-[4vh] text-center">
        <h2 className="m-0 font-display text-[clamp(18px,2vw,26px)] font-extralight uppercase leading-[1.5] tracking-[0.2em] text-ink">
          Find your shade match across 100+ brands
        </h2>
      </div>

      <div className="grid grid-cols-3 bg-surface">
        {PANELS.map((panel, i) => (
          <div key={panel.caption} className="flex min-w-0 flex-col">
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: PANEL_ASPECT }}
            >
              {panel.phone ? (
                <SkinReportPanel />
              ) : (
                <Image
                  src={panel.src as string}
                  alt={panel.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className="object-cover"
                  style={{ objectPosition: FOCUS }}
                  priority={i < 2}
                />
              )}
            </div>
            <p className={CAPTION}>{panel.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PerfectMatchSection;
