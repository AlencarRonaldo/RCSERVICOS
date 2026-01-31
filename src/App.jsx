import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ModalProvider } from './context/ModalContext'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import TriageModal from './components/TriageModal'
import Home from './pages/Home'
import RegionPage from './pages/RegionPage'
import ServicePage from './pages/ServicePage'

function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <div className="min-h-screen bg-white antialiased">
          <Header />
          <main>
            <Routes>
              {/* Home */}
              <Route path="/" element={<Home />} />

              {/* Páginas por Serviço (rotas específicas primeiro) */}
              <Route path="/eletricista-24h" element={<ServicePage />} />
              <Route path="/fechadura-digital" element={<ServicePage />} />
              <Route path="/cameras-seguranca" element={<ServicePage />} />
              <Route path="/controle-acesso" element={<ServicePage />} />
              <Route path="/ti-escritorio-24h" element={<ServicePage />} />

              {/* Páginas por Região */}
              <Route path="/zona-sul" element={<RegionPage />} />
              <Route path="/abc" element={<RegionPage />} />

              {/* 404 - Redireciona para Home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsApp />
          <TriageModal />
        </div>
      </ModalProvider>
    </BrowserRouter>
  )
}

export default App
