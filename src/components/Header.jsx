import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Zap, Menu, X, AlertCircle } from 'lucide-react'
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '../data/config'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const navLinks = [
    { href: '/#servicos', label: 'Serviços' },
    { href: '/#sobre', label: 'Sobre' },
    { href: '/#faq', label: 'FAQ' },
    { href: '/#contato', label: 'Contato' }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold text-zinc-900 tracking-tight">RCSUPORTE</span>
              <span className="hidden sm:block text-[10px] text-zinc-400 -mt-1">TELECOM</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-600 hover:text-zinc-900 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppLink(WHATSAPP_MESSAGES.emergency)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:shadow-lg hover:shadow-red-500/25 hover:-translate-y-0.5"
            >
              <AlertCircle className="w-4 h-4" />
              Emergência
            </a>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-zinc-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-zinc-700" /> : <Menu className="w-6 h-6 text-zinc-700" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-zinc-100 bg-white/95 backdrop-blur-xl">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-zinc-700 font-medium rounded-lg hover:bg-zinc-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={getWhatsAppLink(WHATSAPP_MESSAGES.emergency)}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-3 rounded-lg font-semibold"
              >
                <AlertCircle className="w-4 h-4" />
                Emergência 24h
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
