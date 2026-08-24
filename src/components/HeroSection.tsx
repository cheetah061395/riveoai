"use client";

import { useState, type FormEvent } from "react";

/**
 * Section 1 — centred title screen with email capture.
 *
 * `status` is wired for the full submit lifecycle, but there is no endpoint
 * yet: the handoff lists the newsletter/CRM destination as TBD. Until one
 * exists, submit resolves straight to "success" without sending anything.
 * Point POST_URL at the real list and remove the short-circuit.
 */
const POST_URL: string | null = null;

type Status = "idle" | "submitting" | "success" | "error";

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!POST_URL) {
      setStatus("success");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch(POST_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      data-screen-label="Hero"
      className="bg-paper px-10 pt-24 pb-26 text-center"
    >
      <h1 className="m-0 font-display text-[64px] font-light leading-[1.12] tracking-[0.06em] text-ink max-md:text-[40px] max-sm:text-[32px]">
        Find your perfect foundation shade
      </h1>

      <p className="mx-auto mt-7 max-w-[46ch] font-sans text-[21px] leading-[1.6] text-muted [text-wrap:pretty] max-md:text-[18px]">
        Scan your face with our lab grade device and we match you with your
        foundation shade. It&rsquo;s that easy.
      </p>

      {status === "success" ? (
        <p className="mx-auto mt-10 max-w-[360px] font-display text-[15px] font-light tracking-[0.04em] text-ink">
          Thanks &mdash; you&rsquo;re on the list.
        </p>
      ) : (
        <form
          onSubmit={onSubmit}
          className="mx-auto mt-10 flex max-w-[360px] flex-col items-stretch gap-3.5"
        >
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
            className="rounded-md border border-ink/22 bg-surface px-[18px] py-[15px] text-center font-display text-[15px] font-light tracking-[0.04em] text-ink outline-none focus:border-secondary"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="cursor-pointer rounded-md bg-button px-6 py-[17px] font-display text-sm font-normal uppercase tracking-[0.14em] text-paper transition-colors hover:bg-secondary disabled:opacity-60"
          >
            {status === "submitting" ? "Sending…" : "Get Early Access"}
          </button>
          {status === "error" ? (
            <p role="alert" className="font-sans text-[13px] text-label">
              Something went wrong. Please try again.
            </p>
          ) : null}
        </form>
      )}
    </section>
  );
}

export default HeroSection;
