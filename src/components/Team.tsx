import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import gabrielaImg from '@/assets/team/gabriela.png';
import cristianImg from '@/assets/team/cristian.png';
import sebastianImg from '@/assets/team/sebastian.png';

const Team = () => {
  const { t } = useLanguage();

  const team = [
    {
      name: 'Gabriela',
      role: t('team.gabriela.role'),
      description: t('team.gabriela.desc'),
      image: gabrielaImg,
    },
    {
      name: 'Cristian',
      role: t('team.cristian.role'),
      description: t('team.cristian.desc'),
      image: cristianImg,
    },
    {
      name: 'Sebastián',
      role: t('team.sebastian.role'),
      description: t('team.sebastian.desc'),
      image: sebastianImg,
    },
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-16 animate-slide-up">
          {t('team.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <Card 
              key={index} 
              className="text-center border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 shadow-md">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{member.name}</h3>
                <p className="text-sm font-semibold text-primary">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
