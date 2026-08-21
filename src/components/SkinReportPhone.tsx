/**
 * The Riveo skin report, rendered inside a phone frame.
 *
 * Built at a fixed 402×874 base — the same size as the design reference — so
 * every value below is the literal spec figure. Scale it at the call site with
 * a CSS `transform`, which keeps the type crisp at any size rather than
 * shipping a screenshot.
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

const ATTRIBUTES: { label: string; value: string; wide?: boolean }[] = [
  { label: "Depth", value: "light to light-medium" },
  { label: "Undertone", value: "neutral-olive, leaning slightly cool" },
  {
    label: "Surface tone",
    value: "some pink/red in the cheeks and center of the face",
  },
  { label: "Quality", value: "muted, not highly saturated" },
  {
    label: "Visual color",
    value:
      "beige-yellow with a subtle gray/green cast rather than peach or golden",
    wide: true,
  },
  {
    label: "Watch for",
    value:
      "many “warm” shades may turn orange, while many “cool” shades may turn too pink",
    wide: true,
  },
  {
    label: "Best family",
    value: "muted neutral, neutral-olive, or cool-olive",
    wide: true,
  },
];

const LABEL = "font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary";
const VALUE = "mt-1 font-sans text-[13px] leading-[1.5] text-ink";

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-7 pt-3.5">
      <span className="font-sans text-[17px] font-semibold text-black">
        9:41
      </span>
      <div className="h-[37px] w-[125px] rounded-full bg-black" />
      <div className="flex items-center gap-1.5 text-black" aria-hidden="true">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
          <rect x="0" y="8" width="3" height="4" rx="1" />
          <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
          <rect x="10" y="3" width="3" height="9" rx="1" />
          <rect x="15" y="0" width="3" height="12" rx="1" />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
          <path d="M8 10.5 6 8.4a2.8 2.8 0 0 1 4 0zM8 6.2a5 5 0 0 0-3.6 1.5L2.9 6.2a7.2 7.2 0 0 1 10.2 0l-1.5 1.5A5 5 0 0 0 8 6.2M8 2.1a9.2 9.2 0 0 0-6.5 2.7L0 3.3a11.3 11.3 0 0 1 16 0l-1.5 1.5A9.2 9.2 0 0 0 8 2.1" />
        </svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
          <rect
            x="0.5"
            y="0.5"
            width="21"
            height="11"
            rx="3"
            stroke="currentColor"
            strokeOpacity="0.4"
          />
          <rect x="2" y="2" width="18" height="8" rx="1.6" fill="currentColor" />
          <path
            d="M23 4v4a2 2 0 0 0 0-4"
            fill="currentColor"
            fillOpacity="0.4"
          />
        </svg>
      </div>
    </div>
  );
}

export function SkinReportPhone() {
  return (
    <div
      className="h-[874px] w-[402px] overflow-hidden rounded-[48px] bg-[#F2F2F7]"
      style={{
        boxShadow:
          "0 40px 80px rgba(0,0,0,0.18), 0 12px 28px rgba(0,0,0,0.12)",
      }}
    >
      <div className="flex h-full flex-col bg-paper">
        <StatusBar />

        <div className="px-[18px] pt-4">
          <p className="font-serif text-[17px] uppercase tracking-[0.22em] text-ink">
            Riveo
          </p>
          <div className="mt-3 h-px bg-ink/14" />
        </div>

        <div className="flex-1 overflow-hidden px-[18px]">
          <p className={`mt-5 ${LABEL}`}>Your shade profile</p>
          <h2 className="mt-1.5 font-serif text-[21px] leading-[1.26] text-ink">
            Light to light-medium, muted neutral-olive.
          </h2>

          <div className="mt-4 rounded-[3px] border border-ink/14 bg-white px-[18px] py-5">
            <p className="font-display text-sm font-medium uppercase tracking-[0.12em] text-ink">
              Your Shade Matches
            </p>
            <ul className="mt-3.5 space-y-3">
              {MATCHES.map((match) => (
                <li key={match.index} className="flex items-start gap-3">
                  <span className="mt-0.5 font-display text-[10px] tracking-[0.08em] text-[#9AA29C]">
                    {match.index}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-px h-[22px] w-[22px] shrink-0 rounded-full"
                    style={{ background: match.swatch }}
                  />
                  <span className="flex-1 font-sans text-[13px] leading-[1.4] text-ink">
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

          <dl className="mt-5 grid grid-cols-2 gap-x-5 gap-y-4">
            {ATTRIBUTES.map((attribute) => (
              <div
                key={attribute.label}
                className={attribute.wide ? "col-span-2" : undefined}
              >
                <dt className={LABEL}>{attribute.label}</dt>
                <dd className={VALUE}>{attribute.value}</dd>
              </div>
            ))}
          </dl>
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

export default SkinReportPhone;
