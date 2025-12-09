import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://www.juriscare.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Juriscare - Au service de la médiation",
    template: "%s | Juriscare",
  },
  description: "Nous accompagnons les médiateurs, les entreprises et les justiciables dans une nouvelle ère de la résolution amiable.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Juriscare",
    title: "Juriscare - Au service de la médiation",
    description: "Nous accompagnons les médiateurs, les entreprises et les justiciables dans une nouvelle ère de la résolution amiable.",
    images: [
      {
        url: "/juriscare.svg",
        width: 1200,
        height: 630,
        alt: "Juriscare - Au service de la médiation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juriscare - Au service de la médiation",
    description: "Nous accompagnons les médiateurs, les entreprises et les justiciables dans une nouvelle ère de la résolution amiable.",
    images: ["/juriscare.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Juriscare",
  "description": "Nous accompagnons les médiateurs, les entreprises et les justiciables dans une nouvelle ère de la résolution amiable.",
  "url": siteUrl,
  "logo": `${siteUrl}/juriscare.svg`,
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "FR"
  },
  "areaServed": "FR",
  "serviceType": ["Médiation", "Résolution amiable des conflits"],
  "priceRange": "$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-sans">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
