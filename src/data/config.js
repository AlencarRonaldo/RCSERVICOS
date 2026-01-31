// Configurações globais da RCSUPORTE
export const CONFIG = {
  company: {
    name: 'RCSUPORTE',
    fullName: 'RCSUPORTE E TELECOM',
    cnpj: '43.260.654/0001-67',
    phone: '(11) 95653-4963',
    whatsapp: '5511956534963',
    email: 'contato@rcsuporte.com.br',
    website: 'https://rcsuporte.com.br'
  },
  social: {
    instagram: 'https://instagram.com/rcsuporte',
    facebook: 'https://facebook.com/rcsuporte'
  }
}

// Mensagens padrão do WhatsApp
export const WHATSAPP_MESSAGES = {
  default: 'Olá! Gostaria de solicitar um orçamento.',
  emergency: 'EMERGÊNCIA! Preciso de atendimento urgente.',
  eletrica: 'Olá! Preciso de um eletricista.',
  fechadura: 'Olá! Gostaria de instalar uma fechadura digital.',
  camera: 'Olá! Quero instalar câmeras de segurança.',
  controle: 'Olá! Preciso de serviço de controle de acesso.'
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
    neighborhoods: ['Centro', 'Zona Sul', 'Zona Norte', 'Zona Leste', 'Zona Oeste']
  },
  'zona-sul': {
    name: 'Zona Sul',
    slug: 'zona-sul',
    title: 'Zona Sul de São Paulo',
    neighborhoods: ['Santo Amaro', 'Campo Belo', 'Brooklin', 'Moema', 'Itaim Bibi', 'Vila Mariana']
  },
  'abc': {
    name: 'ABC Paulista',
    slug: 'abc',
    title: 'ABC Paulista',
    neighborhoods: ['São Bernardo do Campo', 'Santo André', 'São Caetano do Sul', 'Diadema', 'Mauá']
  }
}

// Dados dos serviços - FOCO EM DIAGNÓSTICO E REPAROS COMPLEXOS
export const SERVICES = [
  {
    id: 'eletrica',
    slug: 'eletricista-24h',
    title: 'Pane Elétrica?',
    shortTitle: 'Diagnóstico Elétrico',
    description: 'Ficou no escuro? Disjuntor caindo ou cheiro de queimado? Somos especialistas em caça-curto e recuperação de sistemas.',
    fullDescription: 'Ficou no escuro? Disjuntor caindo ou cheiro de queimado? Enquanto muitos só fazem fiação nova, nós somos especialistas em caça-curto e recuperação de sistemas antigos. Resolvemos panes críticas que outros técnicos não conseguem identificar.',
    features: ['Caça-curto especializado', 'Sistemas antigos', 'Panes complexas'],
    buttonColor: 'bg-blue-500 hover:bg-blue-600',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
    whatsappMessage: 'URGENTE! Estou com pane elétrica e preciso de diagnóstico.'
  },
  {
    id: 'fechadura',
    slug: 'fechadura-digital',
    title: 'Fechadura com Erro?',
    shortTitle: 'Recuperação de Fechadura',
    description: 'Travou, parou de ler biometria ou está apitando erro? Não troque antes de falar conosco. Consertamos Intelbras, Samsung e Yale.',
    fullDescription: 'Sua fechadura digital travou, parou de ler a biometria ou está apitando erro? Não troque sua fechadura antes de falar conosco. Consertamos e reconfiguramos marcas como Intelbras, Samsung e Yale. Atendimento emergencial para você não ficar trancado.',
    features: ['Todas as marcas', 'Reconfiguração', 'Destravamento urgente'],
    buttonColor: 'bg-orange-500 hover:bg-orange-600',
    image: '/fechadura-digital.png',
    whatsappMessage: 'URGENTE! Minha fechadura digital está com erro e preciso de conserto.'
  },
  {
    id: 'camera',
    slug: 'cameras-seguranca',
    title: 'CFTV Offline?',
    shortTitle: 'Recuperação de CFTV',
    description: 'Câmera sem imagem, DVR travado ou perdeu acesso remoto? Recuperamos seu sistema sem vender equipamento novo.',
    fullDescription: 'Câmera sem imagem, DVR travado, HD corrompido ou perdeu o acesso remoto pelo celular? Antes de comprar um sistema novo, deixe a gente diagnosticar. Recuperamos gravações, substituímos HDs e reconfiguramos seu acesso de qualquer lugar.',
    features: ['Recuperação de DVR', 'Acesso remoto', 'Troca de HD'],
    buttonColor: 'bg-red-500 hover:bg-red-600',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80',
    whatsappMessage: 'URGENTE! Meu sistema de câmeras está offline e preciso recuperar.'
  },
  {
    id: 'controle',
    slug: 'controle-acesso',
    title: 'Portão Travado?',
    shortTitle: 'Reparo de Portão',
    description: 'Motor queimou, placa com defeito ou controle dessincronizado? Consertamos antes de você precisar sair de novo.',
    fullDescription: 'Portão não abre, motor fazendo barulho estranho, placa queimada ou controles dessincronizados? Fazemos o diagnóstico na hora e consertamos o problema. Seu portão funcionando antes de você precisar sair de novo.',
    features: ['Diagnóstico na hora', 'Reparo de motor', 'Sincronização'],
    buttonColor: 'bg-emerald-500 hover:bg-emerald-600',
    image: 'https://images.unsplash.com/photo-1558403194-611308249627?w=600&q=80',
    whatsappMessage: 'URGENTE! Meu portão eletrônico travou e preciso de reparo.'
  }
]
