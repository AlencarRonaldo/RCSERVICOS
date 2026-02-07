import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Zap, Menu, X, AlertCircle } from 'lucide-react'
import { useModal } from '../context/ModalContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { openTriageModal } = useModal()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const navLinks = [
    { href: '/#servicos', label: 'Serviços' },
    { href: '/#sobre', label: 'Sobre' },
    { href: '/#faq', label: 'FAQ' },
    { href: '/#contato', label: 'Contato' }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || isMenuOpen ? 'bg-white shadow-sm' : 'bg-white/95 backdrop-blur-sm shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo - smaller on mobile */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo-rcsuporte.webp"
              alt="RCSUPORTE - Elétrica e Segurança 24h para Empresas e Condomínios em SP"
              className="h-9 sm:h-12 lg:h-14 w-auto"
            />
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
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={openTriageModal}
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold text-sm transition-all hover:shadow-lg hover:shadow-red-500/25 min-h-[40px]"
            >
              <AlertCircle className="w-4 h-4" />
              Emergência
            </button>

            {/* Mobile Menu Button - touch friendly */}
            <button
              className="lg:hidden p-2.5 rounded-lg hover:bg-zinc-100 active:bg-zinc-200 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-zinc-700" /> : <Menu className="w-6 h-6 text-zinc-700" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - fullscreen overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-14 sm:top-16 bottom-0 bg-white/98 backdrop-blur-xl border-t border-zinc-100 overflow-y-auto">
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-4 text-zinc-700 font-medium rounded-xl hover:bg-zinc-50 active:bg-zinc-100 transition-colors text-base min-h-[52px] flex items-center"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                  openTriageModal()
                }}
                className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-4 rounded-xl font-semibold min-h-[56px] active:scale-[0.98] transition-transform"
              >
                <AlertCircle className="w-5 h-5" />
                Emergência 24h
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
