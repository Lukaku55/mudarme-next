"use client";
import Link from "next/link";

const zonasCaba = [
  { nombre: "Palermo", slug: "palermo" },
  { nombre: "Belgrano", slug: "belgrano" },
  { nombre: "Caballito", slug: "caballito" },
  { nombre: "Recoleta", slug: "recoleta" },
  { nombre: "Flores", slug: "flores" },
  { nombre: "Villa Urquiza", slug: "villa-urquiza" },
  { nombre: "Almagro", slug: "almagro" },
  { nombre: "San Telmo", slug: "san-telmo" },
  { nombre: "Núñez", slug: "nunez" },
  { nombre: "Villa Devoto", slug: "villa-devoto" },
  { nombre: "Mataderos", slug: "mataderos" },
];

const zonasGba = [
  { nombre: "San Isidro", slug: "san-isidro" },
  { nombre: "Vicente López", slug: "vicente-lopez" },
  { nombre: "Tigre", slug: "tigre" },
  { nombre: "San Fernando", slug: "san-fernando" },
  { nombre: "Pilar", slug: "pilar" },
  { nombre: "Quilmes", slug: "quilmes" },
  { nombre: "Lomas de Zamora", slug: "lomas-de-zamora" },
  { nombre: "Avellaneda", slug: "avellaneda" },
  { nombre: "Morón", slug: "moron" },
  { nombre: "La Matanza", slug: "la-matanza" },
  { nombre: "Merlo", slug: "merlo" },
  { nombre: "Moreno", slug: "moreno" },
];

const servicios = [
  { nombre: "Mudanzas Residenciales", slug: "mudanzas-residenciales", icono: "🏠" },
  { nombre: "Mudanzas Comerciales", slug: "mudanzas-comerciales", icono: "🏢" },
  { nombre: "Guardamuebles", slug: "guardamuebles", icono: "🏭" },
  { nombre: "Embalaje Profesional", slug: "embalaje-profesional", icono: "📦" },
  { nombre: "Mudanzas al Interior", slug: "mudanzas-interior", icono: "🚛" },
  { nombre: "Izajes por Balcón", slug: "izajes", icono: "🏗️" },
];

const ZonasPreview = () => {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-5xl mx-auto">

        <p className="text-orange-400 uppercase tracking-widest text-sm mb-3 text-center">Servicios</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">Todos nuestros servicios</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {servicios.map(s => (
            <Link key={s.slug} href={`/${s.slug}`} className="bg-zinc-900 border border-zinc-700 rounded-lg p-5 hover:border-orange-500 transition-colors text-center">
              <p className="text-2xl mb-2">{s.icono}</p>
              <p className="text-white font-bold text-sm">{s.nombre}</p>
            </Link>
          ))}
        </div>

        <p className="text-orange-400 uppercase tracking-widest text-sm mb-3 text-center">Cobertura</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">Mudanzas en toda la Ciudad y el GBA</h2>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-orange-400 mb-4">Capital Federal</h3>
          <div className="flex flex-wrap gap-2">
            {zonasCaba.map(z => (
              <Link key={z.slug} href={`/mudanzas-${z.slug}`} className="bg-zinc-900 border border-zinc-700 text-gray-300 hover:border-orange-500 hover:text-orange-400 text-sm py-2 px-4 rounded-full transition-colors">
                {z.nombre}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-orange-400 mb-4">Gran Buenos Aires</h3>
          <div className="flex flex-wrap gap-2">
            {zonasGba.map(z => (
              <Link key={z.slug} href={`/mudanzas-${z.slug}`} className="bg-zinc-900 border border-zinc-700 text-gray-300 hover:border-orange-500 hover:text-orange-400 text-sm py-2 px-4 rounded-full transition-colors">
                {z.nombre}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ZonasPreview;
