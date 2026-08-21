"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import {
  CARDS,
  CARD_PLACEHOLDER_LABEL,
  SCREEN_PLACEHOLDER_LABEL,
  STEPS,
  getChip,
} from "@/lib/showcase-data";
import { Placeholder } from "@/components/Placeholder";
import type { ShowcaseCard } from "@/types/showcase";

/** Matches the `.65s` enter/exit keyframes in globals.css. */
const SWAP_MS = 650;
/** The original advances the active card's app screen on a 3s interval. */
const SCREEN_MS = 3000;

const THEME_GRADIENTS = {
  light: {
    desktop:
      "linear-gradient(90deg, rgba(244,239,230,0.82), rgba(244,239,230,0.25) 34%, rgba(244,239,230,0) 55%)",
    mobile:
      "linear-gradient(180deg, rgba(244,239,230,0.9), rgba(244,239,230,0.55) 34%, rgba(244,239,230,0) 52%)",
  },
  dark: {
    desktop:
      "linear-gradient(90deg, rgba(0,0,0,0.55), rgba(0,0,0,0) 28%, rgba(0,0,0,0) 72%, rgba(0,0,0,0.45))",
    mobile:
      "linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.25) 34%, rgba(0,0,0,0) 55%)",
  },
} as const;

interface StackState {
  active: number;
  prev: number;
  direction: 1 | -1;
  hasSwapped: boolean;
  jumped: boolean;
  /** Bumped on every swap so the animation can be restarted imperatively. */
  swap: number;
}

const INITIAL_STACK: StackState = {
  active: 0,
  prev: 0,
  direction: 1,
  hasSwapped: false,
  jumped: false,
  swap: 0,
};

/**
 * One layer of the stack. `variant: 'overlay'` is the app-screen panel that
 * floats over the background photo.
 *
 * Photography isn't shot yet, so both variants render a labelled Placeholder.
 * Swap the bodies for <img> / <picture> markup when real assets land.
 */
function CompositeLayer({
  card,
  variant,
  alt,
  className,
}: {
  card: ShowcaseCard;
  variant: "base" | "overlay";
  alt: string;
  className: string;
}) {
  if (variant === "overlay") {
    return (
      <div className={className}>
        <div className="absolute inset-0 flex items-center justify-center">
          <Placeholder
            label={alt}
            tone="light"
            labelAlign="bottom"
            className="h-[68%] w-[clamp(180px,22vw,300px)] rounded-none border border-shell/25"
          />
        </div>
      </div>
    );
  }

  return (
    <Placeholder
      label={alt}
      tone={card.theme === "light" ? "light" : "deep"}
      labelAlign="bottom"
      className={className}
    />
  );
}

