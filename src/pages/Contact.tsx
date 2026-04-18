/**
 * PAGE CONTACT - Collège ONASI
 * 
 * POUR MODIFIER :
 * - Les coordonnées : modifier les valeurs dans la section contact
 * - Le lien WhatsApp : modifier le numéro dans l'URL
 * - La carte Google Maps : modifier le src de l'iframe
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import schoolBuilding from "@/assets/school-building.jpg";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast({ title: "Message envoyé !", description: "Nous vous répondrons dans les plus brefs délais." });
  };

  return (
    <>
      <PageBanner
        title="Contactez-nous"
        subtitle="Nous sommes à votre écoute pour toute question"
        backgroundImage={schoolBuilding}
      />

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Coordonnées */}
            <div className="lg:col-span-1 space-y-6">
              <SectionTitle title="Nos coordonnées" centered={false} />

              {/* Téléphone - REMPLACER par le vrai numéro */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground">Téléphone</h4>
                  <a href="tel:+237674341867" className="text-sm text-muted-foreground hover:text-primary">
                    +237 674 341 867
                  </a>
                  <br />
                  <a href="tel:+237600000001" className="text-sm text-muted-foreground hover:text-primary">
                    +237 6XX XXX XXX
                  </a>
                </div>
              </motion.div>

              {/* Email - REMPLACER par le vrai email */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground">Email</h4>
                  <a href="mailto:contact@onasi.cm" className="text-sm text-muted-foreground hover:text-primary">
                    contact@onasi.cm
                  </a>
                </div>
              </motion.div>

              {/* WhatsApp - REMPLACER le numéro dans l'URL */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground">WhatsApp</h4>
                  {/* REMPLACER 237600000000 par le vrai numéro */}
                  <a
                    href="https://wa.me/237674341867?text=Bonjour, je souhaite avoir des informations sur le Collège ONASI."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Écrire sur WhatsApp
                  </a>
                </div>
              </motion.div>

              {/* Adresse - REMPLACER par la vraie adresse */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground">Adresse</h4>
                  <p className="text-sm text-muted-foreground">
                    Quartier XXXX, Ebolowa<br />
                    Région du Sud, Cameroun
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-2">
              <SectionTitle title="Envoyez-nous un message" centered={false} />

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center bg-green-light rounded-2xl p-10 border border-primary/20"
                >
                  <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-heading font-bold text-foreground">Message envoyé !</h3>
                  <p className="mt-3 text-muted-foreground">
                    Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.
                  </p>
                  <Button onClick={() => setSent(false)} className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
                    Envoyer un autre message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactNom">Nom complet *</Label>
                      <Input id="contactNom" placeholder="Votre nom" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactEmail">Email *</Label>
                      <Input id="contactEmail" type="email" placeholder="votre@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactTel">Téléphone</Label>
                      <Input id="contactTel" type="tel" placeholder="+237 6XX XXX XXX" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactSujet">Sujet *</Label>
                      <Input id="contactSujet" placeholder="Sujet de votre message" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactMessage">Message *</Label>
                    <Textarea
                      id="contactMessage"
                      placeholder="Écrivez votre message ici..."
                      rows={6}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold gap-2">
                    <Send className="h-4 w-4" />
                    Envoyer le message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="pb-0">
        <div className="container pb-10">
          <SectionTitle title="Notre localisation" />
        </div>
        {/* REMPLACER le src par votre lien Google Maps embed */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63828.45!2d11.13!3d2.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108981e7b95ab9c7%3A0x8b3ebc5c93e72f8a!2sEbolowa%2C%20Cameroon!5e0!3m2!1sfr!2sfr!4v1700000000000"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localisation Collège ONASI"
        />
      </section>
    </>
  );
};

export default Contact;
