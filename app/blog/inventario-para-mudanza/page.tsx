import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo hacer un inventario para tu mudanza (y por qué es imprescindible) | La Mudanza",
  description: "Un inventario detallado antes de mudarte te ahorra tiempo, dinero y dolores de cabeza. Cómo hacerlo paso a paso, qué incluir y qué herramientas usar.",
  alternates: { canonical: "https://www.mudarme.com.ar/blog/inventario-para-mudanza" },
  openGraph: {
    type: "article",
    url: "https://www.mudarme.com.ar/blog/inventario-para-mudanza",
    publishedTime: "2026-07-02T00:00:00Z",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cómo hacer un inventario para tu mudanza (y por qué es imprescindible)",
  "description": "Un inventario detallado antes de mudarte te ahorra tiempo, dinero y dolores de cabeza. Cómo hacerlo paso a paso, qué incluir y qué herramientas usar.",
  "url": "https://www.mudarme.com.ar/blog/inventario-para-mudanza",
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
    { "@type": "ListItem", "position": 3, "name": "Cómo hacer un inventario para tu mudanza", "item": "https://www.mudarme.com.ar/blog/inventario-para-mudanza" },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cómo hacer un inventario para tu mudanza (y por qué es imprescindible)</h1>
            <p className="text-gray-300 text-lg">Un inventario detallado antes de mudarte te ahorra tiempo, dinero y dolores de cabeza. Cómo hacerlo paso a paso, qué incluir y qué herramientas usar.</p>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-3xl mx-auto prose prose-invert prose-lg">

            <h2 className="text-2xl font-bold text-white mb-4">Para qué sirve un inventario de mudanza</h2>
            <p className="text-gray-300 mb-6">Hacer un inventario antes de mudarte puede parecer una tarea extra que no tenés tiempo de hacer. Pero en la práctica es una de las decisiones más inteligentes que podés tomar antes de un traslado. Un inventario bien hecho cumple tres funciones clave: te permite detectar roturas o faltantes apenas llegan tus pertenencias al nuevo domicilio, te da un control claro de todo lo que salió y lo que llegó, y funciona como evidencia en caso de que necesites hacer un reclamo al seguro o a la empresa de mudanzas. Sin inventario, si falta una caja o llega un mueble rayado, no tenés nada con qué respaldarte.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Cuándo empezar a hacerlo</h2>
            <p className="text-gray-300 mb-6">Lo ideal es arrancar el inventario entre dos y tres semanas antes de la mudanza. A esa altura todavía tenés tiempo de ordenar, revisar el estado de tus cosas con calma y fotografiar todo sin apuro. Si lo dejás para los últimos días, vas a terminar anotando a las corridas y perdiendo el foco. Reservá una tarde o un fin de semana para recorrer tu casa ambiente por ambiente y hacer el relevamiento completo.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Cómo organizar el inventario por ambiente</h2>
            <p className="text-gray-300 mb-3">La clave es dividir el inventario por sectores del hogar. Esto tiene una lógica práctica: cuando lleguen las cajas al destino, vas a saber exactamente a qué habitación pertenece cada cosa. Los ambientes típicos son:</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-white">Cocina:</strong> electrodomésticos, vajilla, utensilios, alimentos no perecederos</li>
              <li><strong className="text-white">Living / comedor:</strong> sillones, mesa, sillas, biblioteca, decoración, electrónica</li>
              <li><strong className="text-white">Dormitorio principal:</strong> cama, colchón, placard, ropa, accesorios</li>
              <li><strong className="text-white">Dormitorios secundarios:</strong> idem por cada cuarto</li>
              <li><strong className="text-white">Baño:</strong> productos de higiene, toallas, accesorios</li>
              <li><strong className="text-white">Lavadero / balcón:</strong> lavarropas, herramientas, plantas</li>
              <li><strong className="text-white">Depósito / garage:</strong> cajas varias, bicicletas, equipamiento deportivo</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">Qué registrar para cada objeto</h2>
            <p className="text-gray-300 mb-3">Para que el inventario sea útil, no alcanza con anotar "mesa" o "caja". Para cada ítem registrá al menos estos datos:</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-white">Cantidad:</strong> cuántas unidades hay de ese objeto</li>
              <li><strong className="text-white">Descripción:</strong> tipo, color, marca si corresponde (por ejemplo: "sillón de 3 cuerpos, gris oscuro")</li>
              <li><strong className="text-white">Estado previo:</strong> si el mueble ya tenía alguna marca, rayón, rotura o deterioro antes de la mudanza, anotalo. Esto es fundamental para evitar conflictos después.</li>
            </ul>
            <p className="text-gray-300 mb-6">Si tenés objetos de valor —arte, antigüedades, electrónica cara— anotá también el valor aproximado. Eso va a ser necesario si necesitás hacer un reclamo al seguro.</p>

            <h2 className="text-2xl font-bold text-white mb-4">El inventario fotográfico: documentá el estado antes del traslado</h2>
            <p className="text-gray-300 mb-6">Las fotos son el complemento indispensable del inventario escrito. Antes de que llegue la empresa de mudanzas, sacá fotos de todos tus muebles, especialmente de los que ya tienen algún deterioro. Fotografiá cada ambiente en general y después hacé planos detalle de las partes que podrían sufrir daños: patas de mesas, esquinas de placares, pantallas de televisores, marcos de cuadros. Usá el celular con buena iluminación y asegurate de que las fotos tengan fecha y hora activadas. Guardá todo en una carpeta en la nube para no perder nada.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Herramientas gratuitas para hacer tu inventario</h2>
            <p className="text-gray-300 mb-3">No necesitás comprar ni instalar nada especial. Estas opciones son suficientes para la mayoría de las mudanzas:</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-white">Google Sheets:</strong> la opción más práctica. Creás una hoja por ambiente, compartís con quien quieras y podés acceder desde el celular el día de la mudanza.</li>
              <li><strong className="text-white">Apps de inventario:</strong> hay varias gratuitas para iOS y Android que permiten agregar fotos directamente a cada ítem. Buscá "home inventory app" o "inventario del hogar".</li>
              <li><strong className="text-white">Papel y lapicera:</strong> si sos de la vieja escuela, una planilla impresa también funciona. Lo importante es ser sistemático.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">Ejemplo de planilla de inventario</h2>
            <p className="text-gray-300 mb-4">Esta es la estructura básica que recomendamos para organizar tu inventario:</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-gray-300 border border-zinc-700">
                <thead>
                  <tr className="bg-zinc-800 text-white">
                    <th className="border border-zinc-700 px-4 py-2 text-left">Ambiente</th>
                    <th className="border border-zinc-700 px-4 py-2 text-left">Objeto</th>
                    <th className="border border-zinc-700 px-4 py-2 text-left">Cantidad</th>
                    <th className="border border-zinc-700 px-4 py-2 text-left">Estado</th>
                    <th className="border border-zinc-700 px-4 py-2 text-left">Foto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-zinc-700 px-4 py-2">Living</td>
                    <td className="border border-zinc-700 px-4 py-2">Sillón 3 cuerpos gris</td>
                    <td className="border border-zinc-700 px-4 py-2">1</td>
                    <td className="border border-zinc-700 px-4 py-2">Bueno (mancha esquina derecha)</td>
                    <td className="border border-zinc-700 px-4 py-2">Sí</td>
                  </tr>
                  <tr className="bg-zinc-800/40">
                    <td className="border border-zinc-700 px-4 py-2">Cocina</td>
                    <td className="border border-zinc-700 px-4 py-2">Heladera Samsung 320L</td>
                    <td className="border border-zinc-700 px-4 py-2">1</td>
                    <td className="border border-zinc-700 px-4 py-2">Muy bueno</td>
                    <td className="border border-zinc-700 px-4 py-2">Sí</td>
                  </tr>
                  <tr>
                    <td className="border border-zinc-700 px-4 py-2">Cocina</td>
                    <td className="border border-zinc-700 px-4 py-2">Microondas</td>
                    <td className="border border-zinc-700 px-4 py-2">1</td>
                    <td className="border border-zinc-700 px-4 py-2">Regular (tapa con rayón)</td>
                    <td className="border border-zinc-700 px-4 py-2">Sí</td>
                  </tr>
                  <tr className="bg-zinc-800/40">
                    <td className="border border-zinc-700 px-4 py-2">Dormitorio 1</td>
                    <td className="border border-zinc-700 px-4 py-2">Cama 2 plazas con sommier</td>
                    <td className="border border-zinc-700 px-4 py-2">1</td>
                    <td className="border border-zinc-700 px-4 py-2">Bueno</td>
                    <td className="border border-zinc-700 px-4 py-2">Sí</td>
                  </tr>
                  <tr>
                    <td className="border border-zinc-700 px-4 py-2">Dormitorio 1</td>
                    <td className="border border-zinc-700 px-4 py-2">Placard 3 puertas blanco</td>
                    <td className="border border-zinc-700 px-4 py-2">1</td>
                    <td className="border border-zinc-700 px-4 py-2">Bueno (bisagra floja)</td>
                    <td className="border border-zinc-700 px-4 py-2">Sí</td>
                  </tr>
                  <tr className="bg-zinc-800/40">
                    <td className="border border-zinc-700 px-4 py-2">Cocina</td>
                    <td className="border border-zinc-700 px-4 py-2">Cajas con vajilla</td>
                    <td className="border border-zinc-700 px-4 py-2">4</td>
                    <td className="border border-zinc-700 px-4 py-2">–</td>
                    <td className="border border-zinc-700 px-4 py-2">No</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Cómo usar el inventario el día de la mudanza</h2>
            <p className="text-gray-300 mb-6">El día del traslado, tené el inventario a mano —en papel o en el celular— y usalo como checklist. A medida que cada objeto sube al camión, marcalo. Cuando llegues al nuevo domicilio, revisá que todo lo que salió también llegó. No firmes la conformidad con la empresa de mudanzas hasta haber verificado que no falta nada y que los muebles llegaron en el mismo estado en que los entregaste. Si hay alguna discrepancia, anotala en el momento.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Qué hacer si falta algo o hay roturas</h2>
            <p className="text-gray-300 mb-6">Si al llegar detectás que falta un objeto o que algo llegó dañado, el inventario es tu principal herramienta. Con el registro escrito y las fotos previas podés demostrar que el daño no preexistía y hacer el reclamo correspondiente. Avisá a la empresa de mudanzas en el mismo momento, antes de que se retiren. Si tenés seguro de mudanza, contactá a la aseguradora con el inventario y las fotos como respaldo. Sin esa documentación, cualquier reclamo se vuelve muy difícil de sostener.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Un paso pequeño con impacto grande</h2>
            <p className="text-gray-300 mb-6">Hacer un inventario lleva algunas horas, pero puede ahorrarte mucho dinero y conflictos. En La Mudanza recomendamos siempre a nuestros clientes que lo preparen antes de la fecha del traslado. Con más de 30 años haciendo mudanzas en Buenos Aires, sabemos que las mudanzas que salen mejor son las que se planifican con anticipación. El inventario es parte de esa planificación.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Artículos relacionados</h2>
            <ul className="text-gray-300 mb-8 space-y-2">
              <li>
                <Link href="/blog/checklist-para-mudarse" className="text-orange-400 hover:underline">
                  Checklist completo para mudarse sin olvidar nada
                </Link>
              </li>
              <li>
                <Link href="/blog/seguro-de-mudanza" className="text-orange-400 hover:underline">
                  Seguro de mudanza: qué cubre y cuándo contratarlo
                </Link>
              </li>
            </ul>

            <div className="bg-zinc-800 border border-orange-500 rounded-lg p-8 mt-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">¿Listo para planificar tu mudanza?</h3>
              <p className="text-gray-300 mb-6">En La Mudanza te acompañamos en cada paso. Más de 30 años de experiencia en mudanzas en Buenos Aires. Pedí tu presupuesto sin cargo.</p>
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
