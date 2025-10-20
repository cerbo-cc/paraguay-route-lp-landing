import { Building2, TrendingUp, MapPin, Scale } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      title: t('services.opening.title'),
      description: t('services.opening.desc'),
    },
    {
      icon: TrendingUp,
      title: t('services.planning.title'),
      description: t('services.planning.desc'),
    },
    {
      icon: MapPin,
      title: t('services.address.title'),
      description: t('services.address.desc'),
    },
    {
      icon: Scale,
      title: t('services.expansion.title'),
      description: t('services.expansion.desc'),
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-16 animate-slide-up">
          {t('services.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl md:text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
