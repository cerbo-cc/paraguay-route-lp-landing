import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Header
    'nav.about': 'Sobre Nós',
    'nav.services': 'Serviços',
    'nav.team': 'Nosso Time',
    'nav.contact': 'Contato',
    
    // Hero
    'hero.title': 'Expanda seu negócio para o Paraguai',
    'hero.subtitle': 'Ajudamos empresas brasileiras a simplificar sua estrutura fiscal e reduzir custos de forma legal e inteligente',
    'hero.cta': 'Fale Conosco',
    
    // About
    'about.title': 'Sobre Nós',
    'about.text': 'A Paraguai Route nasceu para ajudar empresas brasileiras a simplificar sua estrutura fiscal e reduzir custos de forma legal e inteligente. Somos especialistas em levar negócios para o Paraguai, garantindo operação eficiente e menor carga tributária. Nosso objetivo é proporcionar mais lucro, previsibilidade e liberdade financeira para quem busca crescer com segurança.',
    
    // Services
    'services.title': 'Nossos Serviços',
    'services.opening.title': 'Abertura Empresarial',
    'services.opening.desc': 'Constituímos sua empresa de forma legal e estratégica, garantindo enquadramento fiscal vantajoso e operação rápida.',
    'services.planning.title': 'Planejamento e Execução',
    'services.planning.desc': 'Estruturamos sua operação para pagar menos impostos dentro das normas, com total segurança jurídica.',
    'services.address.title': 'Endereço Fiscal & Suporte Local',
    'services.address.desc': 'Fornecemos endereço comercial e suporte local para que sua empresa atue no Paraguai com credibilidade e conformidade.',
    'services.expansion.title': 'Expansão e Compliance',
    'services.expansion.desc': 'Ajudamos a adaptar sua empresa às exigências legais e estratégicas do mercado paraguaio, garantindo crescimento sólido e sustentável.',
    
    // Team
    'team.title': 'Nosso Time do Paraguai',
    'team.gabriela.role': 'Responsável por Assuntos Migratórios',
    'team.gabriela.desc': 'Líder e supervisora de todas as atividades relacionadas aos processos migratórios, coordena estratégias, garante o cumprimento da legislação vigente e oferece orientação especializada à equipe e aos clientes.',
    'team.cristian.role': 'Especialista em Assuntos Migratórios',
    'team.cristian.desc': 'Responsável pelo trâmite e acompanhamento de casos migratórios, oferece suporte técnico e administrativo em todas as etapas do processo, garantindo precisão e segurança.',
    'team.sebastian.role': 'Assistente Administrativo e Motorista',
    'team.sebastian.desc': 'Responsável por prestar apoio nas tarefas administrativas e logísticas, assegura o transporte seguro da equipe e dos clientes, contribuindo para o bom funcionamento das atividades diárias.',
    
    // Contact
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Preencha o formulário abaixo e nossa equipe entrará em contato em breve',
    'contact.name': 'Nome',
    'contact.email': 'E-mail',
    'contact.phone': 'Telefone',
    'contact.message': 'Mensagem',
    'contact.submit': 'Enviar Mensagem',
    'contact.success': 'Mensagem enviada com sucesso!',
    'contact.error': 'Erro ao enviar mensagem. Tente novamente.',
    
    // Footer
    'footer.address': 'Endereço',
    'footer.rights': 'Todos os direitos reservados',
  },
  en: {
    // Header
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.team': 'Our Team',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Expand your business to Paraguay',
    'hero.subtitle': 'We help Brazilian companies simplify their tax structure and reduce costs legally and intelligently',
    'hero.cta': 'Contact Us',
    
    // About
    'about.title': 'About Us',
    'about.text': 'Paraguai Route was created to help Brazilian companies simplify their tax structure and reduce costs legally and intelligently. We specialize in bringing businesses to Paraguay, ensuring efficient operations and lower tax burden. Our goal is to provide more profit, predictability, and financial freedom for those seeking to grow safely.',
    
    // Services
    'services.title': 'Our Services',
    'services.opening.title': 'Company Formation',
    'services.opening.desc': 'We establish your company legally and strategically, ensuring advantageous tax classification and quick operation.',
    'services.planning.title': 'Planning and Execution',
    'services.planning.desc': 'We structure your operation to pay less taxes within regulations, with complete legal security.',
    'services.address.title': 'Fiscal Address & Local Support',
    'services.address.desc': 'We provide commercial address and local support so your company operates in Paraguay with credibility and compliance.',
    'services.expansion.title': 'Expansion and Compliance',
    'services.expansion.desc': 'We help adapt your company to the legal and strategic requirements of the Paraguayan market, ensuring solid and sustainable growth.',
    
    // Team
    'team.title': 'Our Paraguay Team',
    'team.gabriela.role': 'Head of Immigration Affairs',
    'team.gabriela.desc': 'Leader and supervisor of all activities related to immigration processes, coordinates strategies, ensures compliance with current legislation, and provides specialized guidance to the team and clients.',
    'team.cristian.role': 'Immigration Affairs Specialist',
    'team.cristian.desc': 'Responsible for processing and monitoring immigration cases, provides technical and administrative support at all stages of the process, ensuring accuracy and security.',
    'team.sebastian.role': 'Administrative Assistant and Driver',
    'team.sebastian.desc': 'Responsible for providing support in administrative and logistical tasks, ensures safe transportation for the team and clients, contributing to the smooth functioning of daily activities.',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Fill out the form below and our team will contact you soon',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Message',
    'contact.submit': 'Send Message',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Error sending message. Please try again.',
    
    // Footer
    'footer.address': 'Address',
    'footer.rights': 'All rights reserved',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.pt] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
