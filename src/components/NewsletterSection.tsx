import { SignupForm } from "@/components/SignupForm";

/** "The Riveo Letter" — centred newsletter block reusing the shared pill form. */
export function NewsletterSection() {
  return (
    <section aria-label="Newsletter signup" className="bg-shell px-6 py-14 md:py-16">
      <div className="mx-auto flex w-full max-w-[460px] flex-col items-center">
        <p className="mb-2 font-display text-xs uppercase tracking-[0.25em] text-ink/70">
          [Section label]
        </p>
        <p className="mb-4 font-sans text-sm text-ink/80">
          [Value proposition — what subscribers actually receive]
        </p>

        <SignupForm />

        <p className="mt-2 font-sans text-xs text-ink/50">[Reassurance line]</p>
      </div>
    </section>
  );
}

export default NewsletterSection;
