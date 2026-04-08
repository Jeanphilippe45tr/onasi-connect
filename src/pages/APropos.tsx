/**
 * PAGE À PROPOS - Collège ONASI
 * 
 * POUR MODIFIER :
 * - Les images : changer les imports en haut du fichier
 * - L'histoire, la mission, les valeurs : modifier les textes directement
 * - L'organigramme : modifier le tableau `organigramme`
 */
import { motion } from "framer-motion";
import { Target, Eye, Heart, BookOpen, Shield, Handshake } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";

/* ========= IMAGES À REMPLACER ========= */
import schoolBuilding from "@/assets/vue-lateral.jpg";
import proviseurImg from "@/assets/principal2.jpg";
import heroSchool from "@/assets/école-haut.jpg";
import principal from "@/assets/principal.jpeg";
import staff1 from "@/assets/staff.jpg";
/* ====================================== */

/**
 * GALERIES PHOTOS - POUR AJOUTER OU CHANGER UNE IMAGE :
 * 1. Importer la nouvelle image en haut du fichier
 * 2. Remplacer `image:` par votre import
 * 3. Modifier le `title` et le `description`
 *
 * Exemple :
 * { image: maNouvellePhoto, title: "Laboratoire", description: "Travaux pratiques des élèves" }
 */
const galerieSections = [
  {
    title: "Le Campus",
    subtitle: "Les espaces qui accueillent les élèves au quotidien",
    images: [
      {
        image: heroSchool,
        title: "Vue générale de l'établissement",
        description: "Une photo principale du collège pour présenter le cadre global.",
      },
      {
        image: schoolBuilding,
        title: "Bâtiments et accès",
        description: "Ajoutez ici une image de la cour ou des bâtiments administratifs.",
      },
    ],
  },

  {
    title: "Vie scolaire",
    subtitle: "Les moments qui montrent l'encadrement et l'ambiance de l'école",
    images: [
      {
        image: proviseurImg,
        title: "Encadrement des élèves",
        description: "Une photo d'activité, d'accompagnement ou de rassemblement scolaire.",
      },
      {
        image: principal,
        title: "Direction et accueil",
        description: "Une image du personnel administratif ou d'un moment officiel.",
      },
    ],
  },

  {
    title: "Staff",
    subtitle: "Nos valeureux soldats de l'éducation",
    images: [
      {
        image: staff1,
        title: "Encadrement des élèves",
        description: "Une photo d'activité, d'accompagnement ou de rassemblement scolaire.",
      },
      {
        image: principal,
        title: "Direction et accueil",
        description: "Une image du personnel administratif ou d'un moment officiel.",
      },
    ],
  },
];

/** Valeurs de l'établissement - MODIFIER selon vos valeurs */
const valeurs = [
  { icon: BookOpen, title: "Excellence", description: "Nous visons l'excellence dans l'enseignement et l'apprentissage." },
  { icon: Shield, title: "Discipline", description: "La discipline est le fondement de la réussite scolaire et personnelle." },
  { icon: Heart, title: "Respect", description: "Le respect mutuel entre élèves, enseignants et parents." },
  { icon: Handshake, title: "Bilinguisme", description: "La maîtrise du français et de l'anglais pour un avenir ouvert sur le monde." },
  { icon: Target, title: "Engagement", description: "Un engagement total envers la réussite de chaque élève." },
  { icon: Eye, title: "Innovation", description: "Des méthodes pédagogiques modernes et adaptées." },
];

/** Organigramme - MODIFIER avec les vrais noms et postes */
const organigramme = [
  { nom: "M. / Mme Onana Messi Blaise", poste: "Proviseur", level: "primary" },
  { nom: "M. / Mme XXXX", poste: "Censeur Francophone", level: "secondary" },
  { nom: "M. / Mme XXXX", poste: "Vice-Principal (Anglophone)", level: "secondary" },
  { nom: "M. / Mme XXXX", poste: "Surveillant(e) Général(e)", level: "tertiary" },
  { nom: "M. / Mme XXXX", poste: "Intendant(e)", level: "tertiary" },
  { nom: "M. / Mme XXXX", poste: "Chef de Secrétariat", level: "tertiary" },
];

