/**
 * Announcement marquee. Two identical tracks inside a `w-max` flex row animate
 * translateX(0 -> -50%), so the duplicate makes the loop seamless. 32s linear,
 * infinite. The duplicate is aria-hidden so screen readers read the list once.
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

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="flex gap-11 pr-11"
    >
      {BRANDS.map((brand) => (
        <span key={brand}>{brand}</span>
      ))}
    </div>
  );
}

export default function AnnouncementBar() {
  return (
    <div className="overflow-hidden bg-secondary py-[9px] text-paper">
      <div className="flex w-max animate-marquee text-[11px] uppercase tracking-[0.16em] text-paper motion-reduce:animate-none">
        <Track />
        <Track hidden />
      </div>
    </div>
  );
}
