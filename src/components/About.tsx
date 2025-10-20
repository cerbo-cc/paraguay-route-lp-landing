import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            {t('about.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t('about.text')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
