/**
 * PAGE D'ACCUEIL - Collège ONASI
 * 
 * =============================================
 * GUIDE POUR CHANGER LES IMAGES :
 * 
 * 1. Hero slider : Modifier les imports heroSchool, studentsClassroom, eventCultural
 *    - Placer vos nouvelles images dans src/assets/
 *    - Modifier les imports en haut du fichier
 * 
 * 2. Photo du proviseur : Modifier l'import proviseurImg
 * 
 * 3. Chiffres clés : Modifier les valeurs dans le tableau `stats`
 * 
 * 4. Témoignages : Modifier le tableau `testimonials`
 * =============================================
 */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Users, Award, Calendar, ChevronLeft, ChevronRight, Quote, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";

/* ========= IMAGES À REMPLACER ========= */
// Pour changer une image : remplacer le fichier dans src/assets/ ou modifier le chemin d'import
import heroSchool from "@/assets/école-haut.jpg";           // Image principale du slider
import studentsClassroom from "@/assets/vue-lateral.jpg"; // Image slider 2
import eventCultural from "@/assets/court.jpg";     // Image slider 3
import schoolBuilding from "@/assets/vue-lateral.jpg";   // Image slider 4
import proviseurImg from "@/assets/principal.jpeg";          // Photo du proviseur
import principalImg from "@/assets/principal2.jpg";        // Photo du proviseur
import staffImg from "@/assets/staff.jpg";    //image des staff




/* ====================================== */

/** Images du slider héro - AJOUTER/SUPPRIMER des images ici */
const heroSlides = [
  {
    image: heroSchool,
    title: "Bienvenue au Collège ONASI",
    subtitle: "Un établissement bilingue d'excellence à Ebolowa",
  },
  {
    image: studentsClassroom,
    title: "L'excellence académique",
    subtitle: "Des résultats exceptionnels aux examens officiels",
  },
  {
    image: eventCultural,
    title: "Culture & Diversité",
    subtitle: "Un cadre bilingue francophone et anglophone",
  },
  {
    image: schoolBuilding,
    title: "Un cadre moderne",
    subtitle: "Des infrastructures adaptées à l'apprentissage",
  },
];

/** Chiffres clés - MODIFIER les valeurs selon vos données réelles */
const stats = [
  { icon: Users, value: "1 200+", label: "Élèves", color: "text-primary" },
  { icon: Award, value: "95%", label: "Taux de réussite", color: "text-accent" },
  { icon: GraduationCap, value: "15+", label: "Années d'expérience", color: "text-secondary" },
  { icon: Calendar, value: "50+", label: "Enseignants qualifiés", color: "text-primary" },
];

/** Témoignages - MODIFIER selon vos vrais témoignages */
const testimonials = [
  {
    quote: "Le Collège ONASI a transformé l'avenir de mon fils. Les enseignants sont dévoués et les résultats parlent d'eux-mêmes.",
    author: "Mme Ekotto",
    role: "Parent d'élève",
  },
  {
    quote: "Grâce au système bilingue, je maîtrise parfaitement le français et l'anglais. ONASI m'a préparé pour l'université.",
    author: "Jean-Pierre N.",
    role: "Ancien élève, promotion 2023",
  },
  {
    quote: "L'encadrement personnalisé et les activités extrascolaires font d'ONASI un établissement unique dans la région.",
    author: "M. Atangana",
    role: "Parent d'élève",
  },
];

