/**
 * PAGE CERTIFICATS & DISTINCTIONS - Collège Bilingue ONASI
 * Présente toutes les reconnaissances officielles reçues par l'établissement.
 */
import { motion } from "framer-motion";
import { Award, Star, BookOpen, Globe } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";

/* ======== Imports des certificats ======== */
import bannerImg from "@/assets/gallery-building-sign.jpg";

// Lettres de félicitations officielles (MINESEC)
import certProbatoire2019    from "@/assets/cert-probatoire-esg-2019.jpg";
import certProbatoire2018    from "@/assets/cert-felicitations-probatoire-2018.jpg";
import certBEP               from "@/assets/cert-felicitations-bep.jpg";
import certAdvancedLevel2019 from "@/assets/cert-felicitations-advanced-level-2019.jpg";
import certBEPC2019          from "@/assets/cert-felicitations-bepc-2019.jpg";
import certBacc2019          from "@/assets/cert-felicitations-bacc-2019.jpg";
import certBacc2017          from "@/assets/cert-felicitations-bacc-2017.jpg";

// Diplômes d'excellence
import certDiplomeInfo       from "@/assets/cert-diplome-excellence-info.jpg";
import certDiplomeRCDM2016   from "@/assets/cert-diplome-excellence-rcdm-2016.jpg";

// Certificats bilinguisme (MINESEC & Région du Sud)
import certBilingualWeek2017 from "@/assets/cert-appreciation-bilingualism-week-2017.jpg";
import certBilingual20th     from "@/assets/cert-appreciation-bilingualism-20th.jpg";
import certBilingual15th     from "@/assets/cert-appreciation-bilingualism-15th.jpg";

// Partenariats Peace Corps
import certPCTraining2019Jan from "@/assets/cert-peace-corps-training-2019-jan.jpg";
import certPCMidService2019  from "@/assets/cert-peace-corps-mid-service-2019.jpg";
import certPCMalaria2022     from "@/assets/cert-peace-corps-malaria-2022.jpg";
import certPCMathScience2022 from "@/assets/cert-peace-corps-math-science-2022.jpg";
import certPCDiscipline2018  from "@/assets/cert-positive-discipline-2018.jpg";
import certPCComputer2014    from "@/assets/cert-peace-corps-computer-literacy-2014.jpg";
import certPCAchievement2023 from "@/assets/cert-peace-corps-achievement-2023.jpg";
/* ========================================= */

interface CertItem {
  image: string;
  title: string;
  year: string;
  description: string;
  issuer: string;
}

interface CertSection {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  color: string;
  items: CertItem[];
}

