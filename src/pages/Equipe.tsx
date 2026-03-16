/**
 * PAGE NOTRE ÉQUIPE - Collège ONASI
 * 
 * POUR MODIFIER :
 * - Les enseignants : modifier le tableau `enseignants`
 * - Les photos : placer vos images dans src/assets/ et modifier les imports
 * - Pour ajouter un enseignant : ajouter un objet au tableau
 */
import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import studentsClassroom from "@/assets/staff.jpg";
import teacherPhoto1 from "@/assets/teacher1.jpeg";
import principalPhoto from "@/assets/principal.jpeg";
import proviseurPhoto from "@/assets/proviseur.jpg";
import principal2Photo from "@/assets/principal2.jpg";
import laboPhoto from "@/assets/labo.jpg";
import courtPhoto from "@/assets/court.jpg";
import infoPhoto from "@/assets/info.jpg";
import staffPhoto from "@/assets/staff.jpg";

/**
 * Liste des enseignants - MODIFIER avec les vrais noms, matières, et photos
 * 
 * Pour chaque enseignant :
 * - nom : Nom complet
 * - matiere : Matière enseignée
 * - diplome : Diplôme obtenu
 * - bio : Courte biographie
 * - photo : (optionnel) Chemin vers la photo, ex: import teacherPhoto from "@/assets/teacher1.jpg"
 * - section : "francophone" ou "anglophone"
 */
const enseignants = [
  {
    nom: "M. Nkoulou Jean-Baptiste",
    matiere: "Mathématiques",
    diplome: "DIPES II - Université de Yaoundé I",
    bio: "15 ans d'expérience dans l'enseignement des mathématiques. Passionné par la réussite de chaque élève.",
    photo: teacherPhoto1,
    section: "francophone",
  },
  {
    nom: "Mme Eyinga Marie-Claire",
    matiere: "Français / Littérature",
    diplome: "DIPES II - ENS Yaoundé",
    bio: "Spécialiste de la littérature francophone africaine. Prépare les élèves aux épreuves du Baccalauréat.",
    photo: principalPhoto,
    section: "francophone",
  },
  {
    nom: "Mr. Ngoh Peter",
    matiere: "English Language",
    diplome: "B.Ed - University of Buea",
    bio: "Expert in English language teaching with focus on bilingual education and communication skills.",
    photo: proviseurPhoto,
    section: "anglophone",
  },
  {
    nom: "Mme Abena Rosalie",
    matiere: "Sciences de la Vie et de la Terre",
    diplome: "DIPES I - Université de Douala",
    bio: "Encourage l'apprentissage par l'expérimentation et les travaux pratiques en laboratoire.",
    photo: laboPhoto,
    section: "francophone",
  },
  {
    nom: "Mr. Tabi Emmanuel",
    matiere: "Physics / Chemistry",
    diplome: "M.Sc - University of Yaoundé I",
    bio: "Combines theoretical knowledge with practical experiments to make science exciting for students.",
    photo: courtPhoto,
    section: "anglophone",
  },
  {
    nom: "M. Mvondo Paul",
    matiere: "Histoire-Géographie",
    diplome: "DIPES II - ENS Yaoundé",
    bio: "Passionné par l'histoire du Cameroun et de l'Afrique. Prépare les élèves aux concours.",
    photo: infoPhoto,
    section: "francophone",
  },
  {
    nom: "Mrs. Akono Grace",
    matiere: "Mathematics",
    diplome: "B.Sc Education - University of Bamenda",
    bio: "Dedicated to making mathematics accessible and enjoyable for anglophone students.",
    photo: principal2Photo,
    section: "anglophone",
  },
  {
    nom: "M. Essomba Jacques",
    matiere: "Éducation Physique et Sportive",
    diplome: "CAPEPS - INJS Yaoundé",
    bio: "Ancien athlète national, il transmet la passion du sport et les valeurs d'équipe.",
    photo: staffPhoto,
    section: "francophone",
  },
];

const Equipe = () => {
  const francophones = enseignants.filter(e => e.section === "francophone");
  const anglophones = enseignants.filter(e => e.section === "anglophone");

  return (
    <>
      <PageBanner
        title="Notre Équipe"
        subtitle="Des enseignants qualifiés et passionnés au service de vos enfants"
        backgroundImage={studentsClassroom}
      />

      {/* Section francophone */}
      <section className="py-20">
        <div className="container">
          <SectionTitle
            title="Section Francophone"
            subtitle="Nos enseignants du sous-système francophone"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {francophones.map((teacher, index) => (
              <TeacherCard key={index} teacher={teacher} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Section anglophone */}
      <section className="py-20 bg-card">
        <div className="container">
          <SectionTitle
            title="Anglophone Section"
            subtitle="Our qualified teachers in the anglophone sub-system"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {anglophones.map((teacher, index) => (
              <TeacherCard key={index} teacher={teacher} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Matières enseignées */}
      <section className="py-20 section-pattern">
        <div className="container">
          <SectionTitle title="Matières enseignées" subtitle="Un programme complet pour une formation intégrale" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Mathématiques", "Français", "English", "Physique-Chimie",
              "SVT / Biology", "Histoire-Géographie", "Philosophie", "Informatique",
              "EPS", "Espagnol / Spanish", "Allemand / German", "Économie",
            ].map((matiere, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 p-3 bg-card rounded-lg border border-border"
              >
                <BookOpen className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground">{matiere}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

/** Carte enseignant individuelle */
const TeacherCard = ({ teacher, index }: { teacher: typeof enseignants[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-background rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
  >
    {/* 
      ZONE PHOTO ENSEIGNANT :
      Pour ajouter une photo, remplacer cette div par :
      <img src={teacher.photo} alt={teacher.nom} className="h-52 w-full object-cover" />
    */}
    {teacher.photo ? (
      <img 
        src={teacher.photo} 
        alt={teacher.nom} 
        className="h-52 w-full object-cover" 
      />
    ) : (
      <div className="h-52 bg-muted flex items-center justify-center">
        <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center">
          <span className="text-2xl font-heading font-bold text-primary-foreground">
            {teacher.nom.split(" ").pop()?.charAt(0)}
          </span>
        </div>
      </div>
    )}
    <div className="p-5">
      <h3 className="font-heading font-bold text-foreground">{teacher.nom}</h3>
      <p className="text-sm font-semibold text-primary mt-1">{teacher.matiere}</p>
      <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
        <GraduationCap className="h-3 w-3" />
        {teacher.diplome}
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{teacher.bio}</p>
    </div>
  </motion.div>
);

export default Equipe;
