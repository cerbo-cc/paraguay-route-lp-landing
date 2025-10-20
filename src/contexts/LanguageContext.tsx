import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'es';

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
  es: {
    // Header
    'nav.about': 'Sobre Nosotros',
    'nav.services': 'Servicios',
    'nav.team': 'Nuestro Equipo',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': 'Expanda su negocio a Paraguay',
    'hero.subtitle': 'Ayudamos a empresas brasileñas a simplificar su estructura fiscal y reducir costos de forma legal e inteligente',
    'hero.cta': 'Contáctenos',
    
    // About
    'about.title': 'Sobre Nosotros',
    'about.text': 'Paraguai Route nació para ayudar a empresas brasileñas a simplificar su estructura fiscal y reducir costos de forma legal e inteligente. Somos especialistas en llevar negocios a Paraguay, garantizando operación eficiente y menor carga tributaria. Nuestro objetivo es proporcionar más lucro, previsibilidad y libertad financiera para quienes buscan crecer con seguridad.',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.opening.title': 'Apertura Empresarial',
    'services.opening.desc': 'Constituimos su empresa de forma legal y estratégica, garantizando encuadramiento fiscal ventajoso y operación rápida.',
    'services.planning.title': 'Planificación y Ejecución',
    'services.planning.desc': 'Estructuramos su operación para pagar menos impuestos dentro de las normas, con total seguridad jurídica.',
    'services.address.title': 'Dirección Fiscal y Soporte Local',
    'services.address.desc': 'Proporcionamos dirección comercial y soporte local para que su empresa actúe en Paraguay con credibilidad y conformidad.',
    'services.expansion.title': 'Expansión y Compliance',
    'services.expansion.desc': 'Ayudamos a adaptar su empresa a las exigencias legales y estratégicas del mercado paraguayo, garantizando crecimiento sólido y sostenible.',
    
    // Team
    'team.title': 'Nuestro Equipo de Paraguay',
    'team.gabriela.role': 'Responsable de Asuntos Migratorios',
    'team.gabriela.desc': 'Líder y supervisora de todas las actividades relacionadas a los procesos migratorios, coordina estrategias, garantiza el cumplimiento de la legislación vigente y ofrece orientación especializada al equipo y a los clientes.',
    'team.cristian.role': 'Especialista en Asuntos Migratorios',
    'team.cristian.desc': 'Responsable del trámite y seguimiento de casos migratorios, ofrece soporte técnico y administrativo en todas las etapas del proceso, garantizando precisión y seguridad.',
    'team.sebastian.role': 'Asistente Administrativo y Conductor',
    'team.sebastian.desc': 'Responsable de prestar apoyo en las tareas administrativas y logísticas, asegura el transporte seguro del equipo y de los clientes, contribuyendo al buen funcionamiento de las actividades diarias.',
    
    // Contact
    'contact.title': 'Contáctenos',
    'contact.subtitle': 'Complete el formulario a continuación y nuestro equipo se pondrá en contacto pronto',
    'contact.name': 'Nombre',
    'contact.email': 'E-mail',
    'contact.phone': 'Teléfono',
    'contact.message': 'Mensaje',
    'contact.submit': 'Enviar Mensaje',
    'contact.success': '¡Mensaje enviado con éxito!',
    'contact.error': 'Error al enviar mensaje. Intente nuevamente.',
    
    // Footer
    'footer.address': 'Dirección',
    'footer.rights': 'Todos los derechos reservados',
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
