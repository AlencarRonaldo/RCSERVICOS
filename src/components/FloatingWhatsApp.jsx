import { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'
import { getWhatsAppLink } from '../data/config'

export default function FloatingWhatsApp() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showPulse, setShowPulse] = useState(true)

  useEffect(() => {
    const expandTimer = setTimeout(() => setIsExpanded(true), 2000)
    const collapseTimer = setTimeout(() => setIsExpanded(false), 6000)
    const pulseTimer = setTimeout(() => setShowPulse(false), 10000)

    return () => {
      clearTimeout(expandTimer)
      clearTimeout(collapseTimer)
      clearTimeout(pulseTimer)
    }
  }, [])

  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center"
    >
      {/* Pulse Animation */}
      {showPulse && (
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
      )}

      {/* Button */}
      <div className={`flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-lg shadow-green-500/30 transition-all duration-300 ${
        isExpanded ? 'pl-5 pr-6 py-4' : 'p-4'
      }`}>
        <MessageCircle className="w-6 h-6" />
        {isExpanded && (
          <span className="font-semibold whitespace-nowrap">
            Fale Conosco
          </span>
        )}
      </div>
    </a>
  )
}
