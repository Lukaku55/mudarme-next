import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Primer departamento: guía completa para tu primera mudanza independiente | La Mudanza",
  description: "¿Te mudás solo por primera vez? Qué llevar, qué no olvidar, cómo planificar el presupuesto y los errores más comunes en la primera mudanza independiente.",
  alternates: { canonical: "https://www.mudarme.com.ar/blog/primer-departamento-mudanza" },
  openGraph: {
    type: "article",
    url: "https://www.mudarme.com.ar/blog/primer-departamento-mudanza",
    publishedTime: "2026-07-02T00:00:00Z",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Primer departamento: guía completa para tu primera mudanza independiente",
  "description": "¿Te mudás solo por primera vez? Qué llevar, qué no olvidar, cómo planificar el presupuesto y los errores más comunes en la primera mudanza independiente.",
  "url": "https://www.mudarme.com.ar/blog/primer-departamento-mudanza",
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
    { "@type": "ListItem", "position": 3, "name": "Primer departamento: guía completa para tu primera mudanza independiente", "item": "https://www.mudarme.com.ar/blog/primer-departamento-mudanza" },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Primer departamento: guía completa para tu primera mudanza independiente</h1>
            <p className="text-gray-300 text-lg">¿Te mudás solo por primera vez? Qué llevar, qué no olvidar, cómo planificar el presupuesto y los errores más comunes en la primera mudanza independiente.</p>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-3xl mx-auto prose prose-invert prose-lg">

            <h2 className="text-2xl font-bold text-white mb-4">El gran paso: mudarte solo por primera vez</h2>
            <p className="text-gray-300 mb-6">Mudarse al primer departamento propio es uno de esos momentos que mezcla emoción, ansiedad y una lista interminable de cosas por resolver. Si estás en ese proceso — tenés entre 22 y 30 años, encontraste un lugar y ahora no sabés por dónde empezar — esta guía es para vos. Con más de 30 años mudando gente en Buenos Aires, en La Mudanza vimos todos los errores posibles. Acá te contamos cómo evitarlos.</p>

            <h2 className="text-2xl font-bold text-white mb-4">El checklist de lo que SÍ necesitás en tu primer depto</h2>
            <p className="text-gray-300 mb-3">Antes de llenarte de cosas, separá lo esencial de lo prescindible. Lo que no puede faltar el primer día:</p>
            <ul className="text-gray-300 mb-3 space-y-2">
              <li><strong className="text-white">Cama y colchón</strong> — dormir bien es innegociable desde el primer día.</li>
              <li><strong className="text-white">Ropa de cama</strong> — sábanas, almohada, frazada o duvet.</li>
              <li><strong className="text-white">Heladera</strong> — si el depto no incluye una, es prioridad.</li>
              <li><strong className="text-white">Mesa y al menos una silla</strong> — para comer y trabajar.</li>
              <li><strong className="text-white">Utensilios básicos de cocina</strong> — una sartén, una olla, cubiertos, platos.</li>
              <li><strong className="text-white">Elementos de limpieza</strong> — trapo de piso, escoba, lavandina, jabón.</li>
              <li><strong className="text-white">Cortinas o blackout</strong> — a veces se olvidan y la primera noche es un infierno con el sol de mañana.</li>
            </ul>
            <p className="text-gray-300 mb-6">Lo que puede esperar: sillón, biblioteca, escritorio de diseño, decoración, segunda silla. Todo eso lo vas a ir incorporando con el tiempo. No necesitás tener el depto completo el día uno.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Qué muebles priorizar y en qué orden</h2>
            <p className="text-gray-300 mb-6">La regla práctica es esta: primero lo que necesitás para dormir, comer y trabajar. Un colchón y una base de cama (o incluso el colchón en el piso el primer mes) es perfectamente válido mientras organizás el resto. La heladera es fundamental si vas a cocinar. Una mesa y sillas básicas permiten que el espacio sea funcional. El resto — placard, sofá, mesa ratona, decoración — es una inversión progresiva. Muchos cometen el error de querer tener todo perfecto desde el primer día y terminan endeudados o con el depto lleno de cosas que no necesitan.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Cómo calcular el volumen de tu mudanza</h2>
            <p className="text-gray-300 mb-6">Una persona sola que se muda por primera vez, en general, tiene mucho menos de lo que cree. Si venís de la casa de tus viejos con lo básico — ropa, algunos muebles chicos, caja de libros, electrodomésticos pequeños — lo más probable es que entre todo en una camioneta o en un camión chico. No necesitás un camión de 20 toneladas para un monoambiente o dos ambientes con pocas pertenencias. Cuando pedís presupuesto, describí bien lo que llevás: cuántas cajas estimás, si llevás muebles grandes, si tenés lavarropas o solo ropa. Eso determina el vehículo necesario y el precio.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Los gastos que no te esperabas</h2>
            <p className="text-gray-300 mb-3">El alquiler es solo el comienzo. Cuando tomás tu primer depto, aparecen gastos que muchos no contemplan:</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-white">Llave en mano o depósito</strong> — según el contrato, podés tener que pagar uno o dos meses por adelantado más el primer mes.</li>
              <li><strong className="text-white">Expensas</strong> — pueden ser altas dependiendo del edificio. Preguntá cuánto son antes de firmar.</li>
              <li><strong className="text-white">ABL (Alumbrado, Barrido y Limpieza)</strong> — si el depto está a tu nombre, te toca pagarlo.</li>
              <li><strong className="text-white">Internet</strong> — instalación más cuota mensual. Calculá entre 2 y 4 semanas para que llegue el técnico.</li>
              <li><strong className="text-white">Gas y luz</strong> — pasarlos a tu nombre lleva tiempo y hay que pagar los consumos desde que entrás.</li>
              <li><strong className="text-white">Seguro del inquilino</strong> — muchos contratos lo exigen; cubre daños al inmueble y a terceros.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">Errores comunes en la primera mudanza</h2>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Llevarte demasiadas cosas de la casa paterna</h3>
            <p className="text-gray-300 mb-6">Este es el error número uno. Cuando vivís con tus viejos, tendés a acumular años de cosas: ropa vieja, libros que no leés, objetos que "por las dudas". La mudanza al primer depto es la oportunidad perfecta para hacer una limpieza real. Si no lo usaste en el último año, no lo lleves. Menos volumen es menor costo de mudanza y un depto más ordenado desde el primer día.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">No medir los muebles antes</h3>
            <p className="text-gray-300 mb-6">Uno de los llamados más frecuentes que recibimos es de alguien que compró un sofá y no entra por la puerta o por el ascensor. Antes de comprar cualquier mueble grande — o de llevarte algo de tu casa anterior — medí el mueble, medí la puerta de entrada del edificio, el ascensor si hay, y el espacio en el que va a quedar. Dos minutos de medición evitan un dolor de cabeza enorme el día de la mudanza.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Cómo medir los espacios del nuevo depto</h2>
            <p className="text-gray-300 mb-3">Antes de comprar o de llevar cualquier mueble, hacé este recorrido con una cinta métrica:</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>Medí el ancho y alto de la puerta de entrada al edificio y al depto.</li>
              <li>Si hay ascensor, medí su interior (ancho, profundidad y alto de la cabina).</li>
              <li>Medí los ambientes donde van los muebles grandes: dormitorio, living, cocina.</li>
              <li>Anotá dónde están las ventanas y puertas interiores para saber cómo distribuir.</li>
            </ul>
            <p className="text-gray-300 mb-6">Con esas medidas podés armar un plano simple en papel o usar apps gratuitas como Planner 5D o RoomSketcher para ver cómo queda todo antes de mover una sola silla.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Trámites que no podés olvidar</h2>
            <p className="text-gray-300 mb-3">Mudarse no es solo mover cajas. Hay una lista de trámites que conviene resolver en las primeras semanas:</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-white">Cambio de domicilio en el DNI</strong> — se hace en el Registro Nacional de las Personas o por turnos online. Es importante para cualquier trámite futuro.</li>
              <li><strong className="text-white">Redirectiva postal</strong> — si recibís correspondencia importante en la casa anterior, avisá el cambio de dirección a bancos, AFIP, ANSES y cualquier suscripción.</li>
              <li><strong className="text-white">Servicios a tu nombre</strong> — gas, luz, agua. En algunos casos el propietario hace el cambio; en otros, lo hacés vos con el DNI y el contrato de alquiler.</li>
              <li><strong className="text-white">Internet</strong> — pedí la instalación con anticipación; suele tardar más de lo esperado.</li>
              <li><strong className="text-white">AFIP y ANSES</strong> — actualizá tu domicilio fiscal si trabajás de manera independiente.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">¿Empresa de mudanzas o amigos con un flete?</h2>
            <p className="text-gray-300 mb-6">Acá viene la pregunta que todos se hacen. La respuesta depende del volumen y la distancia, pero hay una verdad que muchos aprenden a las malas: pedirle ayuda a amigos y contratar un flete por tu cuenta casi siempre sale más caro en tiempo y estrés de lo que parece.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">El mito del "lo hago con amigos"</h3>
            <p className="text-gray-300 mb-6">Coordinar a cuatro personas que tienen sus propios horarios, conseguir un flete que llegue a horario, bajar un sofá por una escalera sin que nadie se lastime, hacer dos o tres viajes porque el flete es chico — todo eso consume horas, genera roces y puede resultar en objetos rotos o personas lesionadas. Una empresa de mudanzas tiene el equipo adecuado, el vehículo correcto para el volumen, seguro en caso de accidentes y experiencia para resolver los imprevistos rápido. Para una primera mudanza chica, el precio de una empresa profesional suele ser mucho más razonable de lo que se imagina, y el resultado es incomparablemente mejor.</p>

            <h2 className="text-2xl font-bold text-white mb-4">¿Cuándo conviene contratar una empresa?</h2>
            <p className="text-gray-300 mb-6">Si tenés muebles medianos o grandes, si vivís en un piso sin ascensor, si la distancia es más de unos pocos kilómetros, o si simplemente querés que todo salga bien y sin estrés, contratá una empresa. Para mudanzas muy pequeñas — básicamente una cama, algunas cajas y ropa — podés evaluar otras opciones, pero incluso en ese caso el costo de una empresa profesional puede sorprenderte para bien. En La Mudanza hacemos presupuestos sin cargo: consultá sin compromiso y comparé.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Artículos relacionados</h2>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>
                <Link href="/blog/checklist-para-mudarse" className="text-orange-400 hover:underline">
                  Checklist completo para mudarse sin olvidar nada
                </Link>
              </li>
              <li>
                <Link href="/blog/cuanto-cuesta-una-mudanza-en-buenos-aires" className="text-orange-400 hover:underline">
                  ¿Cuánto cuesta una mudanza en Buenos Aires?
                </Link>
              </li>
            </ul>

            <div className="bg-zinc-800 border border-orange-500 rounded-lg p-8 mt-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">¿Listo para tu primera mudanza?</h3>
              <p className="text-gray-300 mb-6">En La Mudanza te acompañamos desde el primer paso. Más de 30 años de experiencia en Buenos Aires, presupuesto cerrado y sin sorpresas.</p>
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
