/**
 * PAGE REGLEMENT INTERIEUR - College ONASI
 *
 * POUR MODIFIER CETTE PAGE :
 * - Changer l'image de banniere : remplacer `schoolBuilding`
 * - Modifier le preambule : ajuster `preambule`
 * - Modifier les cartes de synthese : ajuster `principes`
 * - Modifier les articles officiels : ajuster le tableau `articles`
 * - Ajouter un nouvel article : dupliquer un objet dans `articles`
 */
import { motion } from "framer-motion";
import { BookCheck, ShieldCheck, Clock3, Users } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import schoolBuilding from "@/assets/vue-lateral.jpg";

const preambule = {
  fr: "Le présent règlement fixe les règles de discipline, de travail et de conduite applicables à tous les élèves. Il vise à garantir un environnement d’excellence, de rigueur et de sécurité. Toute inscription vaut acceptation totale et sans réserve.",
  en: "These regulations establish the rules of discipline, work, and conduct applicable to all students. They aim to ensure an environment of excellence, rigor, and safety. Enrollment implies full and unconditional acceptance.",
};

const principes = [
  {
    icon: Clock3,
    title: "Assiduité",
    description: "La présence aux cours, la ponctualité et la régularité dans le travail sont obligatoires.",
  },
  {
    icon: BookCheck,
    title: "Rigueur académique",
    description: "Les devoirs, évaluations et obligations scolaires doivent être accomplis avec sérieux.",
  },
  {
    icon: ShieldCheck,
    title: "Discipline",
    description: "Le respect des règles, de la sécurité et du cadre éducatif est exigé en permanence.",
  },
  {
    icon: Users,
    title: "Respect mutuel",
    description: "La courtoisie, la maîtrise de soi et la protection des biens communs sont essentielles.",
  },
];

const articles = [
  {
    number: "01",
    titleFr: "Assiduité et ponctualité",
    titleEn: "Attendance and Punctuality",
    fr: [
      "La présence aux cours et aux activités académiques est obligatoire.",
      "Tout retard ou absence doit être dûment justifié.",
      "Les retards répétés constituent une faute disciplinaire.",
    ],
    en: [
      "Attendance at classes and academic activities is compulsory.",
      "Any lateness or absence must be justified.",
      "Repeated lateness constitutes a disciplinary offense.",
    ],
  },
  {
    number: "02",
    titleFr: "Tenue vestimentaire",
    titleEn: "Dress Code",
    fr: [
      "Le port de l’uniforme officiel est obligatoire.",
      "La tenue doit être propre, décente et conforme aux exigences de l’établissement.",
    ],
    en: [
      "The official uniform is mandatory.",
      "Students must maintain a clean, decent, and appropriate appearance.",
    ],
  },
  {
    number: "03",
    titleFr: "Comportement et discipline",
    titleEn: "Behavior and Discipline",
    fr: [
      "Tout élève doit adopter une conduite exemplaire fondée sur le respect, la courtoisie et la maîtrise de soi.",
      "Tout comportement violent, injurieux ou perturbateur est strictement interdit.",
    ],
    en: [
      "Students must demonstrate exemplary conduct based on respect, courtesy, and self-control.",
      "Any violent, abusive, or disruptive behavior is strictly prohibited.",
    ],
  },
  {
    number: "04",
    titleFr: "Travail scolaire",
    titleEn: "Academic Work",
    fr: [
      "Les élèves sont tenus d’accomplir leurs devoirs avec rigueur et régularité.",
      "Le matériel scolaire est obligatoire à chaque cours.",
    ],
    en: [
      "Students must complete their assignments with rigor and consistency.",
      "Required materials must be brought to every class.",
    ],
  },
  {
    number: "05",
    titleFr: "Utilisation des téléphones",
    titleEn: "Use of Mobile Phones",
    fr: [
      "L’usage du téléphone portable est interdit pendant les heures de cours, sauf autorisation expresse.",
      "Tout appareil utilisé abusivement sera confisqué.",
    ],
    en: [
      "The use of mobile phones is prohibited during class hours unless authorized.",
      "Any misuse will result in confiscation.",
    ],
  },
  {
    number: "06",
    titleFr: "Objets interdits",
    titleEn: "Prohibited Items",
    fr: [
      "Il est strictement interdit d’introduire tout objet dangereux ou perturbateur au sein de l’établissement.",
    ],
    en: [
      "It is strictly forbidden to bring any dangerous or disruptive items into the school.",
    ],
  },
  {
    number: "07",
    titleFr: "Respect des biens",
    titleEn: "Respect for Property",
    fr: [
      "Les élèves doivent préserver les infrastructures et le matériel pédagogique.",
      "Toute dégradation sera sanctionnée et réparée aux frais des responsables légaux.",
    ],
    en: [
      "Students must preserve school facilities and equipment.",
      "Any damage will be sanctioned and repaired at the expense of parents or guardians.",
    ],
  },
  {
    number: "08",
    titleFr: "Santé et sécurité",
    titleEn: "Health and Safety",
    fr: [
      "La consommation d’alcool, de drogues ou de substances illicites est formellement interdite.",
      "Les consignes de sécurité doivent être respectées en permanence.",
    ],
    en: [
      "The use of alcohol, drugs, or illegal substances is strictly prohibited.",
      "Safety instructions must be followed at all times.",
    ],
  },
  {
    number: "09",
    titleFr: "Règlement des examens",
    titleEn: "Examination Regulations",
    fr: [
      "La présence aux évaluations est obligatoire.",
      "Tout retard à un examen peut entraîner l’exclusion de l’épreuve.",
      "Toute fraude (tricherie, communication, usage d’appareil non autorisé) entraîne l’annulation immédiate de l’épreuve.",
      "Des sanctions disciplinaires supplémentaires peuvent être appliquées.",
    ],
    en: [
      "Attendance at examinations is compulsory.",
      "Late arrival may result in exclusion from the exam.",
      "Any cheating (communication, unauthorized devices) leads to immediate cancellation of the test.",
      "Additional disciplinary sanctions may be applied.",
    ],
  },
  {
    number: "10",
    titleFr: "Discipline renforcée",
    titleEn: "Strict Discipline Policy",
    fr: [
      "En cas de faute grave ou répétée, l’élève est soumis à un régime de discipline renforcée.",
      "Ce régime comprend : surveillance accrue, convocation des parents, engagement écrit de conduite et mesures correctives obligatoires.",
    ],
    en: [
      "In case of serious or repeated misconduct, the student will be placed under strict discipline measures.",
      "These measures include increased supervision, parent or guardian summons, written commitment to proper conduct, and mandatory corrective actions.",
    ],
  },
  {
    number: "11",
    titleFr: "Sanctions disciplinaires",
    titleEn: "Disciplinary Sanctions",
    fr: [
      "Toute violation du présent règlement expose l’élève à des sanctions graduées : avertissement, blâme, retenue, exclusion temporaire ou exclusion définitive.",
    ],
    en: [
      "Any violation of these rules exposes the student to graduated sanctions: warning, reprimand, detention, temporary or permanent exclusion.",
    ],
  },
  {
    number: "12",
    titleFr: "Récompenses",
    titleEn: "Rewards",
    fr: [
      "Les élèves disciplinés et performants peuvent recevoir des distinctions : félicitations, tableau d’honneur, prix d’excellence.",
    ],
    en: [
      "Disciplined and high-performing students may receive distinctions: congratulations, honor roll, excellence awards.",
    ],
  },
  {
    number: "13",
    titleFr: "Engagement",
    titleEn: "Commitment",
    fr: [
      "L’élève et ses responsables légaux reconnaissent avoir pris connaissance du présent règlement et s’engagent à le respecter strictement.",
    ],
    en: [
      "The student and their guardians acknowledge having read these rules and agree to comply strictly.",
    ],
  },
];

