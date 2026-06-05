import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

type Language = 'pt-BR' | 'en-US'

interface LanguageContextType {
    language: Language
    toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('pt-BR')

    function toggleLanguage() {
        setLanguage(prev => prev === 'pt-BR' ? 'en-US' : 'pt-BR')
    }

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const ctx = useContext(LanguageContext)
    if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
    return ctx
}
