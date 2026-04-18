/**
 * PAGE FORMATIONS / CLASSES - Collège ONASI
 * 
 * POUR MODIFIER :
 * - Les niveaux : modifier les tableaux `niveauxFranco` et `niveauxAnglo`
 * - Les séries : modifier le tableau `series`
 * - Les activités : modifier le tableau `activites`
 */
import { motion } from "framer-motion";
import { BookOpen, Music, Trophy, Palette, Globe, FlaskConical } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import schoolBuilding from "@/assets/school-building.jpg";

/** Niveaux du sous-système francophone */
const niveauxFranco = [
  { niveau: "6ème", cycle: "Premier cycle", description: "Classe d'entrée au collège. Initiation aux différentes disciplines." },
  { niveau: "5ème", cycle: "Premier cycle", description: "Approfondissement des connaissances de base." },
  { niveau: "4ème", cycle: "Premier cycle", description: "Préparation progressive au BEPC." },
  { niveau: "3ème", cycle: "Premier cycle", description: "Classe d'examen : BEPC (Brevet d'Études du Premier Cycle)." },
  { niveau: "Seconde", cycle: "Second cycle", description: "Tronc commun. Orientation vers les séries." },
  { niveau: "Première", cycle: "Second cycle", description: "Spécialisation par série. Préparation au Probatoire." },
  { niveau: "Terminale", cycle: "Second cycle", description: "Classe d'examen : Baccalauréat." },
];

/** Niveaux du sous-système anglophone */
const niveauxAnglo = [
  { niveau: "Form 1", cycle: "First Cycle", description: "Entry level into secondary education." },
  { niveau: "Form 2", cycle: "First Cycle", description: "Building foundational knowledge." },
  { niveau: "Form 3", cycle: "First Cycle", description: "Preparation for the First School Leaving Certificate." },
  { niveau: "Form 4", cycle: "First Cycle", description: "GCE Ordinary Level preparation begins." },
  { niveau: "Form 5", cycle: "First Cycle", description: "GCE Ordinary Level examination class." },
  { niveau: "Lower Sixth", cycle: "Second Cycle", description: "Advanced level studies begin. Specialization." },
  { niveau: "Upper Sixth", cycle: "Second Cycle", description: "GCE Advanced Level examination class." },
];

/** Séries disponibles - MODIFIER selon les séries offertes */
const series = [
  { nom: "Série A (Littéraire)", description: "Français, Philosophie, Histoire-Géographie, Langues vivantes", system: "Francophone" },
  { nom: "Série C (Scientifique)", description: "Mathématiques, Physique-Chimie, Sciences de la Vie et de la Terre", system: "Francophone" },
  { nom: "Série D (Sciences naturelles)", description: "SVT, Mathématiques, Physique-Chimie", system: "Francophone" },
  { nom: "Arts", description: "Literature, History, Geography, Languages", system: "Anglophone" },
  { nom: "Science", description: "Mathematics, Physics, Chemistry, Biology", system: "Anglophone" },
];

/** Activités extrascolaires */
const activites = [
  { icon: Trophy, nom: "Sports", description: "Football, basketball, athlétisme, volleyball" },
  { icon: Music, nom: "Musique & Chorale", description: "Chorale scolaire, fanfare, instruments" },
  { icon: Palette, nom: "Arts & Culture", description: "Théâtre, danse traditionnelle, arts plastiques" },
  { icon: FlaskConical, nom: "Club Sciences", description: "Expérimentations, projets scientifiques, olympiades" },
  { icon: Globe, nom: "Club Bilingue", description: "Échanges linguistiques, débats en français et anglais" },
  { icon: BookOpen, nom: "Club Lecture", description: "Bibliothèque, concours de lecture, rédaction" },
];

const Formations = () => {
  return (
    <>
      <PageBanner
        title="Nos Formations"
        subtitle="Un programme académique bilingue complet du premier au second cycle"
        backgroundImage={schoolBuilding}
      />

      {/* Section Francophone */}
      <section className="py-20">
        <div className="container">
          <SectionTitle title="Sous-système Francophone" subtitle="De la 6ème à la Terminale" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {niveauxFranco.map((n, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                    <span className="text-sm font-bold text-primary-foreground">{n.niveau.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground">{n.niveau}</h3>
                    <span className="text-xs text-muted-foreground">{n.cycle}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{n.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Anglophone */}
      <section className="py-20 bg-card">
        <div className="container">
          <SectionTitle title="Anglophone Sub-System" subtitle="From Form 1 to Upper Sixth" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {niveauxAnglo.map((n, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-background rounded-xl border border-border p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center">
                    <span className="text-sm font-bold text-accent-foreground">{n.niveau.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground">{n.niveau}</h3>
                    <span className="text-xs text-muted-foreground">{n.cycle}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{n.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Séries */}
      <section className="py-20 section-pattern">
        <div className="container">
          <SectionTitle title="Séries & Filières" subtitle="Choisissez la voie qui correspond à vos ambitions" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {series.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl border border-border p-6"
              >
                <span className="text-xs font-semibold text-secondary">{s.system}</span>
                <h3 className="font-heading font-bold text-foreground mt-1">{s.nom}</h3>
                <p className="text-sm text-muted-foreground mt-2">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activités extrascolaires */}
      <section className="py-20 bg-card">
        <div className="container">
          <SectionTitle title="Activités Extrascolaires" subtitle="Épanouissement au-delà de la salle de classe" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {activites.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 bg-background rounded-xl border border-border p-5"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <a.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground">{a.nom}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{a.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Formations;
