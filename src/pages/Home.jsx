import { useState } from 'react'
import {
  Clock, Shield, BadgeCheck, CreditCard, Star, CheckCircle2,
  Search, AlertCircle, ArrowRight, ChevronRight, Phone, MapPin,
  MessageCircle, Zap, Wrench, Award, Wallet
} from 'lucide-react'
import SEO from '../components/SEO'
import { useModal } from '../context/ModalContext'
import { SERVICES, getWhatsAppLink, CONFIG } from '../data/config'

// Hero Section
function Hero() {
  const [cep, setCep] = useState('')
  const [cepStatus, setCepStatus] = useState(null)
  const [cepMessage, setCepMessage] = useState('')
  const { openTriageModal } = useModal()

  const checkCepRegion = (cepNumber) => {
    const cepNum = parseInt(cepNumber, 10)

    // ABC Paulista - Atendimento em até 2 horas
    if (
      (cepNum >= 9000000 && cepNum <= 9299999) || // Santo André
      (cepNum >= 9300000 && cepNum <= 9399999) || // Mauá
      (cepNum >= 9500000 && cepNum <= 9599999) || // São Caetano do Sul
      (cepNum >= 9600000 && cepNum <= 9899999) || // São Bernardo do Campo
      (cepNum >= 9900000 && cepNum <= 9999999)    // Diadema
    ) {
      return 'priority'
    }

    if (cepNumber.startsWith('0') || cepNumber.startsWith('1')) {
      return 'standard'
    }

    return 'outside'
  }

  const handleCepCheck = (e) => {
    e.preventDefault()
    const cleanCep = cep.replace(/\D/g, '')
    if (cleanCep.length === 8) {
      const region = checkCepRegion(cleanCep)

      if (region === 'priority') {
        setCepStatus('priority')
        setCepMessage('ABC Paulista - Atendimento em até 2 horas!')
      } else if (region === 'standard') {
        setCepStatus('standard')
        setCepMessage('São Paulo e região - Atendimento de 2 a 4 horas')
      } else {
        setCepStatus('outside')
        setCepMessage('Consulte disponibilidade via WhatsApp')
      }
    }
  }

  return (
    <section className="pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-40 lg:pb-28 bg-gradient-to-b from-zinc-50 to-white relative overflow-hidden">
      {/* Background decorations - hidden on mobile for performance */}
      <div className="hidden sm:block absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />
      <div className="hidden sm:block absolute top-20 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
      <div className="hidden sm:block absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Emergency badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-green-50 text-green-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-8 border border-green-100">
            <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            <span>Técnicos identificados • Atendimento seguro e transparente</span>
          </div>

          {/* Main headline - mobile-first typography */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight sm:leading-[1.1] tracking-tight mb-4 sm:mb-6 px-2 sm:px-0">
            Problemas elétricos{' '}
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              em casa?
            </span>
            <br className="sm:hidden" />
            {' '}
            <br className="hidden sm:block lg:hidden" />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              A gente resolve com segurança.
            </span>
          </h1>

          {/* Description - optimized for mobile reading */}
          <p className="text-sm sm:text-lg lg:text-xl text-zinc-500 mb-6 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Atendimento para{' '}
            <strong className="text-zinc-700">casas, apartamentos, empresas e condomínios.</strong>{' '}
            <span className="hidden sm:inline">Técnicos identificados, explicamos cada etapa do serviço. Atendimento respeitoso e transparente.</span>
          </p>

          {/* CEP Search - mobile optimized */}
          <form onSubmit={handleCepCheck} className="max-w-md mx-auto mb-6 sm:mb-8 px-2 sm:px-0">
            <div className="relative flex flex-col sm:flex-row gap-2 sm:gap-0">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400" />
                </div>
                <input
                  type="text"
                  value={cep}
                  onChange={(e) => {
                    setCep(e.target.value)
                    setCepStatus(null)
                    setCepMessage('')
                  }}
                  placeholder="Digite seu CEP"
                  className="w-full pl-10 sm:pl-12 pr-4 sm:pr-28 py-3.5 sm:py-4 bg-white border border-zinc-200 rounded-xl text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm min-h-[44px]"
                  maxLength={9}
                  inputMode="numeric"
                />
              </div>
              <button
                type="submit"
                className="sm:absolute sm:right-2 sm:top-1/2 sm:-translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-3 sm:py-2.5 rounded-xl sm:rounded-lg font-semibold text-sm transition-all min-h-[44px] active:scale-[0.98]"
              >
                Verificar
              </button>
            </div>
            {cepStatus === 'priority' && (
              <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-xl">
                <p className="text-xs sm:text-sm text-green-700 font-semibold flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  {cepMessage}
                </p>
                <p className="text-xs text-green-600 mt-1">
                  Diadema, São Bernardo, Santo André, Mauá e São Caetano
                </p>
              </div>
            )}
            {cepStatus === 'standard' && (
              <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <p className="text-xs sm:text-sm text-blue-700 font-semibold flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  {cepMessage}
                </p>
                <p className="text-xs text-blue-600 mt-1">
                  Atendemos toda a Grande São Paulo
                </p>
              </div>
            )}
            {cepStatus === 'outside' && (
              <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <p className="text-xs sm:text-sm text-amber-700 font-semibold flex items-center justify-center gap-2">
                  <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  {cepMessage}
                </p>
                <p className="text-xs text-amber-600 mt-1">
                  Entre em contato para verificar disponibilidade
                </p>
              </div>
            )}
          </form>

          {/* CTA Buttons - touch-friendly with min-height */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2 sm:px-0">
            <button
              onClick={openTriageModal}
              className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all hover:shadow-xl hover:shadow-green-500/25 active:scale-[0.98] min-h-[48px] sm:min-h-[56px]"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="sm:hidden">PRECISO DE CONSERTO</span>
              <span className="hidden sm:inline">PRECISO DE CONSERTO AGORA</span>
            </button>
            <a
              href="#servicos"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-zinc-900 font-bold px-6 py-3.5 sm:py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-amber-500/25 active:scale-[0.98] min-h-[48px] sm:min-h-[56px]"
            >
              Qual problema você tem?
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Trust Indicators - responsive grid */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 px-4 sm:px-0">
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-zinc-500 bg-white/80 sm:bg-transparent py-2 sm:py-0 rounded-lg">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
              <span>Técnicos identificados e uniformizados</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-zinc-500 bg-white/80 sm:bg-transparent py-2 sm:py-0 rounded-lg">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 fill-amber-500 flex-shrink-0" />
              <span>4.9 no Google • +500 clientes satisfeitos</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-zinc-500 bg-white/80 sm:bg-transparent py-2 sm:py-0 rounded-lg">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
              <span>Atendimento seguro para você e sua família</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Services Section
function Services() {
  const { openTriageModal } = useModal()

  return (
    <section id="servicos" className="py-12 sm:py-16 lg:py-28 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header - mobile optimized */}
        <div className="text-center mb-8 sm:mb-14">
          <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Atendimento Seguro para Sua Casa ou Empresa
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 mt-2 sm:mt-3 mb-2 sm:mb-4 tracking-tight px-2 sm:px-0">
            Serviços Elétricos e Segurança com Transparência
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-sm sm:text-lg px-4 sm:px-0">
            Atendemos <strong className="text-zinc-700">residências, apartamentos, empresas e condomínios</strong>. Explicamos cada etapa do serviço antes de executar.
          </p>
        </div>

        {/* Services grid - mobile: horizontal scroll, tablet+: grid */}
        <div className="flex overflow-x-auto pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-5 sm:gap-5 gap-3 scrollbar-hide">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] sm:w-auto snap-start group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 sm:hover:-translate-y-1 border-2 border-transparent hover:border-red-500"
            >
              {/* Service image with lazy loading hint */}
              <div className="relative h-36 sm:h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-red-500 text-white text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                  URGENTE
                </div>
              </div>
              {/* Service content */}
              <div className="p-4 sm:p-5 text-center">
                <h3 className="text-base sm:text-xl font-bold text-zinc-900 mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-5 line-clamp-3 sm:line-clamp-none">
                  {service.description}
                </p>
                <button
                  onClick={openTriageModal}
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 w-full justify-center animate-pulse text-sm sm:text-base min-h-[44px] active:scale-[0.98]"
                >
                  RESOLVER AGORA
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile scroll indicator */}
        <div className="flex sm:hidden justify-center mt-3 gap-1">
          {SERVICES.map((_, index) => (
            <div key={index} className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
          ))}
        </div>
      </div>
    </section>
  )
}

// Trust Section - Logos das Marcas
function TrustSection() {
  const brands = [
    { name: 'Intelbras', logo: '/logos/intelbras.svg' },
    { name: 'Samsung', logo: '/logos/samsung.png' },
    { name: 'PPA', logo: '/logos/ppa.webp' },
    { name: 'Papaiz', logo: '/logos/papaiz.svg' },
    { name: 'Positivo', logo: '/logos/positivo.svg' },
    { name: 'Garen', logo: '/logos/garen.gif' }
  ]

  return (
    <section id="sobre" className="py-10 sm:py-16 bg-white border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm text-zinc-400 uppercase tracking-wider mb-6 sm:mb-10">
          Manutenção e suporte técnico para equipamentos de todas as marcas
        </p>
        {/* Mobile: 3x2 grid, Desktop: flex wrap */}
        <div className="grid grid-cols-3 sm:flex sm:flex-wrap items-center justify-center gap-4 sm:gap-x-12 sm:gap-y-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="h-8 sm:h-10 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                loading="lazy"
                className="h-full w-auto max-w-[80px] sm:max-w-none object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Differentials Section
function Differentials() {
  const differentials = [
    {
      icon: Shield,
      title: 'Técnicos Identificados',
      description: 'Todos os profissionais usam uniforme e crachá. Você sabe quem está entrando na sua casa.',
      bgColor: 'bg-green-500',
      iconColor: 'text-white'
    },
    {
      icon: BadgeCheck,
      title: 'Atendimento Transparente',
      description: 'Explicamos o problema e o serviço antes de executar. Sem surpresas no orçamento.',
      bgColor: 'bg-blue-500',
      iconColor: 'text-white'
    },
    {
      icon: Clock,
      title: 'Respeito ao Seu Tempo',
      description: 'Chegamos no horário combinado. Atendimento em até 2h para emergências.',
      bgColor: 'bg-amber-500',
      iconColor: 'text-white'
    },
    {
      icon: Award,
      title: 'Garantia por Escrito',
      description: 'Todos os serviços com garantia documentada. Sua segurança é nossa prioridade.',
      bgColor: 'bg-purple-500',
      iconColor: 'text-white'
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-28 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-16">
          <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Atendimento Seguro e Respeitoso
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 mt-2 sm:mt-3 tracking-tight">
            Por Que Você Pode Confiar na Gente
          </h2>
        </div>

        {/* Mobile: 2x2 grid, Desktop: 4 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10">
          {differentials.map((item, index) => (
            <div key={index} className="text-center group">
              {/* Icon container - smaller on mobile */}
              <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 ${item.bgColor} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-3 sm:mb-6 shadow-lg sm:shadow-xl transform group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${item.iconColor}`} />
              </div>
              <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-zinc-900 mb-1 sm:mb-3">{item.title}</h3>
              <p className="text-zinc-600 text-xs sm:text-sm lg:text-base leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials Section - Cards lado a lado
function Testimonials() {
  const testimonials = [
    { name: 'Fernanda Oliveira', location: 'Moradora - Apartamento Moema', text: 'Moro sozinha e fiquei receosa de chamar um eletricista. O técnico chegou uniformizado, se identificou e explicou tudo antes de fazer. Me senti muito segura!', rating: 5 },
    { name: 'Mariana Santos', location: 'Moradora - Casa na Zona Sul', text: 'Instalaram câmeras na minha casa. Foram super respeitosos, limparam tudo depois e me ensinaram a usar o app. Recomendo para outras mulheres!', rating: 5 },
    { name: 'Roberto Mendes', location: 'Síndico - Condomínio Brooklin', text: 'Atendimento excelente tanto para os apartamentos quanto para as áreas comuns. Técnicos educados e pontuais. Virou nosso fornecedor fixo.', rating: 5 }
  ]

  return (
    <section className="py-10 sm:py-16 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-6 sm:mb-10">
          <span className="text-green-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">Clientes Satisfeitos</span>
          <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-white mt-2">Atendimento Seguro que Faz a Diferença</h2>
        </div>

        {/* Mobile: horizontal scroll, Desktop: grid */}
        <div className="flex overflow-x-auto pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory sm:grid sm:grid-cols-3 sm:gap-4 gap-3 scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 w-[280px] sm:w-auto snap-start bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/10">
              <div className="flex gap-0.5 mb-2 sm:mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-white text-xs sm:text-sm">{testimonial.name}</p>
                <p className="text-[10px] sm:text-xs text-zinc-400">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const faqs = [
    {
      question: 'Vocês atendem residências e pessoas físicas?',
      answer: 'Sim! Atendemos casas, apartamentos, empresas e condomínios em toda São Paulo e região metropolitana. Nosso atendimento é pensado para você se sentir seguro e bem informado em cada etapa do serviço.'
    },
    {
      question: 'É seguro chamar um técnico para minha casa?',
      answer: 'Totalmente! Todos os nossos técnicos usam uniforme e crachá de identificação. Antes de iniciar o serviço, explicamos o que será feito e o valor. Temos clientes mulheres que moram sozinhas e nos recomendam justamente pela segurança e respeito no atendimento.'
    },
    {
      question: 'Vocês explicam o serviço antes de fazer?',
      answer: 'Sempre! Acreditamos que você tem o direito de entender o que está sendo feito na sua casa. Explicamos o problema encontrado, as opções de solução e o valor antes de executar qualquer serviço. Sem surpresas.'
    },
    {
      question: 'Qual o tempo de atendimento?',
      answer: 'Para emergências na Grande São Paulo, nosso tempo médio de chegada é de 2 horas. Para serviços agendados, você escolhe o melhor dia e horário. Sempre confirmamos antes de ir e avisamos quando estamos a caminho.'
    },
    {
      question: 'Vocês instalam câmeras e fechaduras em apartamentos?',
      answer: 'Sim! Instalamos câmeras de segurança, fechaduras digitais, olho mágico digital e interfones em apartamentos e casas. Tudo pensado para aumentar a sua segurança e tranquilidade, especialmente para quem mora sozinho(a).'
    },
    {
      question: 'Os serviços têm garantia?',
      answer: 'Todos os serviços têm garantia por escrito: 90 dias para reparos, 6 meses para troca de peças e 1 ano para instalações novas. Você recebe um comprovante com tudo documentado.'
    },
    {
      question: 'Como funciona o pagamento?',
      answer: 'Aceitamos Pix, cartão de crédito (até 12x), débito e dinheiro. Emitimos nota fiscal para todos os serviços, seja para pessoa física ou jurídica.'
    },
    {
      question: 'Atendem fora do horário comercial?',
      answer: 'Sim! Funcionamos 24 horas, 7 dias por semana, inclusive feriados. Sabemos que problemas elétricos e de segurança não escolhem hora. Ficou no escuro às 22h? A fechadura travou no domingo? Estamos aqui para ajudar.'
    }
  ]

  return (
    <section id="faq" className="py-10 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-6 sm:mb-10">
          <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">Tire Suas Dúvidas</span>
          <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-zinc-900 mt-2">Perguntas Frequentes</h2>
        </div>

        {/* FAQ accordion - touch optimized */}
        <div className="space-y-2 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-zinc-50 rounded-xl border border-zinc-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-3 min-h-[56px] active:bg-zinc-100 transition-colors"
              >
                <span className="font-semibold text-zinc-900 text-sm sm:text-base leading-tight">{faq.question}</span>
                <ChevronRight className={`w-5 h-5 text-zinc-400 transition-transform flex-shrink-0 ${openIndex === index ? 'rotate-90' : ''}`} />
              </button>
              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                  <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
function Contact() {
  const [form, setForm] = useState({ nome: '', telefone: '', servico: '', mensagem: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const { openTriageModal } = useModal()

  const validate = () => {
    const newErrors = {}
    if (!form.nome.trim()) newErrors.nome = 'Nome é obrigatório'
    if (!form.telefone.trim()) newErrors.telefone = 'Telefone é obrigatório'
    else if (form.telefone.replace(/\D/g, '').length < 10) newErrors.telefone = 'Telefone inválido'
    if (!form.servico) newErrors.servico = 'Selecione um serviço'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length === 0) {
      const message = `Olá! Meu nome é ${form.nome}.\n\nTelefone: ${form.telefone}\nServiço: ${form.servico}\n\n${form.mensagem || 'Gostaria de solicitar um orçamento.'}`
      window.open(getWhatsAppLink(message), '_blank')
      setSubmitted(true)
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <section id="contato" className="py-12 sm:py-16 lg:py-28 bg-zinc-50 pb-32 sm:pb-16 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact info */}
          <div>
            <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">Fale com a Gente</span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 mt-2 sm:mt-3 mb-4 sm:mb-6 tracking-tight">Atendimento Seguro para Você</h2>
            <p className="text-zinc-500 text-sm sm:text-lg mb-6 sm:mb-10 leading-relaxed">
              Atendemos casas, apartamentos, empresas e condomínios em toda São Paulo. Fale conosco sem compromisso
              <span className="hidden sm:inline"> — explicamos tudo antes de fazer qualquer serviço</span>.
            </p>

            <div className="space-y-3 sm:space-y-6">
              <button
                onClick={openTriageModal}
                className="w-full flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border border-zinc-200 hover:border-green-500 hover:bg-green-50 transition-all group text-left min-h-[64px] active:bg-green-50"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 group-hover:text-green-700 text-sm sm:text-base">WhatsApp</h3>
                  <p className="text-zinc-500 text-xs sm:text-sm">{CONFIG.company.phone}</p>
                </div>
              </button>

              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border border-zinc-200 min-h-[64px]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-zinc-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 text-sm sm:text-base">Telefone</h3>
                  <p className="text-zinc-500 text-xs sm:text-sm">{CONFIG.company.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border border-zinc-200 min-h-[64px]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-zinc-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 text-sm sm:text-base">Área de Cobertura</h3>
                  <p className="text-zinc-500 text-xs sm:text-sm">SP, ABC e Região Metropolitana</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-2xl p-5 sm:p-8 border border-zinc-100 shadow-sm">
            {submitted ? (
              <div className="text-center py-8 sm:py-12">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-2">Mensagem enviada!</h3>
                <p className="text-zinc-500 text-sm sm:text-base">Você foi redirecionado para o WhatsApp.</p>
              </div>
            ) : (
              <>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-4 sm:mb-6">Solicite um orçamento</h3>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-zinc-700 mb-1.5 sm:mb-2">Nome completo *</label>
                    <input
                      type="text"
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      className={`w-full px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl border text-base ${errors.nome ? 'border-red-300 bg-red-50' : 'border-zinc-200'} focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all min-h-[44px]`}
                      placeholder="Seu nome"
                    />
                    {errors.nome && <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.nome}</p>}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-zinc-700 mb-1.5 sm:mb-2">WhatsApp *</label>
                    <input
                      type="tel"
                      value={form.telefone}
                      onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                      inputMode="tel"
                      className={`w-full px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl border text-base ${errors.telefone ? 'border-red-300 bg-red-50' : 'border-zinc-200'} focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all min-h-[44px]`}
                      placeholder="(11) 99999-9999"
                    />
                    {errors.telefone && <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.telefone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-zinc-700 mb-1.5 sm:mb-2">Serviço desejado *</label>
                    <select
                      value={form.servico}
                      onChange={(e) => setForm({ ...form, servico: e.target.value })}
                      className={`w-full px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl border text-base ${errors.servico ? 'border-red-300 bg-red-50' : 'border-zinc-200'} focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all min-h-[44px]`}
                    >
                      <option value="">Selecione um serviço</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                      <option value="Outro">Outro</option>
                    </select>
                    {errors.servico && <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.servico}</p>}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-zinc-700 mb-1.5 sm:mb-2">Mensagem (opcional)</label>
                    <textarea
                      rows={3}
                      value={form.mensagem}
                      onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                      className="w-full px-3 sm:px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none text-base"
                      placeholder="Descreva seu problema..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3.5 sm:py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/25 min-h-[48px] active:scale-[0.98]"
                  >
                    Enviar via WhatsApp
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// Home Page
export default function Home() {
  return (
    <>
      <SEO
        title="Eletricista 24h SP | Residências, Empresas e Condomínios | RCSUPORTE"
        description="Técnicos identificados para casas, apartamentos e empresas. Atendimento seguro e transparente. Eletricista, câmeras, fechaduras. Explicamos antes de fazer. (11) 95653-4963"
        keywords="eletricista residencial são paulo, eletricista 24h, conserto elétrico em casa, técnico de confiança, atendimento seguro para mulheres, câmeras segurança residencial, fechadura digital apartamento, eletricista apartamento sp"
        canonical="/"
      />
      <Hero />
      <Services />
      <Differentials />
      <TrustSection />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}
