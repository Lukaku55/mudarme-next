import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo embalar vajilla y cristalería para una mudanza | La Mudanza",
  description: "Técnicas profesionales para empacar platos, copas y objetos frágiles sin que nada se rompa durante el traslado.",
  alternates: { canonical: "https://www.mudarme.com.ar/blog/como-embalar-vajilla-y-cristaleria" },
  openGraph: {
    type: "article",
    url: "https://www.mudarme.com.ar/blog/como-embalar-vajilla-y-cristaleria",
    publishedTime: "2026-06-24T00:00:00Z",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cómo embalar vajilla y cristalería para una mudanza",
  "description": "Técnicas profesionales para empacar platos, copas y objetos frágiles sin que nada se rompa durante el traslado.",
  "url": "https://www.mudarme.com.ar/blog/como-embalar-vajilla-y-cristaleria",
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
    { "@type": "ListItem", "position": 3, "name": "Cómo embalar vajilla y cristalería para una mudanza", "item": "https://www.mudarme.com.ar/blog/como-embalar-vajilla-y-cristaleria" },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cómo embalar vajilla y cristalería para una mudanza</h1>
            <p className="text-gray-300 text-lg">Técnicas profesionales para empacar platos, copas y objetos frágiles sin que nada se rompa durante el traslado.</p>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-3xl mx-auto prose prose-invert prose-lg">

            <h2 className="text-2xl font-bold text-white mb-4">El error más común al embalar objetos frágiles</h2>
            <p className="text-gray-300 mb-6">La mayoría de las personas que se mudan por primera vez cometen el mismo error: ponen la vajilla en una caja, le meten papel de diario arrugado encima y cierran con cinta. El resultado, casi siempre, son platos rotos y copas astilladas. El problema no es el traslado en sí — es que los objetos se mueven dentro de la caja, chocan entre sí y se rompen.</p>
            <p className="text-gray-300 mb-6">En La Mudanza embalamos cientos de mudanzas por año en Buenos Aires, y la vajilla y la cristalería son los ítems que más cuidado requieren. En este artículo te contamos exactamente cómo lo hacemos nosotros.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Materiales que necesitás para embalar vajilla</h2>
            <p className="text-gray-300 mb-6">Antes de empezar, juntá todos los materiales. Improvisar sobre la marcha genera errores. Los materiales que usamos los profesionales son:</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-white">Papel de seda o papel tissue:</strong> ideal para envolver cada pieza individualmente. No deja marca de tinta como el papel de diario.</li>
              <li><strong className="text-white">Film burbuja (bubble wrap):</strong> imprescindible para copas, vasos altos y piezas de cristal muy delicadas.</li>
              <li><strong className="text-white">Cajas de doble onda:</strong> más resistentes que las cajas simples. Para vajilla nunca uses cajas de cartón fino.</li>
              <li><strong className="text-white">Papel kraft o papel de diario:</strong> para rellenar espacios vacíos dentro de la caja.</li>
              <li><strong className="text-white">Cinta de embalaje ancha:</strong> para cerrar y reforzar las cajas. La cinta fina se despega con el peso.</li>
              <li><strong className="text-white">Marcador permanente:</strong> para identificar el contenido y poner "FRÁGIL" bien visible.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">Cómo embalar platos correctamente</h2>
            <p className="text-gray-300 mb-6">Este es el punto donde más se equivoca la gente. Los platos no se guardan acostados — se guardan parados, como si fueran discos de vinilo. Cuando van acostados y se apilan, el peso de los de arriba quiebra los de abajo.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Paso a paso para embalar platos</h3>
            <p className="text-gray-300 mb-4">Seguí este proceso para cada plato:</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>Colocá una hoja grande de papel de seda en una superficie plana.</li>
              <li>Apoyá el plato en el centro del papel en diagonal.</li>
              <li>Doblá las esquinas del papel sobre el plato y asegurálo con un pedacito de cinta.</li>
              <li>Hacé lo mismo con un segundo plato y apilá los dos juntos (con el papel entre ellos).</li>
              <li>Envolvé el paquete de dos platos con film burbuja y asegurálo.</li>
              <li>Repetí hasta tener grupos de 4 a 6 platos.</li>
              <li>Colocá los grupos parados dentro de la caja, nunca acostados.</li>
            </ul>
            <p className="text-gray-300 mb-6">El fondo de la caja debe tener al menos 5 cm de papel arrugado como amortiguación. Rellenás los espacios laterales con más papel para que los platos no se muevan.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Cómo embalar copas y cristalería</h2>
            <p className="text-gray-300 mb-6">Las copas son lo más delicado de empacar. El tallo es el punto más frágil y es lo primero que se rompe si la caja recibe un golpe lateral.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Técnica profesional para copas</h3>
            <p className="text-gray-300 mb-4">El truco es embolsar desde adentro hacia afuera:</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>Colocá una hoja de papel de seda adentro de la copa, rellenando el interior.</li>
              <li>Apoyá la copa boca abajo en una esquina de papel de seda grande.</li>
              <li>Enrollá la copa sobre el papel en diagonal hasta cubrirla completamente.</li>
              <li>Reforzá con una vuelta de film burbuja, especialmente en el tallo.</li>
              <li>Colocá las copas boca abajo dentro de la caja. Nunca hacia arriba — el peso las rompería.</li>
              <li>Nunca apilés copas unas sobre otras sin separación.</li>
            </ul>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Vasos y jarras</h3>
            <p className="text-gray-300 mb-6">Los vasos van igual que las copas pero son más resistentes. Aun así, siempre rellená el interior con papel y envolvé cada uno por separado. Las jarras de vidrio tienen la misma técnica pero prestá atención al asa — es el punto débil. Rodeala con una capa extra de film burbuja.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Cómo armar la caja correctamente</h2>
            <p className="text-gray-300 mb-6">Una caja bien armada es tan importante como el embalaje de cada pieza. Estos son los principios:</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-white">Peso máximo por caja:</strong> no más de 15 kg para vajilla. Las cajas muy pesadas se rompen y son difíciles de manejar.</li>
              <li><strong className="text-white">Lo más pesado abajo:</strong> los platos y fuentes pesadas van en el fondo, las copas y vasos arriba.</li>
              <li><strong className="text-white">Sin espacios vacíos:</strong> cualquier hueco hace que las cosas se muevan. Rellenás con papel arrugado hasta que nada se mueva cuando agitás la caja.</li>
              <li><strong className="text-white">Refuerzo del fondo:</strong> cruzá la cinta en el fondo de la caja en forma de H para mayor resistencia.</li>
              <li><strong className="text-white">Identificación clara:</strong> escribí en dos caras de la caja "FRÁGIL — VAJILLA — ESTE LADO ARRIBA".</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">Qué hacer con piezas especiales</h2>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Fuentes y bandejas grandes</h3>
            <p className="text-gray-300 mb-6">Las fuentes van individualmente envueltas en papel y paradas dentro de la caja, igual que los platos. Si son muy grandes para una caja estándar, podés armar una caja a medida con cartón doble onda cortado y armado específicamente para esa pieza.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Tazas y pocillos</h3>
            <p className="text-gray-300 mb-6">Las tazas tienen dos puntos débiles: el asa y el borde. Envolvé el asa con film burbuja por separado antes de envolver la taza completa con papel de seda. Guardálas boca abajo, nunca boca arriba, y no las apilés.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Piezas de porcelana o cerámica de valor</h3>
            <p className="text-gray-300 mb-6">Para vajilla de alto valor —herencias familiares, piezas de colección— recomendamos embalaje doble: primero papel de seda, luego film burbuja, y dentro de una caja pequeña individual con relleno. Esa caja pequeña va dentro de una caja más grande con amortiguación en todos los lados. Es lo que hacemos cuando nos dicen "esto es irreemplazable".</p>

            <h2 className="text-2xl font-bold text-white mb-4">¿Conviene contratar el embalaje profesional?</h2>
            <p className="text-gray-300 mb-6">Si tenés mucha vajilla, piezas de valor o simplemente no tenés tiempo, el servicio de embalaje profesional es una buena inversión. Nuestro equipo en La Mudanza llega a tu domicilio con todos los materiales, embala cada pieza con técnica profesional y te garantiza que nada se rompe durante el traslado. El costo del embalaje se amortiza fácilmente con la tranquilidad de no perder nada.</p>
            <p className="text-gray-300 mb-6">Si preferís embalar vos mismo, con las técnicas de este artículo tenés las herramientas para hacerlo bien. Lo importante es no apurarse — el embalaje de vajilla requiere paciencia y materiales adecuados.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Artículos relacionados</h2>
            <ul className="text-gray-300 mb-8 space-y-2">
              <li><Link href="/embalaje-profesional" className="text-orange-400 hover:underline">Servicio de embalaje profesional en Buenos Aires</Link></li>
              <li><Link href="/blog/checklist-para-mudarse" className="text-orange-400 hover:underline">Checklist completo para mudarse sin olvidar nada</Link></li>
              <li><Link href="/blog/cuanto-cuesta-una-mudanza-en-buenos-aires" className="text-orange-400 hover:underline">¿Cuánto cuesta una mudanza en Buenos Aires?</Link></li>
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
