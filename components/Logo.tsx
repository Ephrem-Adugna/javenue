import Link from "next/link";
import { asset } from "@/lib/paths";

export function Logo({ href = "/" }: { href?: string; compact?: boolean }) {
  const inner = (
    <img src={asset("/images/wordmark.png")} alt="" width={500} height={500} />
  );

  if (!href) {
    return inner;
  }

  return (
    <Link href={href} className="header-logo" aria-label="J.A. Venue home">
      {inner}
    </Link>
  );
}
