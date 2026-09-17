import { ButtonLink } from "@/components/ButtonLink";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Reveal } from "@/components/Reveal";
import { asset } from "@/lib/paths";
import { featuredHomeImages } from "@/lib/gallery";
import { site } from "@/lib/site";

const occasions = [
  {
    title: "Weddings",
    copy: "Receptions and celebrations styled with draping, florals, and warm light.",
    image: "/images/organic.jpg",
    alt: "Organic balloon column in sage, yellow, cream, and gold",
  },
  {
    title: "Showers",
    copy: "Baby showers, bridal showers, and welcome gatherings with a photo-ready entrance.",
    image: "/images/shower.jpg",
    alt: "Pink balloon arch at a baby shower entrance",
  },
  {
    title: "Birthdays",
    copy: "From quiet evenings to fully themed parties, the room can take on your color story.",
    image: "/images/birthday.jpg",
    alt: "Birthday lightbox under purple lighting",
  },
  {
    title: "Celebrations",
    copy: "Holidays, milestones, and gatherings that need a space as joyful as the occasion.",
    image: "/images/july.jpg",
    alt: "Red, white, and navy styled dessert table",
  },
  {
    title: "Gatherings",
    copy: "A flexible room for private parties, community events, and everything in between.",
    image: "/images/room.jpg",
    alt: "The open J.A. Venue room with marble floors and white walls",
  },
];

const reasons = [
  {
    n: "01",
    title: "A space that transforms",
    copy: "White walls, marble floors, and a layout that can be dressed for the mood you want.",
  },
  {
    n: "02",
    title: "Styled for the moment",
    copy: "Balloons, linens, backdrops, and décor that help the room feel finished — not empty.",
  },
  {
    n: "03",
    title: "Celebrations of every kind",
    copy: "Weddings, showers, birthdays, repasses, and private parties all find a home here.",
  },
  {
    n: "04",
    title: "A personal welcome",
    copy: "Family-owned and locally rooted in Los Angeles, with people who care how your day feels.",
  },
];

export default function HomePage() {
  return (
    <main id="main">
      <section className="hero" aria-label="J.A. Venue">
        <div className="hero-copy">
          <p className="hero-kicker">{site.parent}</p>
          <h1>Where celebrations take shape.</h1>
          <p className="lede">
            An event venue and rental studio in Los Angeles — ready to be styled
            for weddings, showers, birthdays, and gatherings of every kind.
          </p>
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
              <h2>A warm room for the days you want to remember.</h2>
              <p className="lede">
                J.A. Venue is the event space of Joious Affairs Rentals. Come for
                the room. Stay for the way it can be dressed — linens, balloons,
                backdrops, and the kind of color that makes a celebration feel
                complete.
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

      <section className="occasions">
        <div className="container section-head">
          <Reveal>
            <p className="eyebrow">Occasions</p>
            <h2>Styled for the moment you are marking.</h2>
          </Reveal>
        </div>
        <div className="container-wide occasion-list">
          {occasions.map((item) => (
            <article key={item.title} className="occasion">
              <img src={asset(item.image)} alt={item.alt} />
              <div className="occasion-copy">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section featured">
        <div className="container section-head">
          <Reveal>
            <p className="eyebrow">Inside the space</p>
            <h2>Photography from real celebrations.</h2>
            <p className="lede">
              The room is only the beginning. These are a few of the ways guests
              have filled it — and how it looks when the styling is in place.
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
            <p className="eyebrow">Why J.A. Venue</p>
            <h2>Beautiful, flexible, and ready for your color story.</h2>
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
          src={asset("/images/birthday.jpg")}
          alt="Birthday celebration lighting at J.A. Venue"
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
