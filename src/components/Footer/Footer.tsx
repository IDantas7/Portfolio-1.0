import './Footer.css'
import { useLanguage } from '../../context/LanguageContext'

const content = {
    'pt-BR': { built: 'Feito com React + Vite' },
    'en-US': { built: 'Built with React + Vite' },
}

function Footer() {
    const { language } = useLanguage()
    const t = content[language]

    return (
        <footer className="footer">
            <span className="footer-copy">© 2025 Iago Dantas</span>
            <span className="footer-sep">·</span>
            <span className="footer-built">{t.built}</span>
        </footer>
    )
}

export default Footer
