import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Embalaje Profesional para Mudanzas | La Mudanza CABA",
  description: "Servicio de embalaje profesional para mudanzas en CABA y GBA. Proteccion total para vajilla, cristaleria, cuadros y muebles delicados. La Mudanza.",
  alternates: { canonical: "https://www.mudarme.com.ar/embalaje-profesional" },
  openGraph: { type: "website", url: "https://www.mudarme.com.ar/embalaje-profesional" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Embalaje Profesional para Mudanzas",
  "description": "Protección total para vajilla, cristalería, cuadros y muebles delicados.",
  "url": "https://www.mudarme.com.ar/embalaje-profesional",
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
  "serviceType": "Embalaje Profesional"
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudarme.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Embalaje Profesional para Mudanzas", "item": "https://www.mudarme.com.ar/embalaje-profesional" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Qué materiales usan para el embalaje?", "acceptedAnswer": { "@type": "Answer", "text": "Usamos papel de seda, film burbuja, mantas acolchadas, film stretch, cajas de distintos tamaños y materiales específicos para cada tipo de objeto." } },
    { "@type": "Question", "name": "¿El servicio de embalaje tiene costo adicional?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, el embalaje profesional tiene un costo adicional que depende del volumen y los materiales necesarios. Lo incluimos en el presupuesto cerrado." } },
    { "@type": "Question", "name": "¿Pueden embalar solo algunas cosas y el resto lo hago yo?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, podemos hacer un embalaje parcial. Es común que los clientes embalen la ropa y libros, y nos dejen la vajilla, cuadros y objetos delicados a nosotros." } },
    { "@type": "Question", "name": "¿Qué pasa si algo se rompe durante la mudanza?", "acceptedAnswer": { "@type": "Answer", "text": "Trabajamos con seguro de mudanza. Si algo embalado por nuestro equipo se rompe, cubrimos el daño. Por eso es importante que el embalaje lo hagamos nosotros." } },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="pt-20">
        <section className="bg-black text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-orange-400 uppercase tracking-widest text-sm mb-3">Servicios</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Embalaje Profesional</h1>
            <p className="text-gray-300 text-lg mb-8">Proteccion total para tu vajilla, cristaleria, cuadros y muebles delicados. Materiales especializados y tecnicas profesionales para que nada se rompa.</p>
            <a href="https://wa.me/541125535500" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-block mr-4">Cotizar por WhatsApp</a>
            <a href="tel:+541125535500" className="border border-white text-white font-bold py-3 px-8 rounded-full inline-block">11-2553-5500</a>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">¿Por que contratar embalaje profesional?</h2>
            <p className="text-gray-300 text-lg mb-6">El embalaje es la parte más importante de una mudanza para proteger tus pertenencias. Un mal embalaje puede resultar en vajilla rota, muebles rayados o electrodomesticos danados. En La Mudanza usamos los materiales correctos para cada tipo de objeto y las tecnicas que aprendimos en más de 30 años de experiencia.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                {titulo: "Vajilla y cristaleria", desc: "Embalaje con papel de seda y burbujas para cada pieza. Cajas especiales con divisiones internas."},
                {titulo: "Cuadros y espejos", desc: "Proteccion con carton corrugado y esquineros. Embalaje personalizado para cada tamaño."},
                {titulo: "Muebles", desc: "Mantas acolchadas y film stretch para proteger esquinas, cajones y superficies lacadas."},
                {titulo: "Electrodomesticos", desc: "Embalaje con burbujas y carton reforzado. Precintado de puertas y cajones móviles."},
                {titulo: "Ropa y textiles", desc: "Cajas de ropa con barra colgante para trasladar ropa en percha sin arrugar."},
                {titulo: "Libros y archivos", desc: "Cajas reforzadas de tamaño adecuado para evitar dano por peso excesivo."},
              ].map(item => (
                <div key={item.titulo} className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
                  <h3 className="font-bold text-orange-400 mb-2">{item.titulo}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Preguntas frecuentes</h2>
            <div className="space-y-4">
              {[
                {q: "¿Qué materiales usan para el embalaje?", a: "Usamos papel de seda, film burbuja, mantas acolchadas, film stretch, cajas de distintos tamaños y materiales específicos para cada tipo de objeto."},
                {q: "¿El servicio de embalaje tiene costo adicional?", a: "Sí, el embalaje profesional tiene un costo adicional que depende del volumen y los materiales necesarios. Lo incluimos en el presupuesto cerrado."},
                {q: "¿Pueden embalar solo algunas cosas y el resto lo hago yo?", a: "Sí, podemos hacer un embalaje parcial. Es común que los clientes embalen la ropa y libros, y nos dejen la vajilla, cuadros y objetos delicados a nosotros."},
                {q: "¿Qué pasa si algo se rompe durante la mudanza?", a: "Trabajamos con seguro de mudanza. Si algo embalado por nuestro equipo se rompe, cubrimos el daño. Por eso es importante que el embalaje lo hagamos nosotros."},
              ].map((faq, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-700 rounded-lg p-6">
                  <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
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
            <p className="text-white mb-8 opacity-90">Embalaje profesional para tu mudanza en CABA y GBA. Todo protegido, nada roto.</p>
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