const ReglementInterieur = () => {
  return (
    <>
      <PageBanner
        title="Règlement intérieur"
        subtitle="Internal Rules and Regulations - Collège Bilingue ONASI"
        backgroundImage={schoolBuilding}
      />

      <section className="py-20">
        <div className="container">
          <SectionTitle
            title="Préambule / Preamble"
            subtitle="Le cadre officiel de discipline, de travail et de conduite applicable à tous les élèves"
          />
          <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                FR
              </span>
              <h3 className="mt-4 font-heading text-2xl font-bold text-foreground">Préambule</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{preambule.fr}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-border bg-primary p-8 text-primary-foreground"
            >
              <span className="inline-flex rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                EN
              </span>
              <h3 className="mt-4 font-heading text-2xl font-bold">Preamble</h3>
              <p className="mt-4 leading-relaxed text-primary-foreground/85">{preambule.en}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container">
          <SectionTitle
            title="Repères Essentiels"
            subtitle="Les grands principes qui structurent la vie scolaire au Collège Bilingue ONASI"
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

      <section className="py-20">
        <div className="container">
          <SectionTitle
            title="Articles Officiels"
            subtitle="Version bilingue du règlement intérieur de l’établissement"
          />
          <div className="grid xl:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <motion.article
                key={article.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="rounded-3xl border border-border bg-card p-8 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-lg font-heading font-bold text-primary-foreground">
                    {article.number}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                      Article {article.number}
                    </p>
                    <h3 className="mt-2 font-heading text-2xl font-bold text-foreground">
                      {article.titleFr}
                    </h3>
                    <p className="mt-1 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                      {article.titleEn}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid md:grid-cols-2 gap-5">
                  <div className="rounded-2xl bg-background p-5 border border-border">
                    <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                      FR
                    </span>
                    <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                      {article.fr.map((line) => (
                        <li key={line} className="flex items-start gap-3">
                          <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-secondary" />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-primary/5 p-5 border border-primary/10">
                    <span className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                      EN
                    </span>
                    <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                      {article.en.map((line) => (
                        <li key={line} className="flex items-start gap-3">
                          <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-5xl mx-auto rounded-3xl bg-primary p-8 md:p-10 text-primary-foreground">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/70">
              Article 13
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold">
              Engagement / Commitment
            </h2>
            <p className="mt-4 leading-relaxed text-primary-foreground/85">
              L’élève et ses responsables légaux reconnaissent avoir pris connaissance du présent règlement
              et s’engagent à le respecter strictement.
            </p>
            <p className="mt-3 leading-relaxed text-primary-foreground/85">
              The student and their guardians acknowledge having read these rules and agree to comply strictly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReglementInterieur;
