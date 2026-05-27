import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo mudarse con mascotas sin estrés | La Mudanza",
  description: "Guía completa para mudarse con perros, gatos y otras mascotas. Consejos para reducir el estrés animal y lograr una transición tranquila al nuevo hogar.",
  alternates: { canonical: "https://www.mudarme.com.ar/blog/mudanzas-con-mascotas" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-black text-white py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="text-orange-400 text-sm mb-6 inline-block hover:underline">← Volver al blog</Link>
            <span className="text-orange-400 text-sm uppercase tracking-widest block mb-3">Consejos</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cómo mudarse con mascotas sin estrés</h1>
            <p className="text-gray-300 text-lg">Las mascotas sienten el caos de una mudanza tanto como nosotros. Con estos consejos vas a hacer la transición mucho más tranquila.</p>
          </div>
        </section>
        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">¿Por qué las mascotas se estresan en una mudanza?</h2>
              <p className="text-gray-300 mb-4">Los perros y los gatos son animales de territorio y rutina. Cuando ven cajas apilarse, personas yendo y viniendo, y de repente se encuentran en un lugar desconocido, su nivel de estrés puede dispararse. Algunos animales se esconden, dejan de comer o desarrollan comportamientos nuevos durante semanas después de una mudanza.</p>
              <p className="text-gray-300">La buena noticia es que con un poco de planificación podés reducir significativamente el impacto de la mudanza en tu mascota.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Antes de la mudanza</h2>
              <ul className="space-y-4">
                {[
                  { titulo: "Visitá el veterinario", desc: "Asegurate de que tu mascota esté al día con las vacunas y pedile al veterinario consejos específicos para el traslado. Si tu mascota es muy ansiosa, puede recetarte algo para calmarla." },
                  { titulo: "Mantené la rutina el mayor tiempo posible", desc: "Seguí con los horarios de comida, paseos y juego hasta el último día. Los cambios de rutina amplifican el estrés del traslado." },
                  { titulo: "Dejá que explore las cajas", desc: "Cuando empecés a embalar, dejá que tu mascota huela las cajas y explore el nuevo ambiente que se va creando. Así se va acostumbrando gradualmente al cambio." },
                  { titulo: "Actualizá la identificación", desc: "Asegurate de que el collar tenga los datos actualizados y considerá colocar un microchip si todavía no tiene. En el nuevo domicilio las mascotas pueden escaparse al explorar." },
                ].map(item => (
                  <li key={item.titulo} className="bg-zinc-800 border border-zinc-700 rounded-lg p-5">
                    <h3 className="font-bold text-orange-400 mb-2">{item.titulo}</h3>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">El día de la mudanza</h2>
              <ul className="space-y-4">
                {[
                  { titulo: "Separalos del caos", desc: "El día de la mudanza es mejor tener a la mascota en una habitación cerrada con sus cosas o en lo de un familiar o amigo. El movimiento de gente y muebles puede ser muy estresante y hay riesgo de que escapen por puertas abiertas." },
                  { titulo: "Trasladalos al final", desc: "Es mejor que la mascota sea lo último que se lleve al nuevo lugar, cuando ya no hay tanto movimiento de personas." },
                  { titulo: "Llevá sus objetos en el auto con vos", desc: "La cama, el juguete favorito y el cuenco de agua deben viajar con vos, no en el camión. Tener sus olores familiares en el trayecto reduce la ansiedad." },
                ].map(item => (
                  <li key={item.titulo} className="bg-zinc-800 border border-zinc-700 rounded-lg p-5">
                    <h3 className="font-bold text-orange-400 mb-2">{item.titulo}</h3>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">En el nuevo hogar</h2>
              <ul className="space-y-4">
                {[
                  { titulo: "Empezá por una sola habitación", desc: "Al llegar al nuevo lugar, instalá a tu mascota en una habitación con todas sus cosas antes de dejarla explorar el resto. Así tiene un espacio seguro y familiar desde el primer momento." },
                  { titulo: "Armá su rincón antes que nada", desc: "Lo primero que tenés que armar en el nuevo hogar es el espacio de tu mascota: su cama, sus juguetes y sus cuencos en el lugar donde van a estar definitivamente." },
                  { titulo: "Dale tiempo", desc: "Los gatos pueden tardar semanas en adaptarse a un nuevo territorio. Los perros suelen ser más rápidos pero también necesitan tiempo. Paciencia y rutina son la clave." },
                ].map(item => (
                  <li key={item.titulo} className="bg-zinc-800 border border-zinc-700 rounded-lg p-5">
                    <h3 className="font-bold text-orange-400 mb-2">{item.titulo}</h3>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-zinc-800 border border-orange-500 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">¿Necesitás ayuda con tu mudanza?</h3>
              <p className="text-gray-300 mb-6">En La Mudanza nos encargamos de todo para que vos puedas enfocarte en lo que importa, incluyendo el bienestar de tu mascota.</p>
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
