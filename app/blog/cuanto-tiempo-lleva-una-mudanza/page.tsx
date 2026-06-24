import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "¿Cuánto tiempo lleva una mudanza? Tiempos por tipo de hogar | La Mudanza",
  description: "Estimaciones reales de cuánto demora una mudanza según el tamaño del hogar, el piso, la distancia y si incluye embalaje profesional.",
  alternates: { canonical: "https://www.mudarme.com.ar/blog/cuanto-tiempo-lleva-una-mudanza" },
  openGraph: {
    type: "article",
    url: "https://www.mudarme.com.ar/blog/cuanto-tiempo-lleva-una-mudanza",
    publishedTime: "2026-06-24T00:00:00Z",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "¿Cuánto tiempo lleva una mudanza? Tiempos por tipo de hogar",
  "description": "Estimaciones reales de cuánto demora una mudanza según el tamaño del hogar, el piso, la distancia y si incluye embalaje profesional.",
  "url": "https://www.mudarme.com.ar/blog/cuanto-tiempo-lleva-una-mudanza",
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
    { "@type": "ListItem", "position": 3, "name": "¿Cuánto tiempo lleva una mudanza? Tiempos por tipo de hogar", "item": "https://www.mudarme.com.ar/blog/cuanto-tiempo-lleva-una-mudanza" },
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
            <span className="text-orange-400 text-sm uppercase tracking-widest block mb-3">Organización</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">¿Cuánto tiempo lleva una mudanza? Tiempos por tipo de hogar</h1>
            <p className="text-gray-300 text-lg">Estimaciones reales de cuánto demora una mudanza según el tamaño del hogar, el piso, la distancia y si incluye embalaje profesional.</p>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-3xl mx-auto prose prose-invert prose-lg">

            <h2 className="text-2xl font-bold text-white mb-4">Por qué es difícil dar un tiempo exacto</h2>
            <p className="text-gray-300 mb-6">La duración de una mudanza depende de muchas variables que se combinan de formas distintas en cada caso. No es lo mismo un monoambiente en planta baja en Palermo que un 4 ambientes en un décimo piso sin ascensor en Flores. El mismo volumen de muebles puede tardar el doble dependiendo del acceso.</p>
            <p className="text-gray-300 mb-6">Dicho esto, a lo largo de cientos de mudanzas en Buenos Aires tenemos datos bastante claros sobre los tiempos promedio. Acá te los compartimos.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Tiempos estimados por tipo de vivienda</h2>
            <p className="text-gray-300 mb-4">Estos tiempos son para mudanzas sin embalaje — es decir, cuando el cliente ya tiene todo embalado antes de que llegue el equipo. No incluyen el tiempo de traslado entre domicilios.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Monoambiente o 1 ambiente</h3>
            <p className="text-gray-300 mb-6">Con acceso fácil (planta baja o ascensor disponible): entre 2 y 3 horas. Con escaleras o acceso complicado: entre 3 y 4 horas. Un monoambiente típico en CABA incluye cama, colchón, placard, escritorio, sillón y algunos cajoneros. Si hay muchas cajas de libros o electrodomésticos de cocina, puede extenderse.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">2 ambientes (departamento estándar)</h3>
            <p className="text-gray-300 mb-6">Con buenas condiciones de acceso: entre 3 y 5 horas. Con complicaciones de acceso: entre 5 y 7 horas. Es el tipo de mudanza más común en Buenos Aires. Suele incluir dormitorio completo, living-comedor con muebles medianos, cocina equipada y algún electrodoméstico grande (lavarropas, heladera).</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">3 ambientes</h3>
            <p className="text-gray-300 mb-6">Con buenas condiciones: entre 5 y 7 horas. Con complicaciones: entre 7 y 9 horas. Acá ya suelen aparecer muebles más grandes — biblioteca completa, mesa de comedor con sillas, dos dormitorios equipados, sofá grande. El volumen aumenta considerablemente y puede requerir un camión más grande o dos viajes.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">4 ambientes o más / casa</h3>
            <p className="text-gray-300 mb-6">Con buenas condiciones: entre 7 y 12 horas. Con complicaciones o gran volumen: puede extenderse a dos días. Las casas suelen tener elementos adicionales como jardín, garaje, depósito o altillo. Si hay mucho volumen, es habitual planificar la mudanza en dos jornadas para no sobrecargar al equipo.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Factores que suman tiempo</h2>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Las escaleras: el factor más subestimado</h3>
            <p className="text-gray-300 mb-6">Cada piso de escaleras sin ascensor agrega entre 30 y 60 minutos al tiempo total de la mudanza, dependiendo del volumen. Un cuarto piso sin ascensor puede agregar 2 horas al tiempo estimado. Esto es porque cada mueble o caja se baja en el origen y se sube en el destino. Doble esfuerzo, doble tiempo.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">El armado y desarmado de muebles</h3>
            <p className="text-gray-300 mb-6">Muchos muebles modernos (placards de melamina, camas de cajones, estanterías de IKEA) deben desarmarse para poder transportarlos. El desarmado y posterior armado puede agregar entre 1 y 3 horas dependiendo de la cantidad de muebles y su complejidad. Conviene coordinar esto por separado del tiempo de carga y traslado.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Distancia entre domicilios</h3>
            <p className="text-gray-300 mb-6">Para mudanzas dentro de CABA, el tiempo de traslado suele ser entre 20 y 45 minutos (tráfico incluido). Para mudanzas al GBA, podés sumar entre 45 minutos y 1.5 horas de viaje. Las mudanzas al interior del país tienen sus tiempos propios y generalmente se coordinan de forma diferente.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Múltiples viajes</h3>
            <p className="text-gray-300 mb-6">Si el volumen supera la capacidad del camión o si hay artículos que se deben transportar por separado, puede ser necesario hacer más de un viaje. Cada viaje adicional de CABA puede agregar entre 1.5 y 3 horas al tiempo total.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Mudanza con embalaje profesional: cuánto más lleva</h2>
            <p className="text-gray-300 mb-6">Si contratás el servicio de embalaje profesional, hay que sumar el tiempo de embalaje al tiempo de la mudanza. Para un monoambiente, el embalaje puede llevar entre 1 y 2 horas adicionales. Para un 3 ambientes completo, entre 3 y 5 horas.</p>
            <p className="text-gray-300 mb-6">Muchos clientes optan por que el equipo llegue temprano a embalar y luego cargar el mismo día. Otros prefieren hacer el embalaje el día anterior para que la mudanza sea más ágil. Ambas opciones tienen sus ventajas — coordinalo según tu disponibilidad.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Consejos para que la mudanza sea más rápida</h2>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>Tené todo embalado y listo antes de que llegue el equipo. El tiempo perdido esperando que el cliente termine de embalar es uno de los principales factores de retraso.</li>
              <li>Desarmá los muebles que sabés que no pasan por la puerta o el ascensor antes del día de la mudanza.</li>
              <li>Reservá el ascensor si tu edificio lo permite — evita esperas innecesarias.</li>
              <li>Avisá al encargado del edificio con anticipación para facilitar el acceso.</li>
              <li>Tené estacionamiento reservado cerca para el camión en ambos domicilios.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">Artículos relacionados</h2>
            <ul className="text-gray-300 mb-8 space-y-2">
              <li><Link href="/blog/cuanto-cuesta-una-mudanza-en-buenos-aires" className="text-orange-400 hover:underline">¿Cuánto cuesta una mudanza en Buenos Aires?</Link></li>
              <li><Link href="/blog/checklist-para-mudarse" className="text-orange-400 hover:underline">Checklist completo para mudarse sin olvidar nada</Link></li>
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
