import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo armar cajas para una mudanza: guía paso a paso | La Mudanza",
  description: "La técnica correcta para armar y cargar cajas de mudanza. Qué materiales usar, cómo distribuir el peso y cómo evitar que las cajas se rompan.",
  alternates: { canonical: "https://www.mudarme.com.ar/blog/como-armar-cajas-mudanza" },
  openGraph: {
    type: "article",
    url: "https://www.mudarme.com.ar/blog/como-armar-cajas-mudanza",
    publishedTime: "2026-07-02T00:00:00Z",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cómo armar cajas para una mudanza: guía paso a paso",
  "description": "La técnica correcta para armar y cargar cajas de mudanza. Qué materiales usar, cómo distribuir el peso y cómo evitar que las cajas se rompan.",
  "url": "https://www.mudarme.com.ar/blog/como-armar-cajas-mudanza",
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
    { "@type": "ListItem", "position": 3, "name": "Cómo armar cajas para una mudanza: guía paso a paso", "item": "https://www.mudarme.com.ar/blog/como-armar-cajas-mudanza" },
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
            <span className="text-orange-400 text-sm uppercase tracking-widest block mb-3">Embalaje</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cómo armar cajas para una mudanza: guía paso a paso</h1>
            <p className="text-gray-300 text-lg">La técnica correcta para armar y cargar cajas de mudanza. Qué materiales usar, cómo distribuir el peso y cómo evitar que las cajas se rompan.</p>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-3xl mx-auto prose prose-invert prose-lg">

            <p className="text-gray-300 mb-6">Armar cajas para una mudanza parece algo simple, pero hacerlo mal puede costarte caro: cajas que se rompen, objetos dañados, o cargas que se caen durante el traslado. Con más de 30 años de experiencia, en La Mudanza vimos de todo. Esta guía te enseña la técnica correcta para que tus cosas lleguen intactas al nuevo hogar.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Qué materiales necesitás antes de empezar</h2>
            <p className="text-gray-300 mb-3">Antes de meter una sola cosa en una caja, asegurate de tener estos materiales a mano:</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-white">Cajas de distintos tamaños:</strong> chicas para objetos pesados (libros, herramientas), medianas para la mayoría de las cosas, y grandes para ropa, almohadas y objetos livianos voluminosos.</li>
              <li><strong className="text-white">Cinta de embalar resistente:</strong> no uses cinta de papel ni cinta scotch. La cinta de embalaje plástica (tipo "strapping" o de polipropileno) es la única que aguanta el peso y la manipulación.</li>
              <li><strong className="text-white">Papel de diario o papel tissue:</strong> para envolver objetos delicados y rellenar espacios vacíos dentro de la caja.</li>
              <li><strong className="text-white">Film stretch (nailon de embalar):</strong> ideal para envolver cajones, proteger muebles y asegurar tapas de cajas que no cierran bien.</li>
              <li><strong className="text-white">Marcadores gruesos:</strong> uno negro para etiquetar el contenido y uno rojo para marcar lo FRÁGIL.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">Cómo armar la caja correctamente</h2>
            <p className="text-gray-300 mb-4">El error más común es doblar las solapas del fondo hacia adentro y cruzarlas. Eso no alcanza. La técnica correcta es el <strong className="text-white">sellado en H</strong>:</p>
            <ol className="text-gray-300 mb-6 space-y-2 list-decimal list-inside">
              <li>Cerrá las cuatro solapas del fondo de la caja.</li>
              <li>Poné una tira larga de cinta a lo largo del centro del fondo, cubriendo la unión de las solapas principales.</li>
              <li>Poné dos tiras más cortas en los costados, cruzando las uniones laterales. El resultado visual es una "H".</li>
              <li>Si la caja va a cargar mucho peso (más de 15 kg), reforzá con una segunda pasada de cinta cruzada en diagonal.</li>
            </ol>
            <p className="text-gray-300 mb-6">Este método distribuye la tensión en los puntos más débiles de la caja y evita que el fondo ceda bajo el peso.</p>

            <h2 className="text-2xl font-bold text-white mb-4">La regla del peso: no te la saltés</h2>
            <p className="text-gray-300 mb-6">Esta es la regla más importante y la más ignorada: <strong className="text-white">cajas grandes para objetos livianos, cajas chicas para objetos pesados.</strong> Una caja grande llena de libros pesa 40 kg, es imposible de levantar sin riesgo de lastimarse, y la caja se rompe. En cambio, una caja chica con libros pesa 12-15 kg, es manejable y viaja segura. Reservá las cajas grandes para almohadas, ropa, toallas y juguetes.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Cómo llenar la caja para que no queden espacios vacíos</h2>
            <p className="text-gray-300 mb-4">Los espacios vacíos dentro de una caja son el enemigo de tus objetos. Cuando hay aire, los objetos se mueven durante el traslado y se golpean entre sí. El truco es rellenar:</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>Poné los objetos más pesados en el fondo y los más livianos arriba.</li>
              <li>Usá papel de diario arrugado, ropa, trapos de cocina o toallas para rellenar los huecos.</li>
              <li>La caja tiene que estar lo suficientemente llena como para que la tapa no quede hundida, pero sin forzarla. Si la tapa no cierra sin presión, la caja está sobrecargada.</li>
              <li>Envolvé cada objeto frágil individualmente antes de meterlo a la caja — nunca dos objetos delicados tocándose entre sí sin papel en el medio.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">Cómo etiquetar las cajas</h2>
            <p className="text-gray-300 mb-4">Una buena etiqueta te ahorra horas de búsqueda en el destino. Escribí siempre en el lateral de la caja (no en la tapa, porque las cajas se apilan), e incluí:</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-white">La habitación de destino:</strong> "Cocina", "Dormitorio principal", "Baño".</li>
              <li><strong className="text-white">El contenido general:</strong> "Vajilla", "Libros", "Ropa de cama".</li>
              <li><strong className="text-white">FRÁGIL en rojo</strong> si corresponde, en los cuatro lados de la caja.</li>
              <li><strong className="text-white">Una flecha indicando cuál es la parte de arriba</strong> si la caja tiene objetos que no se pueden voltear.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">Qué NO poner en una misma caja</h2>
            <p className="text-gray-300 mb-4">Mezclar objetos de distintos ambientes parece una solución rápida pero crea problemas en el destino. Estas combinaciones son las peores:</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-white">Cocina con baño:</strong> los productos de limpieza del baño pueden contaminar utensilios de cocina, y si algo se rompe, terminás con todo mezclado.</li>
              <li><strong className="text-white">Libros con ropa:</strong> el peso de los libros aplasta la ropa y hace que la caja sea imposible de levantar.</li>
              <li><strong className="text-white">Objetos frágiles con pesados:</strong> nunca pongas una taza de vidrio en la misma caja que una herramienta o un libro grande.</li>
              <li><strong className="text-white">Comida con cualquier otra cosa:</strong> los alimentos (especialmente líquidos o condimentos) pueden derramarse y arruinar todo lo que los rodea.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">Las cajas más problemáticas</h2>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Libros</h3>
            <p className="text-gray-300 mb-4">Usá siempre cajas chicas. Poné los libros parados (como en una biblioteca), no acostados en pilas — así el peso se distribuye mejor y los lomos no se dañan. Alternando libros grandes con chicos aprovechás mejor el espacio.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Vajilla y cristalería</h3>
            <p className="text-gray-300 mb-4">Los platos viajan mejor parados, no apilados. Envolvé cada pieza individualmente con papel y poné una capa de papel arrugado en el fondo, entre cada plato y en la parte superior. Para los vasos, llenálos con papel de diario antes de envolverlos.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Electrónicos</h3>
            <p className="text-gray-300 mb-4">Lo ideal es usar las cajas originales. Si no las tenés, envolvé con film stretch primero, luego con varias capas de papel o burbuja, y asegurate de que no se muevan dentro de la caja. Guardá los cables en bolsas etiquetadas dentro de la misma caja que el dispositivo.</p>

            <h2 className="text-2xl font-bold text-white mb-4">¿Cajas nuevas o cajas de supermercado?</h2>
            <p className="text-gray-300 mb-6">Las cajas de supermercado son gratuitas y tentadoras, pero tienen limitaciones importantes. Son de distintos tamaños (dificultan el apilado), ya fueron usadas (pueden estar debilitadas o húmedas), y no son uniformes. Son buenas para ropa, almohadas y objetos livianos. Para objetos pesados, frágiles o valiosos, conviene invertir en cajas nuevas de mudanza. Son más resistentes, tienen tamaños estándar y aguantan mucho mejor el apilado en el camión.</p>

            <h2 className="text-2xl font-bold text-white mb-4">¿Preferís que lo hagamos nosotros?</h2>
            <p className="text-gray-300 mb-6">Si todo esto te parece mucho trabajo o simplemente no querés arriesgarte con tus objetos más valiosos, La Mudanza ofrece un <Link href="/embalaje" className="text-orange-400 hover:underline">servicio de embalaje profesional</Link> donde nuestro equipo se encarga de empacar todo tu hogar con materiales de primera calidad. Garantizamos que cada objeto llegue intacto al destino.</p>

            <div className="bg-zinc-800 border border-orange-500 rounded-lg p-8 mt-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">¿Necesitás ayuda con el embalaje?</h3>
              <p className="text-gray-300 mb-6">Nuestro equipo embala tu hogar completo con materiales profesionales. Más de 30 años de experiencia en mudanzas en Buenos Aires.</p>
              <a href="https://wa.me/541125535500" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-block mr-4">
                Consultar por WhatsApp
              </a>
              <a href="tel:+541125535500" className="border border-white text-white font-bold py-3 px-8 rounded-full inline-block">
                11-2553-5500
              </a>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Artículos relacionados</h2>
            <ul className="text-gray-300 space-y-3">
              <li>
                <Link href="/blog/como-embalar-vajilla-y-cristaleria" className="text-orange-400 hover:underline">
                  Cómo embalar vajilla y cristalería para una mudanza
                </Link>
              </li>
              <li>
                <Link href="/blog/checklist-para-mudarse" className="text-orange-400 hover:underline">
                  Checklist completo para mudarse sin olvidar nada
                </Link>
              </li>
            </ul>

          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
