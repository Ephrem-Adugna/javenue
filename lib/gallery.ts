/** Replace files in /public/images to update photography. Keep `src` paths in sync when renaming. */

export type GalleryCategory = "venue" | "celebrations" | "decor";

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  category: GalleryCategory;
  span?: "wide" | "tall" | "square";
};

export const categoryLabels: { id: "all" | GalleryCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "venue", label: "Venue" },
  { id: "celebrations", label: "Celebrations" },
  { id: "decor", label: "Decor" },
];

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/navy-tables.jpg",
    alt: "Round tables with navy linens, gold Chiavari chairs, and a balloon arch in the venue",
    width: 598,
    height: 336,
    category: "celebrations",
    span: "wide",
  },
  {
    src: "/images/graduation.jpg",
    alt: "Graduation celebration backdrop with school banners, balloon columns, and a dessert table",
    width: 1024,
    height: 576,
    category: "celebrations",
    span: "wide",
  },
  {
    src: "/images/cocktail-flowers.jpg",
    alt: "White cocktail table with pink flowers and a lantern in front of draped fabric",
    width: 460,
    height: 1024,
    category: "decor",
    span: "tall",
  },
  {
    src: "/images/purple-banquet.jpg",
    alt: "Banquet room set with white linens, purple sashes, and place settings",
    width: 1024,
    height: 576,
    category: "celebrations",
    span: "wide",
  },
  {
    src: "/images/patio.jpg",
    alt: "The outdoor patio with turf, planters, and a seating area",
    width: 1024,
    height: 576,
    category: "venue",
    span: "wide",
  },
  {
    src: "/images/autumn-table.jpg",
    alt: "Long banquet table with a rust runner, autumn leaves, and gold flatware",
    width: 460,
    height: 1024,
    category: "celebrations",
    span: "tall",
  },
  {
    src: "/images/blue-tables.jpg",
    alt: "Round tables dressed in royal blue linens with white folding chairs",
    width: 576,
    height: 1024,
    category: "celebrations",
    span: "tall",
  },
  {
    src: "/images/rose-backdrop.jpg",
    alt: "Black photo backdrop with oversized red roses and gold balloon garlands",
    width: 1024,
    height: 954,
    category: "decor",
    span: "square",
  },
  {
    src: "/images/bounce-house.jpg",
    alt: "Inflatable bounce house and slide set up outdoors",
    width: 574,
    height: 608,
    category: "celebrations",
    span: "square",
  },
  {
    src: "/images/prom.jpg",
    alt: "Prom send-off setup with marquee letters, balloon garland, and a welcome easel",
    width: 460,
    height: 1024,
    category: "celebrations",
    span: "tall",
  },
  {
    src: "/images/saloon.jpg",
    alt: "The J.A. Venue storefront styled with a saloon entrance and cacti",
    width: 576,
    height: 1024,
    category: "venue",
    span: "tall",
  },
  {
    src: "/images/patio-cocktail.jpg",
    alt: "Tented patio cocktail hour with gold chairs, white linens, and greenery",
    width: 576,
    height: 1024,
    category: "celebrations",
    span: "tall",
  },
  {
    src: "/images/baby-shower.jpg",
    alt: "Baby shower tables with light blue linens, gold chargers, and white florals",
    width: 576,
    height: 1024,
    category: "celebrations",
    span: "tall",
  },
  {
    src: "/images/draped-tent.jpg",
    alt: "Cocktail tables under a draped tent on the turf patio",
    width: 566,
    height: 320,
    category: "venue",
    span: "wide",
  },
];

export const featuredHomeImages = [
  galleryImages[0],
  galleryImages[3],
  galleryImages[4],
  galleryImages[11],
  galleryImages[12],
  galleryImages[13],
];
