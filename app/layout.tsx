import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Great_Vibes, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const vibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vibes",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#120f0d",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "J.A. Venue | Event Space in Los Angeles",
    template: "%s | J.A. Venue",
  },
  description: site.description,
  keywords: [
    "J.A. Venue",
    "Los Angeles event venue",
    "party rentals Los Angeles",
    "event space Manchester Avenue",
  ],
  openGraph: {
    title: "J.A. Venue | Event Space in Los Angeles",
    description: site.description,
    type: "website",
    locale: "en_US",
    images: [`${site.url}/images/storefront.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "J.A. Venue",
    description: site.description,
    images: [`${site.url}/images/storefront.jpg`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  name: site.name,
  description: site.description,
  telephone: site.phoneHref.replace("tel:", ""),
  email: site.email,
  image: `${site.url}/images/storefront.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  sameAs: [site.instagram.url],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${outfit.variable} ${cormorant.variable} ${vibes.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
