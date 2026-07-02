import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo mover un piano: lo que tenés que saber antes de llamar | La Mudanza",
  description: "Mover un piano es una de las tareas más complejas en una mudanza. Peso, tamaño, acceso y afinación: todo lo que debés considerar antes de contratar el servicio.",
  alternates: { canonical: "https://www.mudarme.com.ar/blog/mudanza-de-piano" },
  openGraph: {
    type: "article",
    url: "https://www.mudarme.com.ar/blog/mudanza-de-piano",
    publishedTime: "2026-07-02T00:00:00Z",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cómo mover un piano: lo que tenés que saber antes de llamar",
  "description": "Mover un piano es una de las tareas más complejas en una mudanza. Peso, tamaño, acceso y afinación: todo lo que debés considerar antes de contratar el servicio.",
  "url": "https://www.mudarme.com.ar/blog/mudanza-de-piano",
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
    { "@type": "ListItem", "position": 3, "name": "Cómo mover un piano: lo que tenés que saber antes de llamar", "item": "https://www.mudarme.com.ar/blog/mudanza-de-piano" },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cómo mover un piano: lo que tenés que saber antes de llamar</h1>
            <p className="text-gray-300 text-lg">Mover un piano es una de las tareas más complejas en una mudanza. Peso, tamaño, acceso y afinación: todo lo que debés considerar antes de contratar el servicio.</p>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-3xl mx-auto prose prose-invert prose-lg">

            <h2 className="text-2xl font-bold text-white mb-4">Por qué los pianos son el objeto más difícil de mover</h2>
            <p className="text-gray-300 mb-6">En más de 30 años haciendo mudanzas en Buenos Aires, si hay algo que aprendimos es que ningún objeto pone más a prueba a un equipo que un piano. No es solo cuestión de peso — aunque eso ya es un problema enorme — sino de la combinación de factores que entran en juego: fragilidad estructural, forma irregular, sensibilidad a los cambios de temperatura y humedad, y el riesgo permanente de dañar pasillos, escaleras y pisos durante el traslado. Una mudanza de piano en Buenos Aires requiere planificación, equipo especializado y experiencia. Sin eso, el resultado puede ser un instrumento dañado y reparaciones costosas que nadie quiere afrontar.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Tipos de piano y sus desafíos</h2>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Piano vertical (upright o consoleta)</h3>
            <p className="text-gray-300 mb-6">Los pianos verticales — también llamados uprights o consoletas — son los más comunes en los hogares porteños. Su forma rectangular los hace relativamente más manejables que un piano de cola, pero no los hace fáciles. Un piano vertical pesa entre 200 y 300 kg dependiendo del modelo y la época de fabricación. Los pianos más antiguos, con estructura de hierro macizo, pueden superar ese rango. El desafío principal es que su forma vertical concentra el peso en un área pequeña, lo que hace que sea muy inestable si no se trabaja con las técnicas correctas.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Piano de cola</h3>
            <p className="text-gray-300 mb-6">El piano de cola es otra historia. Dependiendo del tamaño — desde un baby grand hasta un piano de concierto — el peso oscila entre 250 y 600 kg. Además del peso, su forma horizontal y sus tres patas hacen que el proceso de traslado sea considerablemente más complejo: las patas deben desmontarse, el instrumento debe ser acostado sobre una plataforma especial y envuelto con mantas protectoras antes de ser movido. En una mudanza de piano de cola en Buenos Aires, el tiempo y la logística son el doble que para un vertical.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Qué equipo se necesita para mover un piano</h2>
            <p className="text-gray-300 mb-6">Mover un piano no es cuestión de juntar varios amigos forzudos. El equipo correcto hace toda la diferencia entre un traslado exitoso y un desastre. En La Mudanza usamos fajas especiales de carga que permiten distribuir el peso y proteger la caja del instrumento, carretillas reforzadas con ruedas de goma para no dañar los pisos, tablas de madera para proteger umbrales y escalones, y mantas acolchadas para envolver el piano por completo. Además, el equipo de al menos tres o cuatro personas entrenadas es indispensable: dos no alcanzan para un piano vertical, y para un piano de cola se necesitan aún más manos.</p>

            <h2 className="text-2xl font-bold text-white mb-4">El problema de las escaleras y los pisos altos</h2>
            <p className="text-gray-300 mb-6">Una de las preguntas que más recibimos cuando alguien busca una mudanza de piano en Buenos Aires es qué pasa cuando el instrumento está en un piso alto sin ascensor. La respuesta depende de cuántos pisos hay, del ancho de la escalera y del tipo de piano. En muchos casos del primer o segundo piso se puede trabajar con técnicas de rampa y faja. Pero cuando el acceso es complicado — escaleras estrechas, curvas pronunciadas, pisos altos sin ascensor — la única solución es el izaje por el exterior del edificio. Esto requiere un sistema de poleas y un equipo con experiencia en trabajos en altura. No es algo que deba improvisarse bajo ninguna circunstancia.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Qué le pasa al piano si no se mueve bien</h2>
            <p className="text-gray-300 mb-6">Las consecuencias de un traslado mal ejecutado van mucho más allá de un golpe en la madera. Un piano es un instrumento de precisión con miles de piezas internas. Un impacto fuerte puede dañar la caja de resonancia, que es la gran lámina de madera que amplifica el sonido y que resulta extremadamente costosa de reparar. También pueden quebrarse los martillos internos, trabarse las teclas o doblarse las cuerdas. En los casos más graves, el cuerpo del piano puede partirse o deformarse de manera irreparable. Esto no solo significa perder un instrumento de valor económico, sino también sentimental.</p>

            <h2 className="text-2xl font-bold text-white mb-4">La afinación después de la mudanza: siempre necesaria</h2>
            <p className="text-gray-300 mb-6">Hay algo que muchos propietarios de piano no saben y que conviene aclarar desde el principio: todo piano se desafina después de una mudanza, incluso cuando el traslado se hace perfectamente. Esto se debe a los cambios en la tensión de las cuerdas provocados por el movimiento, los cambios de temperatura y humedad entre un ambiente y otro, y el simple hecho de que el instrumento necesita tiempo para adaptarse al nuevo espacio. La recomendación de cualquier afinador profesional es esperar entre dos y cuatro semanas después de la mudanza antes de afinar, para que el piano se estabilice en el nuevo ambiente. Planificá ese gasto — entre $40.000 y $80.000 pesos según el estado del instrumento — dentro del presupuesto total de la mudanza.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Cómo preparar el piano para el traslado</h2>
            <p className="text-gray-300 mb-3">Antes de que llegue el equipo, hay algunas cosas que podés hacer para facilitar el trabajo:</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>Cerrá la tapa del teclado con llave si tu piano la tiene, o asegurarla con cinta de papel (nunca cinta de embalar sobre la madera)</li>
              <li>Cerrá el atril y cualquier parte móvil del instrumento</li>
              <li>Asegurate de que el camino desde el piano hasta la salida esté completamente despejado</li>
              <li>Medí los pasillos, puertas y escaleras de antemano y comunícalo al servicio de mudanza</li>
              <li>Avisá si hay alfombras, pisos de madera delicados o umbrales con desnivel</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">Por qué no intentarlo sin profesionales</h2>
            <p className="text-gray-300 mb-6">Cada tanto escuchamos historias de alguien que intentó mover un piano con amigos, un carro de supermercado y mucho entusiasmo. El final casi siempre es el mismo: una lesión en la espalda, un marco de puerta destrozado o el piano con un golpe en la parte inferior que nadie sabe cómo reparar. Un piano no es un heladera. No tiene manijas pensadas para cargarlo, su peso se distribuye de manera irregular y su superficie lacada se raya con cualquier roce. El costo de un servicio profesional de mudanza de piano en Buenos Aires es incomparablemente menor al costo de reparar los daños de un traslado mal hecho.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Cuánto cuesta mover un piano en Buenos Aires</h2>
            <p className="text-gray-300 mb-6">El precio de la mudanza de un piano depende de varios factores: el tipo de piano (vertical o de cola), el piso de origen y destino, si hay ascensor o no, y la distancia del traslado. Un piano vertical en planta baja o primer piso con acceso directo tiene un costo base; si hay escaleras sin ascensor o se necesita izaje, el precio sube considerablemente. Para un piano de cola, la tarifa es mayor por el tiempo y la complejidad del trabajo. En La Mudanza hacemos presupuestos sin cargo y sin compromiso: te pedimos los datos del piano y el acceso, y te cotizamos en el día. No hay sorpresas al momento de pagar.</p>

            <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 mt-10 mb-10">
              <h3 className="text-xl font-bold text-white mb-3">Artículos relacionados</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog/izaje-de-muebles-por-balcon" className="text-orange-400 hover:underline">
                    Izaje de muebles por balcón: cuándo es necesario y cómo funciona →
                  </Link>
                </li>
                <li>
                  <Link href="/blog/cuanto-cuesta-una-mudanza-en-buenos-aires" className="text-orange-400 hover:underline">
                    ¿Cuánto cuesta una mudanza en Buenos Aires? →
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-800 border border-orange-500 rounded-lg p-8 mt-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">¿Necesitás mover un piano en Buenos Aires?</h3>
              <p className="text-gray-300 mb-6">En La Mudanza tenemos más de 30 años de experiencia trasladando pianos con el cuidado que merecen. Pedí tu presupuesto sin cargo y sin compromiso.</p>
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
