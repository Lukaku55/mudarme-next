"use client";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo-lamudanza.jpeg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image src={logo} alt="La Mudanza - Mudanzas en CABA y Gran Buenos Aires" className="h-14 w-auto rounded-xl shadow-elevated mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              La Mudanza es una empresa familiar con más de 3 décadas de experiencia brindando servicios de mudanza de excelencia en Buenos Aires.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg mb-4 text-primary">Navegación</h4>
            <nav className="space-y-2">
              {["Inicio", "Servicios", "Nosotros", "Testimonios", "Contacto"].map((link) => (
                <a
                  key={link}
                  href={`/#${link.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg mb-4 text-primary">Servicios</h4>
            <nav className="space-y-2">
              {[
                { label: "Mudanzas residenciales", href: "/mudanzas-residenciales" },
                { label: "Mudanzas comerciales", href: "/mudanzas-comerciales" },
                { label: "Embalaje profesional", href: "/embalaje-profesional" },
                { label: "Mudanzas al interior", href: "/mudanzas-interior" },
                { label: "Guardamuebles", href: "/guardamuebles" },
                { label: "Izajes por balcón", href: "/izajes" },
                { label: "Galería de trabajos", href: "/galeria" },
              ].map((s) => (
                <Link key={s.href} href={s.href} className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                  {s.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-4 text-primary">Contacto</h4>
            <div className="space-y-3">
              <a href="tel:+541125535500" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Phone className="w-4 h-4 text-primary" />
                11-2553-5500
              </a>
              <a href="tel:+541125535500" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Phone className="w-4 h-4 text-primary" />
                11-2553-5500
              </a>
              <a href="mailto:Lamudanzamudanzas@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Mail className="w-4 h-4 text-primary" />
                Lamudanzamudanzas@gmail.com
              </a>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                Buenos Aires, Argentina
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>© 2026 La Mudanza. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;