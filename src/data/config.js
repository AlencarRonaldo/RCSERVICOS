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

// Dados dos serviços - FOCO EM REPAROS EMERGENCIAIS
export const SERVICES = [
  {
    id: 'eletrica',
    slug: 'eletricista-24h',
    title: 'Elétrica Parou?',
    shortTitle: 'Eletricista Urgente',
    description: 'Curto-circuito, disjuntor caindo, chuveiro queimado, tomada sem força. Resolvemos HOJE.',
    fullDescription: 'Sua casa ficou no escuro? Disjuntor não para de cair? Chuveiro parou de esquentar? Enquanto outros técnicos só querem vender projetos novos, nós fazemos o diagnóstico na hora e consertamos o problema. Sem enrolação, sem orçamento inflado. Só o reparo que você precisa agora.',
    features: ['Diagnóstico na hora', 'Conserto hoje', 'Sem enrolação'],
    buttonColor: 'bg-blue-500 hover:bg-blue-600',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
    whatsappMessage: 'URGENTE! Minha elétrica parou e preciso de conserto hoje.'
  },
  {
    id: 'fechadura',
    slug: 'fechadura-digital',
    title: 'Fechadura Travou?',
    shortTitle: 'Fechadura com Defeito',
    description: 'Biometria não reconhece, senha não funciona, trancou do lado de fora. Socorro imediato.',
    fullDescription: 'Sua fechadura digital travou e você não consegue entrar? Biometria parou de funcionar? Bateria acabou com você do lado de fora? Somos especialistas em DESTRAVAR e CONSERTAR fechaduras eletrônicas de todas as marcas. Não precisa trocar, a gente conserta.',
    features: ['Destravamento', 'Reparo de todas as marcas', 'Troca de bateria'],
    buttonColor: 'bg-orange-500 hover:bg-orange-600',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    whatsappMessage: 'URGENTE! Minha fechadura digital travou e não consigo entrar.'
  },
  {
    id: 'camera',
    slug: 'cameras-seguranca',
    title: 'Câmera Offline?',
    shortTitle: 'Câmera com Defeito',
    description: 'Câmera sem imagem, DVR não grava, app não conecta. Seu sistema voltando a funcionar hoje.',
    fullDescription: 'Suas câmeras pararam de gravar? O DVR está com defeito? Perdeu acesso remoto pelo celular? Não vendemos sistema novo, consertamos o seu. Diagnóstico completo, troca de HD, reconfiguração de rede e acesso remoto funcionando de novo.',
    features: ['Câmera voltando hoje', 'Recuperação de acesso', 'Troca de HD'],
    buttonColor: 'bg-red-500 hover:bg-red-600',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80',
    whatsappMessage: 'URGENTE! Minhas câmeras pararam de funcionar.'
  },
  {
    id: 'controle',
    slug: 'controle-acesso',
    title: 'Portão Não Abre?',
    shortTitle: 'Portão com Defeito',
    description: 'Motor travou, controle não funciona, portão parou no meio. Liberamos seu acesso hoje.',
    fullDescription: 'Seu portão eletrônico travou e o carro está preso? Motor faz barulho mas não abre? Controle remoto parou de funcionar? A gente destrava, conserta o motor e reprograma os controles. Seu portão funcionando antes de você precisar sair de novo.',
    features: ['Destravamento', 'Reparo de motor', 'Controles novos'],
    buttonColor: 'bg-emerald-500 hover:bg-emerald-600',
    image: 'https://images.unsplash.com/photo-1558403194-611308249627?w=600&q=80',
    whatsappMessage: 'URGENTE! Meu portão eletrônico travou e não abre.'
  }
]
