import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main id="main" className="section" style={{ minHeight: "70svh" }}>
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>This page is not in the venue.</h1>
        <p className="lede" style={{ margin: "1rem 0 1.5rem" }}>
          The room you were looking for is not here. Head home, or spend a moment
          in the gallery.
        </p>
        <p>
          <Link href="/" className="btn btn-ink">
            Back home
          </Link>
        </p>
      </div>
    </main>
  );
}
