import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Izaje de Muebles por Balcón en CABA | La Mudanza",
  description: "Servicio de izaje de muebles por balcón en CABA y GBA. Equipo profesional para camas, placares y sofás en pisos altos sin ascensor. Cotizá ya.",
  alternates: { canonical: "https://www.mudarme.com.ar/izajes" },
  openGraph: { type: "website", url: "https://www.mudarme.com.ar/izajes" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Izajes por Balcón",
  "description": "Especialistas en mover muebles grandes que no entran por ascensor o escalera.",
  "url": "https://www.mudarme.com.ar/izajes",
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
  "serviceType": "Izajes por Balcón"
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudarme.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Izajes por Balcón", "item": "https://www.mudarme.com.ar/izajes" },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Izajes por Balcón</h1>
            <p className="text-gray-300 text-lg mb-8">Especialistas en mover muebles grandes que no entran por ascensor o escalera. Tecnica profesional con sogas y equipamiento de seguridad.</p>
            <a href="https://wa.me/541125535500" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-block mr-4">Cotizar por WhatsApp</a>
            <a href="tel:+541125535500" className="border border-white text-white font-bold py-3 px-8 rounded-full inline-block">11-2553-5500</a>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">¿Qué es un izaje y cuándo se necesita?</h2>
            <p className="text-gray-300 text-lg mb-6">Un izaje es la tecnica de subir o bajar muebles por el exterior del edificio usando sogas y poleas, cuando el objeto es demasiado grande para pasar por la escalera o el ascensor. Es una solución comun en Buenos Aires donde muchos edificios tienen pasillos angostos y ascensores pequenos.</p>
            <p className="text-gray-300 text-lg mb-6">En La Mudanza contamos con el equipamiento y el personal capacitado para realizar izajes de forma segura y eficiente. Trabajamos con sogas certificadas y tecnicas que garantizan la integridad del mueble y la seguridad de nuestro equipo.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[
                {titulo: "¿Cuando se necesita un izaje?", items: ["Sofa de 3 cuerpos en piso alto", "Colchon matrimonial en edificio sin ascensor", "Mesa de billar o piano", "Heladera en piso alto sin ascensor", "Muebles de gran volumen"]},
                {titulo: "¿Como lo hacemos?", items: ["Evaluacion previa del acceso", "Equipamiento certificado de seguridad", "Personal especializado en altura", "Coordinacion con el consorcio", "Seguro incluido en el servicio"]},
              ].map(sec => (
                <div key={sec.titulo} className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
                  <h3 className="font-bold text-orange-400 text-lg mb-4">{sec.titulo}</h3>
                  <ul className="space-y-2">
                    {sec.items.map(item => (
                      <li key={item} className="flex gap-2 text-gray-300 text-sm">
                        <span className="text-orange-500">✓</span>{item}
                      </li>
                    ))}
                  </ul>
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
            <p className="text-white mb-8 opacity-90">Izajes profesionales en CABA y GBA. Seguro, rápido y sin daños.</p>
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
