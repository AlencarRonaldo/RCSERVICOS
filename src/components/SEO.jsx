import { useEffect } from 'react'
import { CONFIG } from '../data/config'

// Componente para gerenciar meta tags dinamicamente
export default function SEO({
  title,
  description,
  keywords = '',
  canonical = '',
  region = 'São Paulo',
  type = 'website'
}) {
  useEffect(() => {
    // Title
    document.title = title

    // Meta Description
    updateMeta('description', description)

    // Keywords
    if (keywords) {
      updateMeta('keywords', keywords)
    }

    // Open Graph
    updateMeta('og:title', title, 'property')
    updateMeta('og:description', description, 'property')
    updateMeta('og:type', type, 'property')

    // Twitter
    updateMeta('twitter:title', title)
    updateMeta('twitter:description', description)

    // Geo
    updateMeta('geo.placename', region)

    // Canonical
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]')
      if (link) {
        link.href = `${CONFIG.company.website}${canonical}`
      }
    }
  }, [title, description, keywords, canonical, region, type])

  return null
}

function updateMeta(name, content, attr = 'name') {
  let meta = document.querySelector(`meta[${attr}="${name}"]`)
  if (meta) {
    meta.content = content
  } else {
    meta = document.createElement('meta')
    meta.setAttribute(attr, name)
    meta.content = content
    document.head.appendChild(meta)
  }
}