const APropos = () => {
  return (
    <>
      <PageBanner
        title="À propos d'ONASI"
        subtitle="Découvrez notre histoire, notre mission et nos valeurs"
        backgroundImage={schoolBuilding}
      />

      {/* Histoire */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionTitle title="Notre Histoire" centered={false} />
              {/* REMPLACER par la vraie histoire de l'établissement */}
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Le Collège ONASI a été fondé avec la vision de créer un établissement d'enseignement
                  secondaire bilingue d'excellence dans la ville d'Ebolowa, chef-lieu de la Région du Sud
                  du Cameroun.
                </p>
                <p>
                  Depuis sa création, ONASI s'est imposé comme une référence éducative dans la région,
                  formant des générations d'élèves qui se distinguent par leur excellence académique
                  et leurs valeurs humaines.
                </p>
                <p>
                  Notre établissement accueille aujourd'hui plus de 1 200 élèves dans les sections
                  francophone et anglophone, du premier cycle au second cycle de l'enseignement secondaire.
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              {/* Image de l'école - REMPLACER heroSchool par votre image */}
              <img src={heroSchool} alt="Vue aérienne du Collège ONASI" className="rounded-2xl shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission et Vision */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary text-primary-foreground rounded-2xl p-8"
            >
              <Target className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-2xl font-heading font-bold mb-4">Notre Mission</h3>
              <p className="text-primary-foreground/85 leading-relaxed">
                Offrir une éducation bilingue de qualité qui prépare les jeunes camerounais à relever
                les défis du 21e siècle, en alliant excellence académique, développement personnel
                et ouverture sur le monde.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-background rounded-2xl p-8 border border-border"
            >
              <Eye className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">Notre Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Devenir l'établissement de référence dans la Région du Sud du Cameroun, reconnu
                pour l'excellence de ses résultats, la qualité de son encadrement et la réussite
                de ses élèves dans les meilleures universités du Cameroun et du monde.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 section-pattern">
        <div className="container">
          <SectionTitle title="Nos Valeurs" subtitle="Les piliers qui guident notre action éducative" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valeurs.map((v, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow"
              >
                <v.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-heading font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mot du Proviseur */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-1">
              <img src={proviseurImg} alt="Le Proviseur" className="rounded-2xl shadow-xl w-full" />
            </div>
            <div className="md:col-span-2">
              <SectionTitle title="Mot du Proviseur" centered={false} />
              <div className="space-y-4 text-muted-foreground leading-relaxed italic">
                <p>
                  « Chers parents, chers élèves, bienvenue au Collège ONASI. Notre établissement
                  bilingue est un lieu où l'excellence académique rencontre les valeurs humaines.
                </p>
                <p>
                  Le Collège Bilingue ONASI, situé dans la ville d’Ebolowa (Cameroun), a été fondé avec <br />
                  la vision selon laquelle l’excellence n’est pas une option. C’est une obligation.

                  Nous croyons sincèrement que, parce que votre enfant mérite mieux, il fallait lui offrir <br />
                  une institution sérieuse qui construit son avenir.

                  Chers parents, vous qui avez choisi de dire :
                  « Stop aux écoles ordinaires », pour répondre à vos attentes, le Collège Bilingue ONASI dispose : <br />
                  
                  - d’une section francophone (de la 6e en Tle) <br />
                  - d’une section anglophone premium (Form 1 à Upper 6)

                  • Laboratoire moderne<br />
                  • Approche pratique et expérimentale <br />
                  • Encadrement par des professeurs expatriés américains <br />
                  • Ici, la science ne s’apprend pas seulement, elle se pratique <br />

                  Un environnement qui inspire la réussite :<br />
                  • Espaces verts aménagés<br />
                  • Discipline ferme et structurée<br />
                  • Suivi pédagogique personnalisé<br />
                  • Effectifs contrôlés<br />

                  15 diplômes aux examens officiels (2013 - 2025)
                </p>
              </div>
              <p className="mt-6 font-heading font-bold text-foreground">M. / Mme Onana Messi Blaise</p>
              <p className="text-sm text-muted-foreground">Proviseur du Collège ONASI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Organigramme */}
      <section className="py-20">
        <div className="container">
          <SectionTitle title="Organigramme" subtitle="L'équipe de direction du Collège ONASI" />
          <div className="max-w-3xl mx-auto space-y-4">
            {organigramme.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-4 p-4 rounded-xl border border-border ${
                  person.level === "primary" ? "bg-primary text-primary-foreground" :
                  person.level === "secondary" ? "bg-muted" : "bg-card"
                }`}
              >
                <div className={`h-12 w-12 rounded-full flex items-center justify-center text-lg font-bold ${
                  person.level === "primary" ? "bg-secondary text-secondary-foreground" : "bg-primary text-primary-foreground"
                }`}>
                  {person.nom.charAt(0)}
                </div>
                <div>
                  <p className={`font-heading font-bold ${person.level === "primary" ? "" : "text-foreground"}`}>
                    {person.nom}
                  </p>
                  <p className={`text-sm ${person.level === "primary" ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {person.poste}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide rapide */}
      {/*
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto rounded-3xl border border-primary-foreground/15 bg-primary-foreground/10 p-8 md:p-10">
            <SectionTitle
              title="Comment changer les photos facilement"
              subtitle="Tout est préparé pour que vous puissiez mettre les vraies images de l'école sans difficulté."
            />
            <div className="grid md:grid-cols-3 gap-4 text-sm md:text-base">
              <div className="rounded-2xl bg-primary-foreground/10 p-5">
                <p className="font-heading font-bold mb-2">1. Ajouter l'image</p>
                <p className="text-primary-foreground/85">
                  Placez votre photo dans <code>src/assets/</code>.
                </p>
              </div>
              <div className="rounded-2xl bg-primary-foreground/10 p-5">
                <p className="font-heading font-bold mb-2">2. Modifier l'import</p>
                <p className="text-primary-foreground/85">
                  Remplacez un import existant en haut de cette page.
                </p>
              </div>
              <div className="rounded-2xl bg-primary-foreground/10 p-5">
                <p className="font-heading font-bold mb-2">3. Mettre le texte</p>
                <p className="text-primary-foreground/85">
                  Changez seulement le titre et la description dans <code>galerieSections</code>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
        */}
      {/* Photos de l'école */}
      <section className="py-20 bg-card">
        <div className="container">
          <SectionTitle
            title="Notre École en Images"
            subtitle="Découvrez les espaces, les activités et l'ambiance qui font la richesse de notre établissement"
          />

          <div className="space-y-12">
            {galerieSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
                className="rounded-3xl border border-border bg-background p-6 md:p-8"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-heading font-bold text-foreground">{section.title}</h3>
                  <p className="mt-2 text-muted-foreground">{section.subtitle}</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {section.images.map((item, imageIndex) => (
                    <motion.article
                      key={`${section.title}-${imageIndex}`}
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: imageIndex * 0.08 }}
                      className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
                    >
                      <div className="aspect-[16/10] overflow-hidden bg-muted">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="font-heading text-lg font-bold text-foreground">{item.title}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default APropos;
