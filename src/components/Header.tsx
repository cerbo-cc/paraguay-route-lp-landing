import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background transition-all duration-300 ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img src={logo} alt="Paraguai Route" className="h-14 w-auto" />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.services')}
            </button>
            <button onClick={() => scrollToSection('team')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.team')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.contact')}
            </button>
            
            <div className="flex items-center gap-2">
              <Button
                variant={language === 'pt' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('pt')}
                className="font-semibold"
              >
                PT
              </Button>
              <Button
                variant={language === 'es' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('es')}
                className="font-semibold"
              >
                ES
              </Button>
            </div>
          </nav>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-primary transition-colors">
                {t('nav.about')}
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left text-foreground hover:text-primary transition-colors">
                {t('nav.services')}
              </button>
              <button onClick={() => scrollToSection('team')} className="text-left text-foreground hover:text-primary transition-colors">
                {t('nav.team')}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-foreground hover:text-primary transition-colors">
                {t('nav.contact')}
              </button>
              
              <div className="flex items-center gap-2 pt-2">
                <Button
                  variant={language === 'pt' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLanguage('pt')}
                  className="font-semibold"
                >
                  PT
                </Button>
                <Button
                  variant={language === 'es' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLanguage('es')}
                  className="font-semibold"
                >
                  ES
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
