import { Phone, MessageCircle } from 'lucide-react'
import { useModal } from '../context/ModalContext'
import { CONFIG } from '../data/config'

export default function MobileBottomCTA() {
  const { openTriageModal } = useModal()

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-zinc-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] safe-area-bottom">
      <div className="flex gap-2 p-3">
        {/* Call button */}
        <a
          href={`tel:${CONFIG.company.phone.replace(/\D/g, '')}`}
          className="flex-1 flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white py-3 px-4 rounded-xl font-semibold text-sm min-h-[48px] active:scale-[0.98] transition-all"
        >
          <Phone className="w-4 h-4" />
          Ligar Agora
        </a>

        {/* WhatsApp button */}
        <button
          onClick={openTriageModal}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-4 rounded-xl font-semibold text-sm min-h-[48px] active:scale-[0.98] transition-all"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </button>
      </div>

      {/* Safe area padding for iOS devices */}
      <style>{`
        .safe-area-bottom {
          padding-bottom: env(safe-area-inset-bottom, 0px);
        }
      `}</style>
    </div>
  )
}
