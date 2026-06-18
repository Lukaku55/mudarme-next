import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Mudanzas Comerciales en CABA y GBA | La Mudanza",
  description: "Mudanzas de oficinas y locales comerciales en CABA y GBA. Minimizamos el tiempo de inactividad con planificación integral. La Mudanza, +30 años de experiencia.",
  alternates: { canonical: "https://www.mudarme.com.ar/mudanzas-comerciales" },
  openGraph: { type: "website", url: "https://www.mudarme.com.ar/mudanzas-comerciales" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mudanzas Comerciales en CABA y GBA",
  "description": "Mudanzas de oficinas y locales comerciales en CABA y GBA.",
  "url": "https://www.mudarme.com.ar/mudanzas-comerciales",
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
  "serviceType": "Mudanzas Comerciales"
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudarme.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Mudanzas Comerciales en CABA y GBA", "item": "https://www.mudarme.com.ar/mudanzas-comerciales" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Pueden mudarnos fuera del horario laboral?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, trabajamos en horario nocturno y fines de semana para que tu negocio no pierda días de trabajo. Coordinamos el traslado para que el lunes ya estés operando." } },
    { "@type": "Question", "name": "¿Trasladan equipos informáticos y servidores?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, tenemos experiencia en el traslado de equipos informáticos con embalaje especializado. Recomendamos hacer backup antes de la mudanza." } },
    { "@type": "Question", "name": "¿Cuánto tiempo lleva mudarse de oficina?", "acceptedAnswer": { "@type": "Answer", "text": "Depende del tamaño de la oficina y el volumen de muebles y equipos. Una oficina de 10 puestos puede mudarse en un día. Te damos un plan detallado con el presupuesto." } },
    { "@type": "Question", "name": "¿Hacen presupuesto sin cargo?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, el presupuesto es cerrado y sin cargo. Nos contactás, nos contás el tamaño de la oficina y coordinamos una visita o cotizamos por WhatsApp." } },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mudanzas Comerciales</h1>
            <p className="text-gray-300 text-lg mb-8">Mudamos oficinas y comercios minimizando el tiempo de inactividad. Planificacion integral para que tu negocio no se detenga.</p>
            <a href="https://wa.me/541125535500" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-block mr-4">Cotizar por WhatsApp</a>
            <a href="tel:+541125535500" className="border border-white text-white font-bold py-3 px-8 rounded-full inline-block">11-2553-5500</a>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Mudanzas de oficinas y locales comerciales</h2>
            <p className="text-gray-300 text-lg mb-6">Una mudanza comercial requiere planificación y coordinación diferentes a una mudanza residencial. El tiempo es dinero y cada hora de inactividad impacta en tu negocio. En La Mudanza lo entendemos y por eso ofrecemos mudanzas comerciales planificadas para minimizar la interrupcion de tus actividades.</p>
            <p className="text-gray-300 text-lg mb-6">Podemos trabajar en horarios fuera de los habituales — noches, fines de semana — para que cuando llegues el lunes a la maniana tu nueva oficina ya este lista para operar.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {["Trabajo en horarios nocturnos", "Mudanza de equipos informaticos", "Traslado de archivos y documentacion", "Embalaje especializado", "Coordinacion con administración del edificio", "Presupuesto cerrado sin sorpresas"].map(item => (
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
                {q: "¿Pueden mudarnos fuera del horario laboral?", a: "Sí, trabajamos en horario nocturno y fines de semana para que tu negocio no pierda días de trabajo. Coordinamos el traslado para que el lunes ya estés operando."},
                {q: "¿Trasladan equipos informáticos y servidores?", a: "Sí, tenemos experiencia en el traslado de equipos informáticos con embalaje especializado. Recomendamos hacer backup antes de la mudanza."},
                {q: "¿Cuánto tiempo lleva mudarse de oficina?", a: "Depende del tamaño de la oficina y el volumen de muebles y equipos. Una oficina de 10 puestos puede mudarse en un día. Te damos un plan detallado con el presupuesto."},
                {q: "¿Hacen presupuesto sin cargo?", a: "Sí, el presupuesto es cerrado y sin cargo. Nos contactás, nos contás el tamaño de la oficina y coordinamos una visita o cotizamos por WhatsApp."},
              ].map((faq, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-700 rounded-lg p-6">
                  <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-orange-500 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Pedi tu presupuesto sin cargo</h2>
            <p className="text-white mb-8 opacity-90">Mudanzas comerciales en CABA y GBA. Planificacion integral para tu negocio.</p>
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
