import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas Residenciales en CABA y GBA | La Mudanza ⭐5.0",
  description: "Mudanzas de casas y departamentos en CABA y GBA. Presupuesto cerrado sin cargo, sin sorpresas. 5★ en Google y +30 años de experiencia. Cotizá hoy.",
  alternates: { canonical: "https://www.mudarme.com.ar/mudanzas-residenciales" },
  openGraph: { type: "website", url: "https://www.mudarme.com.ar/mudanzas-residenciales" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mudanzas Residenciales en CABA y GBA",
  "description": "Mudanzas de casas y departamentos en CABA y Gran Buenos Aires.",
  "url": "https://www.mudarme.com.ar/mudanzas-residenciales",
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
  "serviceType": "Mudanzas Residenciales"
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudarme.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Mudanzas Residenciales en CABA y GBA", "item": "https://www.mudarme.com.ar/mudanzas-residenciales" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Cuánto cuesta una mudanza residencial?", "acceptedAnswer": { "@type": "Answer", "text": "En La Mudanza hacemos presupuestos cerrados y sin cargo porque cada mudanza es diferente. El costo depende del volumen, la distancia y el tipo de inmueble. Contactanos por WhatsApp para cotizar." } },
    { "@type": "Question", "name": "¿Cuánto tiempo tarda una mudanza residencial?", "acceptedAnswer": { "@type": "Answer", "text": "Un departamento de 2 ambientes demora entre 4 y 8 horas dependiendo del piso, el volumen y si incluye embalaje. Te damos un estimado cuando hacemos el presupuesto." } },
    { "@type": "Question", "name": "¿Trabajan en edificios sin ascensor?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, tenemos experiencia en edificios sin ascensor y contamos con equipos de izaje para balcones cuando el acceso es complejo." } },
    { "@type": "Question", "name": "¿Pueden mudarnos un fin de semana?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, trabajamos de lunes a sábado. Para mudanzas en edificios los sábados hay que respetar el horario del consorcio." } },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mudanzas Residenciales</h1>
            <p className="text-gray-300 text-lg mb-8">Traslados cuidadosos de casas y departamentos en CABA y GBA. Personal capacitado y camiónes propios para que tu mudanza sea perfecta.</p>
            <a href="https://wa.me/541125535500" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-block mr-4">Cotizar por WhatsApp</a>
            <a href="tel:+541125535500" className="border border-white text-white font-bold py-3 px-8 rounded-full inline-block">11-2553-5500</a>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">El servicio de mudanza residencial completo</h2>
            <p className="text-gray-300 text-lg mb-6">En La Mudanza nos especializamos en mudanzas de hogares de todo tipo: monoambientes, departamentos de 2 y 3 ambientes, casas de planta baja y duplex. Cada mudanza residencial es diferente y por eso adaptamos el servicio a tus necesidades especificas.</p>
            <p className="text-gray-300 text-lg mb-6">Nuestro equipo se ocupa de todo: el embalaje profesional de tus pertenencias, la carga cuidadosa en el camión, el traslado seguro y la descarga y acomodacion en tu nuevo hogar. Vos solo tenes que preocuparte por llegar.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {["Embalaje profesional incluido", "Camiones de todos los tamaños", "Personal capacitado y uniformado", "Manejo de muebles fragiles", "Izajes por balcon", "Cobertura en toda CABA y GBA"].map(item => (
                <div key={item} className="flex gap-3 items-center bg-zinc-800 border border-zinc-700 rounded-lg p-4">
                  <span className="text-orange-500 font-bold text-lg">✓</span>
                  <span className="text-white">{item}</span>
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
                {q: "¿Cuanto cuesta una mudanza residencial?", a: "En La Mudanza hacemos presupuestos cerrados y sin cargo porque cada mudanza es diferente. El costo depende del volumen, la distancia y el tipo de inmueble. Contactaños por WhatsApp para cotizar."},
                {q: "¿Cuanto tiempo tarda una mudanza residencial?", a: "Un departamento de 2 ambientes demora entre 4 y 8 horas dependiendo del piso, el volumen y si incluye embalaje. Te damos un estimado cuando hacemos el presupuesto."},
                {q: "¿Trabajan en edificios sin ascensor?", a: "Si, tenemos experiencia en edificios sin ascensor y contamos con equipos de izaje para balcones cuando el acceso es complejo."},
                {q: "¿Pueden mudarnos un fin de semana?", a: "Si, trabajamos de lunes a sabado. Para mudanzas en edificios los sabados hay que respetar el horario del consorcio."},
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
            <p className="text-white mb-8 opacity-90">Mudanzas residenciales en CABA y GBA. Presupuesto cerrado y sin sorpresas.</p>
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
