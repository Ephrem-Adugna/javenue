import type { Metadata } from "next";
import { BrandName } from "@/components/BrandName";
import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import { asset } from "@/lib/paths";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "J.A. Venue is a family-owned, women-owned, and Black-owned event space in Los Angeles.",
};

const offerings = [
  {
    title: "The venue",
    copy: "A modern event room with marble floors and a layout that can shift from seated dinners to open celebration.",
  },
  {
    title: "Décor & styling",
    copy: "Backdrops, balloon work, draping, and details that help the space feel finished for your theme.",
  },
  {
    title: "Rentals",
    copy: "Table linens and party rentals so the room, the tables, and the styling can come from one place.",
  },
  {
    title: "Planning support",
    copy: "A decorating and party-planning studio that can help shape the look of the day — not only the four walls.",
  },
];

export default function AboutPage() {
  return (
    <main id="main">
      <section className="page-intro">
        <img
          src={asset("/images/storefront.jpg")}
          alt="The storefront of J.A. Venue on West Manchester Avenue"
        />
        <div className="container page-intro-copy">
          <p className="eyebrow">Our story</p>
          <h1>About Us</h1>
        </div>
      </section>

      <section className="section intro">
        <div className="container intro-grid">
          <Reveal>
            <div className="intro-portrait">
              <img
                src={asset("/images/owner.jpg")}
                alt="A member of the J.A. Venue team holding sunflowers and colorful table linens"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">Los Angeles</p>
            <h2>A family-owned studio for gatherings that matter.</h2>
            <p className="lede">
              <BrandName inline /> is a family-owned, women-owned, and Black-owned
              celebration studio in Los Angeles. We host the day, and we help
              dress it.
            </p>
            <p className="lede" style={{ marginTop: "1rem" }}>
              The work is personal: a room people can fill with their people, and
              styling that makes the occasion feel like itself. From showers and
              birthdays to weddings, private parties, and quieter gatherings, the
              space is meant to be lived in — not left empty.
            </p>
            <div className="ownership">
              {site.ownership.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">What we offer</p>
            <h2>Venue, décor, rentals, and a room that can change with you.</h2>
          </Reveal>
          <div className="offer-grid">
            {offerings.map((item) => (
              <article key={item.title} className="offer-card">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section intro">
        <div className="container about-story">
          <Reveal>
            <div className="story-frame">
              <img
                src={asset("/images/linens.jpg")}
                alt="Stacked lime, gold, and purple table linens with sunflowers"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Visit</p>
            <h2>Find us on West Manchester.</h2>
            <p className="lede">
              {site.address.line}. Reach us by phone or email when you are ready
              to look at dates, walk the room, or talk through how you want it
              styled.
            </p>
            <div className="hero-actions" style={{ marginTop: "1.6rem" }}>
              <ButtonLink href="/gallery" variant="ink">
                View the Gallery
              </ButtonLink>
              <ButtonLink href="#contact" variant="light">
                Contact Us
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
