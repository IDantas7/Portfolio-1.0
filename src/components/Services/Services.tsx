import { FaServer, FaCode, FaCubes } from 'react-icons/fa'
import type { IconType } from 'react-icons'
import './Services.css'
import { useLanguage } from '../../context/LanguageContext'

type Service = {
    Icon: IconType
    title: { 'pt-BR': string; 'en-US': string }
    description: { 'pt-BR': string; 'en-US': string }
}

const services: Service[] = [
    {
        Icon: FaServer,
        title: {
            'pt-BR': 'Backend Development',
            'en-US': 'Backend Development',
        },
        description: {
            'pt-BR': 'Desenvolvimento de soluções backend robustas e escaláveis com Java e Spring Boot, seguindo boas práticas de arquitetura de software.',
            'en-US': 'Robust and scalable backend solution development using Java and Spring Boot, following software architecture best practices.',
        },
    },
    {
        Icon: FaCode,
        title: {
            'pt-BR': 'RESTful API Design',
            'en-US': 'RESTful API Design',
        },
        description: {
            'pt-BR': 'Design e implementação de APIs REST bem estruturadas e documentadas, garantindo endpoints claros e integração eficiente entre serviços.',
            'en-US': 'Design and implementation of well-structured, documented REST APIs ensuring clear endpoints and efficient integration between services.',
        },
    },
    {
        Icon: FaCubes,
        title: {
            'pt-BR': 'System Integration',
            'en-US': 'System Integration',
        },
        description: {
            'pt-BR': 'Integração entre sistemas e serviços via APIs, conectando front-end, back-end e bancos de dados de forma eficiente e confiável.',
            'en-US': 'Integration between systems and services via APIs, efficiently and reliably connecting front-end, back-end, and databases.',
        },
    },
]

const content = {
    'pt-BR': { title: 'Meus', highlight: 'Serviços' },
    'en-US': { title: 'My', highlight: 'Services' },
}

function Services() {
    const { language } = useLanguage()
    const t = content[language]

    return (
        <section className="services" id="services">
            <h2 className="services-title">
                {t.title} <span>{t.highlight}</span>
            </h2>
            <div className="services-grid">
                {services.map((service, i) => {
                    const Icon = service.Icon
                    return (
                        <div key={i} className="service-card">
                            <div className="service-icon">
                                <Icon />
                            </div>
                            <h3 className="service-name">{service.title[language]}</h3>
                            <p className="service-description">{service.description[language]}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services
