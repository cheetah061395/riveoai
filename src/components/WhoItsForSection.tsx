/**
 * Homepage section two: who it's for, structure only.
 *
 * Every string is a bracketed note describing the slot's job. Typographic on
 * purpose: it follows an image-heavy grid and benefits from the contrast.
 *
 * Write these as situations a reader can recognise themselves in, not as a
 * demographic. "For women 25–45" tells nobody whether they're included.
 */
const AUDIENCES = [
  {
    index: "01",
    title: "[Audience 1: the clearest case]",
    body: "[The situation, in their words. Name the specific moment they realise the problem is theirs.]",
    photo: null,
  },
  {
    index: "02",
    title: "[Audience 2: the adjacent case]",
    body: "[A different route into the same problem, so the section covers more than one kind of buyer.]",
    photo: null,
  },
  {
    index: "03",
    title: "[Audience 3: the one they don't expect]",
    body: "[The case that widens the market. Someone who wouldn't have searched for this but recognises themselves here.]",
    photo: null,
  },
];

export function WhoItsForSection() {
  return (
    <section
      aria-label="Who it's for"
      className="bg-paper px-6 py-24 md:px-12 md:py-32 lg:px-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-serif text-lg italic text-secondary">
            [Section label]
          </p>
          <h2 className="font-display text-2xl font-normal uppercase leading-[1.2] tracking-display text-ink md:text-[1.75rem]">
            [Heading: who this is for, in one line]
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-ink/70">
            [Intro: one or two sentences widening the door. Make it easy
            for someone unsure whether they qualify to decide that they do.]
          </p>
        </div>

        <ul className="mt-16 divide-y divide-ink/10 border-y border-ink/10 md:mt-20">
          {AUDIENCES.map((audience) => (
            <li
              key={audience.index}
              className="grid gap-3 py-8 md:grid-cols-[auto_1fr_2fr] md:items-baseline md:gap-10 md:py-10"
            >
              <p className="font-display text-[11px] uppercase tracking-display text-accent-deep">
                {audience.index}
              </p>
              <h3 className="font-display text-base font-normal uppercase leading-[1.2] tracking-display text-ink">
                {audience.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-ink/70">
                {audience.body}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-14 text-center">
          <a
            href="/about"
            className="font-sans text-sm font-semibold text-secondary transition-colors hover:text-ink"
          >
            [Text link &rarr; about page]
          </a>
        </div>
      </div>
    </section>
  );
}

export default WhoItsForSection;
