import { useLanguage } from '../../context/LanguageContext'
import './LanguageSwitcher.css'

const LABELS = {
    'pt-BR': { flag: '🇧🇷', code: 'PT' },
    'en-US': { flag: '🇺🇸', code: 'EN' },
}

function LanguageSwitcher() {
    const { language, toggleLanguage } = useLanguage()
    const current = LABELS[language]
    const next = language === 'pt-BR' ? LABELS['en-US'] : LABELS['pt-BR']

    return (
        <button
            className="lang-switcher"
            onClick={toggleLanguage}
            title={`Switch to ${next.code}`}
            aria-label={`Current language: ${language}. Click to switch to ${language === 'pt-BR' ? 'English' : 'Português'}`}
        >
            <span className="lang-flag">{current.flag}</span>
            <span className="lang-code">{current.code}</span>
        </button>
    )
}

export default LanguageSwitcher
