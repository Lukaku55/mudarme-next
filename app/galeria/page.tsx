import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Galería de Trabajos | La Mudanza CABA y GBA",
  description: "Fotos reales de mudanzas residenciales, comerciales, embalaje profesional, izajes y guardamuebles. La Mudanza, más de 30 años de experiencia en Buenos Aires.",
  alternates: { canonical: "https://www.mudarme.com.ar/galeria" },
  openGraph: { type: "website", url: "https://www.mudarme.com.ar/galeria" },
};

const grupos = [
  {
    titulo: "Embalaje Profesional",
    descripcion: "Así protegemos cada mueble antes de subirlo al camión.",
    fotos: [
      { src: "/images/trabajos/embalaje-sofa-mantas-01.jpg", alt: "Sofá embalado con mantas acolchadas y film stretch para mudanza en Buenos Aires" },
      { src: "/images/trabajos/embalaje-sofa-mantas-02.jpg", alt: "Sillón envuelto en mantas profesionales y film para traslado seguro" },
      { src: "/images/trabajos/embalaje-mueble-fragil.jpg", alt: "Mueble embalado con carteles FRAGIL y film burbuja para mudanza" },
    ],
  },
  {
    titulo: "Izajes por Balcón",
    descripcion: "Cuando el ascensor no alcanza, izamos con técnica y seguridad.",
    fotos: [
      { src: "/images/trabajos/izaje-sillon-balcon.jpg", alt: "Izaje de sillón por balcón en mudanza residencial en CABA" },
      { src: "/images/trabajos/izaje-balcon-vista-aerea.jpg", alt: "Vista aérea de izaje de mueble por balcón con cuerdas profesionales en Buenos Aires" },
    ],
  },
  {
    titulo: "Carga y Transporte",
    descripcion: "Camión organizado al máximo para que todo llegue en perfecto estado.",
    fotos: [
      { src: "/images/trabajos/interior-camion-cargado.jpg", alt: "Interior del camión de mudanza cargado con muebles embalados en mantas" },
      { src: "/images/trabajos/equipo-la-mudanza-carga.jpg", alt: "Equipo de La Mudanza con remeras uniformadas cargando electrodoméstico en CABA" },
      { src: "/images/trabajos/armado-mueble-la-mudanza.jpg", alt: "Técnico de La Mudanza armando cama con taladro en departamento de Buenos Aires" },
    ],
  },
  {
    titulo: "Nuestra Flota",
    descripcion: "Camiones propios de distintos tamaños para cada tipo de mudanza.",
    fotos: [
      { src: "/images/trabajos/camion-mercedes-la-mudanza.jpg", alt: "Camión Mercedes Benz rojo de La Mudanza - flota propia para mudanzas en CABA y GBA" },
      { src: "/images/trabajos/camion-la-mudanza-frente-lluvia.jpg", alt: "Camión La Mudanza 4637-5500 en calle de Buenos Aires bajo la lluvia" },
      { src: "/images/trabajos/camion-la-mudanza-lateral-barrio.jpg", alt: "Camión La Mudanza vista lateral con carrocería completa en barrio residencial GBA" },
      { src: "/images/trabajos/camion-mercedes-710-blanco.jpg", alt: "Camión Mercedes 710 blanco de La Mudanza para mudanzas chicas en CABA" },
      { src: "/images/trabajos/camion-la-mudanza-calle-caba-01.jpg", alt: "Camión de mudanza La Mudanza estacionado en calle arbolada de CABA" },
      { src: "/images/trabajos/camion-la-mudanza-calle-caba-02.jpg", alt: "Camión La Mudanza visto de costado en calle de Buenos Aires" },
      { src: "/images/trabajos/camion-blanco-frente-caba.jpg", alt: "Camión blanco La Mudanza de frente en calle de CABA" },
      { src: "/images/trabajos/camion-la-mudanza-deposito-salida.jpg", alt: "Camión La Mudanza saliendo del depósito de guardamuebles en Buenos Aires" },
      { src: "/images/trabajos/camion-la-mudanza-trasera.jpg", alt: "Trasera del camión La Mudanza con teléfono y datos de guardamuebles" },
      { src: "/images/trabajos/camion-mercedes-710-lateral.jpg", alt: "Camión Mercedes 710 de La Mudanza visto de costado en calle de CABA" },
      { src: "/images/trabajos/camion-la-mudanza-deposito.jpg", alt: "Camión La Mudanza en depósito de guardamuebles en Buenos Aires" },
    ],
  },
  {
    titulo: "Guardamuebles",
    descripcion: "Espacios seguros para guardar tus muebles el tiempo que necesites.",
    fotos: [
      { src: "/images/trabajos/guardamuebles-boxes.jpg", alt: "Boxes individuales de guardamuebles numerados en instalación de La Mudanza Buenos Aires" },
      { src: "/images/trabajos/guardamuebles-deposito-amplio.jpg", alt: "Depósito de guardamuebles amplio con celdas en Buenos Aires" },
    ],
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-black text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-orange-400 uppercase tracking-widest text-sm mb-3">Nuestro trabajo</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Galería de Trabajos</h1>
            <p className="text-gray-300 text-lg">Fotos reales de mudanzas residenciales, comerciales, embalajes e izajes en CABA y GBA.</p>
          </div>
        </section>

        {grupos.map((grupo) => (
          <section key={grupo.titulo} className="py-16 px-4 odd:bg-zinc-900 even:bg-black">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-2">{grupo.titulo}</h2>
              <p className="text-gray-400 mb-8">{grupo.descripcion}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {grupo.fotos.map((foto, i) => (
                  <div key={i} className="relative overflow-hidden rounded-lg aspect-square group">
                    <Image
                      src={foto.src}
                      alt={foto.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="bg-orange-500 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">¿Querés una mudanza así?</h2>
            <p className="text-white mb-8 opacity-90">Presupuesto sin cargo, precio cerrado y sin sorpresas.</p>
            <a href="https://wa.me/541125535500" className="bg-white text-orange-500 font-bold py-3 px-8 rounded-full inline-block mr-4">Cotizar por WhatsApp</a>
            <a href="tel:+541125535500" className="border border-white text-white font-bold py-3 px-8 rounded-full inline-block">11-2553-5500</a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
