import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo organizar una mudanza de oficina sin perder días de trabajo | La Mudanza",
  description: "Guía práctica para mudarse de oficina minimizando el tiempo de inactividad. Planificación, horarios y coordinación con el equipo.",
  alternates: { canonical: "https://www.mudarme.com.ar/blog/mudanza-de-oficina-consejos" },
  openGraph: {
    type: "article",
    url: "https://www.mudarme.com.ar/blog/mudanza-de-oficina-consejos",
    publishedTime: "2026-06-24T00:00:00Z",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cómo organizar una mudanza de oficina sin perder días de trabajo",
  "description": "Guía práctica para mudirse de oficina minimizando el tiempo de inactividad. Planificación, horarios y coordinación con el equipo.",
  "url": "https://www.mudarme.com.ar/blog/mudanza-de-oficina-consejos",
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
    { "@type": "ListItem", "position": 3, "name": "Cómo organizar una mudanza de oficina sin perder días de trabajo", "item": "https://www.mudarme.com.ar/blog/mudanza-de-oficina-consejos" },
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
            <span className="text-orange-400 text-sm uppercase tracking-widest block mb-3">Mudanzas comerciales</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cómo organizar una mudanza de oficina sin perder días de trabajo</h1>
            <p className="text-gray-300 text-lg">Guía práctica para mudarse de oficina minimizando el tiempo de inactividad. Planificación, horarios y coordinación con el equipo.</p>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-3xl mx-auto prose prose-invert prose-lg">

            <h2 className="text-2xl font-bold text-white mb-4">La mudanza de oficina es un animal distinto</h2>
            <p className="text-gray-300 mb-6">Una mudanza de oficina no es simplemente una mudanza más grande. Tiene sus propias complejidades: equipos tecnológicos delicados, documentación confidencial, mobiliario de trabajo ergonómico y, sobre todo, la presión de volver a operar lo antes posible. Cada hora de inactividad tiene un costo real para el negocio.</p>
            <p className="text-gray-300 mb-6">En La Mudanza hemos realizado traslados comerciales en Buenos Aires para empresas de todos los tamaños — desde estudios pequeños de 3 personas hasta oficinas corporativas con más de 50 puestos de trabajo. La diferencia entre una mudanza exitosa y una catastrófica siempre está en la planificación previa.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Cuándo empezar a planificar</h2>
            <p className="text-gray-300 mb-6">Para una oficina pequeña (menos de 10 personas), recomendamos empezar la planificación con al menos 4 semanas de anticipación. Para una mediana o grande, con 2 a 3 meses. El error más frecuente es creer que una mudanza de fin de semana se puede organizar en unos pocos días.</p>
            <p className="text-gray-300 mb-6">El punto de partida es definir la fecha objetivo de la mudanza y trabajar hacia atrás, asignando responsables para cada tarea.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Plan de acción semana a semana</h2>

            <h3 className="text-xl font-bold text-orange-400 mb-3">4 semanas antes: relevamiento y coordinación</h3>
            <p className="text-gray-300 mb-6">Hacé un inventario completo del mobiliario y equipos que se trasladan. Identificá qué queda, qué se desecha y qué se compra nuevo para el lugar nuevo. Contactá a la empresa de mudanzas comercial para obtener un presupuesto. Coordiná con el edificio de origen y destino los horarios permitidos para mudanzas — muchos edificios de oficinas en microcentro o Puerto Madero tienen restricciones horarias estrictas.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">3 semanas antes: comunicación interna y servicios</h3>
            <p className="text-gray-300 mb-6">Informá a todo el equipo la fecha y el plan. Designá un responsable de mudanza por área o departamento. Contactá a los proveedores de internet, telefonía, alarma y correo para coordinar el cambio de domicilio y la instalación en el nuevo lugar. Estos servicios suelen tardar más de lo esperado — cuanto antes los contactes, mejor.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">2 semanas antes: embalaje de lo no esencial</h3>
            <p className="text-gray-300 mb-6">Empezá a embalar archivos, libros, elementos decorativos y todo lo que no se usa en el día a día. Etiquetá cada caja con el área de destino (ej: "Contabilidad — Estante 2") para que en el lugar nuevo cada cosa vaya directamente a su lugar. El tiempo que se pierde buscando dónde va cada cosa en el día de la mudanza es enorme.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">La semana de la mudanza</h3>
            <p className="text-gray-300 mb-6">Confirmá todos los detalles con la empresa de mudanzas. Avisá a clientes y proveedores del nuevo domicilio. Preparás los equipos informáticos: hacé un backup completo antes de desconectar cualquier equipo. Los técnicos de IT deben estar presentes el día de la mudanza para reconectar servidores, switches y cableado estructurado lo antes posible.</p>

            <h2 className="text-2xl font-bold text-white mb-4">La estrategia del fin de semana</h2>
            <p className="text-gray-300 mb-6">La mayoría de las mudanzas de oficina en Buenos Aires se realizan el fin de semana — el viernes a la noche o el sábado — para minimizar el impacto en la operación. El objetivo es que el lunes a la mañana el equipo pueda entrar al nuevo lugar y trabajar con normalidad.</p>
            <p className="text-gray-300 mb-6">Para lograr esto, los equipos de IT deben llegar el domingo para instalar y probar la conectividad antes del lunes. No subestimes este punto: una oficina sin internet el lunes puede ser más costosa que la mudanza entera.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Cómo manejar los equipos tecnológicos</h2>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Computadoras y monitores</h3>
            <p className="text-gray-300 mb-6">Cada empleado debe encargarse de desconectar y preparar su equipo personal siguiendo el protocolo que el área de IT defina. Los monitores van en sus cajas originales si las tienen — si no, en cajas específicas con film burbuja. Nunca se apilan monitores sin protección.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Servidores y equipos de red</h3>
            <p className="text-gray-300 mb-6">Los servidores, switches, UPS y equipos de telecomunicaciones deben ser manipulados exclusivamente por personal técnico capacitado. En La Mudanza trabajamos coordinados con el equipo de IT del cliente para garantizar que estos equipos viajen de forma segura y se instalen correctamente en el destino.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Documentación y archivos en papel</h3>
            <p className="text-gray-300 mb-6">Los archivos con documentación sensible (contratos, legajos de personal, documentación contable) deben viajar en cajas cerradas e identificadas, en el mismo vehículo que personal de la empresa siempre que sea posible. Nunca mezcles documentación confidencial en cajas sin rotular.</p>

            <h2 className="text-2xl font-bold text-white mb-4">El día de la mudanza: coordinación en tiempo real</h2>
            <p className="text-gray-300 mb-6">Definí un único punto de contacto de tu empresa con el equipo de mudanzas. Tener a cinco personas dando instrucciones distintas es la receta del caos. Esa persona debe estar disponible en ambas locaciones durante toda la operación.</p>
            <p className="text-gray-300 mb-6">En el lugar de destino, tené un plano de la nueva oficina con la ubicación exacta de cada escritorio y área. Así el equipo de mudanzas puede colocar cada mueble directamente en su lugar sin tener que moverlo dos veces.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Artículos relacionados</h2>
            <ul className="text-gray-300 mb-8 space-y-2">
              <li><Link href="/mudanzas-comerciales" className="text-orange-400 hover:underline">Mudanzas comerciales en Buenos Aires</Link></li>
              <li><Link href="/blog/checklist-para-mudarse" className="text-orange-400 hover:underline">Checklist completo para mudarse sin olvidar nada</Link></li>
              <li><Link href="/embalaje-profesional" className="text-orange-400 hover:underline">Servicio de embalaje profesional</Link></li>
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