export function HowItWorksStage() {
  const sectionRef = useRef<HTMLElement>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [stack, setStack] = useState<StackState>(INITIAL_STACK);
  const [animating, setAnimating] = useState(false);
  const [screenIndices, setScreenIndices] = useState<number[]>(() =>
    CARDS.map(() => 0),
  );

  const activeRef = useRef(0);
  activeRef.current = stack.active;

  // ── Scroll driver: an IntersectionObserver gates a rAF loop that maps the
  //    section's scroll progress onto the active card index.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let raf = 0;
    let running = false;

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const rect = section.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      if (travel <= 0) return;
      const progress = Math.max(0, Math.min(0.9999, -rect.top / travel));
      const next = Math.floor(progress * CARDS.length);
      const active = activeRef.current;
      if (next !== active) {
        activeRef.current = next;
        setStack((current) => ({
          active: next,
          prev: current.active,
          direction: next > current.active ? 1 : -1,
          hasSwapped: true,
          jumped: Math.abs(next - current.active) > 1,
          swap: current.swap + 1,
        }));
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true;
          raf = requestAnimationFrame(tick);
        } else if (!entry.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { rootMargin: "160px 0px" },
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  // ── Hold the enter/exit animation window open for its duration, and restart
  //    the keyframes imperatively so back-to-back swaps still animate.
  useEffect(() => {
    if (!stack.hasSwapped) return;
    setAnimating(true);

    for (const index of [stack.active, stack.prev]) {
      const node = layerRefs.current[index];
      if (!node) continue;
      node.style.animation = "none";
      void node.offsetHeight;
      node.style.animation = "";
    }

    const timer = window.setTimeout(() => setAnimating(false), SWAP_MS);
    return () => window.clearTimeout(timer);
  }, [stack.swap, stack.hasSwapped, stack.active, stack.prev]);

  // ── App-screen cross-fade for the active card. Paused while the tab is
  //    hidden and disabled entirely under reduced motion.
  useEffect(() => {
    const card = CARDS[stack.active];
    if (!card || card.screenSlugs.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer = 0;

    const advance = () => {
      setScreenIndices((current) =>
        current.map((value, index) =>
          index === stack.active
            ? (value + 1) % card.screenSlugs.length
            : value,
        ),
      );
    };

    const start = () => {
      if (timer) return;
      timer = window.setInterval(advance, SCREEN_MS);
    };
    const stop = () => {
      if (!timer) return;
      window.clearInterval(timer);
      timer = 0;
    };

    const onVisibility = () => (document.hidden ? stop() : start());

    if (!document.hidden) start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [stack.active]);

  const goToStep = useCallback((index: number) => {
    const section = sectionRef.current;
    if (!section) return;
    const top = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: top + (index + 0.5) * 1.2 * window.innerHeight,
      behavior: "auto",
    });
  }, []);

  const activeCard = CARDS[stack.active];
  const activeStep = STEPS[stack.active];
  const gradients = THEME_GRADIENTS[activeCard.theme];

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      aria-label="How Riveo works — scan, match, shop"
      className="relative bg-shell"
      style={{ height: `${120 * CARDS.length + 100}vh` }}
    >
      <div className="sticky top-2 mx-2 h-[calc(100vh-1rem)] w-[calc(100%-1rem)] overflow-hidden rounded-none bg-mist max-lg:top-0 max-lg:mx-0 max-lg:h-[100svh] max-lg:w-full">
        <div className="absolute inset-0" data-stage-layers="true">
          {CARDS.map((card, index) => {
            const isActive = index === stack.active;
            const isLeaving =
              stack.hasSwapped && animating && index === stack.prev && !isActive;
            const visible = isActive || isLeaving;

            let animation = "";
            if (animating && stack.hasSwapped) {
              if (isActive) {
                animation = stack.jumped
                  ? "animate-stack-snap"
                  : stack.direction === 1
                    ? "animate-stack-enter"
                    : "animate-stack-enter-rev";
              } else if (isLeaving && !stack.jumped) {
                animation =
                  stack.direction === 1
                    ? "animate-stack-exit"
                    : "animate-stack-exit-rev";
              }
            }

            const screenIndex = screenIndices[index] ?? 0;

            return (
              <div
                key={card.slug}
                ref={(node) => {
                  layerRefs.current[index] = node;
                }}
                aria-hidden={!isActive}
                className={[
                  "absolute inset-0",
                  visible ? "visible" : "invisible",
                  isActive ? "z-[2]" : isLeaving ? "z-[1]" : "",
                  animation,
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <CompositeLayer
                  card={card}
                  variant="base"
                  alt={CARD_PLACEHOLDER_LABEL[card.slug] ?? card.photoAlt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {card.screenSlugs.map((slug, screen) => (
                  <CompositeLayer
                    key={slug}
                    card={card}
                    variant="overlay"
                    alt={SCREEN_PLACEHOLDER_LABEL[slug] ?? slug}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                      screen === screenIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
            );
          })}
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[3] hidden transition-[background] duration-700 lg:block"
          style={{ background: gradients.desktop }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[3] transition-[background] duration-700 lg:hidden"
          style={{ background: gradients.mobile }}
        />

        <div className="pointer-events-none absolute left-6 z-[4] w-[32rem] max-w-[calc(100%-6rem)] md:left-12 max-lg:max-w-[85%] top-[43%] -translate-y-1/2 max-lg:top-[calc(var(--site-chrome)+4.25rem)] max-lg:translate-y-0 max-lg:[@media(max-height:740px)]:top-[calc(var(--site-chrome)+2.75rem)]">
          <div key={stack.active} className="w-full max-w-md animate-step-text">
            <p className="font-sans text-[11px] tabular-nums tracking-[0.25em] text-accent">
              {activeStep.number}
            </p>
            <h3 className="mt-3 font-display uppercase tracking-display font-normal text-[2rem] leading-[1.2] max-lg:text-[1.65rem] max-md:text-[1.4rem] max-[479px]:text-xl text-shell">
              {activeStep.title}
            </h3>
            <ul className="mt-7 flex flex-col gap-5 max-md:mt-5 max-md:gap-4 [@media(max-height:740px)]:mt-4 [@media(max-height:740px)]:gap-3">
              {activeCard.chipSlugs.map((slug) => {
                const chip = getChip(slug);
                if (!chip) return null;
                return (
                  <li key={slug} className="flex gap-3.5">
                    <span
                      aria-hidden="true"
                      className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span className="min-w-0">
                      <span className="block font-sans font-bold text-lg max-md:text-base text-shell">
                        {chip.label}
                      </span>
                      <span className="mt-0.5 block font-sans text-base leading-relaxed max-md:text-sm max-[479px]:text-[13px] max-[479px]:leading-snug text-shell/65">
                        {chip.oneLiner}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <nav
          aria-label="Showcase steps"
          className="absolute right-8 top-1/2 z-[4] flex -translate-y-1/2 flex-col gap-4 rounded-none border px-3 py-4 backdrop-blur-md max-lg:right-auto max-lg:left-6 max-lg:top-[calc(var(--site-chrome)+0.75rem)] max-lg:translate-y-0 max-lg:flex-row max-lg:px-4 max-lg:py-2 md:max-lg:left-12 border-shell/12 bg-ink/35"
        >
          {STEPS.map((step, index) => {
            const isActive = index === stack.active;
            return (
              <button
                key={step.slug}
                type="button"
                onClick={() => goToStep(index)}
                aria-label={`Go to step ${step.number}: ${step.title}`}
                aria-current={isActive ? "step" : undefined}
                className={`pointer-events-auto font-sans text-[11px] tabular-nums tracking-[0.2em] transition-colors duration-300 ${
                  isActive
                    ? "text-accent"
                    : "text-shell/50 hover:text-shell/85"
                }`}
              >
                {step.number}
              </button>
            );
          })}
        </nav>

        <span className="sr-only" aria-live="polite">
          {`Step ${activeStep.number}: ${activeStep.title}`}
        </span>
      </div>
    </section>
  );
}

export default HowItWorksStage;
