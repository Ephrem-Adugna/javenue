export const venueRental = {
  weekday: {
    label: "Weekday rentals",
    days: "Monday – Thursday",
  },
  weekend: {
    label: "Weekend rentals",
    days: "Friday – Sunday",
  },
  availability: "Available for hourly and daily rental.",
  includes: [
    "Tables",
    "Folding chairs",
    "Bar",
    "Kitchenette",
    "Wi-Fi",
    "70\" TV",
    "Patio",
    "Tented patio with daily rental",
    "2-hour setup",
    "1-hour breakdown",
    "Cleaning fee",
  ],
  notes: [
    "40% deposit to book your date",
    "$250 refundable damage fee",
    "Occupancy max 100 people",
    "Tented patio available",
  ],
  special:
    "Special pricing for meetings, non-profit, community, and vendor events.",
} as const;

export type ExtraItem = {
  name: string;
  price?: string;
};

export type ExtraGroup = {
  title: string;
  items: ExtraItem[];
};

export const extraGroups: ExtraGroup[] = [
  {
    title: "Tables",
    items: [
      { name: "Linens", price: "$12" },
      { name: "Overlays", price: "$8" },
      { name: "Runners", price: "$5" },
    ],
  },
  {
    title: "Chairs",
    items: [
      { name: "Spandex chair covers", price: "$1" },
      { name: "Chiavari chairs", price: "$7" },
    ],
  },
  {
    title: "Tableware",
    items: [
      { name: "Chargers", price: "$1.25" },
      { name: "Champagne flutes", price: "$0.80" },
      { name: "Goblets", price: "$0.80" },
      { name: "Chafing dishes", price: "$17" },
    ],
  },
  {
    title: "Backdrops",
    items: [
      { name: "Backdrops" },
      { name: "Backdrop draping" },
      { name: "Custom vinyl backdrops" },
    ],
  },
  {
    title: "Additional items",
    items: [
      { name: "Barrel table", price: "$125" },
      { name: "Red carpet", price: "$30" },
      { name: "Stanchions set", price: "$90" },
      { name: "Candelabras", price: "$50" },
      { name: "Marquee letters & numbers", price: "$55" },
      { name: "Balloon garlands" },
      { name: "Personalized party favors" },
      { name: "Personalized welcome signs" },
      { name: "Personalized menus" },
    ],
  },
  {
    title: "Tents",
    items: [
      { name: "10×20", price: "$100" },
      { name: "20×20", price: "$130" },
      { name: "20×30", price: "$170" },
    ],
  },
];