const certSections: CertSection[] = [
  {
    id: "felicitations",
    icon: Award,
    title: "Lettres de Félicitations Officielles",
    subtitle: "Reconnaissances décernées par la Délégation Départementale des Enseignements Secondaires de la Mvila pour nos excellents taux de réussite aux examens officiels",
    color: "bg-emerald-50 border-emerald-200",
    items: [
      {
        image: certAdvancedLevel2019,
        title: "Félicitations — Advanced Level 2019",
        year: "2019",
        description: "Taux de réussite de 100% à l'examen Advanced Level (GCE A-Level) — un résultat parfait qui fait la fierté de la circonscription.",
        issuer: "Délégation Départementale MINESEC – Mvila",
      },
      {
        image: certBacc2019,
        title: "Félicitations — Baccalauréat ESG 2019",
        year: "2019",
        description: "Taux de réussite de 70,59% à l'examen Baccalauréat ESG session 2019 — résultat salué par les autorités académiques.",
        issuer: "Délégation Départementale MINESEC – Mvila",
      },
      {
        image: certBacc2017,
        title: "Félicitations — Baccalauréat 2017",
        year: "2017",
        description: "Taux de réussite remarquable au Baccalauréat (toutes séries), session 2017 — performance illustrant l'excellence de l'établissement.",
        issuer: "Délégation Départementale MINESEC – Mvila",
      },
      {
        image: certBEPC2019,
        title: "Félicitations — BEPC 2019",
        year: "2019",
        description: "Taux de réussite de 92,30% à l'examen du BEPC session 2019 — l'un des meilleurs scores de la circonscription.",
        issuer: "Délégation Départementale MINESEC – Mvila",
      },
      {
        image: certProbatoire2019,
        title: "Félicitations — Probatoire ESG 2019",
        year: "2019",
        description: "Taux de réussite de 71,43% au Probatoire ESG — performance qui place l'établissement parmi les meilleurs de la Mvila.",
        issuer: "Délégation Départementale MINESEC – Mvila",
      },
      {
        image: certProbatoire2018,
        title: "Félicitations — Probatoire ESG 2018",
        year: "2018",
        description: "Taux de réussite de 78,57% à l'examen Probatoire ESG session 2018 — un résultat illustrant la progression constante du collège.",
        issuer: "Délégation Départementale MINESEC – Mvila",
      },
      {
        image: certBEP,
        title: "Félicitations — BEP",
        year: "—",
        description: "Résultats exceptionnels à l'examen du BEP, soulignant la qualité de l'encadrement pédagogique et le travail des élèves.",
        issuer: "Délégation Départementale MINESEC – Mvila",
      },
    ],
  },
  {
    id: "excellence",
    icon: Star,
    title: "Diplômes d'Excellence",
    subtitle: "Distinctions nationales et régionales décernées au Collège Bilingue ONASI pour son rayonnement académique",
    color: "bg-amber-50 border-amber-200",
    items: [
      {
        image: certDiplomeInfo,
        title: "Diplôme d'Excellence — Olympiades d'Informatique",
        year: "2019",
        description: "L'élève Ateba Ambroise Claude, du Collège Bilingue ONASI, a été lauréat de niveau I aux Olympiades d'Informatique d'Ebolowa — 14ᵉ rang, mention Assez Bien.",
        issuer: "Délégation Régionale des Enseignements Secondaires du Sud",
      },
      {
        image: certDiplomeRCDM2016,
        title: "Diplôme d'Excellence RCDM 2016",
        year: "2016",
        description: "Collège Bilingue ONASI récompensé pour le meilleur établissement scolaire de l'enseignement secondaire lors de la 12ᵉ édition de la Soirée de l'Excellence RCDM, sous le patronage du Gouverneur de la Région du Sud.",
        issuer: "Radio Communautaire de Développement de la Mvila (RCDM)",
      },
    ],
  },
  {
    id: "bilinguisme",
    icon: Globe,
    title: "Certificats de Bilinguisme",
    subtitle: "Reconnaissances pour la promotion active du bilinguisme et la participation aux Semaines Nationales du Bilinguisme",
    color: "bg-blue-50 border-blue-200",
    items: [
      {
        image: certBilingual15th,
        title: "Certificate of Appreciation — 15ᵉ Semaine Nationale du Bilinguisme",
        year: "—",
        description: "M. Onana Messi, Principal du Collège ONASI, est personnellement distingué pour son implication lors de la 15ᵉ édition de la Semaine Nationale du Bilinguisme.",
        issuer: "Inspection Régionale de Pédagogie / Promotion du Bilinguisme – Région du Sud",
      },
      {
        image: certBilingual20th,
        title: "Certificate of Appreciation — 20ᵉ Semaine Nationale du Bilinguisme",
        year: "2025",
        description: "Certificat décerné au Collège Bilingue ONASI Ebolowa pour son excellent chœur lors de la 20ᵉ édition de la Semaine Nationale du Bilinguisme.",
        issuer: "Inspection Régionale de Pédagogie / Promotion du Bilinguisme – Région du Sud",
      },
      {
        image: certBilingualWeek2017,
        title: "Letter of Appreciation — National Bilingualism Week 2017",
        year: "2017",
        description: "Le Principal Onana Messi est officiellement remercié pour sa coopération et sa participation active à la 14ᵉ édition de la Semaine Nationale du Bilinguisme, qui a grandement contribué au succès de l'événement.",
        issuer: "Inspection Régionale Coordonnatrice de Bilinguisme – Région du Sud",
      },
    ],
  },
  {
    id: "peace-corps",
    icon: BookOpen,
    title: "Partenariats Peace Corps",
    subtitle: "Certificats attestant la collaboration étroite entre le Collège ONASI et le Peace Corps Cameroun pour la formation continue et le développement pédagogique",
    color: "bg-violet-50 border-violet-200",
    items: [
      {
        image: certPCAchievement2023,
        title: "Certificate of Achievement — Student-Friendly Schools Workshop",
        year: "2023",
        description: "Certificat de mérite décerné à Onana Messi pour participation active au atelier « Student-Friendly Schools » organisé par le Peace Corps, du 31 juillet au 2 août 2023.",
        issuer: "Peace Corps Cameroun",
      },
      {
        image: certPCMathScience2022,
        title: "Certificate of Participation — Math Science Teaching Skills Workshop",
        year: "2022",
        description: "Onana Messi a activement participé au atelier de didactique des sciences et mathématiques organisé par le Peace Corps à Bengo Hotel Ebolowa, du 18 au 22 avril 2022.",
        issuer: "Peace Corps Cameroun",
      },
      {
        image: certPCMalaria2022,
        title: "Certificate of Appreciation — Malaria Workshop",
        year: "2022",
        description: "Certificat de reconnaissance pour participation au Malaria Workshop for Volunteer Counterparts, organisé à Ebolowa du 15 au 18 février 2022.",
        issuer: "Peace Corps Cameroun",
      },
      {
        image: certPCMidService2019,
        title: "Certificate of Training — Education Program Mid Service",
        year: "2019",
        description: "Onana Messi a participé avec succès au Peace Corps Education Program Mid Service Training à Mbalmayo, du 19 au 23 août 2019.",
        issuer: "Peace Corps Cameroun",
      },
      {
        image: certPCTraining2019Jan,
        title: "Certificate of Training — In-Service Training 2019",
        year: "2019",
        description: "Participation réussie au In-Service Training for Education Volunteers and Counterparts organisé par le Peace Corps à Hôtel Azur, Yaoundé, du 21 au 24 janvier 2019.",
        issuer: "Peace Corps Cameroun",
      },
      {
        image: certPCDiscipline2018,
        title: "Certificate of Positive Discipline",
        year: "2018",
        description: "Onana Messi a assisté et participé à la formation du Peace Corps Student Friendly Schools Training le 24 mars 2018 au Collège Bilingue ONASI Ebolowa.",
        issuer: "Peace Corps Cameroun",
      },
      {
        image: certPCComputer2014,
        title: "Training Certificate — Computer Literacy Courses",
        year: "2014",
        description: "Onana Messi a complété 20 heures de formation en informatique organisées par le Peace Corps à Ebolowa, du 1ᵉʳ juillet au 1ᵉʳ août 2014.",
        issuer: "Peace Corps Cameroun",
      },
    ],
  },
];

