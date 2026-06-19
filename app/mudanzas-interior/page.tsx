import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas al Interior del País | La Mudanza Buenos Aires",
  description: "Mudanzas de larga distancia desde Buenos Aires a todo el interior del pais. Seguimiento en tiempo real y presupuesto sin cargo. La Mudanza, +30 años.",
  alternates: { canonical: "https://www.mudarme.com.ar/mudanzas-interior" },
  openGraph: { type: "website", url: "https://www.mudarme.com.ar/mudanzas-interior" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mudanzas al Interior del País",
  "description": "Mudanzas de larga distancia desde Buenos Aires a todo el interior del país.",
  "url": "https://www.mudarme.com.ar/mudanzas-interior",
  "provider": {
    "@type": "MovingCompany",
    "name": "La Mudanza",
    "telephone": "+541125535500",
    "url": "https://www.mudarme.com.ar",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": 150
    }
  },
  "areaServed": [
    { "@type": "City", "name": "Ciudad Autónoma de Buenos Aires" },
    { "@type": "AdministrativeArea", "name": "Gran Buenos Aires" }
  ],
  "serviceType": "Mudanzas al Interior del País"
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudarme.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Mudanzas al Interior del País", "item": "https://www.mudarme.com.ar/mudanzas-interior" },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Header />
      <main className="pt-20">
        <section className="bg-black text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-orange-400 uppercase tracking-widest text-sm mb-3">Servicios</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mudanzas al Interior del País</h1>
            <p className="text-gray-300 text-lg mb-8">Realizamos mudanzas de larga distancia desde Buenos Aires a cualquier provincia del pais. Seguimiento en tiempo real y llegada puntual garantizada.</p>
            <a href="https://wa.me/541125535500" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-block mr-4">Cotizar por WhatsApp</a>
            <a href="tel:+541125535500" className="border border-white text-white font-bold py-3 px-8 rounded-full inline-block">11-2553-5500</a>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Mudanzas de larga distancia con experiencia</h2>
            <p className="text-gray-300 text-lg mb-6">Mudarse al interior del pais es una decision importante que requiere una empresa de confianza con experiencia en traslados de larga distancia. En La Mudanza realizamos mudanzas a todas las provincias con camiónes propios, personal capacitado y seguimiento en tiempo real de tu carga.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {["Rosario", "Cordoba", "Mendoza", "Mar del Plata", "Tucuman", "Salta", "Bariloche", "Todo el pais"].map(dest => (
                <div key={dest} className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 text-center">
                  <span className="text-orange-400 font-bold">{dest}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Zonas donde operamos</h2>
            <div className="mb-6">
              <h3 className="text-orange-400 font-bold mb-3">Capital Federal</h3>
              <div className="flex flex-wrap gap-2">
              <Link href="/mudanzas-palermo" className="bg-zinc-900 border border-zinc-700 text-gray-300 hover:border-orange-500 hover:text-orange-400 text-sm py-2 px-4 rounded-full transition-colors">Palermo</Link>
              <Link href="/mudanzas-belgrano" className="bg-zinc-900 border border-zinc-700 text-gray-300 hover:border-orange-500 hover:text-orange-400 text-sm py-2 px-4 rounded-full transition-colors">Belgrano</Link>
              <Link href="/mudanzas-caballito" className="bg-zinc-900 border border-zinc-700 text-gray-300 hover:border-orange-500 hover:text-orange-400 text-sm py-2 px-4 rounded-full transition-colors">Caballito</Link>
              <Link href="/mudanzas-recoleta" className="bg-zinc-900 border border-zinc-700 text-gray-300 hover:border-orange-500 hover:text-orange-400 text-sm py-2 px-4 rounded-full transition-colors">Recoleta</Link>
              <Link href="/mudanzas-flores" className="bg-zinc-900 border border-zinc-700 text-gray-300 hover:border-orange-500 hover:text-orange-400 text-sm py-2 px-4 rounded-full transition-colors">Flores</Link>
              <Link href="/mudanzas-villa-urquiza" className="bg-zinc-900 border border-zinc-700 text-gray-300 hover:border-orange-500 hover:text-orange-400 text-sm py-2 px-4 rounded-full transition-colors">Villa Urquiza</Link>
              <Link href="/mudanzas-almagro" className="bg-zinc-900 border border-zinc-700 text-gray-300 hover:border-orange-500 hover:text-orange-400 text-sm py-2 px-4 rounded-full transition-colors">Almagro</Link>
              <Link href="/mudanzas-san-telmo" className="bg-zinc-900 border border-zinc-700 text-gray-300 hover:border-orange-500 hover:text-orange-400 text-sm py-2 px-4 rounded-full transition-colors">San Telmo</Link>
              <Link href="/mudanzas-nunez" className="bg-zinc-900 border border-zinc-700 text-gray-300 hover:border-orange-500 hover:text-orange-400 text-sm py-2 px-4 rounded-full transition-colors">Núñez</Link>
              <Link href="/mudanzas-villa-devoto" className="bg-zinc-900 border border-zinc-700 text-gray-300 hover:border-orange-500 hover:text-orange-400 text-sm py-2 px-4 rounded-full transition-colors">Villa Devoto</Link>
              <Link href="/mudanzas-mataderos" className="bg-zinc-900 border border-zinc-700 text-gray-300 hover:border-orange-500 hover:text-orange-400 text-sm py-2 px-4 rounded-full transition-colors">Mataderos</Link>
              </div>
            </div>
            <div>
              <h3 className="text-orange-400 font-bold mb-3">Gran Buenos Aires</h3>
              <div className="flex flex-wrap gap-2">
              <Link href="/mudanzas-san-isidro" className="bg-zinc-900 border border-zinc-700 text-gray-300 hover:border-orange-500 hover:text-orange-400 text-sm py-2 px-4 rounded-full transition-colors">San Isidro</Link>
              <Link href="/mudanzas-vicente-lopez" className="bg-zinc-900 border border-zinc-700 text-gray-300 hover:border-orange-500 hover:text-orange-400 text-sm py-2 px-4 rounded-full transition-colors">Vicente López</Link>
              <Link href="/mudanzas-tigre" className="bg-zinc-900 border border-zinc-700 text-gray-300 hover:border-orange-500 hover:text-orange-400 text-sm py-2 px-4 rounded-full transition-colors">Tigre</Link>
              <Link href="/mudanzas-san-fernando" className="bg-zinc-900 border border-zinc-700 text-gray-300 hover:border-orange-500 hover:text-orange-400 text-sm py-2 px-4 rounded-full transition-colors">San Fernando</Link>
              <Link href="/mudanzas-quilmes" className="bg-zinc-900 border border-zinc-700 text-gray-300 hover:border-orange-500 hover:text-orange-400 text-sm py-2 px-4 rounded-full transition-colors">Quilmes</Link>
              <Link href="/mudanzas-lomas-de-zamora" className="bg-zinc-900 border border-zinc-700 text-gray-300 hover:border-orange-500 hover:text-orange-400 text-sm py-2 px-4 rounded-full transition-colors">Lomas de Zamora</Link>
              <Link href="/mudanzas-avellaneda" className="bg-zinc-900 border border-zinc-700 text-gray-300 hover:border-orange-500 hover:text-orange-400 text-sm py-2 px-4 rounded-full transition-colors">Avellaneda</Link>
              <Link href="/mudanzas-moron" className="bg-zinc-900 border border-zinc-700 text-gray-300 hover:border-orange-500 hover:text-orange-400 text-sm py-2 px-4 rounded-full transition-colors">Morón</Link>
              <Link href="/mudanzas-la-matanza" className="bg-zinc-900 border border-zinc-700 text-gray-300 hover:border-orange-500 hover:text-orange-400 text-sm py-2 px-4 rounded-full transition-colors">La Matanza</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-orange-500 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Pedi tu presupuesto sin cargo</h2>
            <p className="text-white mb-8 opacity-90">Mudanzas al interior desde Buenos Aires. Presupuesto cerrado y sin sorpresas.</p>
            <a href="https://wa.me/541125535500" className="bg-white text-orange-500 font-bold py-3 px-8 rounded-full inline-block mr-4">Cotizar por WhatsApp</a>
            <a href="tel:+541125535500" className="border border-white text-white font-bold py-3 px-8 rounded-full inline-block">11-2553-5500</a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
