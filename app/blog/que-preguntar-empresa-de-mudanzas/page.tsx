import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "8 preguntas que tenés que hacerle a una empresa de mudanzas antes de contratar | La Mudanza",
  description: "No todas las empresas de mudanzas son iguales. Estas preguntas te ayudan a separar las profesionales de las que solo te van a dar problemas.",
  alternates: { canonical: "https://www.mudarme.com.ar/blog/que-preguntar-empresa-de-mudanzas" },
  openGraph: {
    type: "article",
    url: "https://www.mudarme.com.ar/blog/que-preguntar-empresa-de-mudanzas",
    publishedTime: "2026-06-24T00:00:00Z",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "8 preguntas que tenés que hacerle a una empresa de mudanzas antes de contratar",
  "description": "No todas las empresas de mudanzas son iguales. Estas preguntas te ayudan a separar las profesionales de las que solo te van a dar problemas.",
  "url": "https://www.mudarme.com.ar/blog/que-preguntar-empresa-de-mudanzas",
  "datePublished": "2026-06-24",
  "dateModified": "2026-06-24",
  "author": { "@type": "Organization", "name": "La Mudanza", "url": "https://www.mudarme.com.ar" },
  "publisher": { "@type": "Organization", "name": "La Mudanza", "url": "https://www.mudarme.com.ar" },
  "inLanguage": "es-AR",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudarme.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudarme.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "8 preguntas que tenés que hacerle a una empresa de mudanzas antes de contratar", "item": "https://www.mudarme.com.ar/blog/que-preguntar-empresa-de-mudanzas" },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="pt-20">
        <section className="bg-black text-white py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="text-orange-400 text-sm mb-6 inline-block hover:underline">← Volver al blog</Link>
            <span className="text-orange-400 text-sm uppercase tracking-widest block mb-3">Consejos</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">8 preguntas que tenés que hacerle a una empresa de mudanzas antes de contratar</h1>
            <p className="text-gray-300 text-lg">No todas las empresas de mudanzas son iguales. Estas preguntas te ayudan a separar las profesionales de las que solo te van a dar problemas.</p>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-3xl mx-auto prose prose-invert prose-lg">

            <h2 className="text-2xl font-bold text-white mb-4">Por qué importa elegir bien</h2>
            <p className="text-gray-300 mb-6">En Buenos Aires hay cientos de empresas de mudanzas. Algunas son profesionales, con equipos entrenados, camiones en condiciones y seguros vigentes. Otras son "fleteros" que trabajan con una camioneta prestada y sin ninguna cobertura. El problema es que desde afuera, ambas pueden parecer similares — especialmente si solo estás mirando el precio.</p>
            <p className="text-gray-300 mb-6">La diferencia se nota el día de la mudanza: cuando llegan dos personas en lugar de tres, cuando el camión no entra en la calle, cuando algo se rompe y nadie se hace responsable, o cuando el presupuesto inicial de repente tiene "costos adicionales" que no te habían dicho.</p>
            <p className="text-gray-300 mb-6">Estas 10 preguntas te permiten evaluar una empresa antes de comprometerte.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Las 10 preguntas clave</h2>

            <h3 className="text-xl font-bold text-orange-400 mb-3">1. ¿El presupuesto es cerrado o puede tener costos adicionales?</h3>
            <p className="text-gray-300 mb-6">Esta es la pregunta más importante. Un presupuesto "abierto" significa que el precio final puede ser mayor que el que te dieron. Las empresas serias trabajan con presupuestos cerrados: el precio que te cotizan es el que pagás, sin sorpresas. Si la empresa no puede garantizarte esto, es una señal de alerta.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">2. ¿Cuántas personas van a venir el día de la mudanza?</h3>
            <p className="text-gray-300 mb-6">El número de personas en el equipo determina directamente el tiempo que lleva la mudanza. Para un departamento de 2 o 3 ambientes, lo mínimo razonable son 2 personas; lo ideal son 3. Si te dicen que van a ir solos o que ya verán según el trabajo, desconfiá. Un equipo insuficiente alarga la mudanza, cansa a las personas y aumenta el riesgo de accidentes y roturas.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">4. ¿Son empleados propios o subcontratados?</h3>
            <p className="text-gray-300 mb-6">Algunas empresas subcontratan el personal para cada mudanza a través de plataformas o contactos informales. Esto significa que las personas que llegan a tu casa no necesariamente tienen entrenamiento ni trabajan regularmente con la empresa. Las empresas serias tienen personal propio y capacitado. Preguntá directamente.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">5. ¿El camión es propio o alquilado?</h3>
            <p className="text-gray-300 mb-6">Un camión propio es señal de una empresa que invierte en su infraestructura y tiene control sobre el estado del vehículo. Los camiones alquilados no son necesariamente un problema, pero conviene saber con qué van a trabajar. Preguntá también por el tamaño del camión y si consideran que es suficiente para tu volumen, o si puede ser necesario un segundo viaje.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">6. ¿Cómo protegen los muebles durante el traslado?</h3>
            <p className="text-gray-300 mb-6">Los muebles de madera, las esquinas de los placares y los televisores se dañan fácilmente si no van protegidos. Preguntá cómo cubren los muebles durante la carga y el viaje. Los profesionales usan mantas acolchadas y film stretch para envolver cada pieza. Si la respuesta es "los cuidamos bien" sin especificar cómo, insistí en los detalles.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">7. ¿Desarman y arman muebles si es necesario?</h3>
            <p className="text-gray-300 mb-6">Muchos muebles modernos requieren ser desarmados para pasar por puertas o escaleras. Verificá si este servicio está incluido en el presupuesto o si tiene un costo adicional. También preguntá si tienen experiencia con el tipo de muebles que tenés — no es lo mismo un placard de melanina que un ropero antiguo de madera maciza.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">8. ¿Pueden darme referencias de clientes anteriores?</h3>
            <p className="text-gray-300 mb-6">Las empresas con trayectoria tienen clientes satisfechos que están dispuestos a recomendarlas. También podés buscar reseñas en Google Maps o en foros de barrios y grupos de Facebook. Una empresa sin presencia online ni referencias es una empresa sin historial — que puede ser nueva o puede ser una que tiene historial negativo.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">8. ¿Qué información necesitan de mi parte para hacer el presupuesto?</h3>
            <p className="text-gray-300 mb-6">Una empresa seria necesita información específica para hacer un presupuesto preciso: domicilios de origen y destino, piso y disponibilidad de ascensor en ambos, volumen aproximado de muebles y cajas, y si necesitás embalaje. Si te dan un precio sin preguntar nada de esto, el presupuesto no tiene validez real — te van a sorprender con costos adicionales el día de la mudanza.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Una señal de alerta adicional: el precio demasiado bajo</h2>
            <p className="text-gray-300 mb-6">Si un presupuesto es significativamente más bajo que el resto, hay una razón: personal insuficiente, sin seguro, camión en mal estado o intención de cobrar "adicionales" el día de la mudanza. No decimos que el más caro sea siempre el mejor, pero un precio que parece demasiado bueno para ser verdad generalmente lo es.</p>
            <p className="text-gray-300 mb-6">El objetivo no es encontrar la mudanza más barata — es encontrar la que te ofrece el mejor servicio a un precio justo y transparente. Eso se evalúa haciendo las preguntas correctas antes de firmar.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Artículos relacionados</h2>
            <ul className="text-gray-300 mb-8 space-y-2">
              <li><Link href="/blog/como-elegir-empresa-de-mudanzas" className="text-orange-400 hover:underline">Cómo elegir una empresa de mudanzas en Buenos Aires</Link></li>
              <li><Link href="/blog/cuanto-cuesta-una-mudanza-en-buenos-aires" className="text-orange-400 hover:underline">¿Cuánto cuesta una mudanza en Buenos Aires?</Link></li>
              <li><Link href="/mudanzas-residenciales" className="text-orange-400 hover:underline">Mudanzas residenciales en Buenos Aires</Link></li>
            </ul>

            <div className="bg-zinc-800 border border-orange-500 rounded-lg p-8 mt-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Pedí tu presupuesto sin cargo</h3>
              <p className="text-gray-300 mb-6">En La Mudanza te cotizamos en minutos, sin compromiso y sin costo. Presupuesto cerrado y transparente.</p>
              <a href="https://wa.me/541125535500" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-block mr-4">
                Cotizar por WhatsApp
              </a>
              <a href="tel:+541125535500" className="border border-white text-white font-bold py-3 px-8 rounded-full inline-block">
                11-2553-5500
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
