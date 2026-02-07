import { useState } from 'react'
import { MapPin, User, Wrench, AlertTriangle, Send, ChevronDown } from 'lucide-react'
import { CONFIG } from '../data/config'

const PROBLEM_OPTIONS = [
  { value: '', label: 'Selecione o problema...', group: '' },
  // Elétrica
  { value: 'Pane Elétrica', label: 'Pane Elétrica / Curto-circuito', group: 'Elétrica' },
  { value: 'Disjuntor Desarmando', label: 'Disjuntor Desarmando', group: 'Elétrica' },
  { value: 'Chuveiro Parou', label: 'Chuveiro Elétrico Parou', group: 'Elétrica' },
  { value: 'Tomada não Funciona', label: 'Tomada não Funciona', group: 'Elétrica' },
  { value: 'Instalação Elétrica', label: 'Instalação Elétrica Nova', group: 'Elétrica' },
  // Fechadura
  { value: 'Fechadura Travada', label: 'Fechadura Digital Travada', group: 'Fechadura' },
  { value: 'Fechadura não Reconhece', label: 'Biometria não Reconhece', group: 'Fechadura' },
  { value: 'Instalar Fechadura', label: 'Instalar Fechadura Eletrônica', group: 'Fechadura' },
  { value: 'Trocar Fechadura', label: 'Trocar Fechadura Comum por Digital', group: 'Fechadura' },
  // Câmeras
  { value: 'Câmera Offline', label: 'Câmera Offline / Sem Imagem', group: 'Câmeras' },
  { value: 'DVR Travado', label: 'DVR Travado / Não Grava', group: 'Câmeras' },
  { value: 'Acesso Remoto', label: 'Acesso Remoto não Funciona', group: 'Câmeras' },
  { value: 'Instalar Câmeras', label: 'Instalar Câmeras de Segurança', group: 'Câmeras' },
  // Portão
  { value: 'Portão não Abre', label: 'Portão não Abre / Travado', group: 'Portão' },
  { value: 'Controle não Funciona', label: 'Controle do Portão não Funciona', group: 'Portão' },
  { value: 'Motor com Defeito', label: 'Motor do Portão com Defeito', group: 'Portão' },
  { value: 'Instalar Motor', label: 'Instalar Motor de Portão', group: 'Portão' },
  // TI / Escritório
  { value: 'Servidor Fora', label: 'Servidor Fora do Ar', group: 'TI' },
  { value: 'Rede Caiu', label: 'Rede / Internet Caiu', group: 'TI' },
  { value: 'Computador Travando', label: 'Computador Travando / Lento', group: 'TI' },
  { value: 'Impressora', label: 'Impressora não Funciona', group: 'TI' },
  { value: 'Backup', label: 'Backup / Recuperação de Dados', group: 'TI' },
  { value: 'Email', label: 'E-mail / Sistema não Abre', group: 'TI' },
  { value: 'Suporte TI', label: 'Suporte TI Geral', group: 'TI' },
  // Outros
  { value: 'Interfone', label: 'Interfone com Problema', group: 'Outros' },
  { value: 'Alarme', label: 'Alarme Disparando / com Defeito', group: 'Outros' },
  { value: 'Outro', label: 'Outro Problema', group: 'Outros' }
]

