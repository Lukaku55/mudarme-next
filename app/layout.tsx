import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mudarme.com.ar"),
  title: "Mudanzas en Buenos Aires | ⭐5.0 en Google | La Mudanza",
  description: "La Mudanza: empresa de mudanzas en Buenos Aires con +30 años y 5★ en Google. Residenciales, comerciales y guardamuebles. Presupuesto cerrado, sin cargo y sin sorpresas.",
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
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "author": { "@type": "Person", "name": "Monica Luppi" },
                  "reviewBody": "Excelente servicio. Muy buena organización de todo el equipo. Tanto en el cuidado de los muebles como de los ascensores. Muy amables y dispuestos. Los recomiendo!"
                },
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "author": { "@type": "Person", "name": "Sari Sutton" },
                  "reviewBody": "Excelentes! Muy recomendables! Me enviaron las cajas para embalar, el día, la hora y la cantidad exacta pactada. La puntualidad, lo cuidadosos que fueron y la agilidad con la que realizaron la mudanza fueron increíbles."
                },
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "author": { "@type": "Person", "name": "Patricio Euillades" },
                  "reviewBody": "Impecable, desde la atención telefonica, cotización y cumplimiento. Super puntuales y atentos. Siempre se mantuvieron en contacto. Peones y empleados profesionales y atentos a los detalles."
                },
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "author": { "@type": "Person", "name": "Guillermo Rodrigo" },
                  "reviewBody": "Muy atentos, tanto el chofer como los dos operarios. Precio razonable. Un detalle no menor para destacar: la puntualidad, porque hoy en día es una virtud muy escasa."
                },
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "author": { "@type": "Person", "name": "Maria Eugenia Duran" },
                  "reviewBody": "Han hecho un trabajo impecable. Contrataté con módulo de embalaje de vajilla y libros y terminó en la mitad del tiempo que tenía disponible. La puntualidad el día de mudanza perfecta igual que el trato."
                }
              ],
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
