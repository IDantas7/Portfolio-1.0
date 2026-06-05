import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa'
import type { IconType } from 'react-icons'
import './Contact.css'
import { useLanguage } from '../../context/LanguageContext'

type SocialLink = {
    Icon: IconType
    label: string
    href: string
    color: string
}

const socialLinks: SocialLink[] = [
    {
        Icon: FaGithub,
        label: 'GitHub',
        href: 'https://github.com/IDantas7',
        color: '#ffffff',
    },
    {
        Icon: FaLinkedin,
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/iago-dantas/',
        color: '#0a66c2',
    },
    {
        Icon: FaEnvelope,
        label: 'E-mail',
        href: 'mailto:iagodantas_p@outlook.com',
        color: '#38bdf8',
    },
    {
        Icon: FaInstagram,
        label: 'Instagram',
        href: 'https://www.instagram.com/iaagodantas/',
        color: '#e1306c',
    },
]

const content = {
    'pt-BR': {
        title: 'Entre em',
        highlight: 'Contato',
        subtitle: 'Aberto a oportunidades, colaborações e novos projetos. Me encontre nas redes:',
    },
    'en-US': {
        title: 'Get in',
        highlight: 'Touch',
        subtitle: "Open to opportunities, collaborations and new projects. Find me on:",
    },
}

function Contact() {
    const { language } = useLanguage()
    const t = content[language]

    return (
        <section className="contact" id="contact">
            <h2 className="contact-title">
                {t.title} <span>{t.highlight}</span>
            </h2>
            <p className="contact-subtitle">{t.subtitle}</p>
            <div className="contact-grid">
                {socialLinks.map((social, i) => {
                    const Icon = social.Icon
                    return (
                        <a
                            key={i}
                            href={social.href}
                            target={social.href.startsWith('mailto') ? undefined : '_blank'}
                            rel="noopener noreferrer"
                            className="contact-card"
                        >
                            <div className="contact-icon" style={{ color: social.color }}>
                                <Icon />
                            </div>
                            <span className="contact-label">{social.label}</span>
                        </a>
                    )
                })}
            </div>
        </section>
    )
}

export default Contact
