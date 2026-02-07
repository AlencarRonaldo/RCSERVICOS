import { useEffect } from 'react'
import { X } from 'lucide-react'
import { useModal } from '../context/ModalContext'
import TriageForm from './TriageForm'

export default function TriageModal() {
  const { isTriageModalOpen, closeTriageModal } = useModal()

  // Fecha modal com ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeTriageModal()
    }

    if (isTriageModalOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isTriageModalOpen, closeTriageModal])

  if (!isTriageModalOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={closeTriageModal}
      />

      {/* Modal - slides up from bottom on mobile, centered on desktop */}
      <div className="relative w-full sm:max-w-lg max-h-[95vh] sm:max-h-[90vh] overflow-y-auto animate-slide-up rounded-t-2xl sm:rounded-2xl">
        {/* Close Button - better positioned for mobile */}
        <button
          onClick={closeTriageModal}
          aria-label="Fechar"
          className="absolute top-3 right-3 sm:-top-12 sm:right-0 w-10 h-10 sm:w-10 sm:h-10 bg-zinc-100 sm:bg-white/10 hover:bg-zinc-200 sm:hover:bg-white/20 rounded-full flex items-center justify-center text-zinc-600 sm:text-white transition-colors z-10 min-h-[44px] min-w-[44px]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Mobile drag handle indicator */}
        <div className="sm:hidden absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-1 bg-zinc-300 rounded-full" />

        <TriageForm onSuccess={closeTriageModal} />
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(100%) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @media (min-width: 640px) {
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(20px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
