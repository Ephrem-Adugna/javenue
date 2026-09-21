"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { nav } from "@/lib/site";

const leftNav = nav.slice(0, 2);
const rightNav = nav.slice(2);

function NavLinks({
  items,
  pathname,
}: {
  items: typeof nav;
  pathname: string;
}) {
  const current = pathname.replace(/\/$/, "") || "/";

  return items.map((item) => {
    const active = !item.href.includes("#") && current === item.href;
    return (
      <Link
        key={item.href}
        href={item.href}
        className={active ? "is-active" : undefined}
        aria-current={active ? "page" : undefined}
      >
        {item.label}
      </Link>
    );
  });
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled || open ? " is-scrolled" : ""}`}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="header-inner">
        <nav className="nav-desktop nav-left" aria-label="Primary">
          <NavLinks items={leftNav} pathname={pathname} />
        </nav>
        <Logo />
        <nav className="nav-desktop nav-right" aria-label="More">
          <NavLinks items={rightNav} pathname={pathname} />
        </nav>
        <button
          type="button"
          className={`menu-toggle${open ? " is-open" : ""}`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span />
          <span />
        </button>
      </div>
      <div
        id="mobile-nav"
        className={`nav-mobile${open ? " is-open" : ""}`}
        hidden={!open}
      >
        <nav aria-label="Mobile">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
