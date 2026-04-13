"use client";

import { useState } from "react";

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="py-[20px] text-center">
        <h3 className="mb-[8px] text-[24px] font-bold text-[#100F0F]">
          Thank you!
        </h3>
        <p className="text-[16px] text-[#555]">
          We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <>
      <h3 className="mb-[8px] text-[24px] font-bold text-[#100F0F]">
        Free 30-Min Consultation
      </h3>
      <p className="mb-[24px] text-[15px] text-[#555]">
        We&apos;ll assess your current setup and show you where AI can
        drive results.
      </p>

      {/* Primary CTA — Calendly */}
      <a
        href="https://calendly.com/hello-riveoai/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-[6px] bg-[#1B54F8] py-[14px] text-center text-[16px] font-semibold text-white transition-colors hover:bg-[#1545d4]"
      >
        Book a Time &rarr;
      </a>

      {/* Divider */}
      <div className="my-[24px] flex items-center gap-4">
        <div className="h-px flex-1 bg-[#e5e5e5]" />
        <span className="text-[13px] text-[#999]">
          or send us a message
        </span>
        <div className="h-px flex-1 bg-[#e5e5e5]" />
      </div>

      {/* Secondary — Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const company = (
            form.elements.namedItem("company") as HTMLInputElement
          ).value;
          const email = (
            form.elements.namedItem("email") as HTMLInputElement
          ).value;
          const phone = (
            form.elements.namedItem("phone") as HTMLInputElement
          ).value;
          const formData = new URLSearchParams();
          formData.append("entry.1496550793", company);
          formData.append("entry.1324615949", email);
          formData.append("entry.642270581", phone);
          fetch(
            "https://docs.google.com/forms/d/e/1FAIpQLScMYllv0AkdvViTsw5XUa2lESCjjPV0EG4qeyMk3o3tzcPyeg/formResponse",
            {
              method: "POST",
              body: formData,
              mode: "no-cors",
            }
          );
          setSubmitted(true);
        }}
        className="flex flex-col gap-[16px]"
      >
        <input
          type="text"
          name="company"
          placeholder="Company"
          required
          className="rounded-[6px] border border-[#ddd] px-[16px] py-[12px] text-[16px] outline-none focus:border-[#1B54F8]"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="rounded-[6px] border border-[#ddd] px-[16px] py-[12px] text-[16px] outline-none focus:border-[#1B54F8]"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          required
          className="rounded-[6px] border border-[#ddd] px-[16px] py-[12px] text-[16px] outline-none focus:border-[#1B54F8]"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={1}
          className="resize-none rounded-[6px] border border-[#ddd] px-[16px] py-[12px] text-[16px] outline-none focus:border-[#1B54F8]"
        />
        <button
          type="submit"
          className="cursor-pointer rounded-[6px] border border-[#ddd] py-[14px] text-[16px] font-semibold text-[#333] transition-colors hover:border-[#1B54F8] hover:text-[#1B54F8]"
        >
          Contact Us
        </button>
      </form>
    </>
  );
}

export function ConsultationModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-[480px] rounded-[12px] bg-white p-[40px] shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-[16px] top-[16px] cursor-pointer text-[24px] text-[#999] hover:text-[#333]"
        >
          &times;
        </button>
        <ConsultationForm />
      </div>
    </div>
  );
}
