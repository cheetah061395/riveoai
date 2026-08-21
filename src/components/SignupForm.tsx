"use client";

import type { FormEvent } from "react";

import { cn } from "@/lib/utils";

/**
 * The white pill signup form — Name + Email + "Join".
 * Shared by HeroSection and NewsletterSection, so the markup is self-contained
 * and the only prop is a class hook for the wrapper.
 *
 * Visual clone: submitting is a no-op.
 */
export function SignupForm({ className }: { className?: string }) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className={cn(
        "flex w-full max-w-[460px] items-center rounded-none border border-ink/20 bg-white p-0",
        className,
      )}
    >
      <input
        type="text"
        placeholder="Name"
        aria-label="First name"
        autoComplete="given-name"
        className="min-h-[52px] w-[34%] min-w-0 shrink-0 rounded-none border-0 bg-transparent pl-4 pr-2 font-sans text-sm text-ink placeholder:text-ink/40 focus:outline-none"
      />
      <span aria-hidden="true" className="h-6 w-px shrink-0 bg-ink/15" />
      <input
        type="email"
        placeholder="Email"
        aria-label="Email address"
        autoComplete="email"
        className="min-h-[52px] min-w-0 flex-1 rounded-none border-0 bg-transparent pl-3 pr-2 font-sans text-sm text-ink placeholder:text-ink/40 focus:outline-none"
      />
      <button
        type="submit"
        className="min-h-[52px] shrink-0 whitespace-nowrap rounded-none bg-ink px-7 font-display text-xs uppercase tracking-display text-shell transition-colors hover:bg-secondary disabled:opacity-60"
      >
        Join
      </button>
    </form>
  );
}

export default SignupForm;
