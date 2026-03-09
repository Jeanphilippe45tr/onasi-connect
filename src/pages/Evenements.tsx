/**
 * PAGE ÉVÉNEMENTS / CALENDRIER SCOLAIRE - Collège ONASI
 * 
 * POUR MODIFIER :
 * - Les événements : modifier le tableau `evenements`
 * - Le calendrier scolaire : modifier le tableau `calendrier`
 */
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import eventCultural from "@/assets/event-cultural.jpg";

/** Événements à venir - MODIFIER avec vos vrais événements */
const evenements = [
  {
    titre: "Rentrée scolaire 2025-2026",
    date: "Septembre 2025",
    heure: "7h30",
    lieu: "Collège ONASI",
    description: "Accueil des nouveaux et anciens élèves. Distribution des emplois du temps et présentation du corps enseignant.",
    type: "Rentrée",
  },
  {
    titre: "Réunion parents-professeurs (1er trimestre)",
    date: "Novembre 2025",
    heure: "9h00 - 13h00",
    lieu: "Salle polyvalente",
    description: "Présentation des résultats du premier trimestre et échanges individuels avec les enseignants.",
    type: "Réunion",
  },
  {
    titre: "Journée mondiale de l'éducation",
    date: "Janvier 2026",
    heure: "8h00 - 14h00",
    lieu: "Amphithéâtre ONASI",
    description: "Conférences, débats et ateliers autour du thème « L'éducation pour un avenir meilleur ».",
    type: "Culture",
  },
  {
    titre: "Compétitions sportives inter-classes",
    date: "Février 2026",
    heure: "8h00 - 15h00",
    lieu: "Terrain de sport",
    description: "Football, basketball, athlétisme et volleyball entre les différentes classes. Remise de trophées.",
    type: "Sport",
  },
  {
    titre: "Semaine de la francophonie",
    date: "Mars 2026",
    heure: "8h00 - 16h00",
    lieu: "Salle de conférence",
    description: "Concours d'orthographe, récitation de poèmes, pièces de théâtre et quiz culturels en français.",
    type: "Culture",
  },
  {
    titre: "Journée culturelle bilingue",
    date: "Mars 2026",
    heure: "8h00 - 16h00",
    lieu: "Cour de l'école",
    description: "Célébration de la diversité culturelle avec danses traditionnelles, chants, gastronomie et expositions artistiques.",
    type: "Culture",
  },
  {
    titre: "Olympiades scientifiques ONASI",
    date: "Avril 2026",
    heure: "9h00 - 14h00",
    lieu: "Laboratoire de sciences",
    description: "Compétition de mathématiques, physique et SVT ouverte à tous les niveaux. Prix pour les meilleurs.",
    type: "Sport",
  },
  {
    titre: "Journée portes ouvertes",
    date: "Mai 2026",
    heure: "9h00 - 15h00",
    lieu: "Campus ONASI",
    description: "Visite guidée du campus, rencontre avec les enseignants et présentation des formations pour les futurs élèves.",
    type: "Réunion",
  },
  {
    titre: "Remise des prix d'excellence",
    date: "Juin 2026",
    heure: "10h00",
    lieu: "Salle des fêtes",
    description: "Cérémonie solennelle de remise des prix aux meilleurs élèves de l'année en présence des parents et autorités.",
    type: "Cérémonie",
  },
  {
    titre: "Préparation aux examens officiels",
    date: "Mai 2026",
    heure: "7h30 - 17h00",
    lieu: "Salles de classe",
    description: "Sessions intensives de révision et examens blancs pour le BEPC, Probatoire, Baccalauréat et GCE.",
    type: "Rentrée",
  },
];

/** Calendrier scolaire - MODIFIER avec les vraies dates */
const calendrier = [
  { periode: "Pré-rentrée des enseignants", debut: "Août 2025", fin: "Septembre 2025", color: "bg-accent" },
  { periode: "1er Trimestre", debut: "Septembre 2025", fin: "Décembre 2025", color: "bg-primary" },
  { periode: "Évaluations 1er Trimestre", debut: "Décembre 2025", fin: "Décembre 2025", color: "bg-secondary" },
  { periode: "Congés de Noël", debut: "Décembre 2025", fin: "Janvier 2026", color: "bg-accent" },
  { periode: "2ème Trimestre", debut: "Janvier 2026", fin: "Mars 2026", color: "bg-primary" },
  { periode: "Évaluations 2ème Trimestre", debut: "Mars 2026", fin: "Mars 2026", color: "bg-secondary" },
  { periode: "Congés de Pâques", debut: "Mars 2026", fin: "Avril 2026", color: "bg-accent" },
  { periode: "3ème Trimestre", debut: "Avril 2026", fin: "Juin 2026", color: "bg-primary" },
  { periode: "Examens officiels (BEPC, GCE, BAC)", debut: "Juin 2026", fin: "Juillet 2026", color: "bg-secondary" },
  { periode: "Délibérations & remise des bulletins", debut: "Juillet 2026", fin: "Juillet 2026", color: "bg-accent" },
  { periode: "Grandes vacances", debut: "Juillet 2026", fin: "Septembre 2026", color: "bg-primary" },
];

const typeColors: Record<string, string> = {
  "Rentrée": "bg-primary text-primary-foreground",
  "Réunion": "bg-secondary text-secondary-foreground",
  "Culture": "bg-accent text-accent-foreground",
  "Sport": "bg-primary text-primary-foreground",
  "Cérémonie": "bg-secondary text-secondary-foreground",
};

const Evenements = () => {
  return (
    <>
      <PageBanner
        title="Événements"
        subtitle="Calendrier scolaire et événements du Collège ONASI"
        backgroundImage={eventCultural}
      />

      {/* Calendrier scolaire */}
      <section className="py-20">
        <div className="container">
          <SectionTitle title="Calendrier Scolaire 2025-2026" />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-3">
              {calendrier.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border"
                >
                  <div className={`h-3 w-3 rounded-full shrink-0 ${p.color}`} />
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-foreground text-sm">{p.periode}</h3>
                    <p className="text-xs text-muted-foreground">{p.debut} — {p.fin}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Événements à venir */}
      <section className="py-20 bg-card">
        <div className="container">
          <SectionTitle title="Événements à venir" subtitle="Ne manquez aucun rendez-vous important" />
          <div className="max-w-3xl mx-auto space-y-6">
            {evenements.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-xl border border-border p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${typeColors[event.type] || "bg-muted text-muted-foreground"}`}>
                    {event.type}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground">{event.titre}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{event.description}</p>
                <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{event.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{event.heure}</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{event.lieu}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Evenements;
