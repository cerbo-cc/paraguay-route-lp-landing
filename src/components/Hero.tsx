import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 92, 158, 0.85), rgba(59, 92, 158, 0.85)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto text-balance">
          {t('hero.subtitle')}
        </p>
        <Button
          size="lg"
          onClick={() => scrollToSection('contact')}
          className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-xl"
        >
          {t('hero.cta')}
        </Button>
      </div>
    </section>
  );
};

export default Hero;
