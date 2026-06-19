"use client";
import Image from "next/image";

const fotos = [
  {
    src: "/images/trabajos/equipo-la-mudanza-carga.jpg",
    alt: "Equipo de La Mudanza cargando electrodoméstico en mudanza comercial en CABA",
    categoria: "Equipo",
  },
  {
    src: "/images/trabajos/izaje-sillon-balcon.jpg",
    alt: "Izaje de sillón por balcón en mudanza residencial en Buenos Aires",
    categoria: "Izajes",
  },
  {
    src: "/images/trabajos/embalaje-sofa-mantas-02.jpg",
    alt: "Sofá embalado con mantas acolchadas y film stretch para mudanza",
    categoria: "Embalaje",
  },
  {
    src: "/images/trabajos/interior-camion-cargado.jpg",
    alt: "Interior del camión de mudanza cargado con muebles embalados",
    categoria: "Transporte",
  },
  {
    src: "/images/trabajos/camion-mercedes-la-mudanza.jpg",
    alt: "Camión propio de La Mudanza - Mercedes Benz para mudanzas en CABA y GBA",
    categoria: "Flota",
  },
  {
    src: "/images/trabajos/guardamuebles-boxes.jpg",
    alt: "Guardamuebles con boxes individuales seguros en Buenos Aires",
    categoria: "Guardamuebles",
  },
  {
    src: "/images/trabajos/izaje-balcon-vista-aerea.jpg",
    alt: "Vista aérea de izaje de mueble por balcón en mudanza en altura en CABA",
    categoria: "Izajes",
  },
  {
    src: "/images/trabajos/embalaje-sofa-mantas-01.jpg",
    alt: "Mueble embalado con mantas profesionales y film para protección en mudanza",
    categoria: "Embalaje",
  },
  {
    src: "/images/trabajos/camion-la-mudanza-deposito.jpg",
    alt: "Camión de La Mudanza en depósito de guardamuebles en Buenos Aires",
    categoria: "Flota",
  },
];

export default function GaleriaTrabajos() {
  return (
    <section className="bg-zinc-900 py-16 px-4" id="galeria">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange-400 uppercase tracking-widest text-sm mb-3">Nuestro trabajo</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trabajos reales, resultados reales</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Así trabajamos en cada mudanza. Equipo propio, materiales profesionales y cuidado en cada detalle.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {fotos.map((foto, i) => (
            <div key={i} className="relative group overflow-hidden rounded-lg aspect-square">
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {foto.categoria}
              </span>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="https://wa.me/541125535500" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-block transition-colors">
            Pedir presupuesto sin cargo
          </a>
        </div>
      </div>
    </section>
  );
}
