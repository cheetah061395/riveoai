import { Placeholder } from "@/components/Placeholder";
import { SignupForm } from "@/components/SignupForm";

/**
 * The homepage's whole argument: what Riveo is and who it's for, one CTA
 * onward, one way to stay in touch. Everything else lives on /how-it-works
 * and /about — deliberately not here.
 *
 * The background is a labelled Placeholder until the hero film exists. To go
 * live, replace it with the `<video>` below — the scrim and layering above it
 * already assume a dark, full-bleed layer:
 *
 *   <video src="/hero/loop.mp4" poster="/hero/poster.jpg"
 *          autoPlay loop muted playsInline preload="auto"
 *          className="absolute inset-0 h-full w-full object-cover object-[center_12%]" />
 */
export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Placeholder
          label="Hero film — close on a face in changing light, device in frame"
          tone="deep"
          className="absolute inset-0 h-full w-full"
          labelAlign="bottom"
          labelClassName="max-w-md"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, var(--video-overlay-top), var(--video-overlay-mid) 50%, var(--video-overlay-bottom))",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 py-28">
        <p className="mb-4 animate-fade-up font-serif text-lg italic text-shell/75 motion-reduce:animate-none">
          Shade matching, solved
        </p>

        <h1 className="max-w-4xl animate-fade-up text-center font-display text-3xl font-normal uppercase leading-[1.2] tracking-display motion-reduce:animate-none sm:text-4xl lg:text-5xl">
          <span className="text-shell">Stop guessing your </span>
          <span className="text-accent-gradient">shade.</span>
        </h1>

        {/* What it is, and who it's for — the one thing this page has to land. */}
        <p className="mt-7 max-w-xl animate-fade-up text-center font-sans text-base leading-relaxed text-shell/80 motion-reduce:animate-none">
          Riveo is a handheld scanner that reads your skin&rsquo;s real
          undertone and depth, then matches it to foundation, concealer and
          blush across 400+ brands. For anyone who has bought the wrong shade
          more than once.
        </p>

        <a
          href="/how-it-works"
          className="mt-9 animate-fade-up rounded-none bg-primary px-10 py-4 font-display text-xs uppercase tracking-display text-ink transition-colors duration-200 hover:bg-primary-deep motion-reduce:animate-none"
        >
          See how it works
        </a>

        <div className="mt-14 flex w-full animate-fade-up justify-center motion-reduce:animate-none">
          <div className="flex w-full max-w-[460px] flex-col items-center">
            <SignupForm />
            <p className="mt-3 font-sans text-xs font-light tracking-wide text-shell/70">
              Early access, launch pricing, and shade tips worth reading.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
