import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Qué hacer con los muebles que no querés llevar | La Mudanza",
  description: "Opciones para vender, donar, guardar o desechar los muebles que no vas a necesitar en el nuevo hogar. Guía práctica de La Mudanza.",
  alternates: { canonical: "https://www.mudarme.com.ar/blog/que-hacer-con-muebles-que-no-queres-llevar" },
  openGraph: {
    type: "article",
    url: "https://www.mudarme.com.ar/blog/que-hacer-con-muebles-que-no-queres-llevar",
    publishedTime: "2026-05-07T00:00:00Z",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Qué hacer con los muebles que no querés llevar",
  "description": "Opciones para vender, donar, guardar o desechar los muebles que no vas a necesitar en el nuevo hogar.",
  "url": "https://www.mudarme.com.ar/blog/que-hacer-con-muebles-que-no-queres-llevar",
  "datePublished": "2026-05-07",
  "dateModified": "2026-05-07",
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
    { "@type": "ListItem", "position": 3, "name": "Qué hacer con los muebles que no querés llevar", "item": "https://www.mudarme.com.ar/blog/que-hacer-con-muebles-que-no-queres-llevar" },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Qué hacer con los muebles que no querés llevar</h1>
            <p className="text-gray-300 text-lg">Una mudanza es la oportunidad perfecta para desprenderte de lo que ya no necesitás. Estas son tus opciones.</p>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-2xl font-bold text-white mb-4">Vendelos</h2>
            <p className="text-gray-300 mb-6">La primera opción es recuperar algo de dinero vendiendo los muebles que no vas a llevar. Plataformas como Mercado Libre, OLX o grupos de Facebook de tu barrio son ideales para esto. Lo importante es publicar con fotos claras y un precio razonable con tiempo de anticipación — no lo dejes para la semana de la mudanza.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Donalos</h2>
            <p className="text-gray-300 mb-6">Si no te interesa venderlos o no encontraste compradores, donar es una gran alternativa. Muchas organizaciones, parroquias y comedores comunitarios reciben muebles en buen estado. También podés publicarlos en grupos de Facebook de "Te lo regalo" o en Trash Nothing. El único requisito es que el mueble esté en condiciones de ser usado.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Guardalos temporalmente</h2>
            <p className="text-gray-300 mb-6">Si no sabés si los vas a necesitar en el nuevo hogar o todavía no tenés decidido qué llevar, el guardamuebles es una solución intermedia. En La Mudanza ofrecemos depósito seguro por el tiempo que necesitás, desde semanas hasta meses. Es ideal para las transiciones donde el espacio nuevo es más chico o está en obras.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Descartá lo que no sirve</h2>
            <p className="text-gray-300 mb-6">Algunos muebles simplemente llegaron al final de su vida útil. Para deshacerte de ellos podés llamar al servicio de voluminosos de tu municipio o contratar una empresa de retiro de residuos. No los dejes en la vereda sin coordinar con el municipio — en muchos barrios de CABA hay días específicos para el retiro de muebles.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Calculá bien antes de mudarte</h2>
            <p className="text-gray-300 mb-6">Antes de decidir qué llevás y qué dejás, medí los espacios del nuevo hogar. Muchas veces un sillón o una cama que "seguro entra" termina siendo un problema el día de la mudanza. Hacé el plano a mano o usá una app de diseño de interiores para confirmar que los muebles van a funcionar en el nuevo espacio.</p>

            <div className="bg-zinc-800 border border-orange-500 rounded-lg p-8 mt-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">¿Necesitás guardar muebles durante la mudanza?</h3>
              <p className="text-gray-300 mb-6">Ofrecemos servicio de guardamuebles seguro en CABA y GBA. Consultanos sin cargo.</p>
              <a href="https://wa.me/541125535500" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-block mr-4">
                Consultar por WhatsApp
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
