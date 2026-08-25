"use client";

import { useState, type FormEvent } from "react";

/**
 * Section 1, centred title screen with email capture.
 *
 * Submits to our own route handler, which forwards into the Google Form that
 * holds the early-access list. See `src/app/api/subscribe/route.ts`.
 */
const POST_URL = "/api/subscribe";

type Status = "idle" | "submitting" | "success" | "error" | "rate-limited";

export function HeroSection() {
  const [email, setEmail] = useState("");
  // Honeypot. Hidden from people, so anything here came from a bot.
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(POST_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company }),
      });
      if (res.ok) setStatus("success");
      else setStatus(res.status === 429 ? "rate-limited" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      data-screen-label="Hero"
      className="bg-paper px-6 pt-10 pb-16 text-center md:px-10 md:pt-36 md:pb-36"
    >
      <h1 className="m-0 font-display text-[42px] font-extralight uppercase leading-[1.45] tracking-[0.2em] text-ink max-md:text-[28px] max-md:tracking-[0.16em] max-sm:text-[22px]">
        Find your perfect foundation shade
      </h1>

      <p className="mx-auto mt-7 max-w-[44ch] md:mt-10 font-sans text-[20px] font-light leading-[1.8] tracking-[0.01em] text-[#3A443E] [text-wrap:pretty] max-md:text-[17px]">
        Measure your skin tone at home with our lab-grade device. Get your
        exact shade match. It&rsquo;s that easy.
      </p>

      {status === "success" ? (
        <p className="mx-auto mt-9 max-w-[360px] font-display text-[13px] md:mt-12 font-extralight uppercase tracking-[0.18em] text-ink">
          Thanks, you&rsquo;re on the list.
        </p>
      ) : (
        <form
          onSubmit={onSubmit}
          className="mx-auto mt-9 flex max-w-[360px] flex-col items-stretch gap-4 md:mt-12"
        >
          {/* Positioned offscreen rather than display:none, which many
              bots skip. Hidden from assistive tech and unreachable by tab, so
              nobody using the page can land on it. */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
          />

          <label htmlFor="hero-email" className="sr-only">
            Email
          </label>
          <input
            id="hero-email"
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="rounded-md border border-ink/22 bg-surface px-[18px] py-[17px] text-center font-display text-[13px] font-light tracking-[0.1em] text-ink outline-none focus:border-secondary"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="cursor-pointer rounded-md bg-button px-8 py-[19px] font-display text-[11px] font-normal uppercase tracking-[0.24em] text-paper transition-colors hover:bg-secondary disabled:opacity-60"
          >
            {status === "submitting" ? "Sending…" : "Get Early Access"}
          </button>
          {status === "error" || status === "rate-limited" ? (
            <p role="alert" className="font-sans text-[13px] text-label">
              {status === "rate-limited"
                ? "Too many attempts. Please try again in a few minutes."
                : "Something went wrong. Please try again."}
            </p>
          ) : null}
        </form>
      )}
    </section>
  );
}

export default HeroSection;
