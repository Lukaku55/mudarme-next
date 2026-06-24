import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog de Mudanzas | Consejos y Guías | La Mudanza",
  description: "Consejos, guías y todo lo que necesitás saber sobre mudanzas en Buenos Aires. Artículos de La Mudanza, empresa con más de 30 años de experiencia.",
  alternates: { canonical: "https://www.mudarme.com.ar/blog" },
};

const articulos = [
  {
    slug: "cuanto-cuesta-una-mudanza-en-buenos-aires",
    titulo: "¿Cuánto cuesta una mudanza en Buenos Aires?",
    descripcion: "Todo lo que influye en el precio de una mudanza: volumen, distancia, piso, embalaje y más. Guía completa para entender el presupuesto.",
    fecha: "2026-05-05",
    categoria: "Precios y presupuestos",
  },
  {
    slug: "checklist-para-mudarse",
    titulo: "Checklist para mudarse: todo lo que no podés olvidar",
    descripcion: "La guía definitiva para organizar tu mudanza paso a paso. Qué hacer 4 semanas antes, 1 semana antes y el día de la mudanza.",
    fecha: "2026-05-05",
    categoria: "Organización",
  },
  {
    slug: "como-elegir-empresa-de-mudanzas",
    titulo: "Cómo elegir una empresa de mudanzas confiable",
    descripcion: "Qué preguntar, qué verificar y qué señales de alerta tener en cuenta antes de contratar una empresa de mudanzas en Buenos Aires.",
    fecha: "2026-05-05",
    categoria: "Consejos",
  },
  {
    slug: "mudanzas-a-fin-de-mes",
    titulo: "Mudanzas a fin de mes: por qué es más caro y cómo evitarlo",
    descripcion: "La demanda de mudanzas se dispara a fin de mes. Te contamos por qué y cómo planificar para ahorrar tiempo y dinero.",
    fecha: "2026-05-05",
    categoria: "Consejos",
  },
  {
    slug: "como-calcular-volumen-mudanza",
    titulo: "Cómo calcular el volumen de una mudanza",
    descripcion: "Guía práctica para estimar cuánto ocupa tu mudanza y qué tamaño de camión necesitás. Tablas de referencia por tipo de ambiente.",
    fecha: "2026-05-07",
    categoria: "Organización",
  },
  {
    slug: "mudanzas-con-mascotas",
    titulo: "Cómo mudarse con mascotas sin estrés",
    descripcion: "Las mascotas sienten el caos de una mudanza tanto como nosotros. Consejos para hacer la transición mucho más tranquila.",
    fecha: "2026-05-07",
    categoria: "Consejos",
  },
  {
    slug: "que-hacer-con-muebles-que-no-queres-llevar",
    titulo: "Qué hacer con los muebles que no querés llevar",
    descripcion: "Opciones para vender, donar, guardar o desechar los muebles que no vas a necesitar en el nuevo hogar.",
    fecha: "2026-05-07",
    categoria: "Organización",
  },
  {
    slug: "guardamuebles-cuando-conviene",
    titulo: "Guardamuebles: cuándo conviene y cómo elegir uno",
    descripcion: "Todo sobre el servicio de guardamuebles: qué es, cuándo lo necesitás, cuánto cuesta y qué tener en cuenta al elegir un depósito.",
    fecha: "2026-05-05",
    categoria: "Guardamuebles",
  },
  {
    slug: "como-embalar-vajilla-y-cristaleria",
    titulo: "Cómo embalar vajilla y cristalería para una mudanza",
    descripcion: "Técnicas profesionales para empacar platos, copas y objetos frágiles sin que nada se rompa durante el traslado.",
    fecha: "2026-06-24",
    categoria: "Embalaje",
  },
  {
    slug: "mudanza-de-oficina-consejos",
    titulo: "Cómo organizar una mudanza de oficina sin perder días de trabajo",
    descripcion: "Guía práctica para mudarse de oficina minimizando el tiempo de inactividad. Planificación, horarios y coordinación con el equipo.",
    fecha: "2026-06-24",
    categoria: "Mudanzas comerciales",
  },
  {
    slug: "cuanto-tiempo-lleva-una-mudanza",
    titulo: "¿Cuánto tiempo lleva una mudanza? Tiempos por tipo de hogar",
    descripcion: "Estimaciones reales de cuánto demora una mudanza según el tamaño del hogar, el piso, la distancia y si incluye embalaje profesional.",
    fecha: "2026-06-24",
    categoria: "Organización",
  },
  {
    slug: "mudanza-con-ninos-consejos",
    titulo: "Cómo mudarse con niños: consejos para que la transición sea más fácil",
    descripcion: "La mudanza puede ser difícil para los chicos. Estrategias para involucrarlos, mantener la rutina y hacer del cambio una experiencia positiva.",
    fecha: "2026-06-24",
    categoria: "Consejos",
  },
  {
    slug: "izaje-de-muebles-por-balcon",
    titulo: "Izaje de muebles por balcón: cuándo es necesario y cómo funciona",
    descripcion: "Qué es el izaje de muebles, en qué situaciones se usa, cómo se realiza y qué tener en cuenta antes de contratarlo.",
    fecha: "2026-06-24",
    categoria: "Servicios",
  },
  {
    slug: "como-organizar-mudanza-rapido",
    titulo: "Cómo organizar una mudanza rápido: guía para mudarse en menos de 2 semanas",
    descripcion: "Cuando el tiempo apremia, la organización es clave. Plan de acción para mudarse en poco tiempo sin olvidar nada importante.",
    fecha: "2026-06-24",
    categoria: "Organización",
  },
  {
    slug: "que-preguntar-empresa-de-mudanzas",
    titulo: "10 preguntas que tenés que hacerle a una empresa de mudanzas antes de contratar",
    descripcion: "No todas las empresas de mudanzas son iguales. Estas preguntas te ayudan a separar las profesionales de las que solo te van a dar problemas.",
    fecha: "2026-06-24",
    categoria: "Consejos",
  },
  {
    slug: "guardamuebles-vs-deposito",
    titulo: "Guardamuebles vs depósito: diferencias y cuál elegir",
    descripcion: "No son lo mismo. Te explicamos las diferencias entre un guardamuebles y un depósito común, y cómo saber cuál es la mejor opción para tus muebles.",
    fecha: "2026-06-24",
    categoria: "Guardamuebles",
  },
];

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Blog de Mudanzas | La Mudanza",
  "description": "Consejos, guías y todo lo que necesitás saber sobre mudanzas en Buenos Aires.",
  "url": "https://www.mudarme.com.ar/blog",
  "publisher": { "@type": "Organization", "name": "La Mudanza", "url": "https://www.mudarme.com.ar" },
  "inLanguage": "es-AR",
  "hasPart": articulos.map(a => ({
    "@type": "Article",
    "headline": a.titulo,
    "description": a.descripcion,
    "url": `https://www.mudarme.com.ar/blog/${a.slug}`,
    "datePublished": a.fecha,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudarme.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudarme.com.ar/blog" },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="pt-20">
        <section className="bg-black text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-orange-400 uppercase tracking-widest text-sm mb-3">Blog</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Consejos y guías de mudanzas</h1>
            <p className="text-gray-300 text-lg">Todo lo que necesitás saber para mudarte sin estrés en Buenos Aires.</p>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
            {articulos.map(a => (
              <Link key={a.slug} href={`/blog/${a.slug}`} className="bg-zinc-800 border border-zinc-700 rounded-lg p-8 hover:border-orange-500 transition-colors">
                <span className="text-orange-400 text-sm uppercase tracking-widest">{a.categoria}</span>
                <h2 className="text-2xl font-bold text-white mt-2 mb-3">{a.titulo}</h2>
                <p className="text-gray-400">{a.descripcion}</p>
                <span className="text-orange-500 font-bold mt-4 inline-block">Leer más →</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
