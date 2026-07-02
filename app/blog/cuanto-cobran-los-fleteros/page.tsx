import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "¿Cuánto cobran los fleteros en Buenos Aires? | La Mudanza",
  description: "Guía de precios de fleteros en Buenos Aires. La diferencia entre un fletero informal y una empresa de mudanzas, qué incluye cada uno y cuándo conviene cada opción.",
  alternates: { canonical: "https://www.mudarme.com.ar/blog/cuanto-cobran-los-fleteros" },
  openGraph: {
    type: "article",
    url: "https://www.mudarme.com.ar/blog/cuanto-cobran-los-fleteros",
    publishedTime: "2026-07-02T00:00:00Z",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "¿Cuánto cobran los fleteros en Buenos Aires? Precios, diferencias y qué tener en cuenta",
  "description": "Guía de precios de fleteros en Buenos Aires. La diferencia entre un fletero informal y una empresa de mudanzas, qué incluye cada uno y cuándo conviene cada opción.",
  "url": "https://www.mudarme.com.ar/blog/cuanto-cobran-los-fleteros",
  "datePublished": "2026-07-02",
  "dateModified": "2026-07-02",
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
    { "@type": "ListItem", "position": 3, "name": "¿Cuánto cobran los fleteros en Buenos Aires?", "item": "https://www.mudarme.com.ar/blog/cuanto-cobran-los-fleteros" },
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
            <span className="text-orange-400 text-sm uppercase tracking-widest block mb-3">Precios y presupuestos</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">¿Cuánto cobran los fleteros en Buenos Aires? Precios, diferencias y qué tener en cuenta</h1>
            <p className="text-gray-300 text-lg">Guía de precios de fleteros en Buenos Aires. La diferencia entre un fletero informal y una empresa de mudanzas, qué incluye cada uno y cuándo conviene cada opción.</p>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-3xl mx-auto prose prose-invert prose-lg">

            <h2 className="text-2xl font-bold text-white mb-4">Fletero o empresa de mudanzas: ¿de qué estamos hablando?</h2>
            <p className="text-gray-300 mb-6">Cuando alguien dice "voy a contratar un fletero", en general se refiere a una persona o equipo pequeño que tiene un camión o utilitario y ofrece servicios de traslado de manera informal o semi-informal. El fletero suele ser una o dos personas, con un vehículo propio, que cobran por hora o por viaje y no ofrecen contrato formal.</p>
            <p className="text-gray-300 mb-6">Una empresa de mudanzas, en cambio, es una organización con equipo propio, personal entrenado, materiales de embalaje, cobertura ante imprevistos y la posibilidad de firmar un presupuesto cerrado. La diferencia no es solo de escala: es de estructura, responsabilidad y lo que incluye el servicio.</p>
            <p className="text-gray-300 mb-6">Ninguna de las dos opciones es "mala" de por sí. El punto es entender qué necesitás y comparar los precios de manera justa, porque no son lo mismo aunque el camión que llega a tu puerta se parezca.</p>

            <h2 className="text-2xl font-bold text-white mb-4">¿Cuánto cobra un fletero en CABA?</h2>
            <p className="text-gray-300 mb-6">Los precios varían mucho según la zona, el tipo de vehículo y la demanda del momento, pero para darte una referencia real: en 2025, un fletero en Ciudad de Buenos Aires cobra entre $15.000 y $35.000 por hora dependiendo del tamaño del camión y si trabaja solo o con ayudante. Un traslado corto de pocas horas puede rondar los $50.000 a $100.000 en total, aunque en mudanzas más grandes el costo final puede superar esas cifras si se acumula tiempo extra o si hacen falta varios viajes.</p>
            <p className="text-gray-300 mb-6">Esos números son orientativos. En la práctica, el precio final depende de cuántos viajes hacen, cuántas horas trabajan y si hay imprevistos (escaleras, estacionamiento difícil, muebles que no entran). Muchos fleteros arrancan con un precio que parece bajo pero el total final termina siendo diferente al estimado inicial.</p>

            <h2 className="text-2xl font-bold text-white mb-4">¿Cómo cobran los fleteros: por hora, por viaje o por volumen?</h2>
            <p className="text-gray-300 mb-3">Los esquemas de cobro más comunes son:</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-white">Por hora:</strong> el más frecuente en CABA. Cobran desde que salen hasta que terminan. Incluye el tiempo de carga, el viaje y la descarga. Si tarda más de lo esperado, el precio sube.</li>
              <li><strong className="text-white">Por viaje:</strong> se acuerda un precio por cada vuelta que hace el camión. Si hay más cosas de las esperadas y necesitan hacer un segundo o tercer viaje, el costo se multiplica.</li>
              <li><strong className="text-white">Por volumen o bulto:</strong> menos común, pero existe. Cobran según la cantidad de muebles o metros cúbicos estimados.</li>
            </ul>
            <p className="text-gray-300 mb-6">El problema de los dos primeros esquemas es que dependen de variables que son difíciles de controlar el día de la mudanza. Una demora en el tráfico, un mueble que no pasa por la puerta o lluvia inesperada pueden hacerte pagar bastante más de lo que pensabas.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Qué incluye un flete y qué no incluye</h2>
            <p className="text-gray-300 mb-3">Lo que típicamente incluye un flete básico:</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>El traslado de muebles y cajas desde un punto al otro</li>
              <li>Carga y descarga (aunque en algunos casos solo van uno y necesitás ayudar o poner otra persona)</li>
              <li>El camión o utilitario</li>
            </ul>
            <p className="text-gray-300 mb-3">Lo que generalmente <strong className="text-white">no incluye</strong>:</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>Embalaje: tenés que empacar todo vos antes de que lleguen</li>
              <li>Materiales: cajas, papel de burbujas, cinta, no son responsabilidad del fletero</li>
              <li>Seguro o cobertura ante roturas: si algo se rompe, generalmente no hay responsabilidad formal</li>
              <li>Desarme y armado de muebles</li>
              <li>Subida a pisos altos sin ascensor (o se cobra aparte o directamente no lo hacen)</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">¿Cuándo conviene un fletero?</h2>
            <p className="text-gray-300 mb-6">Hay situaciones donde un flete tiene sentido y es la opción más práctica:</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>Mudanza de monoambiente o departamento de un ambiente con pocos muebles</li>
              <li>Traslado dentro del mismo edificio o a pocas cuadras</li>
              <li>Cuando tenés todo embalado y listo y solo necesitás el transporte</li>
              <li>Mudanza de cosas que no son delicadas ni requieren cuidado especial</li>
              <li>Presupuesto muy ajustado y la mudanza es sencilla</li>
            </ul>
            <p className="text-gray-300 mb-6">En esos casos, un flete bien coordinado puede resolver la situación sin pagar de más por servicios que no necesitás.</p>

            <h2 className="text-2xl font-bold text-white mb-4">¿Cuándo conviene una empresa de mudanzas?</h2>
            <p className="text-gray-300 mb-6">Hay situaciones donde apostar solo por el precio más bajo puede salir caro. Una empresa de mudanzas tiene más sentido cuando:</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>La mudanza es de 2 ambientes o más, con volumen considerable</li>
              <li>Hay objetos delicados: equipos de audio, cuadros, vajilla fina, instrumentos musicales</li>
              <li>El departamento está en un piso alto sin ascensor</li>
              <li>La mudanza es a larga distancia (interior del país)</li>
              <li>Necesitás embalaje profesional incluido en el servicio</li>
              <li>Querés un presupuesto cerrado y sin sorpresas</li>
              <li>Necesitás cobertura si algo se rompe o se daña</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">Las sorpresas que puede traer un flete</h2>
            <p className="text-gray-300 mb-6">No es que los fleteros tengan mala fe. Muchas veces las cosas se complican de manera genuina. Pero sin un contrato formal, las consecuencias caen sobre el cliente:</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-white">Viajes adicionales no cotizados:</strong> si estimaron un viaje y hacen falta dos, el precio se duplica.</li>
              <li><strong className="text-white">Tiempo extra:</strong> si tarda más de lo estimado (tráfico, escaleras, lluvia), el costo por hora se suma sin techo.</li>
              <li><strong className="text-white">Sin cobertura ante roturas:</strong> si se rompe algo, generalmente no hay quién responda. No hay contrato, no hay seguro.</li>
              <li><strong className="text-white">Cancelaciones de último momento:</strong> sin compromiso formal, el fletero puede cancelar el día anterior sin consecuencias.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">Cómo pedir presupuesto a ambos y comparar bien</h2>
            <p className="text-gray-300 mb-6">Para comparar precios de manera justa, tenés que comparar lo mismo con lo mismo. Al pedirle precio a un fletero, preguntá: ¿el precio es por hora o por viaje?, ¿cuántas personas van?, ¿qué pasa si se necesita un viaje más?, ¿qué cobertura tienen ante roturas? Esas respuestas te permiten calcular el costo total real, no solo el precio inicial.</p>
            <p className="text-gray-300 mb-6">Al pedirle presupuesto a una empresa de mudanzas, preguntá qué incluye exactamente: embalaje, materiales, armado de muebles, seguro. Un presupuesto cerrado de una empresa puede parecer más alto a primera vista pero incluye cosas que con el fletero tendrías que contratar aparte o asumir como riesgo propio.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Presupuesto cerrado vs. precio "a ver cómo sale"</h2>
            <p className="text-gray-300 mb-6">La diferencia más importante a la hora de contratar cualquier servicio de traslado es si el precio es cerrado o estimativo. Un presupuesto cerrado significa que pagás lo que acordaste, sin importar si tarda más o si hubo imprevistos. Un precio estimativo significa que puede subir.</p>
            <p className="text-gray-300 mb-6">Muchos fleteros trabajan con precio estimativo porque cobran por hora y no pueden controlar el tiempo. Muchas empresas de mudanzas, en cambio, pueden darte un presupuesto cerrado porque tienen experiencia suficiente para calcular bien los tiempos y el trabajo. En La Mudanza trabajamos siempre con presupuesto cerrado: el precio que te cotizamos es el que pagás.</p>

            <div className="bg-zinc-800 border border-orange-500 rounded-lg p-8 mt-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Pedí tu presupuesto sin cargo</h3>
              <p className="text-gray-300 mb-6">En La Mudanza tenemos más de 30 años de experiencia. Te cotizamos en minutos, sin compromiso y sin costo. Presupuesto cerrado y transparente, sin sorpresas.</p>
              <a href="https://wa.me/541125535500" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-block mr-4">
                Cotizar por WhatsApp
              </a>
              <a href="tel:+541125535500" className="border border-white text-white font-bold py-3 px-8 rounded-full inline-block">
                11-2553-5500
              </a>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-white mb-4">Artículos relacionados</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog/cuanto-cuesta-una-mudanza-en-buenos-aires" className="text-orange-400 hover:underline">
                    ¿Cuánto cuesta una mudanza en Buenos Aires?
                  </Link>
                </li>
                <li>
                  <Link href="/blog/como-elegir-empresa-de-mudanzas" className="text-orange-400 hover:underline">
                    Cómo elegir una empresa de mudanzas
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
