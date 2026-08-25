/**
 * Header: the wordmark, centred, and nothing else.
 *
 * The handoff specified menu, search and account icon buttons, but none had
 * behaviour attached and there are no nav links, so they have been removed.
 * If a menu drawer, search or account flow is designed later, this is where
 * the left and right clusters go back.
 */
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="flex items-center justify-center bg-paper px-10 py-[26px]">
      <Link href="/" aria-label="Riveo, home">
        <span className="font-serif text-[34px] uppercase tracking-[0.22em] text-ink">
          Riveo
        </span>
      </Link>
    </header>
  );
}
