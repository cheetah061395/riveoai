import type { SVGProps } from "react";

/**
 * lucide-react dropped its brand icons in v1, so the three social glyphs are
 * inlined here with the exact paths the production markup renders. Props match
 * lucide's defaults (24 viewBox, 2px round-capped stroke, currentColor).
 */
function BrandIcon({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

function Instagram(props: SVGProps<SVGSVGElement>) {
  return (
    <BrandIcon {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </BrandIcon>
  );
}

function Linkedin(props: SVGProps<SVGSVGElement>) {
  return (
    <BrandIcon {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </BrandIcon>
  );
}

function Twitter(props: SVGProps<SVGSVGElement>) {
  return (
    <BrandIcon {...props}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </BrandIcon>
  );
}

const FOOTER_LINKS = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/preorder-terms", label: "Pre-order & Returns" },
  { href: "mailto:hello@riveo.ai", label: "Contact" },
];

const SOCIALS = [
  { href: "https://www.instagram.com/", label: "Instagram", Icon: Instagram },
  { href: "https://www.linkedin.com/", label: "LinkedIn", Icon: Linkedin },
  { href: "https://x.com/", label: "X (Twitter)", Icon: Twitter },
];

export function SiteFooter() {
  return (
    <footer className="bg-sage text-ink">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 py-14 text-center">
        <p className="font-display uppercase tracking-[0.22em] text-lg mb-3 text-ink">
          RIVEO
        </p>
        <p className="font-sans text-sm text-ink/60 italic mb-8">
          Your shade, matched.
        </p>

        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-7 gap-y-3 mb-8">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm text-ink/70 hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex justify-center gap-4 mb-10">
          {SOCIALS.map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-none border border-ink/25 flex items-center justify-center text-ink/60 hover:text-ink hover:border-ink/60 transition-all duration-200"
            >
              <Icon width={14} height={14} />
            </a>
          ))}
        </div>

        <div className="pt-6 border-t border-ink/15">
          <p className="font-sans text-xs leading-relaxed text-ink/60 max-w-3xl mx-auto">
            Riveo is a cosmetic colour-matching tool. Shade recommendations
            reflect your own scans and the shade data published by each brand;
            formulas change, and results vary with lighting, application and
            skin condition. Patch test new products and consult a dermatologist
            about any skin concern.
          </p>
          <p className="font-sans text-xs text-ink/60 tracking-wide mt-4">
            © 2026 Riveo AI, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
