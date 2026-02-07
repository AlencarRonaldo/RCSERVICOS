import { CheckCircle2, Phone, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { CONFIG } from '../data/config'

export default function ThankYou() {
  return (
    <>
      <SEO
        title="Pedido Recebido | RCSUPORTE"
        description="Seu pedido de orçamento foi recebido. Entraremos em contato em breve."
        canonical="/obrigado"
      />

      <section className="min-h-screen pt-20 pb-16 flex items-center justify-center bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-xl mx-auto px-4 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
            Pedido Recebido!
          </h1>

          {/* Message */}
          <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
            Obrigado por entrar em contato. Nossa equipe recebeu seu pedido de orçamento e entrará em contato em breve.
          </p>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-4 rounded-xl border border-zinc-200 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-zinc-900 text-sm">Tempo de Resposta</p>
                <p className="text-zinc-500 text-xs">Até 30 minutos</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-zinc-200 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-zinc-900 text-sm">Emergência?</p>
                <p className="text-zinc-500 text-xs">{CONFIG.company.phone}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3 rounded-xl font-semibold transition-all"
          >
            Voltar para o Início
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