const Certificats = () => {
  return (
    <>
      <PageBanner
        title="Certificats & Distinctions"
        subtitle="L'excellence d'ONASI reconnue officiellement — examens, bilinguisme, partenariats internationaux"
        backgroundImage={bannerImg}
      />

      {/* Intro stats */}
      <section className="py-14 bg-card">
        <div className="container">
          <SectionTitle
            title="Une Excellence Documentée"
            subtitle="Depuis sa création, le Collège Bilingue ONASI accumule les reconnaissances officielles qui témoignent de son engagement envers la qualité éducative."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {[
              { value: "19+", label: "Certificats & distinctions" },
              { value: "100%", label: "Réussite GCE A-Level 2019" },
              { value: "7", label: "Lettres de félicitations MINESEC" },
              { value: "2014–2025", label: "Décennies de reconnaissance" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-background p-6 text-center"
              >
                <p className="text-3xl font-heading font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate sections */}
      {certSections.map((section, sIdx) => {
        const Icon = section.icon;
        return (
          <section
            key={section.id}
            className={`py-20 ${sIdx % 2 === 0 ? "bg-background" : "bg-card"}`}
          >
            <div className="container">
              {/* Section header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                    {section.title}
                  </h2>
                </div>
                <p className="text-muted-foreground max-w-3xl leading-relaxed">
                  {section.subtitle}
                </p>
              </motion.div>

              {/* Certificate grid */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((cert, i) => (
                  <motion.article
                    key={`${section.id}-${i}`}
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className={`overflow-hidden rounded-2xl border ${section.color} shadow-sm flex flex-col`}
                  >
                    {/* Certificate image */}
                    <div className="relative overflow-hidden bg-muted" style={{ aspectRatio: "4/3" }}>
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105 cursor-zoom-in"
                        loading="lazy"
                      />
                      {/* Year badge */}
                      <span className="absolute top-3 right-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow">
                        {cert.year}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-5">
                      <h3 className="font-heading text-base font-bold text-foreground leading-snug">
                        {cert.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                        {cert.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 border-t border-border pt-3">
                        <Award className="h-3.5 w-3.5 text-primary shrink-0" />
                        <p className="text-xs text-muted-foreground italic">{cert.issuer}</p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA bottom */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading font-bold mb-4">
              Rejoignez l'Excellence ONASI
            </h2>
            <p className="text-primary-foreground/85 max-w-xl mx-auto mb-8">
              Ces distinctions sont le reflet du travail acharné de nos élèves, enseignants et
              de toute la communauté scolaire. Inscrivez votre enfant et participez à cette aventure d'excellence.
            </p>
            <a
              href="/inscription"
              className="inline-block rounded-xl bg-secondary px-8 py-3 font-semibold text-secondary-foreground shadow hover:bg-secondary/90 transition-colors"
            >
              S'inscrire au Collège ONASI
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Certificats;
