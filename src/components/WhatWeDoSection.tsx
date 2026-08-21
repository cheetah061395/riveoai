import { Placeholder } from "@/components/Placeholder";

/**
 * Homepage section one: what you do — structure only.
 *
 * Every string is a bracketed note describing the slot's job. Three columns is
 * the shape; if you only have two real capabilities, cut one rather than
 * padding it. This section hands off to /how-it-works, so it should stay
 * short enough that the product page still has something to say.
 */
const PILLARS = [
  {
    index: "01",
    title: "[Capability 1 — the core mechanic]",
    body: "[One or two sentences. Concrete over abstract: say what it does, not what it enables.]",
    photo: "[Photo — capability 1 in use]",
  },
  {
    index: "02",
    title: "[Capability 2 — the differentiator]",
    body: "[The thing a competitor or the status quo cannot claim. This is the one that earns the section.]",
    photo: "[Photo — capability 2 in use]",
  },
  {
    index: "03",
    title: "[Capability 3 — the payoff]",
    body: "[What the user ends up holding, seeing or knowing. Close the loop the first two opened.]",
    photo: "[Photo — capability 3 in use]",
  },
];

export function WhatWeDoSection() {
  return (
    <section
      aria-label="What we do"
      className="bg-shell px-6 py-24 md:px-12 md:py-32 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-serif text-lg italic text-secondary">
            [Section label]
          </p>
          <h2 className="font-display text-2xl font-normal uppercase leading-[1.2] tracking-display text-ink md:text-[1.75rem]">
            [Heading &mdash; what you do, in plain words]
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-ink/70">
            [Intro &mdash; one or two sentences framing the three points below.
            Say what changes for the user, not how the technology works.]
          </p>
        </div>

        <ul className="mt-16 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-8">
          {PILLARS.map((pillar) => (
            <li key={pillar.index}>
              <Placeholder
                label={pillar.photo}
                tone="light"
                className="aspect-[4/5] w-full border border-ink/10"
                labelAlign="bottom"
              />
              <p className="mt-5 font-display text-[11px] uppercase tracking-display text-accent-deep">
                {pillar.index}
              </p>
              <h3 className="mt-2 font-display text-base font-normal uppercase leading-[1.2] tracking-display text-ink">
                {pillar.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-ink/70">
                {pillar.body}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-16 text-center">
          <a
            href="/how-it-works"
            className="inline-block rounded-none bg-primary px-10 py-4 font-display text-xs uppercase tracking-display text-ink transition-colors duration-200 hover:bg-primary-deep"
          >
            [CTA &rarr; product page]
          </a>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoSection;
