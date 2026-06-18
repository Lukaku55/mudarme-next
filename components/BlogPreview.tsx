"use client";
import Link from "next/link";

const articulos = [
  {
    slug: "cuanto-cuesta-una-mudanza-en-buenos-aires",
    titulo: "¿Cuánto cuesta una mudanza en Buenos Aires?",
    descripcion: "Todo lo que influye en el precio de una mudanza: volumen, distancia, piso, embalaje y más.",
    categoria: "Precios y presupuestos",
  },
  {
    slug: "checklist-para-mudarse",
    titulo: "Checklist para mudarse: todo lo que no podés olvidar",
    descripcion: "La guía definitiva para organizar tu mudanza paso a paso y sin estrés.",
    categoria: "Organización",
  },
  {
    slug: "como-elegir-empresa-de-mudanzas",
    titulo: "Cómo elegir una empresa de mudanzas confiable",
    descripcion: "Qué preguntar, qué verificar y qué señales de alerta tener en cuenta antes de contratar.",
    categoria: "Consejos",
  },
  {
    slug: "mudanzas-a-fin-de-mes",
    titulo: "Mudanzas a fin de mes: por qué es más caro y cómo evitarlo",
    descripcion: "La demanda se dispara a fin de mes. Cómo planificar para ahorrar tiempo y dinero.",
    categoria: "Consejos",
  },
  {
    slug: "como-calcular-volumen-mudanza",
    titulo: "Cómo calcular el volumen de una mudanza",
    descripcion: "Guía práctica para estimar cuánto ocupa tu mudanza y qué tamaño de camión necesitás.",
    categoria: "Organización",
  },
  {
    slug: "mudanzas-con-mascotas",
    titulo: "Cómo mudarse con mascotas sin estrés",
    descripcion: "Consejos para reducir el estrés animal y lograr una transición tranquila al nuevo hogar.",
    categoria: "Consejos",
  },
];

const BlogPreview = () => {
  return (
    <section className="py-16 px-4 bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <p className="text-orange-400 uppercase tracking-widest text-sm mb-3 text-center">Blog</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Consejos y guías de mudanzas</h2>
        <p className="text-gray-400 text-center mb-10">Todo lo que necesitás saber para mudarte sin estrés en Buenos Aires.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articulos.map(a => (
            <Link key={a.slug} href={`/blog/${a.slug}`} className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-orange-500 transition-colors">
              <span className="text-orange-400 text-xs uppercase tracking-widest">{a.categoria}</span>
              <h3 className="text-white font-bold text-lg mt-2 mb-3">{a.titulo}</h3>
              <p className="text-gray-400 text-sm">{a.descripcion}</p>
              <span className="text-orange-500 font-bold mt-4 inline-block text-sm">Leer más →</span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/blog" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-3 px-8 rounded-full transition-colors inline-block">
            Ver todos los artículos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
