import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Seguro de mudanza: qué cubre, qué no y cómo proteger tus pertenencias | La Mudanza",
  description: "¿Tu mudanza está asegurada? Todo lo que necesitás saber sobre los seguros de mudanza en Argentina: qué cubren, cómo funcionan y qué hacer si algo se daña.",
  alternates: { canonical: "https://www.mudarme.com.ar/blog/seguro-de-mudanza" },
  openGraph: {
    type: "article",
    url: "https://www.mudarme.com.ar/blog/seguro-de-mudanza",
    publishedTime: "2026-07-02T00:00:00Z",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Seguro de mudanza: qué cubre, qué no y cómo proteger tus pertenencias",
  "description": "¿Tu mudanza está asegurada? Todo lo que necesitás saber sobre los seguros de mudanza en Argentina: qué cubren, cómo funcionan y qué hacer si algo se daña.",
  "url": "https://www.mudarme.com.ar/blog/seguro-de-mudanza",
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
    { "@type": "ListItem", "position": 3, "name": "Seguro de mudanza: qué cubre, qué no y cómo proteger tus pertenencias", "item": "https://www.mudarme.com.ar/blog/seguro-de-mudanza" },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Seguro de mudanza: qué cubre, qué no y cómo proteger tus pertenencias</h1>
            <p className="text-gray-300 text-lg">¿Tu mudanza está asegurada? Todo lo que necesitás saber sobre los seguros de mudanza en Argentina: qué cubren, cómo funcionan y qué hacer si algo se daña.</p>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-3xl mx-auto prose prose-invert prose-lg">

            <h2 className="text-2xl font-bold text-white mb-4">Por qué el seguro importa en una mudanza</h2>
            <p className="text-gray-300 mb-6">Mudarse implica mover todo lo que acumulaste durante años: muebles, electrodomésticos, objetos de valor sentimental y económico. Durante ese traslado, los bienes están expuestos a riesgos reales: golpes, caídas, humedad, accidentes de tránsito. Un seguro de mudanza en Argentina no es un lujo ni un gasto innecesario — es la diferencia entre recuperar el valor de lo que se dañó o asumir esa pérdida de tu bolsillo. Sin embargo, muchas personas contratan una mudanza sin preguntar si la empresa tiene cobertura. Ese error puede salir muy caro.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Empresa con seguro propio vs. empresa sin seguro</h2>
            <p className="text-gray-300 mb-6">En Argentina, no todas las empresas de mudanzas trabajan con seguro. Muchos fleteros independientes y empresas informales operan sin cobertura alguna. Esto significa que si algo se rompe o se pierde durante el traslado, la responsabilidad recae completamente sobre vos. Una empresa profesional, en cambio, cuenta con un seguro de transporte de carga que cubre los bienes durante el traslado. Antes de contratar cualquier servicio, lo primero que tenés que preguntar es: ¿trabajan con seguro? Y si la respuesta es sí, pedí que te indiquen la aseguradora y el número de póliza. Una empresa seria no tiene problema en responder eso.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Qué cubre típicamente un seguro de mudanza</h2>
            <p className="text-gray-300 mb-3">Un seguro de transporte de mudanza cubre principalmente los daños materiales que sufran tus pertenencias durante el traslado. Esto incluye:</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>Daños por golpes o caídas durante la carga, el viaje o la descarga</li>
              <li>Rotura de objetos como televisores, espejos, vidrios o vajilla embalada por la empresa</li>
              <li>Daños causados por accidentes de tránsito del camión</li>
              <li>Pérdida total de bienes en caso de siniestro grave (volcamiento, incendio del vehículo)</li>
            </ul>
            <p className="text-gray-300 mb-6">La cobertura aplica desde el momento en que el equipo empieza a cargar el camión hasta que termina la descarga en el destino. Es una ventana acotada pero que cubre exactamente el período de mayor riesgo para tus bienes.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Qué NO cubre un seguro de mudanza</h2>
            <p className="text-gray-300 mb-3">Igual de importante que saber qué cubre es entender qué queda fuera de la póliza. Los seguros de mudanza en Argentina generalmente no cubren:</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-white">Daños preexistentes:</strong> si un mueble ya estaba rayado o roto antes de la mudanza, el seguro no lo va a cubrir. Por eso es fundamental documentar el estado de tus pertenencias antes de que llegue el equipo.</li>
              <li><strong className="text-white">Dinero en efectivo, joyas y documentos:</strong> estos bienes quedan excluidos por defecto en la mayoría de las pólizas. No los incluyas en las cajas de la mudanza.</li>
              <li><strong className="text-white">Objetos de alto valor no declarados:</strong> obras de arte, antigüedades, equipos electrónicos de alto costo o colecciones requieren una declaración especial antes del traslado. Si no los declaraste, el seguro puede no cubrirlos o cubrir solo una fracción de su valor real.</li>
              <li><strong className="text-white">Daños por mal embalaje propio:</strong> si vos mismo embalaste un objeto de forma inadecuada y eso causó la rotura, el seguro generalmente no cubre ese daño. El embalaje profesional de la empresa sí queda cubierto.</li>
              <li><strong className="text-white">Pérdidas durante el almacenamiento prolongado:</strong> si necesitás guardar tus pertenencias en depósito, ese período puede requerir una cobertura adicional diferente al seguro de transporte.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">Cómo funciona la cobertura en La Mudanza</h2>
            <p className="text-gray-300 mb-6">En La Mudanza trabajamos con seguro de transporte de carga en todas nuestras mudanzas. Con más de 30 años de experiencia en Buenos Aires, sabemos que la tranquilidad de nuestros clientes depende de saber que sus bienes están protegidos. Al momento de contratar el servicio, podés consultar los detalles de la cobertura y, si tenés objetos de alto valor que querés incluir en la declaración, te asesoramos para hacerlo correctamente antes de la fecha de la mudanza. No hay cargos ocultos ni sorpresas: la cobertura forma parte del servicio profesional que ofrecemos.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Qué hacer si algo se rompe: pasos a seguir</h2>
            <p className="text-gray-300 mb-3">Si durante tu mudanza algo sufre un daño, la forma en que lo manejés en las primeras horas es clave para poder hacer el reclamo. Seguí estos pasos:</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-white">Documentá antes de la mudanza:</strong> sacá fotos de todos tus muebles y objetos de valor antes de que empiece la carga. Es la mejor prueba de su estado previo.</li>
              <li><strong className="text-white">No firmes la recepción si hay daños visibles:</strong> al momento de la descarga, revisá los bultos antes de firmar cualquier documento. Si algo está dañado, dejalo asentado.</li>
              <li><strong className="text-white">Reportá el daño de inmediato:</strong> contactá a la empresa ese mismo día. No esperes días ni semanas — los plazos para hacer el reclamo son acotados y la demora puede hacer que pierdas el derecho a la cobertura.</li>
              <li><strong className="text-white">Tomá fotos del daño:</strong> documentá el objeto dañado con fotos claras que muestren la rotura o el deterioro.</li>
              <li><strong className="text-white">Guardá todos los comprobantes:</strong> presupuesto, contrato, recibos de pago — cualquier documento que acredite la relación con la empresa.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">Cómo declarar objetos de alto valor antes de la mudanza</h2>
            <p className="text-gray-300 mb-6">Si tenés bienes que superan el valor estándar cubierto por el seguro — una escultura, equipos fotográficos profesionales, instrumentos musicales, colecciones de vinilos o libros de valor, electrodomésticos premium — lo correcto es declararlos antes de la mudanza. En La Mudanza podés hacerlo al momento de cerrar el presupuesto. Necesitamos una descripción del objeto y, si es posible, una valuación o factura de compra. Con esa información podemos ajustar la cobertura para que ese bien quede protegido por su valor real. No lo dejés para el día de la mudanza: ese trámite necesita hacerse con anticipación.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Fletero sin cobertura vs. empresa profesional con seguro</h2>
            <p className="text-gray-300 mb-6">Esta es la diferencia más importante que tenés que entender antes de contratar. Un fletero independiente suele ofrecer un precio más bajo, pero esa diferencia de precio raramente compensa el riesgo que asumís. Si algo se rompe, no hay póliza, no hay empresa responsable, no hay reclamo posible. Una empresa profesional de mudanzas en Argentina no solo trabaja con seguro — también tiene un equipo capacitado, materiales de embalaje adecuados, y la experiencia para manejar objetos frágiles o voluminosos sin dañarlos. El precio puede ser algo mayor, pero incluye protección real. En una mudanza, lo barato puede salir muy caro.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Artículos relacionados</h2>
            <ul className="text-gray-300 mb-8 space-y-2">
              <li>
                <Link href="/blog/como-elegir-empresa-de-mudanzas" className="text-orange-400 hover:underline">Cómo elegir una empresa de mudanzas en Buenos Aires</Link>
              </li>
              <li>
                <Link href="/blog/que-preguntar-empresa-de-mudanzas" className="text-orange-400 hover:underline">Qué preguntar antes de contratar una empresa de mudanzas</Link>
              </li>
            </ul>

            <div className="bg-zinc-800 border border-orange-500 rounded-lg p-8 mt-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Mudanzas con seguro en Buenos Aires</h3>
              <p className="text-gray-300 mb-6">En La Mudanza trabajamos con cobertura en todos nuestros traslados. Más de 30 años de experiencia y tus pertenencias protegidas. Pedí tu presupuesto sin cargo hoy.</p>
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
