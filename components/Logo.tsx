import Link from "next/link";
import { BrandName } from "./BrandName";

export function Logo({ href = "/" }: { href?: string; compact?: boolean }) {
  const inner = <BrandName />;

  if (!href) {
    return inner;
  }

  return (
    <Link href={href} className="brand" aria-label="J.A. Venue home">
      {inner}
    </Link>
  );
}
