"use client";

import { useEffect, useRef, useState } from "react";

import { CompareSlider } from "@/components/CompareSlider";
import { SparkleIcon } from "@/components/icons";

/**
 * Scroll reveal for the blocks the original ships with inline
 * `opacity:0; transform:translateY(...)` start states. Settles immediately when
 * the visitor prefers reduced motion.
 */
function useFadeUp<T extends HTMLElement>(offset: string) {
  const ref = useRef<T>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    className: revealed ? "animate-fade-up" : `opacity-0 ${offset}`,
  };
}

const CHIP =
  "font-display text-[11px] uppercase tracking-display px-3.5 py-2 rounded-none border border-ink/25 text-ink/70";

const LINK =
  "inline-block mt-6 font-sans text-sm font-semibold text-accent-deep hover:text-accent transition-colors";

const HEADING =
  "font-display uppercase tracking-display font-normal leading-[1.2] text-xl md:text-2xl lg:text-[1.75rem] text-ink mb-5";

const BODY =
  "font-sans text-lg text-ink/75 leading-relaxed max-w-md mx-auto lg:mx-0";

const DRAG_HINT = "font-sans text-sm text-ink/60 mb-4 text-center lg:text-left";

export function DifferenceSection() {
  const eyebrow = useFadeUp<HTMLParagraphElement>("translate-y-[12px]");
  const heading = useFadeUp<HTMLDivElement>("translate-y-[20px]");
  const closing = useFadeUp<HTMLDivElement>("translate-y-[24px]");

  return (
    <section
      id="the-difference"
      className="relative bg-shell text-ink overflow-hidden"
    >
      <div className="px-6 md:px-12 lg:px-24 pt-8 md:pt-12 pb-20 md:pb-28 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p
            ref={eyebrow.ref}
            className={`${eyebrow.className} font-sans text-base md:text-lg text-ink/60 mb-3`}
          >
            See the difference.
          </p>
          <div ref={heading.ref} className={heading.className}>
            <h2 className="font-display uppercase tracking-display font-normal leading-[1.2] text-2xl md:text-[1.75rem] lg:text-[2.25rem] mb-6 text-ink">
              How far off is your shade?
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">
          <div>
            <p className={DRAG_HINT}>
              <span className="text-accent-deep font-semibold">
                Drag to compare.
              </span>{" "}
              The same face, in a guessed shade and a matched one.
            </p>
            <CompareSlider
              baseAlt="Photo — foundation picked by eye"
              baseLabel="Guessed"
              overlayAlt="Photo — the shade Riveo matched"
              overlayLabel="Matched"
              ariaLabel="Compare a guessed foundation shade with a Riveo-matched shade"
            />
          </div>

          <div className="order-first lg:order-none text-center lg:text-left">
            <p
              className="font-serif text-lg italic mb-3 text-secondary"
            >
              Foundation
            </p>
            <h3 className={HEADING}>Half a tone off is still off.</h3>
            <p className={BODY}>
              Picking by eye under store lighting gets you close, and close is
              what leaves a line at your jaw. Riveo reads undertone and depth
              separately, so the shade that goes on your face is the one that
              disappears into your neck — in daylight, not just in the aisle.
            </p>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-6">
              <span className={CHIP}>Undertone</span>
              <span className={CHIP}>Depth</span>
              <span className={CHIP}>Oxidation</span>
              <span className={CHIP}>Finish</span>
            </div>
            <a className={LINK} href="/how-it-works#undertone">
              How undertone matching works →
            </a>
          </div>
        </div>

        <div className="max-w-xs mx-auto my-16">
          <div className="flex items-center gap-3 w-full">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-accent opacity-60" />
            <SparkleIcon className="flex-shrink-0 text-accent" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-accent to-accent opacity-60" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className={DRAG_HINT}>
              <span className="text-accent-deep font-semibold">
                Drag to compare.
              </span>{" "}
              The same under-eye, two concealers.
            </p>
            <CompareSlider
              baseAlt="Photo — concealer chosen by guesswork"
              baseLabel="Guessed"
              overlayAlt="Photo — the concealer Riveo matched"
              overlayLabel="Matched"
              ariaLabel="Compare a guessed concealer with a Riveo-matched concealer"
            />
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-left">
            <p className="font-serif text-lg italic mb-3 text-secondary">
              Concealer
            </p>
            <h3 className={HEADING}>The right correction, not more coverage.</h3>
            <p className={BODY}>
              Most under-eye mistakes are colour, not thickness — a shade too
              cool goes grey, a shade too light goes ashy. Riveo reads the
              actual hue you are covering and picks the correction for it, so
              one thin layer does what three used to.
            </p>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-6">
              <span className={CHIP}>Colour correction</span>
              <span className={CHIP}>Coverage</span>
              <span className={CHIP}>Brightness</span>
            </div>
            <a className={LINK} href="/how-it-works">
              How colour correction works →
            </a>
          </div>
        </div>

        <div
          ref={closing.ref}
          className={`${closing.className} text-center mt-24 max-w-2xl mx-auto`}
        >
          <h3 className="font-display uppercase tracking-display font-normal leading-[1.2] text-2xl md:text-[1.75rem] text-ink mb-5">
            So, what is <span className="text-accent-gradient">your</span> actual
            shade?
          </h3>
          <p className="mb-7 font-sans text-sm text-ink/70">
            The $149 launch price ends September 30 &mdash; then $199.
          </p>
          <a
            className="inline-block rounded-none bg-primary px-10 py-4 font-display text-xs font-normal uppercase tracking-display text-ink transition-colors duration-200 hover:bg-primary-deep"
            href="/buy"
          >
            Pre-order Riveo
          </a>
        </div>
      </div>
    </section>
  );
}

export default DifferenceSection;
