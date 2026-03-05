/**
 * Footer du site ONASI
 * 
 * POUR MODIFIER :
 * - Les liens réseaux sociaux : changer les URLs dans socialLinks
 * - L'adresse / téléphone : modifier les textes directement
 * - Le logo : même procédé que dans Header.tsx
 */
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Colonne 1 : À propos */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Collège ONASI</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Établissement d'enseignement secondaire bilingue situé à Ebolowa, Cameroun.
              Former les leaders de demain dans un environnement d'excellence.
            </p>
            {/* Réseaux sociaux - REMPLACER les # par les vrais liens */}
            <div className="flex gap-3 mt-4">
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Colonne 2 : Navigation rapide */}
          <div>
            <h4 className="font-heading font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/a-propos", label: "À propos" },
                { to: "/formations", label: "Nos formations" },
                { to: "/actualites", label: "Actualités" },
                { to: "/inscription", label: "Inscription" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Horaires */}
          <div>
            <h4 className="font-heading font-bold mb-4">Horaires</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Lundi - Vendredi : 7h30 - 15h30</li>
              <li>Samedi : 7h30 - 12h00</li>
              <li>Dimanche : Fermé</li>
              <li className="pt-2 font-semibold text-secondary">
                Secrétariat : 8h - 16h
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Contact */}
          <div>
            <h4 className="font-heading font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                {/* REMPLACER par l'adresse exacte */}
                <span>Quartier XXXX, Ebolowa, Région du Sud, Cameroun</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                {/* REMPLACER par le vrai numéro */}
                <a href="tel:+237600000000" className="hover:text-primary-foreground">+237 6XX XXX XXX</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                {/* REMPLACER par le vrai email */}
                <a href="mailto:contact@onasi.cm" className="hover:text-primary-foreground">contact@onasi.cm</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre de copyright */}
        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Collège ONASI — Ebolowa, Cameroun. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
