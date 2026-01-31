import { createContext, useContext, useState } from 'react'

const ModalContext = createContext()

export function ModalProvider({ children }) {
  const [isTriageModalOpen, setIsTriageModalOpen] = useState(false)

  const openTriageModal = () => setIsTriageModalOpen(true)
  const closeTriageModal = () => setIsTriageModalOpen(false)

  return (
    <ModalContext.Provider value={{ isTriageModalOpen, openTriageModal, closeTriageModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}
