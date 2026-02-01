// Configurações globais da RCSUPORTE
export const CONFIG = {
  company: {
    name: 'RCSUPORTE',
    fullName: 'RCSUPORTE E TELECOM',
    cnpj: '43.260.654/0001-67',
    phone: '(11) 95653-4963',
    whatsapp: '5511956534963',
    email: 'contato@rcsuporte.com.br',
    website: 'https://suportehoje.com.br'
  },
  social: {
    instagram: 'https://instagram.com/rcsuporte',
    facebook: 'https://facebook.com/rcsuporte'
  }
}

// Mensagens padrão do WhatsApp
export const WHATSAPP_MESSAGES = {
  default: 'Olá! Gostaria de saber mais sobre os serviços.',
  emergency: 'Olá! Preciso de atendimento urgente.',
  eletrica: 'Olá! Preciso de eletricista para minha casa/apartamento.',
  fechadura: 'Olá! Tenho interesse em fechadura digital.',
  camera: 'Olá! Quero saber sobre câmeras de segurança.',
  controle: 'Olá! Preciso de ajuda com portão/interfone.'
}

// Função para gerar link do WhatsApp
export function getWhatsAppLink(message = WHATSAPP_MESSAGES.default) {
  return `https://wa.me/${CONFIG.company.whatsapp}?text=${encodeURIComponent(message)}`
}

// Dados das regiões atendidas
export const REGIONS = {
  'sao-paulo': {
    name: 'São Paulo',
    slug: 'sao-paulo',
    title: 'São Paulo',
    neighborhoods: ['Centro', 'Zona Sul', 'Zona Norte', 'Zona Leste', 'Zona Oeste', 'Pinheiros', 'Perdizes', 'Lapa']
  },
  'zona-sul': {
    name: 'Zona Sul',
    slug: 'zona-sul',
    title: 'Zona Sul de São Paulo',
    neighborhoods: ['Santo Amaro', 'Campo Belo', 'Brooklin', 'Moema', 'Itaim Bibi', 'Vila Mariana', 'Jardins', 'Vila Olímpia', 'Morumbi', 'Campo Grande']
  },
  'abc': {
    name: 'ABC Paulista',
    slug: 'abc',
    title: 'ABC Paulista',
    neighborhoods: ['São Bernardo do Campo', 'Santo André', 'São Caetano do Sul', 'Diadema', 'Mauá', 'Ribeirão Pires', 'Rio Grande da Serra']
  }
}

// Dados dos serviços - RESIDÊNCIAS, EMPRESAS E CONDOMÍNIOS
export const SERVICES = [
  {
    id: 'eletrica',
    slug: 'eletricista-24h',
    title: 'Eletricista 24h',
    shortTitle: 'Eletricista Residencial e Comercial',
    description: 'Atendimento seguro para casas, apartamentos e empresas. Técnicos identificados que explicam o serviço antes de fazer.',
    fullDescription: 'Eletricista 24 horas para casas, apartamentos, empresas e condomínios em São Paulo. Técnicos uniformizados e identificados. Explicamos o problema e o valor antes de executar. Atendimento respeitoso, ideal para quem mora sozinho(a) e preza por segurança e transparência.',
    features: ['Técnicos identificados', 'Orçamento antes', 'Atendimento seguro'],
    buttonColor: 'bg-blue-500 hover:bg-blue-600',
    image: '/pane-eletrica.png',
    whatsappMessage: 'Olá! Preciso de eletricista para minha casa/apartamento.'
  },
  {
    id: 'fechadura',
    slug: 'fechadura-digital',
    title: 'Fechadura Digital',
    shortTitle: 'Fechaduras para Casas e Apartamentos',
    description: 'Mais segurança para sua casa. Instalação de fechaduras digitais com senha, biometria ou app. Ideal para quem mora sozinho(a).',
    fullDescription: 'Fechaduras digitais para casas e apartamentos. Aumente sua segurança com fechaduras de senha, biometria ou controle por app. Instalação cuidadosa, explicamos como usar. Trabalhamos com Intelbras, Samsung, Yale. Ideal para mulheres que moram sozinhas e buscam mais tranquilidade.',
    features: ['Mais segurança', 'Fácil de usar', 'Todas as marcas'],
    buttonColor: 'bg-orange-500 hover:bg-orange-600',
    image: '/fechadura-digital.png',
    whatsappMessage: 'Olá! Quero instalar fechadura digital na minha casa/apartamento.'
  },
  {
    id: 'camera',
    slug: 'cameras-seguranca',
    title: 'Câmeras de Segurança',
    shortTitle: 'Câmeras para Casas e Apartamentos',
    description: 'Veja sua casa de qualquer lugar pelo celular. Instalação discreta e ensinamos a usar o aplicativo.',
    fullDescription: 'Câmeras de segurança para casas e apartamentos. Monitore sua casa pelo celular de qualquer lugar. Instalação limpa e discreta, ensinamos a usar o aplicativo. Gravação local ou na nuvem. Ideal para quem viaja, mora sozinho(a) ou quer mais tranquilidade no dia a dia.',
    features: ['Acesso pelo celular', 'Instalação discreta', 'Ensinamos a usar'],
    buttonColor: 'bg-red-500 hover:bg-red-600',
    image: '/cftv-cameras.png',
    whatsappMessage: 'Olá! Quero instalar câmeras de segurança na minha casa.'
  },
  {
    id: 'controle',
    slug: 'controle-acesso',
    title: 'Portões e Interfones',
    shortTitle: 'Portões para Casas e Condomínios',
    description: 'Conserto de portões eletrônicos e interfones. Atendimento rápido para você não ficar na mão.',
    fullDescription: 'Manutenção de portões eletrônicos e interfones para casas, apartamentos e condomínios. Portão travou? Interfone não funciona? Atendimento rápido com técnico identificado. Conserto de motor, placa, controle remoto. Você não precisa ficar preocupado(a) com a entrada da sua casa.',
    features: ['Conserto rápido', 'Técnico identificado', 'Portões e interfones'],
    buttonColor: 'bg-emerald-500 hover:bg-emerald-600',
    image: '/portao-eletronico.png',
    whatsappMessage: 'Olá! Preciso de conserto de portão/interfone.'
  },
  {
    id: 'ti-escritorio',
    slug: 'ti-escritorio-24h',
    title: 'Suporte Técnico',
    shortTitle: 'Suporte para Casa e Escritório',
    description: 'Ajuda com computador, internet, impressora e rede. Atendimento paciente, explicamos de forma simples.',
    fullDescription: 'Suporte técnico para sua casa ou escritório. Computador lento, internet caindo, impressora com problema? Atendimento paciente e didático - explicamos de forma simples o que está acontecendo. Também atendemos pequenas empresas e home office.',
    features: ['Explicação simples', 'Casa ou escritório', 'Atendimento paciente'],
    buttonColor: 'bg-purple-500 hover:bg-purple-600',
    image: '/ti-escritorio.jpg',
    whatsappMessage: 'Olá! Preciso de ajuda com computador/internet.'
  }
]
