import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo calcular el volumen de una mudanza | La Mudanza",
  description: "Guía práctica para calcular cuánto volumen tiene tu mudanza y qué tamaño de camión necesitás. Tablas de referencia por tipo de ambiente.",
  alternates: { canonical: "https://www.mudarme.com.ar/blog/como-calcular-volumen-mudanza" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-black text-white py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="text-orange-400 text-sm mb-6 inline-block hover:underline">← Volver al blog</Link>
            <span className="text-orange-400 text-sm uppercase tracking-widest block mb-3">Organización</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cómo calcular el volumen de una mudanza</h1>
            <p className="text-gray-300 text-lg">Guía práctica para estimar cuánto ocupa tu mudanza y qué tamaño de camión necesitás.</p>
          </div>
        </section>
        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">¿Por qué es importante calcular el volumen?</h2>
              <p className="text-gray-300 mb-4">Conocer el volumen aproximado de tu mudanza es fundamental para que la empresa pueda enviarte el camión del tamaño correcto y cotizarte con precisión. Un camión muy pequeño obliga a hacer dos viajes y encarece el traslado. Uno demasiado grande es un gasto innecesario.</p>
              <p className="text-gray-300">En La Mudanza siempre hacemos una evaluación antes de cotizar, pero si querés tener una idea previa de lo que tenés, esta guía te va a ayudar.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Volumen estimado por ambiente</h2>
              <p className="text-gray-300 mb-6">Estos son los volúmenes aproximados por tipo de ambiente, considerando los muebles y objetos típicos:</p>
              <div className="space-y-3">
                {[
                  { ambiente: "Monoambiente", volumen: "10 a 15 m³", detalle: "Cama 1 plaza, sillón, mesa chica, electrodomésticos básicos" },
                  { ambiente: "2 ambientes", volumen: "15 a 25 m³", detalle: "Cama matrimonial, living, comedor, cocina equipada" },
                  { ambiente: "3 ambientes", volumen: "25 a 40 m³", detalle: "2 habitaciones, living, comedor, cocina, electrodomésticos" },
                  { ambiente: "4 ambientes", volumen: "40 a 55 m³", detalle: "3 habitaciones, living, comedor, cocina, garaje" },
                  { ambiente: "Casa grande", volumen: "55 m³ o más", detalle: "Más de 4 ambientes, jardín, cochera, depósito" },
                ].map(row => (
                  <div key={row.ambiente} className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 flex flex-col md:flex-row md:items-center gap-3">
                    <div className="min-w-[180px]">
                      <p className="text-orange-400 font-bold">{row.ambiente}</p>
                      <p className="text-white font-bold text-lg">{row.volumen}</p>
                    </div>
                    <p className="text-gray-400 text-sm">{row.detalle}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">¿Qué tamaño de camión necesitás?</h2>
              <div className="space-y-3">
                {[
                  { camion: "Utilitario / Trafic", capacidad: "Hasta 8 m³", para: "Monoambiente pequeño o mudanza parcial" },
                  { camion: "Camión chico", capacidad: "8 a 20 m³", para: "Monoambiente o 2 ambientes sin mucho volumen" },
                  { camion: "Camión mediano", capacidad: "20 a 35 m³", para: "2 a 3 ambientes típicos" },
                  { camion: "Camión grande", capacidad: "35 a 60 m³", para: "3 a 4 ambientes o casas medianas" },
                  { camion: "Semi o doble camión", capacidad: "60 m³ o más", para: "Casas grandes o mudanzas comerciales" },
                ].map(row => (
                  <div key={row.camion} className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 flex flex-col md:flex-row md:items-center gap-3">
                    <div className="min-w-[200px]">
                      <p className="text-orange-400 font-bold">{row.camion}</p>
                      <p className="text-white font-bold">{row.capacidad}</p>
                    </div>
                    <p className="text-gray-400 text-sm">{row.para}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Factores que aumentan el volumen</h2>
              <ul className="space-y-3">
                {[
                  "Biblioteca grande o colección de libros — pueden pesar más de lo que ocupan",
                  "Piano — requiere camión especial y personal capacitado para izajes",
                  "Electrodomésticos grandes — heladera doble puerta, lavarropas industrial",
                  "Jardín — macetas, muebles de exterior, parrilla",
                  "Depósito o garaje — herramientas, cajas acumuladas, bicicletas",
                  "Ropa — los placares llenos sorprenden por su volumen cuando se embalan",
                ].map(item => (
                  <li key={item} className="flex gap-3 text-gray-300">
                    <span className="text-orange-500 mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-zinc-800 border border-orange-500 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">¿Querés que evaluemos tu mudanza?</h3>
              <p className="text-gray-300 mb-6">Contactanos y te damos un presupuesto cerrado y sin cargo basado en el volumen real de tu mudanza.</p>
              <a href="https://wa.me/541125535500" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-block mr-4">Cotizar por WhatsApp</a>
              <a href="tel:+541125535500" className="border border-white text-white font-bold py-3 px-8 rounded-full inline-block">11-2553-5500</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
