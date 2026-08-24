/**
 * Announcement marquee.
 *
 * Two identical halves sit in a `w-max` row and the whole thing animates
 * translateX(0 → -50%), so as the first half scrolls out the second lands
 * exactly where it started.
 *
 * The catch: that only reads as seamless if a single half is at least as wide
 * as the viewport. One pass of the brand list is roughly 940px, so on anything
 * wider a gap opens at the end of the loop. Repeating the list inside each half
 * fixes it — REPEAT × ~940px is the widest viewport this stays seamless on.
 *
 * The visual row is aria-hidden and the names are exposed once to assistive
 * tech instead, so they aren't announced eight times over.
 */
const BRANDS = [
  "Dior",
  "Armani",
  "Westman Atelier",
  "Estée Lauder",
  "Lancôme",
  "Maybelline",
  "L'Oréal",
];

const REPEAT = 4;

function Half() {
  return (
    <div className="flex shrink-0">
      {Array.from({ length: REPEAT }, (_, i) => (
        <div key={i} className="flex shrink-0 gap-11 pr-11">
          {BRANDS.map((brand) => (
            <span key={brand}>{brand}</span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function AnnouncementBar() {
  return (
    <div className="overflow-hidden bg-secondary py-[9px] text-paper">
      <p className="sr-only">{BRANDS.join(", ")}</p>
      <div
        aria-hidden="true"
        className="flex w-max animate-marquee text-[11px] uppercase tracking-[0.16em] text-paper motion-reduce:animate-none"
      >
        <Half />
        <Half />
      </div>
    </div>
  );
}
