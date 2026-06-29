import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

const servicios = ["Mudanzas residenciales","Mudanzas comerciales","Guardamuebles","Embalaje profesional","Izajes por balcon","Mudanzas al interior"];
const todasLasZonas = [{"nombre": "Palermo", "slug": "palermo"}, {"nombre": "Belgrano", "slug": "belgrano"}, {"nombre": "Caballito", "slug": "caballito"}, {"nombre": "Recoleta", "slug": "recoleta"}, {"nombre": "Flores", "slug": "flores"}, {"nombre": "Villa Urquiza", "slug": "villa-urquiza"}, {"nombre": "San Isidro", "slug": "san-isidro"}, {"nombre": "Mataderos", "slug": "mataderos"}, {"nombre": "Nunez", "slug": "nunez"}, {"nombre": "Almagro", "slug": "almagro"}, {"nombre": "San Telmo", "slug": "san-telmo"}, {"nombre": "Villa Devoto", "slug": "villa-devoto"}, {"nombre": "Lomás de Zamora", "slug": "lomas-de-zamora"}, {"nombre": "Quilmes", "slug": "quilmes"}, {"nombre": "Avellaneda", "slug": "avellaneda"}, {"nombre": "Moron", "slug": "moron"}, {"nombre": "Tigre", "slug": "tigre"}, {"nombre": "La Matanza", "slug": "la-matanza"}, {"nombre": "Vicente Lopez", "slug": "vicente-lopez"}, {"nombre": "San Fernando", "slug": "san-fernando"}, {"nombre": "Pilar", "slug": "pilar"}, {"nombre": "Merlo", "slug": "merlo"}, {"nombre": "Moreno", "slug": "moreno"}, {"nombre": "Esteban Echeverria", "slug": "esteban-echeverria"}];

