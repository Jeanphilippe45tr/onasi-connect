/**
 * Composant réutilisable pour les titres de section.
 * Utilisé sur toutes les pages pour garder un style cohérent.
 */
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = true }: SectionTitleProps) => {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      )}
      {/* Ligne décorative aux couleurs ONASI */}
      <div className={`mt-4 flex gap-1 ${centered ? "justify-center" : ""}`}>
        <span className="h-1 w-8 rounded-full bg-primary" />
        <span className="h-1 w-8 rounded-full bg-accent" />
        <span className="h-1 w-8 rounded-full bg-secondary" />
      </div>
    </div>
  );
};

export default SectionTitle;
