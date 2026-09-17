import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { galleryImages } from "@/lib/gallery";
import { asset } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs of J.A. Venue in Los Angeles — the room, the décor, and celebrations styled by Joious Affairs Rentals.",
};

export default function GalleryPage() {
  return (
    <main id="main">
      <section className="page-intro">
        <img
          src={asset("/images/organic.jpg")}
          alt="Organic balloon installation in sage, yellow, cream, and red"
        />
        <div className="container page-intro-copy">
          <p className="eyebrow">Photography</p>
          <h1>Gallery</h1>
          <p className="lede" style={{ color: "rgba(251,247,240,0.84)" }}>
            The space, the styling, and the gatherings that fill it.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container-wide">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </main>
  );
}