const URGENCY_LEVELS = [
  { value: 'Baixa', label: 'Baixa', description: 'Pode aguardar alguns dias', color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200', checked: 'ring-emerald-500' },
  { value: 'Média', label: 'Média', description: 'Resolver em até 24h', color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200', checked: 'ring-amber-500' },
  { value: 'Emergência Imediata', label: 'Emergência', description: 'Preciso de ajuda agora!', color: 'text-red-600', bg: 'bg-red-50 border-red-200', checked: 'ring-red-500' }
]

export default function TriageForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    problema: '',
    urgencia: ''
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    validateField(name, formData[name])
  }

  const validateField = (name, value) => {
    let error = ''
    switch (name) {
      case 'nome':
        if (!value.trim()) error = 'Nome é obrigatório'
        else if (value.trim().length < 3) error = 'Nome muito curto'
        break
      case 'endereco':
        if (!value.trim()) error = 'Endereço é obrigatório'
        else if (value.trim().length < 10) error = 'Endereço muito curto'
        break
      case 'problema':
        if (!value) error = 'Selecione o tipo de problema'
        break
      case 'urgencia':
        if (!value) error = 'Selecione o nível de urgência'
        break
    }
    setErrors(prev => ({ ...prev, [name]: error }))
    return !error
  }

  const validateForm = () => {
    const fields = ['nome', 'endereco', 'problema', 'urgencia']
    let isValid = true
    fields.forEach(field => {
      if (!validateField(field, formData[field])) {
        isValid = false
      }
      setTouched(prev => ({ ...prev, [field]: true }))
    })
    return isValid
  }

  const generateWhatsAppLink = () => {
    const message = `🚨 SOLICITAÇÃO DE REPARO URGENTE 🚨

👤 Nome: ${formData.nome}
📍 Endereço: ${formData.endereco}
🛠️ Problema: ${formData.problema}
⚡ Urgência: ${formData.urgencia}

📝 Descrição: Olá, vi seu site e preciso de um técnico para resolver esse problema o quanto antes.`

    return `https://api.whatsapp.com/send?phone=${CONFIG.company.whatsapp}&text=${encodeURIComponent(message)}`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      const whatsappLink = generateWhatsAppLink()
      window.open(whatsappLink, '_blank')
      if (onSuccess) onSuccess()
    }
  }

  const inputBaseClass = "w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 bg-white border rounded-xl text-base text-zinc-800 placeholder-zinc-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 min-h-[44px]"
  const inputErrorClass = "border-red-300 bg-red-50/50"
  const inputNormalClass = "border-zinc-200 hover:border-zinc-300"

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="bg-white rounded-t-2xl sm:rounded-2xl shadow-xl shadow-zinc-200/50 border border-zinc-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 sm:px-6 py-4 sm:py-5 pt-6 sm:pt-5">
          <h2 className="text-lg sm:text-xl font-bold text-white">Solicite seu Reparo</h2>
          <p className="text-blue-100 text-xs sm:text-sm mt-1">Preencha os dados e entraremos em contato</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-5">
          {/* Nome */}
          <div>
            <label htmlFor="nome" className="block text-xs sm:text-sm font-medium text-zinc-700 mb-1.5 sm:mb-2">
              Nome Completo
            </label>
            <div className="relative">
              <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-zinc-400">
                <User className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Digite seu nome completo"
                autoComplete="name"
                className={`${inputBaseClass} ${touched.nome && errors.nome ? inputErrorClass : inputNormalClass}`}
              />
            </div>
            {touched.nome && errors.nome && (
              <p className="mt-1 text-xs sm:text-sm text-red-500 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                {errors.nome}
              </p>
            )}
          </div>

          {/* Endereço */}
          <div>
            <label htmlFor="endereco" className="block text-xs sm:text-sm font-medium text-zinc-700 mb-1.5 sm:mb-2">
              Endereço Completo com Bairro
            </label>
            <div className="relative">
              <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-zinc-400">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <input
                type="text"
                id="endereco"
                name="endereco"
                value={formData.endereco}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Rua, número, bairro, cidade"
                autoComplete="street-address"
                className={`${inputBaseClass} ${touched.endereco && errors.endereco ? inputErrorClass : inputNormalClass}`}
              />
            </div>
            {touched.endereco && errors.endereco && (
              <p className="mt-1 text-xs sm:text-sm text-red-500 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                {errors.endereco}
              </p>
            )}
          </div>

          {/* Problema */}
          <div>
            <label htmlFor="problema" className="block text-xs sm:text-sm font-medium text-zinc-700 mb-1.5 sm:mb-2">
              O que aconteceu?
            </label>
            <div className="relative">
              <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-zinc-400">
                <Wrench className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <select
                id="problema"
                name="problema"
                value={formData.problema}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${inputBaseClass} appearance-none cursor-pointer ${touched.problema && errors.problema ? inputErrorClass : inputNormalClass} ${!formData.problema ? 'text-zinc-400' : ''}`}
              >
                <option value="">Selecione o problema...</option>
                <optgroup label="Elétrica">
                  {PROBLEM_OPTIONS.filter(o => o.group === 'Elétrica').map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </optgroup>
                <optgroup label="Fechadura Digital">
                  {PROBLEM_OPTIONS.filter(o => o.group === 'Fechadura').map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </optgroup>
                <optgroup label="Câmeras / CFTV">
                  {PROBLEM_OPTIONS.filter(o => o.group === 'Câmeras').map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </optgroup>
                <optgroup label="Portão Eletrônico">
                  {PROBLEM_OPTIONS.filter(o => o.group === 'Portão').map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </optgroup>
                <optgroup label="TI / Escritório">
                  {PROBLEM_OPTIONS.filter(o => o.group === 'TI').map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </optgroup>
                <optgroup label="Outros">
                  {PROBLEM_OPTIONS.filter(o => o.group === 'Outros').map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </optgroup>
              </select>
              <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none">
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
            {touched.problema && errors.problema && (
              <p className="mt-1 text-xs sm:text-sm text-red-500 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                {errors.problema}
              </p>
            )}
          </div>

          {/* Urgência */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-zinc-700 mb-2 sm:mb-3">
              Nível de Urgência
            </label>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {URGENCY_LEVELS.map(level => (
                <label
                  key={level.value}
                  className={`relative flex flex-col items-center p-2.5 sm:p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 min-h-[60px] sm:min-h-[72px] active:scale-[0.98] ${
                    formData.urgencia === level.value
                      ? `${level.bg} ring-2 ${level.checked}`
                      : 'bg-zinc-50 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-100/50'
                  }`}
                >
                  <input
                    type="radio"
                    name="urgencia"
                    value={level.value}
                    checked={formData.urgencia === level.value}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <span className={`text-xs sm:text-sm font-semibold text-center ${formData.urgencia === level.value ? level.color : 'text-zinc-700'}`}>
                    {level.label}
                  </span>
                  <span className={`text-[10px] sm:text-xs mt-0.5 sm:mt-1 text-center leading-tight ${formData.urgencia === level.value ? level.color : 'text-zinc-500'}`}>
                    {level.description}
                  </span>
                </label>
              ))}
            </div>
            {touched.urgencia && errors.urgencia && (
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-red-500 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                {errors.urgencia}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3.5 sm:py-4 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25 active:scale-[0.98] mt-4 sm:mt-6 min-h-[52px]"
          >
            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Solicitar Reparo Agora</span>
          </button>

          <p className="text-center text-[10px] sm:text-xs text-zinc-500 mt-3 sm:mt-4 pb-2 sm:pb-0">
            Ao clicar, você será redirecionado para o WhatsApp
          </p>
        </form>
      </div>
    </div>
  )
}
