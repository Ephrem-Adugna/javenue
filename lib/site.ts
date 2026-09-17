export const site = {
  name: "J.A. Venue",
  parent: "Joious Affairs Rentals",
  shortName: "J.A.",
  tagline: "A beautiful setting for life’s most memorable celebrations.",
  description:
    "J.A. Venue is an event space and rental studio in Los Angeles, part of Joious Affairs Rentals. Host weddings, showers, birthdays, and gatherings of every kind.",
  url: "https://ephrem-adugna.github.io/javenue",
  address: {
    street: "2070 W. Manchester Ave.",
    city: "Los Angeles",
    state: "CA",
    zip: "90047",
    line: "2070 W. Manchester Ave., Los Angeles, CA 90047",
  },
  email: "joiousaffairs@gmail.com",
  phone: "323.705.2606",
  phoneHref: "tel:+13237052606",
  instagram: {
    handle: "@j.a.venue_joiousaffairs",
    url: "https://www.instagram.com/j.a.venue_joiousaffairs/",
  },
  facebookLabel: "Joious Affairs",
  ownership: ["Family Owned", "Women Owned", "Black Owned"],
  services: [
    "Event Venue",
    "Decorating Service",
    "Party Planning",
    "Party Rentals",
  ],
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About Us" },
  { href: "#contact", label: "Contact" },
] as const;
