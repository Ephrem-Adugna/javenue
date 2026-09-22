import { BrandName } from "@/components/BrandName";
import { ButtonLink } from "@/components/ButtonLink";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Reveal } from "@/components/Reveal";
import { venueRental } from "@/lib/pricing";
import { asset } from "@/lib/paths";
import { featuredHomeImages } from "@/lib/gallery";
import { site } from "@/lib/site";

const reasons = [
  {
    n: "01",
    title: "A space that transforms",
    copy: "White walls, marble floors, and a layout that can be dressed for the mood you want.",
  },
  {
    n: "02",
    title: "Styled for the moment",
    copy: "Balloons, linens, backdrops and decor that makes your event personal.",
  },
  {
    n: "03",
    title: "A personal welcome",
    copy: "Family owned and locally rooted in Los Angeles with people who are dedicated to removing the stress and ensuring the success of your event.",
  },
];

export default function HomePage() {
  return (
    <main id="main">
      <section className="hero" aria-label="J.A. Venue">
        <img
          src={asset("/images/storefront.jpg")}
          alt="The black storefront of J.A. Venue with the J.A. sign, Celebrations, and Collaborations"
        />
        <div className="hero-copy">
          <h1 className="sr-only">J.A. Venue</h1>
          <p className="lede">{site.tagline}</p>
          <div className="hero-actions">
            <ButtonLink href="/gallery">View Our Gallery</ButtonLink>
            <ButtonLink href="/about" variant="ghost">
              About Us
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section intro intro-home">
        <div className="container intro-grid">
          <Reveal>
            <div className="intro-room">
              <img
                src={asset("/images/room.jpg")}
                alt="The empty J.A. Venue room with marble floors, white walls, and a chandelier"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="intro-copy">
              <p className="eyebrow">The Venue</p>
              <h2>Celebrations &amp; Collaborations</h2>
              <p className="lede">
                <BrandName inline /> is a modern and beautiful space in Los
                Angeles. Photo-perfect and ready to go for showers, receptions,
                intimate weddings, creative workshops, community projects,
                nonprofit activities, meetings, repasses, vendor events and so
                much more!
              </p>
              <div className="ownership">
                {site.ownership.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="rates" id="rates">
        <div className="container section-head">
          <Reveal>
            <p className="eyebrow">Rates</p>
            <h2>Call to plan your event</h2>
            <p className="lede rates-lede">
              Venue hours 8:00AM – 12:00AM. Hourly and daily rentals. Call or
              text for pricing and availability.
            </p>
          </Reveal>
        </div>

        <div className="container rates-venue">
          <div className="rates-venue-copy">
            <h3>
              <BrandName />
            </h3>
            <dl className="rates-when">
              <div>
                <dt>{venueRental.weekday.label}</dt>
                <dd>{venueRental.weekday.days}</dd>
              </div>
              <div>
                <dt>{venueRental.weekend.label}</dt>
                <dd>{venueRental.weekend.days}</dd>
              </div>
            </dl>
            <p className="rates-note">{venueRental.availability}</p>
            <ButtonLink href={site.phoneHref}>Call for pricing</ButtonLink>
          </div>
          <div className="rates-venue-details">
            <p className="rates-label">Rental includes</p>
            <ul className="rates-includes">
              {venueRental.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="rates-label">To book</p>
            <ul className="rates-notes">
              {venueRental.notes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="rates-special">{venueRental.special}</p>
          </div>
        </div>

        <div className="container extras">
          <Reveal>
            <p className="eyebrow">Add-ons</p>
            <h3 className="extras-title">Walk In ready</h3>
            <p className="lede extras-lede">
              Draping, props, window decals, dessert stands, backdrops, balloons,
              personalized centerpieces, themed decorations and so much more!
            </p>
          </Reveal>
          <figure className="extras-flyer">
            <img
              src={asset("/images/addons-flyer.jpg")}
              alt="Add-on price list for tables, chairs, tableware, backdrops, additional items, and tents. Some items are priced as starting amounts or TBD."
            />
          </figure>
        </div>
      </section>

      <section className="section featured">
        <div className="container section-head">
          <Reveal>
            <p className="eyebrow">Inside the venue</p>
            <h2>Style the venue your way.</h2>
            <p className="lede">
              Beautiful, flexible and ready for your color story.
            </p>
          </Reveal>
        </div>
        <div className="container-wide">
          <GalleryGrid images={featuredHomeImages} showFilters={false} />
          <div className="featured-cta">
            <p className="lede">See more of the venue, the décor, and the events.</p>
            <ButtonLink href="/gallery" variant="ink">
              Explore the Gallery →
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section why">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Why</p>
            <h2 className="why-title">
              <BrandName />
            </h2>
            <p className="lede" style={{ marginTop: "0.85rem" }}>
              Beautiful, flexible, and ready for your color story.
            </p>
          </Reveal>
          <div className="why-grid">
            {reasons.map((item) => (
              <Reveal key={item.n}>
                <article className="why-item">
                  <span>{item.n}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="finale">
        <img
          src={asset("/images/gold-sash-tables.jpg")}
          alt="Round tables with white linens, gold chair sashes, navy napkins, and floral centerpieces"
        />
        <div className="finale-inner">
          <p className="eyebrow">Your occasion</p>
          <h2>Let’s make your next event special.</h2>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <ButtonLink href="/gallery">View Gallery</ButtonLink>
            <ButtonLink href="#contact" variant="ghost">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
