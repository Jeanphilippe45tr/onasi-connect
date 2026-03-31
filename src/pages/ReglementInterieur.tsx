/**
 * PAGE REGLEMENT INTERIEUR - College ONASI
 *
 * POUR MODIFIER CETTE PAGE :
 * - Changer l'image de banniere : remplacer `schoolBuilding`
 * - Changer le texte d'introduction : modifier la section "Cadre general"
 * - Ajouter / supprimer des principes : modifier le tableau `principes`
 * - Ajouter / supprimer des categories de regles : modifier le tableau `regles`
 * - Ajouter des sanctions ou encouragements : modifier `sanctionsEtEncouragements`
 * - Remplacer le contenu generique par le vrai reglement officiel : modifier les textes directement
 *
 * ASTUCE :
 * - Si tu veux ajouter une nouvelle grande section visuelle, duplique un bloc `<section>`
 * - Si tu veux ajouter une simple regle dans une categorie existante, ajoute une ligne dans `points`
 */
import { motion } from "framer-motion";
import { BookCheck, ShieldCheck, Clock3, Users, CircleAlert, BadgeCheck } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import schoolBuilding from "@/assets/vue-lateral.jpg";

/* PRINCIPES DE BASE
 * Ajoute ici les grandes valeurs ou obligations de l'etablissement.
 * Chaque objet cree une carte dans la section "Principes fondamentaux".
 */
const principes = [
  {
    icon: BookCheck,
    title: "Assiduité et travail",
    description:
      "Chaque élève est tenu d'assister régulièrement aux cours, d'être ponctuel et de fournir un travail personnel sérieux.",
  },
  {
    icon: ShieldCheck,
    title: "Respect et discipline",
    description:
      "Le respect des enseignants, du personnel, des camarades et du matériel scolaire est une règle fondamentale de la vie en communauté.",
  },
  {
    icon: Clock3,
    title: "Ponctualité",
    description:
      "Les retards répétés perturbent les apprentissages. Les élèves doivent être présents avant le début effectif des activités.",
  },
  {
    icon: Users,
    title: "Vie collective",
    description:
      "Chacun contribue à préserver un climat serein, propre et favorable aux études dans l'enceinte de l'établissement.",
  },
];

/* CATEGORIES DE REGLES
 * Chaque objet cree un bloc de regles.
 * Pour ajouter une nouvelle categorie, duplique un objet avec :
 * - `title` : titre du bloc
 * - `points` : liste des regles a afficher
 */
const regles = [
  {
    title: "Tenue et présentation",
    points: [
      "Le port de la tenue scolaire est obligatoire les jours fixés par l'administration.",
      "La tenue doit être propre, correcte et conforme aux exigences de l'établissement.",
      "Les coiffures, accessoires ou attitudes contraires au cadre scolaire sont à éviter.",
    ],
  },
  {
    title: "Comportement en classe",
    points: [
      "Le silence, l'écoute et la participation respectueuse sont attendus pendant les cours.",
      "Toute forme d'insolence, de tricherie, de violence verbale ou physique est interdite.",
      "L'usage du téléphone ou d'appareils non autorisés en classe est proscrit.",
    ],
  },
  {
    title: "Protection des biens",
    points: [
      "Les salles, laboratoires, toilettes, mobiliers et équipements doivent être utilisés avec soin.",
      "Tout élève responsable d'une dégradation peut faire l'objet d'une réparation ou d'une sanction.",
      "Les objets personnels de valeur restent sous la responsabilité de leur propriétaire.",
    ],
  },
];

/* SUIVI EDUCATIF
 * Cette zone sert a presenter les sanctions, mesures d'encadrement
 * ou formes d'encouragement de l'etablissement.
 */
