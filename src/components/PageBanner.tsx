/**
 * Bannière en haut de chaque page (sauf accueil).
 * 
 * POUR CHANGER L'IMAGE DE FOND :
 * Passer une autre image via la prop `backgroundImage`.
 */
interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageBanner = ({ title, subtitle, backgroundImage }: PageBannerProps) => {
  return (
    <section
      className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" } : {}}
    >
      {/* Overlay vert */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="relative z-10 text-center text-primary-foreground px-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold">{title}</h1>
        {subtitle && <p className="mt-3 text-lg text-primary-foreground/80 max-w-xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageBanner;
