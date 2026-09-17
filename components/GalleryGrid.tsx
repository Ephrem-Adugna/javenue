"use client";

import { useCallback, useEffect, useState } from "react";
import {
  categoryLabels,
  type GalleryCategory,
  type GalleryImage,
} from "@/lib/gallery";
import { asset } from "@/lib/paths";

export function GalleryGrid({
  images,
  showFilters = true,
}: {
  images: GalleryImage[];
  showFilters?: boolean;
}) {
  const [filter, setFilter] = useState<"all" | GalleryCategory>("all");
  const [active, setActive] = useState<number | null>(null);

  const visible =
    filter === "all" ? images : images.filter((image) => image.category === filter);

  const close = useCallback(() => setActive(null), []);

  const next = useCallback(() => {
    setActive((index) => {
      if (index === null) return index;
      return (index + 1) % visible.length;
    });
  }, [visible.length]);

  const prev = useCallback(() => {
    setActive((index) => {
      if (index === null) return index;
      return (index - 1 + visible.length) % visible.length;
    });
  }, [visible.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  useEffect(() => {
    setActive(null);
  }, [filter]);

  const current = active !== null ? visible[active] : null;

  return (
    <>
      {showFilters ? (
        <div className="gallery-filters" role="tablist" aria-label="Gallery filters">
          {categoryLabels.map((category) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={filter === category.id}
              className={filter === category.id ? "is-active" : undefined}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      ) : null}

      <div className="gallery-mosaic">
        {visible.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className={`gallery-item span-${image.span ?? "square"}`}
            onClick={() => setActive(index)}
            aria-label={image.alt}
          >
            <img
              src={asset(image.src)}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
            <span className="gallery-item-veil">View</span>
          </button>
        ))}
      </div>

      {current ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer">
          <button type="button" className="lightbox-scrim" onClick={close} aria-label="Close" />
          <button type="button" className="lightbox-close" onClick={close} aria-label="Close photo">
            Close
          </button>
          <button type="button" className="lightbox-nav prev" onClick={prev} aria-label="Previous photo">
            ‹
          </button>
          <figure className="lightbox-figure">
            <img src={asset(current.src)} alt={current.alt} />
            <figcaption>
              {current.alt}
              <span>
                {active! + 1} / {visible.length}
              </span>
            </figcaption>
          </figure>
          <button type="button" className="lightbox-nav next" onClick={next} aria-label="Next photo">
            ›
          </button>
        </div>
      ) : null}
    </>
  );
}
