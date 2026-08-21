import { Placeholder } from "@/components/Placeholder";

/**
 * The personal half of the About page.
 *
 * ⚠️ The prose below is scaffolding, not copy. I don't know the real story, and
 * inventing a founder origin would put fiction on your About page — so the
 * bracketed lines are yours to replace. Structure, rhythm and length are set to
 * what actually reads well here; swap the words and delete this comment.
 */
export function FounderNote() {
  return (
    <section
      aria-label="A note from the founder"
      className="bg-shell px-6 py-20 md:px-12 md:py-28 lg:px-24"
    >
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[280px_1fr] md:gap-16">
        <div>
          <Placeholder
            label="Portrait — founder, natural light"
            tone="warm"
            className="aspect-[4/5] w-full"
            labelAlign="bottom"
          />
        </div>

        <div>
          <p className="mb-3 font-serif text-lg italic text-secondary">
            A note from the founder
          </p>
          <h2 className="font-display text-xl font-normal uppercase leading-[1.2] tracking-display text-ink md:text-2xl">
            [One line on the moment you decided to build this]
          </h2>

          <div className="mt-6 space-y-5 font-sans text-base leading-relaxed text-ink/75">
            <p>
              [The specific experience that started it — a counter, a bad match,
              a returned bottle. Concrete beats abstract: name the product, the
              lighting, what it looked like in the car afterwards.]
            </p>
            <p>
              [What you found when you looked into it. Why the problem persists
              — shade ranges, lighting, the gap between how skin is described
              and how it actually behaves.]
            </p>
            <p>
              [What you want to be true for someone using Riveo. Keep this one
              short; it lands harder than the paragraph above it.]
            </p>
          </div>

          <p className="mt-8 font-serif text-lg italic text-ink/60">
            [Name], founder
          </p>
        </div>
      </div>
    </section>
  );
}

export default FounderNote;
