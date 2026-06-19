import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mudarme.com.ar"),
  title: "Mudanzas y Guardamuebles en CABA y GBA | La Mudanza +30 años",
  description: "La Mudanza: mudanzas residenciales, comerciales y guardamuebles en CABA y GBA. +30 años de experiencia. Presupuesto sin cargo.",
  openGraph: {
    siteName: "La Mudanza",
    locale: "es_AR",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "La Mudanza - Empresa de mudanzas en CABA y GBA" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="canonical" href="https://www.mudarme.com.ar" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MovingCompany",
              "name": "La Mudanza",
              "telephone": "+541125535500",
              "email": "Lamudanzamudanzas@gmail.com",
              "url": "https://www.mudarme.com.ar",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Juan B. Alberdi 2972",
                "addressLocality": "Buenos Aires",
                "addressRegion": "CABA",
                "addressCountry": "AR"
              },
              "areaServed": [
                { "@type": "City", "name": "Ciudad Autónoma de Buenos Aires" },
                { "@type": "AdministrativeArea", "name": "Gran Buenos Aires" }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": 150
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                  "opens": "08:00",
                  "closes": "20:00"
                }
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