const sanctionsEtEncouragements = [
  {
    icon: CircleAlert,
    title: "Mesures disciplinaires",
    text: "Selon la gravité des faits, l'établissement peut appliquer un avertissement, une retenue, une convocation des parents, une exclusion temporaire ou toute autre mesure prévue par l'administration.",
  },
  {
    icon: BadgeCheck,
    title: "Encouragements",
    text: "Les élèves exemplaires par leur conduite, leurs résultats et leur engagement peuvent recevoir des félicitations, tableaux d'honneur ou distinctions officielles.",
  },
];

const ReglementInterieur = () => {
  return (
    <>
      {/* BANNIERE PRINCIPALE
          Modifier ici le titre, le sous-titre ou l'image de fond si necessaire. */}
      <PageBanner
        title="Règlement intérieur"
        subtitle="Les règles de vie qui encadrent le travail, la discipline et le respect au sein de l'établissement"
        backgroundImage={schoolBuilding}
      />

      {/* INTRODUCTION
          Remplace ce texte par la presentation officielle du reglement interieur de l'ecole. */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle
              title="Cadre général"
              subtitle="Cette page présente une base claire du règlement intérieur. Elle peut être ajustée pour correspondre exactement aux règles officielles de l'école."
            />
            <p className="text-muted-foreground leading-relaxed">
              Le règlement intérieur a pour objectif de garantir un environnement d'apprentissage
              sérieux, sécurisé et respectueux. Il s'applique à tous les élèves et s'inscrit dans
              une logique de responsabilité partagée entre l'administration, les enseignants, les
              parents et les apprenants.
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPES FONDAMENTAUX
          Cette section affiche automatiquement le contenu du tableau `principes`. */}
      <section className="py-20 bg-card">
        <div className="container">
          <SectionTitle
            title="Principes fondamentaux"
            subtitle="Les repères essentiels attendus de chaque élève au quotidien"
          />
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {principes.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-border bg-background p-6 shadow-sm"
              >
                <item.icon className="h-9 w-9 text-primary mb-4" />
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REGLES DETAILLEES
          Cette section affiche automatiquement les categories definies dans `regles`.
          Tu peux y ajouter des blocs comme : discipline, absences, examens, securite, internat, etc. */}
      <section className="py-20">
        <div className="container">
          <SectionTitle
            title="Règles à respecter"
            subtitle="Quelques obligations importantes liées à la tenue, au comportement et à la préservation du cadre scolaire"
          />
          <div className="grid lg:grid-cols-3 gap-6">
            {regles.map((bloc, index) => (
              <motion.div
                key={bloc.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <h3 className="font-heading text-2xl font-bold text-foreground mb-5">{bloc.title}</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {bloc.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-secondary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SANCTIONS ET ENCOURAGEMENTS
          Remplace ces textes par les mesures reelles appliquees dans l'etablissement. */}
      <section className="py-20 bg-card">
        <div className="container">
          <SectionTitle
            title="Suivi éducatif"
            subtitle="La discipline scolaire s'accompagne aussi d'un effort de valorisation des bons comportements"
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {sanctionsEtEncouragements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl p-8 border border-border bg-background"
              >
                <item.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MESSAGE FINAL
          Tu peux remplacer ce bloc par :
          - une conclusion officielle
          - une signature de la direction
          - des informations pour les parents
          - un lien vers un PDF du reglement complet */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto rounded-3xl bg-primary p-8 md:p-10 text-primary-foreground">
            <h2 className="font-heading text-3xl font-bold mb-4">Engagement des familles et des élèves</h2>
            <p className="text-primary-foreground/85 leading-relaxed mb-4">
              L'inscription à l'école implique l'acceptation du règlement intérieur. Les parents
              sont invités à accompagner leurs enfants dans le respect des consignes, le suivi du
              travail scolaire et la communication régulière avec l'administration.
            </p>
            <p className="text-primary-foreground/85 leading-relaxed">
              Si vous le souhaitez, nous pouvons aussi remplacer ce contenu par la version exacte
              du règlement officiel de l'établissement, article par article.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReglementInterieur;
