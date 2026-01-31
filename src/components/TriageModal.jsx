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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={closeTriageModal}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto animate-slide-up">
        {/* Close Button */}
        <button
          onClick={closeTriageModal}
          className="absolute -top-12 right-0 sm:right-0 sm:-top-12 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <TriageForm onSuccess={closeTriageModal} />
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
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
