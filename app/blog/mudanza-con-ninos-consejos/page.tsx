import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo mudarse con niños: consejos para que la transición sea más fácil | La Mudanza",
  description: "La mudanza puede ser difícil para los chicos. Estrategias para involucrarlos, mantener la rutina y hacer del cambio una experiencia positiva.",
  alternates: { canonical: "https://www.mudarme.com.ar/blog/mudanza-con-ninos-consejos" },
  openGraph: {
    type: "article",
    url: "https://www.mudarme.com.ar/blog/mudanza-con-ninos-consejos",
    publishedTime: "2026-06-24T00:00:00Z",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cómo mudarse con niños: consejos para que la transición sea más fácil",
  "description": "La mudanza puede ser difícil para los chicos. Estrategias para involucrarlos, mantener la rutina y hacer del cambio una experiencia positiva.",
  "url": "https://www.mudarme.com.ar/blog/mudanza-con-ninos-consejos",
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
    { "@type": "ListItem", "position": 3, "name": "Cómo mudarse con niños: consejos para que la transición sea más fácil", "item": "https://www.mudarme.com.ar/blog/mudanza-con-ninos-consejos" },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cómo mudarse con niños: consejos para que la transición sea más fácil</h1>
            <p className="text-gray-300 text-lg">La mudanza puede ser difícil para los chicos. Estrategias para involucrarlos, mantener la rutina y hacer del cambio una experiencia positiva.</p>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-3xl mx-auto prose prose-invert prose-lg">

            <h2 className="text-2xl font-bold text-white mb-4">Por qué la mudanza es estresante para los chicos</h2>
            <p className="text-gray-300 mb-6">Para los adultos, una mudanza es un proceso logístico con muchas partes móviles. Para los niños, es algo mucho más emocional: dejan su cuarto, su barrio, su escuela, sus amigos del edificio. El hogar es su mundo seguro y conocido, y mudarse puede sentirse como una pérdida.</p>
            <p className="text-gray-300 mb-6">Esto no significa que mudarse con hijos sea traumático — con la preparación adecuada, puede ser una experiencia de crecimiento. La clave está en cómo lo manejás como padre o madre durante todo el proceso.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Cómo comunicar la mudanza según la edad</h2>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Niños menores de 3 años</h3>
            <p className="text-gray-300 mb-6">Los bebés y los niños muy pequeños no comprenden el concepto de mudanza, pero sí sienten el estrés de los adultos y los cambios en la rutina. Lo más importante para esta edad es mantener la rutina de sueño y alimentación lo más estable posible durante todo el proceso. Llevan los objetos más queridos — el peluche, la frazadita — a mano, no en las cajas del camión.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Niños de 3 a 6 años</h3>
            <p className="text-gray-300 mb-6">A esta edad ya entienden que algo está pasando y pueden sentir ansiedad ante los cambios. Explicales la mudanza de manera simple y concreta: "Nos vamos a vivir a una casa nueva en otro barrio. Tu cama va a ir con nosotros, tus juguetes también, y vas a tener un cuarto nuevo." Enfatizá la continuidad — sus cosas van a estar ahí, sus papás van a estar ahí.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Niños de 6 a 12 años</h3>
            <p className="text-gray-300 mb-6">A esta edad los chicos entienden perfectamente y pueden tener reacciones fuertes, especialmente si implica cambiar de escuela o dejar amigos cercanos. Dales espacio para expresar sus emociones — enojo, tristeza, miedo — sin minimizarlas. Involucrá a tu hijo en el proceso: que elija el color de su cuarto nuevo, que ayude a embalar sus propias cosas.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Adolescentes</h3>
            <p className="text-gray-300 mb-6">Para los adolescentes, mudarse puede ser devastador, especialmente si implica cambiar de escuela y dejar el grupo de amigos. No lo subestimes. Avisales con la mayor anticipación posible, escuchá sus preocupaciones, y si es viable, involucrálos en la decisión o en elegir aspectos del nuevo hogar. Aseguráles que pueden mantener el contacto con sus amigos.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Cómo involucrar a los chicos en la mudanza</h2>
            <p className="text-gray-300 mb-6">Los niños que participan activamente en la mudanza la viven mejor que los que son dejados al margen. Algunas ideas concretas:</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>Que cada uno empaque sus propios juguetes y libros en una caja especial "de ellos".</li>
              <li>Decorá las cajas con marcadores de colores — les da identidad y hace el proceso más lúdico.</li>
              <li>Llevá a los chicos a conocer el nuevo lugar antes de la mudanza. Si la escuela nueva también está cerca, pasá por ahí.</li>
              <li>Dejá que elijan algo para su cuarto nuevo — una lámpara, un poster, algo que los entusiasme.</li>
              <li>Hacé una "ceremonia de despedida" del viejo hogar: fotos, recuerdos, quizás grabar un video juntos.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">El día de la mudanza con chicos</h2>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Lo que NO conviene hacer</h3>
            <p className="text-gray-300 mb-6">El día de la mudanza es caótico para los adultos. Tener a niños pequeños en el medio del operativo, entre cajas y muebles moviéndose, no es buena idea. No solo es peligroso, sino que los chicos pueden angustiarse mucho al ver su hogar vaciarse.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">La mejor solución: que estén en otro lado</h3>
            <p className="text-gray-300 mb-6">Organizá que los chicos pasen el día de la mudanza con abuelos, tíos o amigos de confianza. Pueden ir a una actividad que disfruten — cine, plaza, visita especial. Que lleguen al nuevo lugar cuando ya esté todo instalado y puedas mostrarles "su cuarto nuevo" de forma positiva.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">La mochila de lo esencial</h3>
            <p className="text-gray-300 mb-6">Preparales a cada chico una mochila o bolsa especial con lo que más necesitan: pijama, muda de ropa, cepillo de dientes, el peluche favorito, una tablet o juguete que los entretenga, y alguna comida que les guste. Esta bolsa va con ellos, no en el camión. Así, aunque la nueva casa todavía sea un caos de cajas, ellos tienen todo lo que necesitan a mano.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Los primeros días en el nuevo hogar</h2>
            <p className="text-gray-300 mb-6">Priorizá armar el cuarto de los chicos lo antes posible. Que tengan su espacio ordenado y familiar desde el primer día les da seguridad. Poné sus cosas en lugares parecidos a los del hogar anterior — mismo lado de la cama, mismos juguetes a mano.</p>
            <p className="text-gray-300 mb-6">Explorá el barrio nuevo juntos desde el primer fin de semana. Encuentren la plaza más cercana, el kiosco, la heladería. Crear nuevas rutinas familiares en los nuevos lugares ayuda a que el nuevo barrio se convierta en "su" barrio.</p>
            <p className="text-gray-300 mb-6">Y sobre todo: sé paciente. Los chicos pueden tardar semanas o meses en adaptarse completamente. Las regresiones (mojar la cama, chuparse el dedo, no querer dormir solos) son normales después de una mudanza y suelen desaparecer solas en pocas semanas.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Artículos relacionados</h2>
            <ul className="text-gray-300 mb-8 space-y-2">
              <li><Link href="/blog/checklist-para-mudarse" className="text-orange-400 hover:underline">Checklist completo para mudarse sin olvidar nada</Link></li>
              <li><Link href="/blog/mudanzas-con-mascotas" className="text-orange-400 hover:underline">Cómo mudarse con mascotas sin que sufran el cambio</Link></li>
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
