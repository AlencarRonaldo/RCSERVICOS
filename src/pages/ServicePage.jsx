import { useLocation, Link } from 'react-router-dom'
import {
  Clock, CheckCircle2, ArrowRight, MessageCircle, Phone, Star, Shield, MapPin
} from 'lucide-react'
import SEO from '../components/SEO'
import { SERVICES, getWhatsAppLink, CONFIG } from '../data/config'

export default function ServicePage() {
  const location = useLocation()
  const slug = location.pathname.replace('/', '')
  const serviceData = SERVICES.find(s => s.slug === slug)

  if (!serviceData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900 mb-4">Serviço não encontrado</h1>
          <Link to="/" className="text-blue-600 hover:underline">Voltar ao início</Link>
        </div>
      </div>
    )
  }

  const otherServices = SERVICES.filter(s => s.id !== serviceData.id)

  return (
    <>
      <SEO
        title={`${serviceData.shortTitle} em São Paulo - 24h | RCSUPORTE`}
        description={`${serviceData.fullDescription.slice(0, 130)}... Atendimento em 2h. Ligue: ${CONFIG.company.phone}`}
        keywords={`${serviceData.title.toLowerCase()}, ${serviceData.shortTitle.toLowerCase()} são paulo, ${serviceData.shortTitle.toLowerCase()} 24h`}
        canonical={`/${service}`}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-zinc-900 to-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={serviceData.image}
            alt={serviceData.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-zinc-900/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Clock className="w-4 h-4" />
                Atendimento em até 2 horas
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white leading-tight mb-6">
                {serviceData.title} em{' '}
                <span className="text-blue-400">São Paulo</span>
              </h1>

              <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
                {serviceData.fullDescription}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-3 mb-8">
                {serviceData.features.map((feature, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={getWhatsAppLink(serviceData.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl"
                >
                  <MessageCircle className="w-5 h-5" />
                  Solicitar Orçamento
                </a>
                <a
                  href={`tel:${CONFIG.company.whatsapp}`}
                  className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all backdrop-blur-sm"
                >
                  <Phone className="w-5 h-5" />
                  {CONFIG.company.phone}
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <img
                src={serviceData.image}
                alt={serviceData.title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900">
              Por que escolher a RCSUPORTE?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: 'Atendimento 24h', desc: 'Disponíveis a qualquer hora, todos os dias.' },
              { icon: Shield, title: 'Garantia', desc: 'Todos os serviços com garantia documentada.' },
              { icon: Star, title: 'Qualidade', desc: 'Técnicos certificados e materiais de primeira.' },
              { icon: MapPin, title: 'Cobertura', desc: 'Atendemos toda São Paulo e região.' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-zinc-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-zinc-900">
              Regiões atendidas
            </h2>
            <p className="text-zinc-500 mt-2">
              Oferecemos {serviceData.title.toLowerCase()} em toda a Grande São Paulo
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {['Zona Sul', 'Zona Norte', 'Zona Leste', 'Zona Oeste', 'Centro', 'ABC Paulista', 'Guarulhos', 'Osasco'].map((area, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 bg-white text-zinc-700 px-4 py-2 rounded-full text-sm font-medium border border-zinc-200"
              >
                <MapPin className="w-4 h-4 text-blue-500" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Outros Serviços
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mt-3">
              Conheça nossos outros serviços
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {otherServices.map((s, index) => (
              <Link
                key={index}
                to={`/${s.slug}`}
                className="group bg-zinc-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">{s.title}</h3>
                  <span className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium">
                    Saiba mais
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Precisa de {serviceData.title.toLowerCase()}?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Entre em contato agora e receba atendimento em até 2 horas.
            Orçamento gratuito e sem compromisso!
          </p>
          <a
            href={getWhatsAppLink(serviceData.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:bg-blue-50"
          >
            <MessageCircle className="w-5 h-5" />
            Solicitar Orçamento Grátis
          </a>
        </div>
      </section>
    </>
  )
}
