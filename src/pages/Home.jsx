import { useState } from 'react'
import {
  Clock, Shield, BadgeCheck, CreditCard, Star, CheckCircle2,
  Search, AlertCircle, ArrowRight, ChevronRight, Phone, MapPin,
  MessageCircle
} from 'lucide-react'
import SEO from '../components/SEO'
import { useModal } from '../context/ModalContext'
import { SERVICES, getWhatsAppLink, CONFIG } from '../data/config'

// Hero Section
function Hero() {
  const [cep, setCep] = useState('')
  const [cepStatus, setCepStatus] = useState(null)
  const { openTriageModal } = useModal()

  const handleCepCheck = (e) => {
    e.preventDefault()
    const cleanCep = cep.replace(/\D/g, '')
    if (cleanCep.length === 8) {
      if (cleanCep.startsWith('0') || cleanCep.startsWith('1')) {
        setCepStatus('success')
      } else {
        setCepStatus('error')
      }
    }
  }

  return (
    <section className="pt-28 pb-16 lg:pt-40 lg:pb-28 bg-gradient-to-b from-zinc-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-red-100 animate-pulse">
            <AlertCircle className="w-4 h-4" />
            Atendimento EMERGENCIAL em até 2 horas
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 leading-[1.1] tracking-tight mb-6">
            Travou?{' '}
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Queimou?
            </span>
            {' '}Parou de funcionar?{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              A gente conserta.
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-zinc-500 mb-10 max-w-3xl mx-auto leading-relaxed">
            Elétrica, fechadura, câmera ou portão com defeito?{' '}
            <strong className="text-zinc-700">Somos especialistas em reparos emergenciais e diagnósticos complexos.</strong>{' '}
            Resolvemos hoje o que travou sua rotina.
          </p>

          {/* CEP Search */}
          <form onSubmit={handleCepCheck} className="max-w-md mx-auto mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-zinc-400" />
              </div>
              <input
                type="text"
                value={cep}
                onChange={(e) => {
                  setCep(e.target.value)
                  setCepStatus(null)
                }}
                placeholder="Digite seu CEP para verificar cobertura"
                className="w-full pl-12 pr-32 py-4 bg-white border border-zinc-200 rounded-xl text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                maxLength={9}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all"
              >
                Verificar
              </button>
            </div>
            {cepStatus === 'success' && (
              <p className="mt-3 text-sm text-green-600 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Ótimo! Atendemos sua região.
              </p>
            )}
            {cepStatus === 'error' && (
              <p className="mt-3 text-sm text-amber-600 flex items-center justify-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Consulte disponibilidade via WhatsApp.
              </p>
            )}
          </form>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openTriageModal}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-xl hover:shadow-green-500/25 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              PRECISO DE CONSERTO AGORA
            </button>
            <a
              href="#servicos"
              className="w-full sm:w-auto flex items-center justify-center gap-2 text-zinc-700 hover:text-zinc-900 font-medium px-6 py-4 rounded-xl border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition-all"
            >
              Qual problema você tem?
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>+500 emergências resolvidas</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span>4.9 no Google</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-500" />
              <span>Garantia em todos os serviços</span>
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
    <section id="servicos" className="py-20 lg:py-28 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
            Diagnóstico e Reparo Especializado
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mt-3 mb-4 tracking-tight">
            Resolvemos o que outros técnicos não conseguem
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            Especialistas em <strong className="text-zinc-700">diagnósticos complexos</strong> e reparos que exigem experiência real.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-red-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  URGENTE
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold text-zinc-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <button
                  onClick={openTriageModal}
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 w-full justify-center animate-pulse"
                >
                  RESOLVER AGORA
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
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
    { name: 'Samsung', logo: '/logos/samsung.svg' },
    { name: 'Yale', logo: '/logos/yale.svg' },
    { name: 'Papaiz', logo: '/logos/papaiz.svg' },
    { name: 'Positivo', logo: '/logos/positivo.svg' },
    { name: 'Garen', logo: '/logos/garen.svg' }
  ]

  return (
    <section id="sobre" className="py-16 bg-white border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-zinc-400 uppercase tracking-wider mb-10">
          Consertamos equipamentos de todas as marcas
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="h-10 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-full w-auto object-contain"
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
    { icon: Clock, title: 'Diagnóstico em 2h', description: 'Chegamos rápido e identificamos o problema real. Sem achismo.' },
    { icon: Shield, title: 'Reparos Complexos', description: 'Resolvemos panes que outros técnicos desistiram de consertar.' },
    { icon: BadgeCheck, title: 'Experiência Real', description: '+10 anos consertando o que parece impossível de resolver.' },
    { icon: CreditCard, title: 'Preço Justo', description: 'Você paga pelo reparo, não por um projeto novo desnecessário.' }
  ]

  return (
    <section className="py-20 lg:py-28 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Nossa Especialidade
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mt-3 tracking-tight">
            Diagnósticos que outros não fazem
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-600 transition-colors duration-300 shadow-lg">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.description}</p>
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
    { name: 'Roberto Mendes', location: 'Santo Amaro, SP', text: 'Três eletricistas não acharam o curto. A RCSUPORTE encontrou em 40 min e resolveu na hora!', rating: 5 },
    { name: 'Carla Ferreira', location: 'Campo Belo, SP', text: 'Assistência queria R$800 pra trocar a fechadura. RCSUPORTE consertou por R$150. Funciona até hoje!', rating: 5 },
    { name: 'Paulo Ribeiro', location: 'São Bernardo, SP', text: 'DVR parou de gravar. Queriam vender sistema de R$3mil. Consertaram o meu por uma fração do preço.', rating: 5 }
  ]

  return (
    <section className="py-16 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Emergências Resolvidas</span>
          <h2 className="text-2xl lg:text-3xl font-bold text-white mt-2">Quem já chamou, aprovou</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
              <div className="flex gap-0.5 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-white/90 text-sm leading-relaxed mb-4">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                <p className="text-xs text-zinc-400">{testimonial.location}</p>
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
      question: 'Qual o tempo médio de atendimento emergencial?',
      answer: 'Para emergências na Grande São Paulo, nosso tempo médio de chegada é de 2 horas. O técnico registra horário de chegada e saída, e você paga apenas pelo tempo real de serviço. Para casos agendados, combinamos o melhor horário.'
    },
    {
      question: 'O diagnóstico é cobrado separadamente?',
      answer: 'O diagnóstico faz parte do atendimento. Se você aprovar o reparo, o valor do diagnóstico é incorporado ao serviço. Só cobramos visita separada se você optar por não realizar o conserto após a avaliação.'
    },
    {
      question: 'Vocês consertam ou só querem vender equipamento novo?',
      answer: 'Nossa especialidade é CONSERTAR. Só indicamos troca quando o reparo não é viável tecnicamente ou quando o custo do conserto supera 70% do valor de um equipamento novo. Sempre apresentamos as opções com transparência.'
    },
    {
      question: 'O técnico leva peças e materiais?',
      answer: 'Sim! Nossos técnicos vão preparados com as peças mais comuns: disjuntores, fios, conectores, baterias para fechaduras, fontes, HDs para DVR e controles de portão. Para peças específicas, fazemos orçamento e retornamos no mesmo dia quando possível.'
    },
    {
      question: 'Quais formas de pagamento vocês aceitam?',
      answer: 'Pix (transferência na hora), cartão de crédito em até 12x, cartão de débito e dinheiro. Emitimos nota fiscal em todos os serviços. Para empresas, também trabalhamos com boleto mediante cadastro.'
    },
    {
      question: 'Os serviços têm garantia?',
      answer: 'Todos os serviços têm garantia documentada: 90 dias para reparos em geral, 6 meses para troca de peças e 1 ano para instalações novas. A garantia cobre defeitos no serviço executado, não mau uso ou desgaste natural.'
    },
    {
      question: 'Vocês trabalham com quais marcas?',
      answer: 'Trabalhamos com TODAS as marcas do mercado: Intelbras, Samsung, Yale, Papaiz, Positivo, Garen, Hikvision, Motorola, Amelco, PPA, entre outras. Nossa equipe é treinada para diagnosticar e reparar equipamentos de qualquer fabricante.'
    },
    {
      question: 'Atendem fora do horário comercial, feriados e fins de semana?',
      answer: 'Sim! Funcionamos 24 horas, 7 dias por semana, incluindo feriados. Emergência elétrica às 3h da manhã? Fechadura travou no domingo? Estamos disponíveis. O valor do atendimento noturno/feriado tem acréscimo de 30%.'
    }
  ]

  return (
    <section id="faq" className="py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Dúvidas</span>
          <h2 className="text-2xl lg:text-3xl font-bold text-zinc-900 mt-2">Perguntas Frequentes</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-zinc-50 rounded-xl border border-zinc-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-zinc-900">{faq.question}</span>
                <ChevronRight className={`w-5 h-5 text-zinc-400 transition-transform ${openIndex === index ? 'rotate-90' : ''}`} />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-zinc-600 leading-relaxed">{faq.answer}</p>
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
    <section id="contato" className="py-20 lg:py-28 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Contato</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mt-3 mb-6 tracking-tight">Fale conosco agora</h2>
            <p className="text-zinc-500 text-lg mb-10 leading-relaxed">
              Estamos prontos para atender você. Escolha o canal de sua preferência
              ou preencha o formulário ao lado.
            </p>

            <div className="space-y-6">
              <button
                onClick={openTriageModal}
                className="w-full flex items-center gap-4 p-4 rounded-xl border border-zinc-200 hover:border-green-500 hover:bg-green-50 transition-all group text-left"
              >
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 group-hover:text-green-700">WhatsApp</h3>
                  <p className="text-zinc-500 text-sm">{CONFIG.company.phone}</p>
                </div>
              </button>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-zinc-200">
                <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900">Telefone</h3>
                  <p className="text-zinc-500 text-sm">{CONFIG.company.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-zinc-200">
                <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900">Área de Cobertura</h3>
                  <p className="text-zinc-500 text-sm">São Paulo e Região Metropolitana</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-zinc-100 shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Mensagem enviada!</h3>
                <p className="text-zinc-500">Você foi redirecionado para o WhatsApp.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-zinc-900 mb-6">Solicite um orçamento</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">Nome completo *</label>
                    <input
                      type="text"
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.nome ? 'border-red-300 bg-red-50' : 'border-zinc-200'} focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all`}
                      placeholder="Seu nome"
                    />
                    {errors.nome && <p className="mt-1 text-sm text-red-500">{errors.nome}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">WhatsApp *</label>
                    <input
                      type="tel"
                      value={form.telefone}
                      onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.telefone ? 'border-red-300 bg-red-50' : 'border-zinc-200'} focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all`}
                      placeholder="(11) 99999-9999"
                    />
                    {errors.telefone && <p className="mt-1 text-sm text-red-500">{errors.telefone}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">Serviço desejado *</label>
                    <select
                      value={form.servico}
                      onChange={(e) => setForm({ ...form, servico: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.servico ? 'border-red-300 bg-red-50' : 'border-zinc-200'} focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all`}
                    >
                      <option value="">Selecione um serviço</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                      <option value="Outro">Outro</option>
                    </select>
                    {errors.servico && <p className="mt-1 text-sm text-red-500">{errors.servico}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">Mensagem (opcional)</label>
                    <textarea
                      rows={3}
                      value={form.mensagem}
                      onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                      placeholder="Descreva seu problema ou necessidade..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/25"
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
        title="RCSUPORTE | Conserto Urgente - Elétrica, Fechadura, Câmeras | SP 24h"
        description="Sua casa parou? A gente conserta HOJE. Eletricista 24h, fechadura travada, câmera offline, portão quebrado. Diagnóstico em 2h. Ligue: (11) 95653-4963"
        keywords="eletricista urgente, conserto elétrico, fechadura travada, câmera não funciona, portão não abre, reparo emergencial"
        canonical="/"
      />
      <Hero />
      <Services />
      <TrustSection />
      <Differentials />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}
