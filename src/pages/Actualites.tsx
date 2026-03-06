/**
 * PAGE ACTUALITÉS / BLOG - Collège ONASI
 * 
 * POUR MODIFIER :
 * - Les articles : modifier le tableau `articles`
 * - Les images : ajouter vos images et les importer
 * - Les documents PDF : modifier les liens dans `documents`
 */
import { motion } from "framer-motion";
import { Calendar, Download, FileText, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import eventCultural from "@/assets/event-cultural.jpg";

/** Articles / Actualités - MODIFIER avec vos vraies actualités */
const articles = [
  {
    titre: "Résultats exceptionnels au BEPC 2025",
    date: "Août 2025",
    categorie: "Résultats",
    extrait: "Le Collège ONASI enregistre un taux de réussite de 95% au BEPC, confirmant sa position de leader dans la Région du Sud.",
    contenu: "Nos élèves ont une fois de plus brillé lors des examens officiels...",
  },
  {
    titre: "Journée culturelle bilingue",
    date: "Juin 2025",
    categorie: "Événements",
    extrait: "Une journée riche en couleurs célébrant la diversité culturelle de notre établissement bilingue.",
    contenu: "La journée culturelle a réuni plus de 800 élèves des deux sections...",
  },
  {
    titre: "Partenariat avec l'Université de Yaoundé",
    date: "Mai 2025",
    categorie: "Communiqué",
    extrait: "ONASI signe un accord de partenariat pour l'orientation et le suivi académique de nos meilleurs élèves.",
    contenu: "Ce partenariat permettra à nos élèves de bénéficier...",
  },
  {
    titre: "Compétition inter-établissements de sciences",
    date: "Avril 2025",
    categorie: "Événements",
    extrait: "Nos élèves remportent le premier prix en physique et chimie lors du concours régional.",
    contenu: "Face à 15 établissements de la région...",
  },
  {
    titre: "Rentrée scolaire 2025-2026",
    date: "Septembre 2025",
    categorie: "Communiqué",
    extrait: "Toutes les informations pratiques pour préparer la rentrée : dates, fournitures, inscriptions.",
    contenu: "La rentrée scolaire est prévue pour le...",
  },
  {
    titre: "Résultats GCE O/L et A/L 2025",
    date: "Août 2025",
    categorie: "Résultats",
    extrait: "Outstanding results at the GCE exams with a 92% pass rate for our anglophone students.",
    contenu: "Our anglophone section students have achieved remarkable results...",
  },
];

/** Documents téléchargeables - AJOUTER vos vrais fichiers PDF */
const documents = [
  { nom: "Calendrier scolaire 2025-2026", type: "PDF", url: "#" },
  { nom: "Règlement intérieur", type: "PDF", url: "#" },
  { nom: "Liste des fournitures scolaires", type: "PDF", url: "#" },
  { nom: "Formulaire d'inscription", type: "PDF", url: "#" },
];

const categorieColors: Record<string, string> = {
  "Résultats": "bg-primary text-primary-foreground",
  "Événements": "bg-secondary text-secondary-foreground",
  "Communiqué": "bg-accent text-accent-foreground",
};

const Actualites = () => {
  return (
    <>
      <PageBanner
        title="Actualités"
        subtitle="Suivez les dernières nouvelles et événements du Collège ONASI"
        backgroundImage={eventCultural}
      />

      {/* Articles */}
      <section className="py-20">
        <div className="container">
          <SectionTitle title="Dernières Publications" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Zone image article - AJOUTER une image si disponible */}
                <div className="h-44 bg-muted flex items-center justify-center">
                  <FileText className="h-10 w-10 text-muted-foreground/30" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categorieColors[article.categorie] || "bg-muted text-muted-foreground"}`}>
                      {article.categorie}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-foreground leading-snug">{article.titre}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{article.extrait}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Documents téléchargeables */}
      <section className="py-20 bg-card">
        <div className="container">
          <SectionTitle title="Documents à télécharger" subtitle="Accédez aux documents officiels du collège" />
          <div className="max-w-2xl mx-auto space-y-3">
            {documents.map((doc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-4 bg-background rounded-xl border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{doc.nom}</p>
                    <p className="text-xs text-muted-foreground">{doc.type}</p>
                  </div>
                </div>
                {/* REMPLACER le href="#" par le vrai lien de téléchargement */}
                <a href={doc.url} download>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Download className="h-4 w-4" />
                    Télécharger
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Actualites;
