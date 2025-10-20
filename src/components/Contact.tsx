import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

const Contact = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating form submission - In production, this would call an edge function
    setTimeout(() => {
      toast.success(t('contact.success'));
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsLoading(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('contact.subtitle')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up">
            <div>
              <Input
                name="name"
                placeholder={t('contact.name')}
                value={formData.name}
                onChange={handleChange}
                required
                className="h-12 text-base"
              />
            </div>
            
            <div>
              <Input
                name="email"
                type="email"
                placeholder={t('contact.email')}
                value={formData.email}
                onChange={handleChange}
                required
                className="h-12 text-base"
              />
            </div>
            
            <div>
              <Input
                name="phone"
                type="tel"
                placeholder={t('contact.phone')}
                value={formData.phone}
                onChange={handleChange}
                required
                className="h-12 text-base"
              />
            </div>
            
            <div>
              <Textarea
                name="message"
                placeholder={t('contact.message')}
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="text-base resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full h-12 text-base font-semibold"
              disabled={isLoading}
            >
              {isLoading ? '...' : t('contact.submit')}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
