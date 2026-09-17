import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "gold" | "ghost" | "light" | "ink";

export function ButtonLink({
  href,
  children,
  variant = "gold",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const classes = `btn btn-${variant} ${className}`.trim();
  const isHash = href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:");
  const isExternal = href.startsWith("http");

  if (isHash || isExternal) {
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
