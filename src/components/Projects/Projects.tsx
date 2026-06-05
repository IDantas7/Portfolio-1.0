import { FaGithub, FaYoutube, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'
import { useLanguage } from '../../context/LanguageContext'

type Project = {
    image: string
    title: { 'pt-BR': string; 'en-US': string }
    description: { 'pt-BR': string; 'en-US': string }
    tags: string[]
    link: string
    linkType: 'github' | 'youtube'
}

const projects: Project[] = [
    {
        image: 'assets/images/projetoJava.png',
        title: {
            'pt-BR': 'Java + Spring — API Tabela FIPE',
            'en-US': 'Java + Spring — FIPE Price API',
        },
        description: {
            'pt-BR': 'API que consome a Tabela FIPE para consulta de preços de veículos. Permite buscar carros, motos e caminhões por marca e modelo, retornando os valores e anos de fabricação disponíveis.',
            'en-US': 'API that consumes the FIPE table to query vehicle prices. Supports cars, motorcycles, and trucks lookup by brand and model, returning pricing and available manufacture years.',
        },
        tags: ['Java', 'Spring Boot', 'API REST'],
        link: 'https://github.com/IDantas7/Spring-tabelaFipe',
        linkType: 'github',
    },
    {
        image: 'assets/images/AppVendas.png',
        title: {
            'pt-BR': 'Java 17 — App de Estoque',
            'en-US': 'Java 17 — Inventory App',
        },
        description: {
            'pt-BR': 'Aplicação de gerenciamento de estoque e vendas. Permite adicionar, listar e remover produtos, registrar vendas com retirada automática do estoque e persistência de dados em JSON.',
            'en-US': 'Inventory and sales management application. Supports adding, listing, and removing products, recording sales with automatic stock deduction, and JSON file data persistence.',
        },
        tags: ['Java 17', 'JSON', 'OOP'],
        link: 'https://github.com/IDantas7/Sistema-estoque-venda',
        linkType: 'github',
    },
    {
        image: 'assets/images/BuscarCep.png',
        title: {
            'pt-BR': 'Java 23 — Busca de CEP',
            'en-US': 'Java 23 — Postal Code Lookup',
        },
        description: {
            'pt-BR': 'Ferramenta de linha de comando para consulta de endereços por CEP. Usa Java 23, HttpClient e Gson para fazer requisições HTTP, converter JSON e salvar os resultados em arquivo.',
            'en-US': 'Command-line tool for postal code address lookup. Uses Java 23, HttpClient, and Gson to perform HTTP requests, parse JSON responses, and save results to a file.',
        },
        tags: ['Java 23', 'HttpClient', 'Gson'],
        link: 'https://github.com/IDantas7/BuscarCep',
        linkType: 'github',
    },
    {
        image: 'assets/images/Zentrix.jpeg',
        title: {
            'pt-BR': 'Fintech Zentrix',
            'en-US': 'Fintech Zentrix',
        },
        description: {
            'pt-BR': 'Projeto acadêmico em desenvolvimento. Plataforma de serviços financeiros para gerenciamento de finanças pessoais com controle de despesas, relatórios financeiros e recursos de segurança avançados.',
            'en-US': 'Academic project in development. Financial services platform for personal finance management featuring expense tracking, financial reports, and advanced security features.',
        },
        tags: ['Java', 'Spring Boot', 'Academic'],
        link: 'https://github.com/IDantas7/Spring-tabelaFipe',
        linkType: 'github',
    },
    {
        image: 'assets/images/GlobalSolution.png',
        title: {
            'pt-BR': 'Global Solution',
            'en-US': 'Global Solution',
        },
        description: {
            'pt-BR': 'Plataforma de comando unificado para situações de desastre com drones, IA e mapeamento logístico para operações de resgate e envio de suprimentos.',
            'en-US': 'Unified command platform for disaster situations featuring drones, AI, and logistics mapping for rescue operations and supply delivery.',
        },
        tags: ['Python', 'AI', 'Academic'],
        link: 'https://www.youtube.com/watch?v=DQTbc2cWH7w&t=1s',
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
