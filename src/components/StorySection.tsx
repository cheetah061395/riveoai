"use client";

import { useEffect, useRef, useState } from "react";

import { SparkleIcon } from "@/components/icons";

const BEAT_HIDDEN = "opacity-0 translate-y-[22px]";
const BEAT_SHOWN = "animate-story-rise";

/**
 * Mirrors the original `.story-beat` rule, which drives `story-rise` off a
 * scroll `view()` timeline. We reproduce it with an IntersectionObserver that
 * swaps the pending state for the animation once, on entry.
 */
function useStoryBeat<T extends HTMLElement>() {
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

  return { ref, className: revealed ? BEAT_SHOWN : BEAT_HIDDEN };
}

const HEADLINE =
  "font-display uppercase tracking-display font-normal leading-[1.2] text-xl md:text-2xl lg:text-[1.75rem] text-ink";

const QUESTIONS = [
  "Is your foundation half a tone off?",
  "Does your match hold up in daylight?",
  "Are you still wearing last year’s shade?",
];

export function StorySection() {
  const opening = useStoryBeat<HTMLParagraphElement>();
  const questions = useStoryBeat<HTMLUListElement>();
  const industry = useStoryBeat<HTMLParagraphElement>();
  const closing = useStoryBeat<HTMLParagraphElement>();

  return (
    <section
      id="story"
      aria-label="Why Riveo exists"
      className="relative bg-shell text-ink"
    >
      <div>
        <div className="px-6 md:px-12 lg:px-24 pt-24 md:pt-32 pb-20 md:pb-28 max-w-3xl mx-auto">
          <p ref={opening.ref} className={`${opening.className} ${HEADLINE}`}>
            Everyone owns foundation, but almost nobody owns the right shade.
          </p>

          <ul
            ref={questions.ref}
            className={`${questions.className} question-rotator mt-10 list-none pl-0`}
          >
            {QUESTIONS.map((question) => (
              <li
                key={question}
                className="font-sans text-lg md:text-xl text-ink/70 flex items-baseline gap-3"
              >
                <span aria-hidden="true" className="text-accent/70 text-sm">
                  —
                </span>
                {question}
              </li>
            ))}
          </ul>

          <p
            ref={industry.ref}
            className={`${industry.className} mt-12 ${HEADLINE}`}
          >
            The <span className="text-accent-gradient">$80B</span> makeup industry
            runs on guessing.
          </p>

          <div className="max-w-xs my-14">
            <div className="flex items-center gap-3 w-full">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-accent opacity-60" />
              <SparkleIcon className="flex-shrink-0 text-accent" />
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-accent to-accent opacity-60" />
            </div>
          </div>

          <p ref={closing.ref} className={`${closing.className} ${HEADLINE}`}>
            Riveo ends that.
          </p>
        </div>
      </div>
    </section>
  );
}

export default StorySection;
