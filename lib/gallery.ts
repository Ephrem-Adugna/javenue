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
    src: "/images/storefront.jpg",
    alt: "The black storefront of J.A. Venue with white curtains and the painted J.A. venue sign",
    width: 1024,
    height: 540,
    category: "venue",
    span: "wide",
  },
  {
    src: "/images/room.jpg",
    alt: "The empty J.A. Venue room with marble floors, white walls, and a chandelier",
    width: 1024,
    height: 510,
    category: "venue",
    span: "wide",
  },
  {
    src: "/images/venue.jpg",
    alt: "The J.A. Venue interior with black tables, white chairs, and marble floors",
    width: 798,
    height: 996,
    category: "venue",
    span: "tall",
  },
  {
    src: "/images/wedding.jpg",
    alt: "Outdoor wedding cocktail hour with gold chairs, white linens, orchids, and draped fabric",
    width: 824,
    height: 1024,
    category: "celebrations",
    span: "tall",
  },
  {
    src: "/images/shower.jpg",
    alt: "Pink balloon arch and welcome signage at the venue entrance for a baby shower",
    width: 756,
    height: 1092,
    category: "celebrations",
    span: "tall",
  },
  {
    src: "/images/july.jpg",
    alt: "Red, white, and navy celebration setup with balloon garland, draping, and a dessert table",
    width: 672,
    height: 1008,
    category: "celebrations",
    span: "tall",
  },
  {
    src: "/images/birthday.jpg",
    alt: "Lightbox reading Happy Birthday Eve under purple event lighting",
    width: 804,
    height: 990,
    category: "celebrations",
    span: "square",
  },
  {
    src: "/images/organic.jpg",
    alt: "Organic balloon installation in sage, yellow, cream, and red beside a wooden ladder",
    width: 756,
    height: 774,
    category: "decor",
    span: "square",
  },
  {
    src: "/images/spiderman.jpg",
    alt: "Red, blue, and black balloon display with a themed birthday backdrop",
    width: 756,
    height: 1134,
    category: "celebrations",
    span: "tall",
  },
  {
    src: "/images/linens.jpg",
    alt: "Stacked lime, gold, and purple table linens topped with sunflowers",
    width: 390,
    height: 440,
    category: "decor",
    span: "square",
  },
  {
    src: "/images/palms.jpg",
    alt: "Palm trees against a clear Los Angeles sky",
    width: 828,
    height: 984,
    category: "venue",
    span: "tall",
  },
  {
    src: "/images/pink-balloons.jpg",
    alt: "Pink and white balloon cluster at a styled celebration entrance",
    width: 708,
    height: 412,
    category: "decor",
    span: "wide",
  },
  {
    src: "/images/balloon-detail.jpg",
    alt: "Close detail of red, blue, and black balloons under event lighting",
    width: 810,
    height: 305,
    category: "decor",
    span: "wide",
  },
  {
    src: "/images/drinks.jpg",
    alt: "Styled drinks at a celebration hosted at J.A. Venue",
    width: 756,
    height: 990,
    category: "celebrations",
    span: "tall",
  },
];

export const featuredHomeImages = [
  galleryImages[0], // storefront
  galleryImages[1], // room
  galleryImages[3], // wedding
  galleryImages[7], // organic
  galleryImages[8], // spiderman
  galleryImages[9], // linens
];
