/**
 * Compact copy of the skin report phone, used as the third panel of the image
 * row. Identical to SkinReportPhone except that the prose summary is dropped:
 * in a scroll-past tile the matches are the point, and the paragraph only
 * pushed them down. SkinReportPhone keeps the summary for the standalone page
 * and the blue section, where there is room to read it.
 *
 * The Riveo skin report, rendered inside a phone frame.
 *
 * Built at a fixed 402×874 base, the same size as the design reference, so
 * every value below is the literal spec figure. Scale it at the call site with
 * a CSS `transform`, which keeps the type crisp at any size rather than
 * shipping a screenshot.
 *
 * No status bar: the clock and radio icons ate ~55px of height without saying
 * anything about the product, so the report starts at the top of the screen.
 */

const MATCHES = [
  {
    index: "01",
    name: "Armani Luminous Silk Foundation in Shade 4",
    swatch: "#C9A991",
    top: true,
  },
  {
    index: "02",
    name: "Dior Forever Undercover in Shade 021 Linen",
    swatch: "#C6A88E",
    top: false,
  },
  {
    index: "03",
    name: "Haus Labs Triclone Skin Tech Foundation in 190 Light Cool",
    swatch: "#CDAE96",
    top: false,
  },
];

const LABEL = "font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary";

export function SkinReportPhoneCompact() {
  return (
    <div
      className="h-[874px] w-[402px] overflow-hidden rounded-[48px] bg-[#F2F2F7]"
      style={{
        boxShadow:
          "0 40px 80px rgba(0,0,0,0.18), 0 12px 28px rgba(0,0,0,0.12)",
      }}
    >
      <div className="flex h-full flex-col bg-[#F0DED7]">
        <div className="px-[18px] pt-7">
          <p className="font-serif text-[17px] uppercase tracking-[0.22em] text-ink">
            Riveo
          </p>
          <div className="mt-3 h-px bg-ink/14" />
        </div>

        <div className="flex-1 overflow-hidden px-[18px]">
          <div
            className="mt-5 rounded-[3px] border border-ink/20 bg-white px-[18px] pt-[18px] pb-5"
            style={{ boxShadow: "0 6px 20px rgba(31,38,34,0.07)" }}
          >
            <p className="font-display text-[17px] font-medium uppercase tracking-[0.1em] text-ink">
              Your Shade Matches
            </p>
            <div className="mt-3 h-px bg-ink/12" />
            <ul className="mt-4 space-y-3.5">
              {MATCHES.map((match) => (
                <li
                  key={match.index}
                  className={`flex items-start gap-3 ${
                    match.top ? "-mx-2 rounded-[2px] bg-accent/12 px-2 py-2" : ""
                  }`}
                >
                  <span className="mt-0.5 font-display text-[10px] tracking-[0.08em] text-[#9AA29C]">
                    {match.index}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-px h-[26px] w-[26px] shrink-0 rounded-full ring-1 ring-ink/10"
                    style={{ background: match.swatch }}
                  />
                  <span className={`flex-1 font-sans text-[14px] leading-[1.4] text-ink ${match.top ? "font-semibold" : ""}`}>
                    {match.name}
                  </span>
                  {match.top ? (
                    <span className="shrink-0 rounded-[2px] bg-accent px-2 py-1 font-sans text-[8px] font-semibold uppercase tracking-[0.14em] text-ink">
                      Top rec
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          <p className={`mt-5 ${LABEL}`}>Your shade profile</p>
          <h2 className="mt-1.5 font-serif text-[21px] leading-[1.26] text-ink">
            Light to light-medium, muted neutral-olive.
          </h2>

        </div>

        <div className="px-[18px] pb-6">
          <button
            type="button"
            className="w-full rounded-[3px] bg-button px-5 py-[15px] font-display text-xs uppercase tracking-[0.18em] text-paper"
          >
            Save my shade
          </button>
          <p className="mt-2.5 text-center font-sans text-[10px] text-ink/40">
            Shade names vary by formula. Swatch on the jawline before buying.
          </p>
          <div className="mx-auto mt-3 h-[5px] w-[140px] rounded-full bg-ink/80" />
        </div>
      </div>
    </div>
  );
}

export default SkinReportPhoneCompact;
