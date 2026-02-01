import { Link } from 'react-router-dom'
import { Zap, Phone, MapPin, MessageCircle, Headphones } from 'lucide-react'
import { CONFIG } from '../data/config'
import { useModal } from '../context/ModalContext'

export default function Footer() {
  const { openTriageModal } = useModal()

  return (
    <footer className="bg-zinc-900 text-white pb-20 sm:pb-0">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
          {/* Brand - full width on mobile */}
          <div className="col-span-2">
            <Link to="/" className="inline-block mb-3 sm:mb-4">
              <img
                src="/logo-rcsuporte.webp"
                alt="RCSUPORTE - Elétrica e Segurança 24h para Empresas e Condomínios em São Paulo"
                loading="lazy"
                className="h-10 sm:h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-sm leading-relaxed mb-4 sm:mb-6">
              Atendimento seguro e transparente para casas, apartamentos, empresas e condomínios em São Paulo.
              Técnicos identificados. Explicamos antes de fazer.
            </p>
            <button
              onClick={openTriageModal}
              className="hidden sm:inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4" />
              Fale Conosco
            </button>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Nossos Serviços</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-zinc-400">
              <li><Link to="/eletricista-24h" className="hover:text-white transition-colors py-1 block">Eletricista 24h</Link></li>
              <li><Link to="/fechadura-digital" className="hover:text-white transition-colors py-1 block">Fechaduras Digitais</Link></li>
              <li><Link to="/cameras-seguranca" className="hover:text-white transition-colors py-1 block">Câmeras de Segurança</Link></li>
              <li><Link to="/controle-acesso" className="hover:text-white transition-colors py-1 block">Portões e Interfones</Link></li>
              <li><Link to="/ti-escritorio-24h" className="hover:text-white transition-colors py-1 block">Suporte Técnico</Link></li>
            </ul>
          </div>

          {/* Contact & Regions */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Atendimento</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <Headphones className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                24h, 7 dias
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="break-all">{CONFIG.company.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                SP e região
              </li>
            </ul>

            <h4 className="font-semibold text-sm sm:text-base mt-4 sm:mt-6 mb-3 sm:mb-4">Regiões</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-zinc-400">
              <li><Link to="/zona-sul" className="hover:text-white transition-colors py-1 block">Zona Sul SP</Link></li>
              <li><Link to="/abc" className="hover:text-white transition-colors py-1 block">ABC Paulista</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-zinc-500">
            <div className="text-center sm:text-left">
              <p className="font-medium text-zinc-400 text-xs sm:text-sm">{CONFIG.company.fullName}</p>
              <p className="text-[10px] sm:text-sm">CNPJ: {CONFIG.company.cnpj}</p>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 text-[10px] sm:text-sm">
              <a href="#" className="hover:text-white transition-colors py-1">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors py-1">Termos</a>
            </div>
            <p className="text-[10px] sm:text-sm">© {new Date().getFullYear()} Todos os direitos reservados.</p>
          </div>
        </div>
      </div>

      {/* Developer Credit */}
      <div className="border-t border-zinc-800/50 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <p className="text-center text-[10px] sm:text-xs text-zinc-600">
            Desenvolvido por{' '}
            <a
              href="https://playcodeagency.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors font-medium"
            >
              PlayCode Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
