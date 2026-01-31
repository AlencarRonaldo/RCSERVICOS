import { Link } from 'react-router-dom'
import { Zap, Phone, MapPin, MessageCircle, Headphones } from 'lucide-react'
import { CONFIG } from '../data/config'
import { useModal } from '../context/ModalContext'

export default function Footer() {
  const { openTriageModal } = useModal()

  return (
    <footer className="bg-zinc-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight">RCSUPORTE</span>
                <span className="block text-[10px] text-zinc-500">E TELECOM</span>
              </div>
            </Link>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed mb-6">
              Especialistas em serviços elétricos, fechaduras digitais, câmeras de segurança
              e controle de acesso. Tecnologia e agilidade ao seu serviço.
            </p>
            <button
              onClick={openTriageModal}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Fale Conosco
            </button>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><Link to="/eletricista-24h" className="hover:text-white transition-colors">Eletricista 24h</Link></li>
              <li><Link to="/fechadura-digital" className="hover:text-white transition-colors">Fechaduras Digitais</Link></li>
              <li><Link to="/cameras-seguranca" className="hover:text-white transition-colors">Câmeras e Alarmes</Link></li>
              <li><Link to="/controle-acesso" className="hover:text-white transition-colors">Controle de Acesso</Link></li>
              <li><Link to="/ti-escritorio-24h" className="hover:text-white transition-colors">TI Escritório 24h</Link></li>
            </ul>

            <h4 className="font-semibold mt-6 mb-4">Regiões</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><Link to="/zona-sul" className="hover:text-white transition-colors">Zona Sul SP</Link></li>
              <li><Link to="/abc" className="hover:text-white transition-colors">ABC Paulista</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Atendimento</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <Headphones className="w-4 h-4" />
                24 horas, 7 dias
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {CONFIG.company.phone}
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                São Paulo e região
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
            <div className="text-center md:text-left">
              <p className="font-medium text-zinc-400">{CONFIG.company.fullName}</p>
              <p>CNPJ: {CONFIG.company.cnpj}</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
            <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
