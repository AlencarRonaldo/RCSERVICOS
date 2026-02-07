import { useEffect, useState } from 'react'
import { Calendar } from 'lucide-react'

export default function CalendlyWidget() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Carrega o CSS do Calendly
    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    // Carrega o script do Calendly
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => {
      setIsLoaded(true)
    }
    document.body.appendChild(script)

    // Remove qualquer badge widget padrão do Calendly
    const removeBadge = setInterval(() => {
      const badge = document.querySelector('.calendly-badge-widget')
      if (badge) {
        badge.remove()
        clearInterval(removeBadge)
      }
    }, 100)

    return () => {
      clearInterval(removeBadge)
      const badge = document.querySelector('.calendly-badge-widget')
      if (badge) badge.remove()
    }
  }, [])

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/vozdopovobot/30min'
      })
    }
  }

  return (
    <button
      onClick={openCalendly}
      aria-label="Agendar Visita"
      className="fixed bottom-36 sm:bottom-24 right-4 sm:right-6 z-40 flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white pl-3 sm:pl-4 pr-4 sm:pr-5 py-2.5 sm:py-3 rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 active:scale-95 min-h-[44px]"
    >
      <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
      <span className="font-semibold text-xs sm:text-sm">Agendar Visita</span>
    </button>
  )
}
