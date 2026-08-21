/**
 * Masthead for the inner pages. Clears the fixed nav and sets up the same
 * italic-serif eyebrow / tracked-caps heading pair the rest of the site uses.
 */
export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="border-b border-ink/10 bg-paper px-6 pb-16 pt-32 md:px-12 md:pb-20 md:pt-40 lg:px-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 font-serif text-lg italic text-secondary">
          {eyebrow}
        </p>
        <h1 className="font-display text-2xl font-normal uppercase leading-[1.2] tracking-display text-ink md:text-[1.75rem] lg:text-[2.25rem]">
          {title}
        </h1>
        {intro ? (
          <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-ink/70">
            {intro}
          </p>
        ) : null}
      </div>
    </header>
  );
}

export default PageHeader;
