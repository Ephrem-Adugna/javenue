import Link from "next/link";
import { asset } from "@/lib/paths";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <>
      <section className="contact-band" id="contact">
        <div className="container contact-band-inner">
          <div>
            <p className="eyebrow">Inquire</p>
            <h2>Let’s talk about your next event.</h2>
            <p className="lede">
              Call or text to inquire about pricing and available dates.
            </p>
          </div>
          <div className="contact-details">
            <a className="contact-line" href={site.phoneHref}>
              <span>Phone</span>
              {site.phone}
            </a>
            <a className="contact-line" href={`mailto:${site.email}`}>
              <span>Email</span>
              {site.email}
            </a>
            <p className="contact-line">
              <span>Address</span>
              {site.address.line}
            </p>
            <a
              className="contact-line"
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer"
            >
              <span>Instagram</span>
              {site.instagram.handle}
            </a>
            <a
              className="contact-line"
              href={site.facebook.url}
              target="_blank"
              rel="noreferrer"
            >
              <span>Facebook</span>
              {site.facebook.label}
            </a>
          </div>
        </div>
      </section>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Link href="/" className="footer-logo" aria-label="J.A. Venue home">
              <img src={asset("/images/wordmark.png")} alt="J.A. Venue" />
            </Link>
            <p className="footer-tag">{site.tagline}</p>
          </div>
          <div>
            <p className="footer-heading">Explore</p>
            <Link href="/">Home</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/#rates">Rates</Link>
            <Link href="/about">About Us</Link>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <p className="footer-heading">Visit</p>
            <p>{site.address.street}</p>
            <p>
              {site.address.city}, {site.address.state} {site.address.zip}
            </p>
            <p>Open {site.hours}</p>
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div>
            <p className="footer-heading">Follow</p>
            <a href={site.instagram.url} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={site.facebook.url} target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>{site.ownership.join(" · ")}</p>
        </div>
      </footer>
    </>
  );
}