export const metadata: Metadata = {
  title: "Mudanzas en Pilar | La Mudanza +30 años de experiencia",
  description: "Empresa de mudanzas en Pilar. Mudanzas en Pilar, Del Viso y countries del corredor norte. Especialistas en barrios cerrados y countries de la zona. Presupuesto sin cargo. Llamaños al 11-2553-5500.",
  alternates: { canonical: "https://www.mudarme.com.ar/mudanzas-pilar" },
  openGraph: { type: "website", url: "https://www.mudarme.com.ar/mudanzas-pilar", title: "Mudanzas en Pilar | La Mudanza", description: "Empresa de mudanzas en Pilar, GBA norte. +30 años de experiencia. Presupuesto sin cargo." },
};


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["MovingCompany", "LocalBusiness"],
  "name": "La Mudanza - Mudanzas en Pilar",
  "url": "https://www.mudarme.com.ar/mudanzas-pilar",
  "telephone": "+541125535500",
  "email": "Lamudanzamudanzas@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Juan B. Alberdi 2972",
    "addressLocality": "Buenos Aires",
    "addressRegion": "CABA",
    "addressCountry": "AR"
  },
  "areaServed": { "@type": "Place", "name": "Pilar, Gran Buenos Aires" },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": 150
  },
  "priceRange": "9056",
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "08:00",
    "closes": "20:00"
  }]
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudarme.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Mudanzas en Pilar", "item": "https://www.mudarme.com.ar/mudanzas-pilar" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"{s}</h3>
                  <p className=\"text-gray-400\">Realizamos {s.toLowerCase()} en Pilar con vehiculos equipados y personal capacitado.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className=\"bg-black py-16 px-4\">
          <div className=\"max-w-4xl mx-auto text-center\">
            <h2 className=\"text-3xl font-bold mb-4 text-white\">Por que elegirnos en Pilar</h2>
            <div className=\"grid grid-cols-1 md:grid-cols-3 gap-6 mt-8\">
              <div className=\"p-6 border border-zinc-700 rounded-lg bg-zinc-800\"><p className=\"text-4xl font-bold text-orange-500\">30</p><p className=\"font-bold mt-2 text-white\">Anos de experiencia</p></div>
              <div className=\"p-6 border border-zinc-700 rounded-lg bg-zinc-800\"><p className=\"text-4xl font-bold text-orange-500\">5.0</p><p className=\"font-bold mt-2 text-white\">Calificacion Google</p></div>
              <div className=\"p-6 border border-zinc-700 rounded-lg bg-zinc-800\"><p className=\"text-4xl font-bold text-orange-500\">5000</p><p className=\"font-bold mt-2 text-white\">Clientes satisfechos</p></div>
            </div>
          </div>
        </section>

        <section className=\"bg-zinc-900 py-16 px-4\">
          <div className=\"max-w-4xl mx-auto\">
            <h2 className=\"text-3xl font-bold mb-8 text-center text-white\">Preguntas frecuentes sobre mudanzas en Pilar</h2>
            <div className=\"space-y-4\">
              <div className=\"bg-zinc-800 border border-zinc-700 rounded-lg p-6\"><h3 className=\"font-bold text-lg mb-2 text-white\">Cuanto cuesta una mudanza desde CABA a Pilar?","acceptedAnswer":{"@type":"Answer","text":"En La Mudanza hacemos presupuestos cerrados y sin cargo. La distancia a Pilar implica un costo adicional al traslado local. Contactaños por WhatsApp."}},
    {"@type":"Question","name":"Pueden entrar a countries de Pilar?","acceptedAnswer":{"@type":"Answer","text":"Si, tenemos experiencia en los principales countries de Pilar. Gestionamos los permisos de ingreso con anticipación."}},
    {"@type":"Question","name":"Cubren Del Viso y otras localidades de Pilar?","acceptedAnswer":{"@type":"Answer","text":"Si, cubrimos todo el partido de Pilar incluyendo Del Viso, Manzanares y todas las localidades del municipio."}},
    {"@type":"Question","name":"Con cuanta anticipación hay que reservar para Pilar?","acceptedAnswer":{"@type":"Answer","text":"Para mudanzas a countries de Pilar recomendamos reservar con al menos 10 dias de anticipación."}}
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="pt-20">
        <section className="bg-black text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-orange-400 uppercase tracking-widest text-sm mb-3">Mudanzas profesionales</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mudanzas en Pilar</h1>
            <p className="text-gray-300 text-lg mb-8">Mudanzas en Pilar, Del Viso y countries del corredor norte. Especialistas en barrios cerrados y countries de la zona.</p>
            <a href="https://wa.me/541125535500" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-block mr-4">Cotizar por WhatsApp</a>
            <a href="tel:+541125535500" className="border border-white text-white font-bold py-3 px-8 rounded-full inline-block">Llamar ahora</a>
          </div>
        </section>

        <section className="bg-black py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-white">Empresa de mudanzas en Pilar</h2>
            <p className="text-gray-300 text-lg text-center">Pilar es uno de los destinos de mayor crecimiento en el corredor norte del GBA, con una enorme cantidad de countries, barrios cerrados y urbanizaciones privadas. En La Mudanza tenemos experiencia en los principales countries del partido y conocemos los protocolos de ingreso de cada uno.</p>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Nuestros servicios en Pilar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {servicios.map(s => (
                <div key={s} className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2 text-white">{s}</h3>
                  <p className="text-gray-400">Realizamos {s.toLowerCase()} en Pilar con vehiculos equipados y personal capacitado.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Por que elegirnos en Pilar</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-6 border border-zinc-700 rounded-lg bg-zinc-800"><p className="text-4xl font-bold text-orange-500">30</p><p className="font-bold mt-2 text-white">Anos de experiencia</p></div>
              <div className="p-6 border border-zinc-700 rounded-lg bg-zinc-800"><p className="text-4xl font-bold text-orange-500">5.0</p><p className="font-bold mt-2 text-white">Calificacion Google</p></div>
              <div className="p-6 border border-zinc-700 rounded-lg bg-zinc-800"><p className="text-4xl font-bold text-orange-500">5000</p><p className="font-bold mt-2 text-white">Clientes satisfechos</p></div>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Preguntas frecuentes sobre mudanzas en Pilar</h2>
            <div className="space-y-4">
              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6"><h3 className="font-bold text-lg mb-2 text-white">Cuanto cuesta una mudanza desde CABA a Pilar?</h3><p className="text-gray-400">En La Mudanza hacemos presupuestos cerrados y sin cargo. La distancia a Pilar implica un costo adicional al traslado local. Contactaños por WhatsApp.</p></div>
              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6"><h3 className="font-bold text-lg mb-2 text-white">Pueden entrar a countries de Pilar?</h3><p className="text-gray-400">Si, tenemos experiencia en los principales countries de Pilar. Gestionamos los permisos de ingreso con anticipación.</p></div>
              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6"><h3 className="font-bold text-lg mb-2 text-white">Cubren Del Viso y otras localidades de Pilar?</h3><p className="text-gray-400">Si, cubrimos todo el partido de Pilar incluyendo Del Viso, Manzanares y todas las localidades del municipio.</p></div>
              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6"><h3 className="font-bold text-lg mb-2 text-white">Con cuanta anticipación hay que reservar para Pilar?</h3><p className="text-gray-400">Para mudanzas a countries de Pilar recomendamos reservar con al menos 10 dias de anticipación.</p></div>
            </div>
          </div>
        </section>

        <section className="bg-black py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Tambien hacemos mudanzas en</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/mudanzas-palermo" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Palermo</Link>
              <Link href="/mudanzas-belgrano" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Belgrano</Link>
              <Link href="/mudanzas-caballito" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Caballito</Link>
              <Link href="/mudanzas-recoleta" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Recoleta</Link>
              <Link href="/mudanzas-flores" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Flores</Link>
              <Link href="/mudanzas-villa-urquiza" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Villa Urquiza</Link>
              <Link href="/mudanzas-san-isidro" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">San Isidro</Link>
              <Link href="/mudanzas-mataderos" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Mataderos</Link>
              <Link href="/mudanzas-nunez" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Nunez</Link>
              <Link href="/mudanzas-almagro" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Almagro</Link>
              <Link href="/mudanzas-san-telmo" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">San Telmo</Link>
              <Link href="/mudanzas-villa-devoto" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Villa Devoto</Link>
              <Link href="/mudanzas-lomas-de-zamora" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Lomás de Zamora</Link>
              <Link href="/mudanzas-quilmes" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Quilmes</Link>
              <Link href="/mudanzas-avellaneda" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Avellaneda</Link>
              <Link href="/mudanzas-moron" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Moron</Link>
              <Link href="/mudanzas-tigre" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Tigre</Link>
              <Link href="/mudanzas-la-matanza" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">La Matanza</Link>
              <Link href="/mudanzas-vicente-lopez" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Vicente Lopez</Link>
              <Link href="/mudanzas-san-fernando" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">San Fernando</Link>
              <Link href="/mudanzas-merlo" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Merlo</Link>
              <Link href="/mudanzas-moreno" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Moreno</Link>
              <Link href="/mudanzas-esteban-echeverria" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Esteban Echeverria</Link>
            </div>
          </div>
        </section>

        <section className="bg-orange-500 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Pedi tu presupuesto sin cargo</h2>
            <p className="text-white mb-8 opacity-90">Mudanzas en Pilar con la empresa más confiable de CABA y GBA.</p>
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
