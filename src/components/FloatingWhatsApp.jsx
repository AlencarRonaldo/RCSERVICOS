import { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'
import { useModal } from '../context/ModalContext'

export default function FloatingWhatsApp() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showPulse, setShowPulse] = useState(true)
  const { openTriageModal } = useModal()

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
    <button
      onClick={openTriageModal}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex items-center cursor-pointer"
      aria-label="Fale Conosco via WhatsApp"
    >
      {/* Pulse Animation */}
      {showPulse && (
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
      )}

      {/* Button - touch friendly with min size */}
      <div className={`flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-lg shadow-green-500/30 transition-all duration-300 active:scale-95 ${
        isExpanded ? 'pl-4 sm:pl-5 pr-5 sm:pr-6 py-3 sm:py-4' : 'p-3 sm:p-4'
      } min-h-[48px] min-w-[48px]`}>
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        {isExpanded && (
          <span className="font-semibold whitespace-nowrap text-sm sm:text-base">
            Fale Conosco
          </span>
        )}
      </div>
    </button>
  )
}
