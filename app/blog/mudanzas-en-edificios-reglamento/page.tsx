import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en edificios: el reglamento de copropiedad y todo lo que tenés que saber | La Mudanza",
  description: "Cada edificio tiene sus reglas para mudanzas. Horarios habilitados, uso del ascensor de servicio, depósito al consorcio y más. Guía completa para mudarte sin problemas.",
  alternates: { canonical: "https://www.mudarme.com.ar/blog/mudanzas-en-edificios-reglamento" },
  openGraph: {
    type: "article",
    url: "https://www.mudarme.com.ar/blog/mudanzas-en-edificios-reglamento",
    publishedTime: "2026-07-02T00:00:00Z",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en edificios: el reglamento de copropiedad y todo lo que tenés que saber",
  "description": "Cada edificio tiene sus reglas para mudanzas. Horarios habilitados, uso del ascensor de servicio, depósito al consorcio y más. Guía completa para mudarte sin problemas.",
  "url": "https://www.mudarme.com.ar/blog/mudanzas-en-edificios-reglamento",
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
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en edificios: el reglamento de copropiedad", "item": "https://www.mudarme.com.ar/blog/mudanzas-en-edificios-reglamento" },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mudanzas en edificios: el reglamento de copropiedad y todo lo que tenés que saber</h1>
            <p className="text-gray-300 text-lg">Cada edificio tiene sus reglas para mudanzas. Horarios habilitados, uso del ascensor de servicio, depósito al consorcio y más. Guía completa para mudarte sin problemas.</p>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-3xl mx-auto prose prose-invert prose-lg">

            <h2 className="text-2xl font-bold text-white mb-4">Por qué los edificios tienen reglamento de mudanzas</h2>
            <p className="text-gray-300 mb-6">Mudarse en un edificio de propiedad horizontal no es lo mismo que hacerlo en una casa. Las áreas comunes — el hall, los pasillos, el ascensor, la entrada — son compartidas por todos los vecinos y están sujetas al reglamento de copropiedad. Ese documento, que cada propietario o inquilino acepta al ingresar, establece cómo deben realizarse las mudanzas para proteger las instalaciones y no perturbar la convivencia. Conocerlo antes del día de la mudanza te evita conflictos con el encargado, multas del consorcio y demoras inesperadas.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Los horarios más comunes para mudarse en edificios</h2>
            <p className="text-gray-300 mb-6">La mayoría de los reglamentos de copropiedad en Buenos Aires permiten las mudanzas de lunes a viernes entre las 8 y las 18 horas, y los sábados hasta las 13 horas. Los domingos y feriados suelen estar prohibidos. Estos horarios buscan preservar el descanso de los vecinos y respetar los turnos del encargado. Antes de contratar tu mudanza, confirmá con la administración del edificio cuáles son los horarios exactos habilitados: algunos consorcios son más restrictivos y solo permiten el ingreso hasta las 17 horas o exigen que el camión esté fuera del edificio antes de las 16.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Cómo avisar al consorcio o la administración con anticipación</h2>
            <p className="text-gray-300 mb-6">La mayoría de los reglamentos exigen notificar a la administración del consorcio con al menos 48 a 72 horas de anticipación. Esto sirve para reservar el ascensor de servicio, coordinar con el encargado y evitar que otro vecino esté mudándose el mismo día. Algunos edificios requieren que la empresa de mudanzas presente una nota o constancia con sus datos. En La Mudanza podemos facilitarte la documentación que necesites para presentar ante el consorcio sin inconvenientes. No dejes este trámite para último momento: una mudanza bloqueada en el hall de entrada por falta de autorización puede costarte muy caro.</p>

            <h2 className="text-2xl font-bold text-white mb-4">El depósito al consorcio: qué es, cuánto suele ser y cuándo se devuelve</h2>
            <p className="text-gray-300 mb-6">Muchos edificios de CABA y del GBA exigen un depósito en garantía al consorcio antes de autorizar la mudanza. Este depósito cubre posibles daños a las áreas comunes: rayones en las paredes del pasillo, golpes en las puertas del ascensor o daños en el piso del hall. El monto varía mucho según el edificio: puede ir desde el equivalente a unas pocas expensas hasta sumas más significativas. El depósito se devuelve una vez que el encargado o la administración verifican que no hubo daños. Si contratás una empresa de mudanzas profesional que trabaja con protecciones adecuadas, lo más probable es que lo recuperes sin ningún problema.</p>

            <h2 className="text-2xl font-bold text-white mb-4">El ascensor de servicio: qué pasa cuando no hay uno</h2>
            <p className="text-gray-300 mb-6">En los edificios con ascensor de servicio, la mudanza se realiza exclusivamente por ese medio. Usar el ascensor principal con muebles grandes está prohibido en casi todos los reglamentos. Si el edificio no tiene ascensor de servicio — algo muy común en edificios más antiguos de CABA — hay dos opciones: utilizar el ascensor principal con las protecciones reglamentarias (alfombra en el piso y cubrimiento de las paredes interiores) o, si los muebles no entran, usar la escalera. En pisos altos sin ascensor de servicio, la escalera implica más tiempo, más personal y mayor esfuerzo. Es fundamental aclararlo al pedir el presupuesto para que no haya sorpresas el día de la mudanza.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Protección de las partes comunes: una obligación, no un opcional</h2>
            <p className="text-gray-300 mb-6">El reglamento de copropiedad generalmente exige que se protejan las áreas comunes durante la mudanza. Esto incluye colocar esquineros de cartón o goma en los ángulos de las paredes de los pasillos, cubrir el piso del ascensor con una alfombra de protección y forrar las paredes interiores del ascensor con frazadas o material acolchado. Una empresa de mudanzas profesional lleva consigo todos estos materiales. Si contratás a alguien que no los tiene o no los usa, el riesgo de daños — y de perder el depósito — es mucho mayor.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Qué pasa si no cumplís el reglamento</h2>
            <p className="text-gray-300 mb-6">No respetar el reglamento de copropiedad puede traer consecuencias concretas. El consorcio puede aplicarte una multa, descontarla del depósito o incluso iniciar acciones legales si los daños son significativos. Además, podés tener problemas con el encargado que puede negarse a abrir el acceso o a reservarte el ascensor. En algunos casos, una mudanza mal planificada puede terminar en un conflicto vecinal que se extiende mucho más allá del día de la mudanza. Cumplir con las reglas no es burocracia: es garantía de que todo salga bien.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Cómo una empresa de mudanzas profesional maneja todo esto</h2>
            <p className="text-gray-300 mb-6">Con más de 30 años de experiencia en mudanzas en Buenos Aires, en La Mudanza conocemos los reglamentos de copropiedad y sabemos cómo trabajar con los consorcios. Llevamos todos los materiales de protección necesarios, podemos presentar documentación ante la administración y coordinamos con el encargado desde el primer momento. No improvisamos: cada mudanza en edificio se planifica con anticipación para cumplir los horarios, usar los accesos correctos y dejar las áreas comunes en perfecto estado. Eso es lo que diferencia a una empresa seria de quien simplemente alquila un camión.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Diferencia entre edificios de CABA y del GBA</h2>
            <p className="text-gray-300 mb-6">En general, los edificios de la Ciudad de Buenos Aires tienden a tener reglamentos más estrictos, especialmente en barrios como Palermo, Belgrano, Recoleta o Puerto Madero, donde los consorcios están muy organizados. En el Gran Buenos Aires la situación es más variable: algunos edificios tienen reglamentos igual de detallados, mientras que otros son más flexibles y el acuerdo con el encargado puede ser suficiente. Independientemente de la zona, siempre recomendamos consultar con la administración antes de la mudanza. No dar por sentado que "en este edificio no piden nada" es la mejor forma de evitar sorpresas.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Tips para coordinar el día de la mudanza en un edificio</h2>
            <p className="text-gray-300 mb-3">Una buena coordinación previa es la clave para que el día D salga sin contratiempos:</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>Confirmá con la administración la reserva del ascensor de servicio el día anterior</li>
              <li>Avisale al encargado a qué hora llegará el camión para que esté presente</li>
              <li>Verificá si hay lugar habilitado para estacionar el camión frente al edificio o si necesitás gestionar un permiso en el municipio</li>
              <li>Tené a mano el número de la administración por si surge algún inconveniente en el momento</li>
              <li>Asegurate de que el depósito al consorcio esté pagado antes del día de la mudanza</li>
              <li>Coordiná con la empresa de mudanzas que lleguen con tiempo suficiente para instalar las protecciones antes de empezar a bajar muebles</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">Artículos relacionados</h2>
            <ul className="text-gray-300 mb-8 space-y-2">
              <li>
                <Link href="/blog/checklist-para-mudarse" className="text-orange-400 hover:underline">
                  Checklist completo para mudarse sin olvidar nada
                </Link>
              </li>
              <li>
                <Link href="/blog/cuanto-tiempo-lleva-una-mudanza" className="text-orange-400 hover:underline">
                  ¿Cuánto tiempo lleva una mudanza?
                </Link>
              </li>
            </ul>

            <div className="bg-zinc-800 border border-orange-500 rounded-lg p-8 mt-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">¿Te mudás a o desde un edificio?</h3>
              <p className="text-gray-300 mb-6">En La Mudanza conocemos todos los reglamentos de copropiedad. Llevamos los materiales de protección, coordinamos con el consorcio y te garantizamos una mudanza sin sorpresas ni multas.</p>
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
