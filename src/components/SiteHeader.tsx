/**
 * Three-column header: icon cluster left, wordmark centred, account right.
 * The 1fr/auto/1fr grid keeps the wordmark optically centred no matter how
 * wide the side clusters get.
 *
 * The icon buttons have no behaviour yet — menu, search and account flows are
 * unspecified in the handoff.
 */
const STROKE = 1.2;

function MenuIcon() {
  return (
    <svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden="true">
      <path d="M0 1h22M0 7h22M0 13h22" stroke="currentColor" strokeWidth={STROKE} />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="7.5" cy="7.5" r="6.2" stroke="currentColor" strokeWidth={STROKE} />
      <path d="M12.2 12.2 17 17" stroke="currentColor" strokeWidth={STROKE} />
    </svg>
  );
}

function AccountIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="6.4" r="3.6" stroke="currentColor" strokeWidth={STROKE} />
      <path
        d="M2.6 18.5c0-4.1 3.3-6.4 7.4-6.4s7.4 2.3 7.4 6.4"
        stroke="currentColor"
        strokeWidth={STROKE}
      />
    </svg>
  );
}

const ICON_BUTTON =
  "flex cursor-pointer text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary";

export default function SiteHeader() {
  return (
    <header className="grid grid-cols-[1fr_auto_1fr] items-center bg-paper px-10 py-[26px]">
      <div className="flex items-center gap-[26px]">
        <button type="button" aria-label="Menu" className={ICON_BUTTON}>
          <MenuIcon />
        </button>
        <button type="button" aria-label="Search" className={ICON_BUTTON}>
          <SearchIcon />
        </button>
      </div>

      <a href="/" aria-label="Riveo, home" className="justify-self-center">
        <span className="font-serif text-[34px] uppercase tracking-[0.22em] text-ink">
          Riveo
        </span>
      </a>

      <div className="flex items-center justify-end">
        <button
          type="button"
          aria-label="Account"
          className={`relative ${ICON_BUTTON}`}
        >
          <AccountIcon />
          <span
            aria-hidden="true"
            className="absolute -top-px -right-[3px] h-1.5 w-1.5 rounded-full bg-accent"
          />
        </button>
      </div>
    </header>
  );
}
