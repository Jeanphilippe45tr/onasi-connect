/**
 * Header / Navigation principale du site ONASI
 * 
 * Pour modifier le logo : remplacer le texte "ONASI" par une balise <img>
 * avec votre logo, par exemple :
 *   import logo from "@/assets/logo-onasi.png";
 *   <img src={logo} alt="ONASI" className="h-12" />
 */
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/equipe", label: "Notre équipe" },
  { to: "/formations", label: "Formations" },
  { to: "/actualites", label: "Actualités" },
  { to: "/evenements", label: "Événements" },
  { to: "/reglement-interieur", label: "Règlement intérieur" },
  { to: "/inscription", label: "Inscription" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      {/* Barre supérieure */}
      <div className="bg-primary">
        <div className="container flex items-center justify-between py-1.5 text-sm text-primary-foreground">
          <span className="hidden sm:inline">🎓 Établissement bilingue d'excellence — Ebolowa, Cameroun</span>
          <a href="tel:+237674341867" className="flex items-center gap-1 hover:opacity-80">
            <Phone className="h-3 w-3" />
            {/* REMPLACER par le vrai numéro */}
            +237 674 341 867
          </a>
        </div>
      </div>

      <div className="container flex items-center justify-between py-3">
        {/* Logo / Nom */}
        <Link to="/" className="flex items-center gap-2">
          {/* 
            POUR AJOUTER UN LOGO : 
            1. Placer votre image dans src/assets/logo-onasi.png
            2. import logo from "@/assets/logo-onasi.png";
            3. Ajouter <img src={logo} alt="ONASI" className="h-10" /> ici
          */}
          <div className="flex flex-col">
            <span className="text-2xl font-heading font-bold text-primary tracking-tight">ONASI</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Collège Bilingue</span>
          </div>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === link.to
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bouton inscription + menu mobile */}
        <div className="flex items-center gap-2">
          <Link to="/inscription" className="hidden md:block">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
              S'inscrire
            </Button>
          </Link>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-border bg-card pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block px-6 py-3 text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
