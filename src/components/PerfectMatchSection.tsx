import Image from "next/image";

/**
 * Section 2 — a centred heading over a three-panel image row, each captioned.
 *
 * `object-cover` with the crop window pushed down (`FOCUS`). The panels are
 * shorter than the sources' 1536×2752 ratio, so ~34% of each photo is cut.
 * Anchoring to the top spends all of that on the bottom and lands the cut on
 * the jaw, which reads as a severed chin. Dropping the window trades headroom
 * — hair the composition does not need — for the neck and shoulders that let a
 * face sit on something.
 *
 * An earlier attempt inset the photos and continued their backdrop in CSS, to
 * even out the different shooting distances. It does not work: sampling the
 * edge pixels shows the subjects run to the frame on the lower half of every
 * file (skin at the margins, not backdrop), so there is nothing to extend and
 * the join lands on the hairline. Evening out the scale needs the photos
 * re-exported with real margin around the subject.
 *
 * PANEL_ASPECT is the dial for tile height — larger is shorter.
 * FOCUS is the vertical crop window: 0% pins the top, 100% pins the bottom.
 */
const PANEL_ASPECT = 0.85;
const FOCUS = "50% 32%";

const PANELS = [
  {
    src: "/home/product-left.jpg",
    alt: "A woman holding the Riveo device to her cheek.",
    caption: "Scan your face at home",
  },
  {
    src: "/home/apply-foundation.jpg",
    alt: "A woman blending foundation into her cheek with her fingertips.",
    caption: "Get your perfect match",
  },
  {
    src: "/home/product-right.jpg",
    alt: "A woman with a smooth, evenly matched complexion against a warm neutral background.",
    caption: "Matched across 100+ brands",
  },
];

const CAPTION =
  "shrink-0 px-6 pt-3 pb-4 text-center font-sans text-[17px] leading-[1.5] text-ink";

export function PerfectMatchSection() {
  return (
    <section
      id="how"
      data-screen-label="Perfect Match"
      className="flex min-h-screen flex-col border-t border-ink/12 bg-surface"
    >
      <div className="flex flex-[0_0_auto] flex-col items-center gap-5 px-10 pt-[4.5vh] pb-[2.5vh] text-center">
        <h2 className="m-0 font-display text-[clamp(28px,3.4vw,46px)] font-light leading-[1.2] tracking-[0.05em] text-ink">
          Perfect Match Every Time
        </h2>
      </div>

      <div className="grid grid-cols-3 bg-surface">
        {PANELS.map((panel, i) => (
          <div key={panel.src} className="flex min-w-0 flex-col">
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: PANEL_ASPECT }}
            >
              <Image
                src={panel.src}
                alt={panel.alt}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
                className="object-cover"
                style={{ objectPosition: FOCUS }}
                priority={i < 2}
              />
            </div>
            <p className={CAPTION}>{panel.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PerfectMatchSection;
