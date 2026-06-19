import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import QuoteForm from "@/components/QuoteForm";
import CoverageArea from "@/components/CoverageArea";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BlogPreview from "@/components/BlogPreview";
import ZonasPreview from "@/components/ZonasPreview";
import GaleriaTrabajos from "@/components/GaleriaTrabajos";

export const metadata = {
  title: "Mudanzas y Guardamuebles en CABA y GBA | La Mudanza +30 años",
  description: "La Mudanza: mudanzas residenciales, comerciales y guardamuebles en CABA y GBA. +30 años de experiencia. Presupuesto sin cargo.",
  alternates: { canonical: "https://www.mudarme.com.ar" },
  openGraph: { type: "website", url: "https://www.mudarme.com.ar" },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "La Mudanza",
  "url": "https://www.mudarme.com.ar",
  "description": "Empresa de mudanzas residenciales, comerciales y guardamuebles en CABA y GBA con más de 30 años de experiencia.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.mudarme.com.ar/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <CTASection />
        <QuoteForm />
        <CoverageArea />
      </main>
      <GaleriaTrabajos />
      <ZonasPreview />
      <BlogPreview />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
