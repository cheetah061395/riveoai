import { Menu } from "lucide-react";

const NAV_LINKS = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

/**
 * Solid black bar, links left, centred wordmark, action right — a three-column
 * grid so the wordmark stays optically centred regardless of the side widths.
 */
export default function SiteNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ink text-shell">
      <div className="px-6 md:px-10">
        <div className="grid h-15 grid-cols-[1fr_auto_1fr] items-center md:h-16">
          <div className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                className="hidden font-display text-[11px] uppercase tracking-display text-shell/80 transition-colors duration-200 hover:text-shell md:inline"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <button
              className="text-shell md:hidden"
              aria-label="Toggle menu"
              type="button"
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Text wordmark until a real logo file exists — swap for an <img> then. */}
          <a href="/" aria-label="Riveo, home" className="justify-self-center">
            <span className="font-display text-base uppercase tracking-[0.28em] text-shell md:text-lg">
              Riveo
            </span>
          </a>

          <div className="justify-self-end">
            <a
              className="hidden font-display text-[11px] uppercase tracking-display text-shell/80 transition-colors duration-200 hover:text-shell md:inline"
              href="/buy"
            >
              Buy The Product
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
