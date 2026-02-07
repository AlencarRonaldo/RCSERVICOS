import { useLocation, Link } from 'react-router-dom'
import {
  Clock, MapPin, CheckCircle2, ArrowRight, MessageCircle, Phone, Star, Shield
} from 'lucide-react'
import SEO from '../components/SEO'
import { useModal } from '../context/ModalContext'
import { SERVICES, REGIONS, CONFIG } from '../data/config'

export default function RegionPage() {
  const location = useLocation()
  const slug = location.pathname.replace('/', '')
  const regionData = REGIONS[slug]
  const { openTriageModal } = useModal()

  if (!regionData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900 mb-4">Região não encontrada</h1>
          <Link to="/" className="text-blue-600 hover:underline">Voltar ao início</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <SEO
        title={`Eletricista e Segurança ${regionData.title} 24h | RCSUPORTE`}
        description={`Atendimento seguro para casas e apartamentos na ${regionData.title}. Técnicos identificados. Eletricista, câmeras, fechaduras em ${regionData.neighborhoods.slice(0, 3).join(', ')}. ${CONFIG.company.phone}`}
        keywords={`eletricista ${regionData.name.toLowerCase()}, eletricista residencial ${regionData.name.toLowerCase()}, eletricista apartamento ${regionData.name.toLowerCase()}, câmeras segurança casa ${regionData.name.toLowerCase()}, fechadura digital ${regionData.name.toLowerCase()}, técnico de confiança ${regionData.name.toLowerCase()}`}
        canonical={`/${slug}`}
        region={regionData.name}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <MapPin className="w-4 h-4" />
              {regionData.title}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Eletricista e Segurança na{' '}
              <span className="text-blue-200">{regionData.title}</span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Atendimento seguro para casas, apartamentos e condomínios. Técnicos identificados,
              explicamos antes de fazer. Atendimento em até 2 horas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={openTriageModal}
                className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar Atendimento
              </button>
              <a
                href={`tel:${CONFIG.company.whatsapp}`}
                className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all backdrop-blur-sm"
              >
                <Phone className="w-5 h-5" />
                {CONFIG.company.phone}
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 text-blue-100 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Atendimento em 2h
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-current" />
                4.9 no Google
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Garantia de serviço
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-zinc-900">
              Bairros Atendidos na {regionData.title}
            </h2>
            <p className="text-zinc-500 mt-3">Atendemos casas, apartamentos, empresas e condomínios em toda a região</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {regionData.neighborhoods.map((neighborhood, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                <MapPin className="w-4 h-4 text-blue-500" />
                {neighborhood}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Serviços na {regionData.title}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mt-3 mb-4">
              Atendimento Seguro para Sua Casa ou Empresa
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      service.imagePosition === 'top' ? 'object-top' : 'object-center'
                    }`}
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-zinc-900 mb-3">{service.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-5">{service.description}</p>
                  <button
                    onClick={openTriageModal}
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-5 rounded-lg transition-all animate-pulse"
                  >
                    Solicitar
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Precisa de Atendimento na {regionData.title}?
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Fale com a gente sem compromisso. Técnicos identificados,
            explicamos tudo antes de fazer qualquer serviço.
          </p>
          <button
            onClick={openTriageModal}
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            Falar com um Técnico de Confiança
          </button>
        </div>
      </section>
    </>
  )
}
