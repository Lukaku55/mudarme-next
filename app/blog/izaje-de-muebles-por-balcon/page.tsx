import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Izaje de muebles por balcón: cuándo es necesario y cómo funciona | La Mudanza",
  description: "Qué es el izaje de muebles, en qué situaciones se usa, cómo se realiza y qué tener en cuenta antes de contratarlo.",
  alternates: { canonical: "https://www.mudarme.com.ar/blog/izaje-de-muebles-por-balcon" },
  openGraph: {
    type: "article",
    url: "https://www.mudarme.com.ar/blog/izaje-de-muebles-por-balcon",
    publishedTime: "2026-06-24T00:00:00Z",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Izaje de muebles por balcón: cuándo es necesario y cómo funciona",
  "description": "Qué es el izaje de muebles, en qué situaciones se usa, cómo se realiza y qué tener en cuenta antes de contratarlo.",
  "url": "https://www.mudarme.com.ar/blog/izaje-de-muebles-por-balcon",
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
    { "@type": "ListItem", "position": 3, "name": "Izaje de muebles por balcón: cuándo es necesario y cómo funciona", "item": "https://www.mudarme.com.ar/blog/izaje-de-muebles-por-balcon" },
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
            <span className="text-orange-400 text-sm uppercase tracking-widest block mb-3">Servicios</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Izaje de muebles por balcón: cuándo es necesario y cómo funciona</h1>
            <p className="text-gray-300 text-lg">Qué es el izaje de muebles, en qué situaciones se usa, cómo se realiza y qué tener en cuenta antes de contratarlo.</p>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-3xl mx-auto prose prose-invert prose-lg">

            <h2 className="text-2xl font-bold text-white mb-4">¿Qué es el izaje de muebles?</h2>
            <p className="text-gray-300 mb-6">El izaje de muebles es la técnica de subir o bajar muebles por el exterior de un edificio usando cuerdas, poleas y equipos especializados, generalmente a través del balcón o una ventana grande. Es la solución cuando un mueble no puede pasar por las escaleras ni cabe en el ascensor del edificio.</p>
            <p className="text-gray-300 mb-6">Es un servicio mucho más común de lo que la gente imagina en Buenos Aires. Los edificios porteños antiguos tienen escaleras angostas, curvas y con techos bajos que hacen imposible el paso de muebles grandes. Los ascensores, si existen, suelen ser minúsculos. El izaje es la solución profesional a este problema.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Cuándo se necesita el izaje</h2>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Muebles que no pasan por escaleras ni ascensor</h3>
            <p className="text-gray-300 mb-6">Los casos más comunes son sofás grandes de tres cuerpos (especialmente los en L), sommiers de dos plazas y media, armarios o roperos de grandes dimensiones, y algunos tipos de heladeras americanas. Antes de la mudanza, una empresa profesional mide los muebles y el acceso para determinar si el izaje es necesario.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Edificios sin ascensor en pisos altos</h3>
            <p className="text-gray-300 mb-6">En muchos edificios de los años 40 y 50 en barrios como San Telmo, Balvanera, Almagro o Villa Crespo, los ascensores simplemente no existen o son de tipo "baulera" — muy pequeños. Subir un sommier de dos plazas a un cuarto piso sin ascensor por una escalera caracol es, en la mayoría de los casos, imposible sin izaje.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Pianos y equipos especiales</h3>
            <p className="text-gray-300 mb-6">Los pianos verticales y de cola casi siempre requieren izaje. También algunos equipos de gimnasio grandes, como bicicletas fijas pesadas o máquinas de musculación. Cualquier objeto que combine gran tamaño con mucho peso entra en esta categoría.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Cómo se realiza el izaje de muebles</h2>
            <p className="text-gray-300 mb-6">El proceso de izaje requiere personal especializado y equipamiento específico. No es algo que se improvisa — hay riesgos reales para las personas, los muebles y las propiedades si no se hace correctamente.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">El equipo y los materiales</h3>
            <p className="text-gray-300 mb-6">Se utilizan cuerdas trenzadas de alta resistencia, poleas fijadas en puntos sólidos del balcón o la estructura del edificio, fajas de tela para envolver el mueble sin dañarlo y, en algunos casos, una escalera de izaje portátil que se extiende por la fachada del edificio. El personal suele ser de al menos tres personas: dos arriba para recibir el mueble y guiarlo hacia adentro, y uno abajo coordinando el ascenso.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">El proceso paso a paso</h3>
            <p className="text-gray-300 mb-6">Primero se protege el mueble con mantas y film para evitar golpes y rasguños durante el ascenso. Luego se aseguran las cuerdas y las fajas en puntos estratégicos del mueble para que quede perfectamente equilibrado durante el izaje. Desde el balcón, el equipo tira de las cuerdas pasadas por la polea mientras el mueble asciende lentamente por la fachada. Una vez que llega al nivel del balcón, se lo guía hacia adentro de manera controlada.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Tiempo que lleva</h3>
            <p className="text-gray-300 mb-6">Un izaje típico de un sofá grande o un sommier lleva entre 20 y 45 minutos, incluyendo la preparación y el aseguramiento de cuerdas. Para un piano, puede llevar más tiempo dependiendo del peso y el piso.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Permisos y consideraciones en Buenos Aires</h2>
            <p className="text-gray-300 mb-6">En la Ciudad de Buenos Aires, cuando el izaje requiere ocupar parte de la vereda o se realiza en edificios con fachadas patrimoniales, puede requerirse un permiso de la administración del edificio o del consorcio. En calles muy transitadas o angostas del microcentro histórico, hay que coordinar con el encargado del edificio y avisar a los vecinos.</p>
            <p className="text-gray-300 mb-6">Una empresa seria como La Mudanza evalúa todos estos factores antes de la mudanza y te avisa qué gestiones son necesarias. No te sorprende el día de la mudanza con una restricción que impide el trabajo.</p>

            <h2 className="text-2xl font-bold text-white mb-4">¿El izaje tiene algún riesgo para los muebles?</h2>
            <p className="text-gray-300 mb-6">Cuando lo hace una empresa profesional con el equipamiento adecuado, el riesgo es mínimo. Los muebles van protegidos con mantas y el ascenso se controla en todo momento. Los accidentes ocurren cuando lo hace gente sin experiencia o sin el equipamiento correcto — cuerdas que se cortan, muebles que se desequilibran, golpes contra la fachada.</p>
            <p className="text-gray-300 mb-6">En La Mudanza, todos nuestros operativos de izaje están cubiertos por nuestro seguro de responsabilidad civil y carga transportada. Si algo se dañara durante el proceso — lo que es rarísimo — está cubierto.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Costo del servicio de izaje</h2>
            <p className="text-gray-300 mb-6">El izaje tiene un costo adicional al de la mudanza estándar. El precio depende de la cantidad de muebles a izar, el piso al que se sube (a más altura, más trabajo) y la complejidad del acceso. En La Mudanza incluimos la evaluación de necesidad de izaje en el presupuesto inicial — si es necesario, te lo decimos antes, no el día de la mudanza.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Artículos relacionados</h2>
            <ul className="text-gray-300 mb-8 space-y-2">
              <li><Link href="/izajes" className="text-orange-400 hover:underline">Servicio de izaje de muebles en Buenos Aires</Link></li>
              <li><Link href="/mudanzas-residenciales" className="text-orange-400 hover:underline">Mudanzas residenciales en Buenos Aires</Link></li>
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
