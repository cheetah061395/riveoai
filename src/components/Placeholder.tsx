/**
 * Neutral stand-in for photography that hasn't been shot yet.
 *
 * Every image slot on the page renders one of these instead of a borrowed
 * photo. Each carries a visible label so nothing here can be mistaken for a
 * finished asset, and the slots keep the exact aspect ratios the real photos
 * will need — drop a real `<picture>` in and the layout won't move.
 */

type Tone = "warm" | "deep" | "light";

const TONES: Record<Tone, string> = {
  // Soft cosmetic-adjacent gradients — no imagery, no implied product.
  warm: "linear-gradient(135deg,#e3be1ecc,#e3be1e8c 45%,#a8880d73)",
  deep: "linear-gradient(135deg,#0e3550f2,#1b5b85cc 45%,#7ba39199)",
  light: "linear-gradient(135deg,#eef4f1,#bcd6c8 55%,#a9c4b4cc)",
};

export function Placeholder({
  label,
  tone = "warm",
  className = "",
  labelClassName = "",
  labelAlign = "center",
  style,
}: {
  label: string;
  tone?: Tone;
  className?: string;
  labelClassName?: string;
  /** Full-bleed layers should use "bottom" so the label clears page copy. */
  labelAlign?: "center" | "bottom";
  style?: React.CSSProperties;
}) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className={`relative isolate overflow-hidden ${className}`}
      style={{ background: TONES[tone], ...style }}
    >
      {/* Hairline grid so an empty slot still reads as deliberate. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#0e3550 1px,transparent 1px),linear-gradient(to bottom,#0e3550 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className={`absolute inset-0 flex justify-center p-6 ${
          labelAlign === "bottom" ? "items-end pb-16" : "items-center"
        }`}
      >
        <span
          className={`text-center font-sans text-[11px] uppercase tracking-[0.25em] ${
            tone === "deep" ? "text-shell/70" : "text-ink/45"
          } ${labelClassName}`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

export default Placeholder;