/** Dernières actualités - MODIFIER selon vos actualités réelles */
const latestNews = [
  {
    title: "Résultats brillants au BEPC et Probatoire 2025",
    date: "Août 2025",
    excerpt: "Le Collège ONASI confirme son excellence avec un taux de réussite exceptionnel aux examens officiels.",
  },
  {
    title: "Journée portes ouvertes - Rentrée 2025-2026",
    date: "Juillet 2025",
    excerpt: "Venez découvrir notre établissement et rencontrer l'équipe pédagogique lors de notre journée portes ouvertes.",
  },
  {
    title: "Victoire au concours inter-établissements",
    date: "Mai 2025",
    excerpt: "Nos élèves remportent le premier prix au concours régional de sciences et mathématiques.",
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-défilement du slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div>
      {/* ==========================================
          SECTION 1 : HERO SLIDER
          ========================================== */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Image de fond - REMPLACER les images dans les imports ci-dessus */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 hero-gradient" />
          </div>
        ))}

        {/* Contenu texte du slider */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground leading-tight">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="mt-4 text-lg md:text-xl text-primary-foreground/85">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/inscription">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-base px-8">
                    S'inscrire maintenant
                  </Button>
                </Link>
                <Link to="/a-propos">
                  <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold">
                    Découvrir ONASI
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Boutons navigation slider */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/40 text-primary-foreground transition-colors" aria-label="Précédent">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/40 text-primary-foreground transition-colors" aria-label="Suivant">
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Indicateurs */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all ${i === currentSlide ? "w-8 bg-secondary" : "w-2 bg-primary-foreground/40"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ==========================================
          SECTION 2 : CHIFFRES CLÉS
          ========================================== */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-background border border-border"
              >
                <stat.icon className={`h-10 w-10 mx-auto mb-3 ${stat.color}`} />
                <p className="text-3xl md:text-4xl font-heading font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3 : MOT DU PROVISEUR
          ========================================== */}
      <section className="py-20 section-pattern">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Photo du proviseur - REMPLACER l'import proviseurImg */}
              <img
                src={principalImg}
                alt="Le Proviseur du Collège ONASI"
                className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle title="Mot du Proviseur" centered={false} />
              <blockquote className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  « Chers parents, chers élèves, bienvenue au Collège ONASI. Notre établissement
                  bilingue est un lieu où l'excellence académique rencontre les valeurs humaines.
                </p>
                <p>
                  Depuis notre création, nous nous engageons à offrir un enseignement de qualité,
                  tant en français qu'en anglais, préparant nos élèves à devenir des citoyens
                  accomplis et compétitifs sur le plan national et international. »
                </p>
              </blockquote>
              {/* REMPLACER par le vrai nom du proviseur */}
              <p className="mt-6 font-heading font-bold text-foreground">M. / Mme Onana Messi Blaise</p>
              <p className="text-sm text-muted-foreground">Proviseur du Collège ONASI</p>
              <Link to="/a-propos" className="inline-block mt-4">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  En savoir plus →
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 4 : DERNIÈRES ACTUALITÉS
          ========================================== */}
      <section className="py-20 bg-card">
        <div className="container">
          <SectionTitle
            title="Dernières Actualités"
            subtitle="Restez informé des événements et nouvelles du Collège ONASI"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {latestNews.map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-background rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Zone image - AJOUTER une image si disponible */}
                <div className="h-48 bg-muted flex items-center justify-center">
                  <GraduationCap className="h-12 w-12 text-muted-foreground/30" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-secondary">{news.date}</span>
                  <h3 className="mt-2 font-heading font-bold text-foreground">{news.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{news.excerpt}</p>
                  <Link to="/actualites" className="text-primary text-sm font-semibold mt-3 inline-block hover:underline">
                    Lire la suite →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 5 : TÉMOIGNAGES
          ========================================== */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Ils nous font confiance</h2>
            <div className="mt-4 flex gap-1 justify-center">
              <span className="h-1 w-8 rounded-full bg-secondary" />
              <span className="h-1 w-8 rounded-full bg-primary-foreground/40" />
              <span className="h-1 w-8 rounded-full bg-secondary" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10"
              >
                <Quote className="h-8 w-8 text-secondary mb-4" />
                <p className="text-primary-foreground/90 italic leading-relaxed">"{t.quote}"</p>
                <div className="mt-4 pt-4 border-t border-primary-foreground/10">
                  <p className="font-bold">{t.author}</p>
                  <p className="text-sm text-primary-foreground/70">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 6 : LOCALISATION GOOGLE MAPS
          REMPLACER le src de l'iframe par votre lien Google Maps embed
          ========================================== */}
      <section className="py-20">
        <div className="container">
          <SectionTitle
            title="Nous trouver"
            subtitle="Collège ONASI, Ebolowa — Région du Sud, Cameroun"
          />
          <div className="rounded-xl overflow-hidden shadow-lg border border-border">
            <div className="flex items-center gap-2 px-4 py-3 bg-muted">
              <MapPin className="h-5 w-5 text-accent" />
              {/* REMPLACER par l'adresse exacte */}
              <span className="text-sm text-foreground font-medium">Ebolowa, Région du Sud, Cameroun</span>
            </div>
            {/* 
              POUR INTÉGRER VOTRE CARTE GOOGLE MAPS :
              1. Allez sur Google Maps
              2. Recherchez votre école
              3. Cliquez sur "Partager" > "Intégrer une carte"
              4. Copiez le lien src="" et collez-le ci-dessous
            */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.9502447158525!2d11.141782175867244!3d2.830635155026182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105f3f9f455babbb%3A0x787d025de67e17da!2sOnasi%20Bilingual%20College!5e0!3m2!1sfr!2scm!4v1772758271952!5m2!1sfr!2scm"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Collège ONASI"
            />
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 7 : APPEL À L'ACTION INSCRIPTION
          ========================================== */}
      <section className="py-16 gold-gradient">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground">
            Inscrivez votre enfant dès maintenant !
          </h2>
          <p className="mt-3 text-secondary-foreground/80 max-w-xl mx-auto">
            Rejoignez la famille ONASI et offrez à votre enfant une éducation bilingue de qualité.
          </p>
          <Link to="/inscription" className="inline-block mt-6">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base px-10">
              Commencer l'inscription
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
