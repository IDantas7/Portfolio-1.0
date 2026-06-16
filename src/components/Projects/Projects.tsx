import { FaGithub, FaYoutube, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'
import { useLanguage } from '../../context/LanguageContext'
import wallet from "../../assets/images/wallet-core-api.png"
import greenComply from "../../assets/images/GreenComply.png"
import terraSync from "../../assets/images/terraSyngImg.png"

type Project = {
    image: string
    title: { 'pt-BR': string; 'en-US': string }
    description: { 'pt-BR': string; 'en-US': string }
    tags: string[]
    link: string
    linkType: 'github' | 'youtube' | 'figma'
}

const projects: Project[] = [
    {
        image: wallet,
        title: {
            'pt-BR': 'Wallet Core Api - Java + Spring',
            'en-US': 'Wallet Core Api - Java + Spring',
        },
        description: {
            'pt-BR': 'API backend desenvolvida com Java e Spring Boot para gerenciamento de carteiras e transações financeiras. Implementa arquitetura REST, persistência de dados com JPA/Hibernate e regras de negócio. Projeto criado para aplicar boas práticas de desenvolvimento backend e engenharia de software.',
            'en-US': 'Backend API developed with Java and Spring Boot for managing financial wallets and transactions. It implements a RESTful architecture, data persistence with JPA/Hibernate, and business rules. The project was built to apply backend development and software engineering best practices.',
        },
        tags: ['Java', 'Spring Boot', 'ApiRest', 'Docker', 'CI/CD'],
        link: 'https://github.com/IDantas7/wallet-core-api',
        linkType: 'github',
    },
    {
        image: greenComply,
        title: {
            'pt-BR': 'GreenComply - Java + Spring boot',
            'en-US': 'GreenComply - Java + Spring boot',
        },
        description: {
            'pt-BR': 'API REST desenvolvida com Java e Spring Boot para gerenciamento de conformidade ambiental, utilizando arquitetura em camadas, autenticação JWT, Oracle Database e Docker, seguindo boas práticas de desenvolvimento backend e APIs escaláveis',
            'en-US': 'REST API developed with Java and Spring Boot for environmental compliance management, leveraging a layered architecture, JWT authentication, Oracle Database, and Docker while following backend development best practices to build secure, maintainable, and scalable APIs.',
        },
        tags: ['Java', 'JWT', 'Docker'],
        link: 'https://github.com/IDantas7/GreenComply',
        linkType: 'github',
    },
    {
        image: terraSync,
        title: {
            'pt-BR': 'Global Solution - Terra Sync',
            'en-US': 'Global Solution - Terra Sync',
        },
        description: {
            'pt-BR': 'Solução desenvolvida para monitoramento ambiental e agrícola, utilizando dados de satélite, inteligência artificial e análises geoespaciais para apoiar a tomada de decisões, prevenção de riscos e gestão sustentável de áreas urbanas e rurais.',
            'en-US': 'Solution designed for environmental and agricultural monitoring, leveraging satellite data, artificial intelligence, and geospatial analysis to support decision-making, risk prevention, and sustainable management of urban and rural areas.',
        },
        tags: ['Java 23', 'HttpClient', 'Gson'],
        link: 'https://www.youtube.com/watch?v=JnlJLpRTrIk',
        linkType: 'youtube',
    },
]

const content = {
    'pt-BR': {
        title: 'Meus',
        highlight: 'Projetos',
        btnGithub: 'Ver no GitHub',
        btnYoutube: 'Ver no YouTube',
    },
    'en-US': {
        title: 'My',
        highlight: 'Projects',
        btnGithub: 'View on GitHub',
        btnYoutube: 'View on YouTube',
    },
}

function Projects() {
    const { language } = useLanguage()
    const t = content[language]

    return (
        <section className="projects" id="projects">
            <h2 className="projects-title">
                {t.title} <span>{t.highlight}</span>
            </h2>
            <div className="projects-grid">
                {projects.map((project, i) => (
                    <div key={i} className="project-card">
                        <div className="project-image-wrapper">
                            <img
                                src={project.image}
                                alt={project.title[language]}
                                className="project-image"
                            />
                        </div>
                        <div className="project-body">
                            <div className="project-tags">
                                {project.tags.map((tag, j) => (
                                    <span key={j} className="project-tag">{tag}</span>
                                ))}
                            </div>
                            <h3 className="project-name">{project.title[language]}</h3>
                            <p className="project-description">{project.description[language]}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                {project.linkType === 'github' ? (
                                    <><FaGithub /> {t.btnGithub}</>
                                ) : (
                                    <><FaYoutube /> {t.btnYoutube}</>
                                )}
                                <FaExternalLinkAlt className="link-arrow" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
