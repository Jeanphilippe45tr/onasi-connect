/**
 * PAGE INSCRIPTION EN LIGNE - Collège ONASI
 * 
 * Ce formulaire est statique (pas de backend).
 * Pour le rendre fonctionnel, connecter à un service backend.
 * 
 * POUR MODIFIER :
 * - Les champs du formulaire : modifier le JSX ci-dessous
 * - Les frais : modifier le tableau `frais`
 * - Les documents requis : modifier le tableau `documentsRequis`
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, CheckCircle, AlertCircle, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import schoolBuilding from "@/assets/school-building.jpg";
import { useToast } from "@/hooks/use-toast";

/** Documents requis pour l'inscription - MODIFIER selon vos exigences */
const documentsRequis = [
  "Acte de naissance (original + copie)",
  "Bulletins des 2 dernières années",
  "4 photos d'identité (4x4)",
  "Certificat de scolarité (ancien élève)",
  "Certificat médical",
  "Reçu de paiement des frais d'inscription",
];

/** Frais de scolarité - MODIFIER avec vos vrais montants */
const frais = [
  { niveau: "6ème / Form 1", montant: "XXX 000 FCFA" },
  { niveau: "5ème - 3ème / Form 2-5", montant: "XXX 000 FCFA" },
  { niveau: "Seconde / Lower Sixth", montant: "XXX 000 FCFA" },
  { niveau: "Première - Terminale / Upper Sixth", montant: "XXX 000 FCFA" },
];

const Inscription = () => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi - REMPLACER par une vraie logique backend
    const dossierNum = `ONASI-${Date.now().toString().slice(-6)}`;
    setSubmitted(true);
    toast({
      title: "Inscription envoyée !",
      description: `Votre numéro de dossier : ${dossierNum}`,
    });
  };

  return (
    <>
      <PageBanner
        title="Inscription en ligne"
        subtitle="Rejoignez le Collège ONASI pour la prochaine année scolaire"
        backgroundImage={schoolBuilding}
      />

      {/* Informations préalables */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Documents requis */}
            <div className="bg-background rounded-xl border border-border p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Documents requis
              </h3>
              <ul className="space-y-2">
                {documentsRequis.map((doc, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Frais de scolarité */}
            <div className="bg-background rounded-xl border border-border p-6">
              <h3 className="font-heading font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-secondary" />
                Frais de scolarité (indicatifs)
              </h3>
              <div className="space-y-3">
                {frais.map((f, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="text-sm text-foreground">{f.niveau}</span>
                    <span className="text-sm font-bold text-primary">{f.montant}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                * Les montants sont indicatifs. Contactez le secrétariat pour les tarifs exacts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire d'inscription */}
      <section className="py-20">
        <div className="container">
          <SectionTitle title="Formulaire d'inscription" subtitle="Remplissez ce formulaire pour pré-inscrire votre enfant" />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-lg mx-auto text-center bg-green-light rounded-2xl p-10 border border-primary/20"
            >
              <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold text-foreground">Inscription envoyée !</h3>
              <p className="mt-3 text-muted-foreground">
                Votre demande d'inscription a été enregistrée. Vous recevrez une confirmation
                par email ou téléphone dans les prochains jours.
              </p>
              <Button onClick={() => setSubmitted(false)} className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
                Nouvelle inscription
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-card rounded-2xl border border-border p-8 space-y-6">
              {/* Informations de l'élève */}
              <h3 className="font-heading font-bold text-foreground border-b border-border pb-2">
                Informations de l'élève
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nom">Nom *</Label>
                  <Input id="nom" placeholder="Nom de famille" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="prenom">Prénom(s) *</Label>
                  <Input id="prenom" placeholder="Prénom(s)" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dateNaissance">Date de naissance *</Label>
                  <Input id="dateNaissance" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lieuNaissance">Lieu de naissance *</Label>
                  <Input id="lieuNaissance" placeholder="Ex: Ebolowa" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sexe">Sexe *</Label>
                  <select id="sexe" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" required>
                    <option value="">Sélectionner</option>
                    <option value="M">Masculin</option>
                    <option value="F">Féminin</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="section">Section *</Label>
                  <select id="section" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" required>
                    <option value="">Sélectionner</option>
                    <option value="francophone">Francophone</option>
                    <option value="anglophone">Anglophone</option>
                  </select>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="niveau">Classe souhaitée *</Label>
                  <select id="niveau" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" required>
                    <option value="">Sélectionner le niveau</option>
                    <optgroup label="Francophone">
                      <option>6ème</option><option>5ème</option><option>4ème</option><option>3ème</option>
                      <option>Seconde</option><option>Première</option><option>Terminale</option>
                    </optgroup>
                    <optgroup label="Anglophone">
                      <option>Form 1</option><option>Form 2</option><option>Form 3</option>
                      <option>Form 4</option><option>Form 5</option>
                      <option>Lower Sixth</option><option>Upper Sixth</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Informations du parent */}
              <h3 className="font-heading font-bold text-foreground border-b border-border pb-2 pt-4">
                Informations du parent / tuteur
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nomParent">Nom complet *</Label>
                  <Input id="nomParent" placeholder="Nom du parent/tuteur" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telParent">Téléphone *</Label>
                  <Input id="telParent" type="tel" placeholder="+237 6XX XXX XXX" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emailParent">Email</Label>
                  <Input id="emailParent" type="email" placeholder="email@exemple.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="profession">Profession</Label>
                  <Input id="profession" placeholder="Profession du parent" />
                </div>
              </div>

              {/* Upload de documents */}
              <h3 className="font-heading font-bold text-foreground border-b border-border pb-2 pt-4">
                Documents (optionnel)
              </h3>
              <div className="border-2 border-dashed border-border rounded-xl p-8 text-center">
                <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">
                  Glissez vos documents ici ou cliquez pour sélectionner
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Acte de naissance, bulletins, photos (PDF, JPG, PNG - max 5 Mo)
                </p>
                <input type="file" multiple className="hidden" id="documents" accept=".pdf,.jpg,.jpeg,.png" />
                <Button
                  type="button"
                  variant="outline"
                  className="mt-4"
                  onClick={() => document.getElementById("documents")?.click()}
                >
                  Sélectionner des fichiers
                </Button>
              </div>

              {/* Soumettre */}
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base">
                Soumettre l'inscription
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                * En soumettant ce formulaire, vous acceptez que vos données soient traitées par le Collège ONASI.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default Inscription;
