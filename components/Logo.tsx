import Link from "next/link";

function Wreath() {
  return (
    <svg
      className="brand-wreath"
      viewBox="0 0 72 72"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path strokeWidth="1.15" d="M28 58c-11-7-16-20-12-32 8 6 16 7 22 4" />
        <path strokeWidth="1.15" d="M44 58c11-7 16-20 12-32-8 6-16 7-22 4" />
        <path strokeWidth="1" d="M18 30c2-3 5-5 8-6M16 38c3-2 6-3 10-3M20 46c3-1 7-1 10 1" />
        <path strokeWidth="1" d="M54 30c-2-3-5-5-8-6M56 38c-3-2-6-3-10-3M52 46c-3-1-7-1-10 1" />
      </g>
      <circle cx="36" cy="22" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function Logo({ href = "/", compact = false }: { href?: string; compact?: boolean }) {
  const inner = (
    <>
      <Wreath />
      <span className="brand-lockup">
        <span className="brand-script">J.A.</span>
        <span className="brand-word">Venue</span>
      </span>
    </>
  );

  if (!href) {
    return <span className={`brand${compact ? " is-compact" : ""}`}>{inner}</span>;
  }

  return (
    <Link href={href} className={`brand${compact ? " is-compact" : ""}`} aria-label="J.A. Venue home">
      {inner}
    </Link>
  );
}
