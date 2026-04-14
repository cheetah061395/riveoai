import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ConsultationForm } from "@/components/ConsultationModal";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-[68px]">
        {/* Hero + Contact Form */}
        <section
          className="relative w-full overflow-hidden px-6 py-[80px] md:px-[40px] md:py-[120px]"
          style={{
            background:
              "linear-gradient(135deg, #060e1a 0%, #0f2847 50%, #060e1a 100%)",
          }}
        >
          {/* Noise grain */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />
          {/* Corner glows */}
          <div
            className="pointer-events-none absolute top-0 left-0 h-[300px] w-[300px] opacity-20"
            style={{
              background:
                "radial-gradient(circle at 0% 0%, rgba(27,84,248,0.3) 0%, transparent 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] opacity-20"
            style={{
              background:
                "radial-gradient(circle at 100% 100%, rgba(27,84,248,0.3) 0%, transparent 70%)",
            }}
          />

          <div className="relative mx-auto flex max-w-[1280px] flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
            {/* Text */}
            <div className="max-w-[520px]">
              <h1
                className="text-[30px] font-normal leading-[1.2] text-white md:text-[52px]"
                style={{
                  fontFamily: 'Georgia, Times, "Times New Roman", serif',
                }}
              >
                About Us
              </h1>
              <p className="mt-6 text-[17px] leading-[1.8] text-white/80">
                Riveo AI builds custom AI solutions for small businesses. We
                automate the busywork like quotes, follow-ups, scheduling, and
                paperwork inside the tools your team already uses.
              </p>

              {/* Our Story */}
              <div className="mt-10 border-l-2 border-[#1B54F8] pl-6">
                <h2
                  className="text-[20px] font-normal leading-[1.2] text-white md:text-[24px]"
                  style={{
                    fontFamily: 'Georgia, Times, "Times New Roman", serif',
                  }}
                >
                  Our Story
                </h2>
                <p className="mt-4 text-[16px] leading-[1.8] text-white/80">
                  After years at leading AI companies, I saw a gap. The most
                  powerful tools were locked inside big tech. I started Riveo to
                  bring that same AI to small businesses so they can scale
                  faster and work smarter.
                </p>
                <p className="mt-4 text-[14px] font-semibold tracking-wide text-[#7da1ff]">
                  —Shirley, Founder &amp; CEO
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full max-w-[480px] rounded-[12px] bg-white p-[40px] shadow-2xl">
              <ConsultationForm />
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-t from-[#f6f5f3] to-transparent" />
        </section>

        {/* Team */}
        <section className="w-full bg-[#f6f5f3] px-6 py-[60px] md:px-[40px] md:py-[100px]">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-[48px] flex flex-col items-center text-center">
              <h2
                className="text-[26px] font-bold tracking-tight text-[#0a0a0a] md:text-[48px]"
                style={{
                  fontFamily: 'Georgia, Times, "Times New Roman", serif',
                }}
              >
                Team
              </h2>
            </div>
          </div>
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {/* Shirley */}
            <div className="border-b border-[#e4e2de] px-2 py-8 sm:border-b-0 sm:border-r sm:px-8 lg:border-r">
              <div className="flex items-center gap-2">
                <h3 className="text-[20px] font-bold tracking-tight text-[#0a0a0a]">
                  Shirley Jiang
                </h3>
                <a
                  href="https://www.linkedin.com/in/shirley-jiang/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#bbb] transition-colors hover:text-[#0077b5]"
                  aria-label="LinkedIn"
                >
                  <svg className="h-[14px] w-[14px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
              <p className="mt-1 text-[14px] font-medium text-[#888]">
                CEO
              </p>
              <a
                href="mailto:shirley@riveoai.com"
                className="mt-3 block text-[14px] text-[#0a0a0a] transition-colors hover:text-[#1B54F8]"
              >
                shirley@riveoai.com
              </a>
              <p className="mt-3 text-[13px] leading-[1.6] text-[#333]">
                8+ years in software at SpaceX, Fireworks AI, and other
                leading tech companies
              </p>
            </div>

            {/* Jason */}
            <div className="border-b border-[#e4e2de] px-2 py-8 sm:border-b-0 sm:px-8 lg:border-r">
              <h3 className="text-[20px] font-bold tracking-tight text-[#0a0a0a]">
                Jason Jiang
              </h3>
              <p className="mt-1 text-[14px] font-medium text-[#888]">
                Engineer
              </p>
              <a
                href="mailto:jason@riveoai.com"
                className="mt-3 block text-[14px] text-[#0a0a0a] transition-colors hover:text-[#1B54F8]"
              >
                jason@riveoai.com
              </a>
              <p className="mt-3 text-[13px] leading-[1.6] text-[#333]">
                B.S. Computer Science, UC Santa Barbara
              </p>
            </div>

            {/* Glenn */}
            <div className="px-2 py-8 sm:px-8">
              <div className="flex items-center gap-2">
                <h3 className="text-[20px] font-bold tracking-tight text-[#0a0a0a]">
                  Glenn Platkin
                </h3>
                <a
                  href="https://www.linkedin.com/in/glennplatkin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#bbb] transition-colors hover:text-[#0077b5]"
                  aria-label="LinkedIn"
                >
                  <svg className="h-[14px] w-[14px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
              <p className="mt-1 text-[14px] font-medium text-[#888]">
                Advisor
              </p>
              <a
                href="mailto:glenn@riveoai.com"
                className="mt-3 block text-[14px] text-[#0a0a0a] transition-colors hover:text-[#1B54F8]"
              >
                glenn@riveoai.com
              </a>
              <p className="mt-3 text-[13px] leading-[1.6] text-[#333]">
                Software executive with 30+ years of experience partnering
                with Fortune 500 companies
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
