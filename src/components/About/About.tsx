import './About.css'
import { useLanguage } from '../../context/LanguageContext'

const content = {
    'pt-BR': {
        title: 'Sobre',
        highlight: 'Mim',
        description:
            'Sou Iago Dantas, formado em Direito e em transição de carreira para a área de tecnologia. Atualmente curso Análise e Desenvolvimento de Sistemas pela FIAP e sou apaixonado por criar soluções tecnológicas que gerem impacto. Tenho experiência em Java e Spring Boot para construção de APIs REST, além de PostgreSQL para bancos de dados relacionais. Também domino HTML, CSS e JavaScript, integrando front e back-end em projetos web. Desenvolvo projetos pessoais em Java e participo de um projeto acadêmico voltado à criação de uma solução global para situações de catástrofes.',
        statsLabels: ['Projetos', 'Instituição', 'Curso'],
        btn: 'Ver Projetos',
    },
    'en-US': {
        title: 'About',
        highlight: 'Me',
        description:
            "My name is Iago Dantas. I hold a degree in Law and am currently transitioning into the tech field. I'm studying Systems Analysis and Development at FIAP and I'm passionate about creating impactful technological solutions. I have experience with Java and Spring Boot for building RESTful APIs, as well as PostgreSQL for relational databases. I'm also proficient in HTML, CSS, and JavaScript, integrating both front-end and back-end in web projects. I develop personal projects using Java and actively contribute to an academic initiative focused on creating a global solution for disaster situations.",
        statsLabels: ['Projects', 'Institution', 'Degree'],
        btn: 'View Projects',
    },
}

const stats = [
    { value: '5+', labelIndex: 0 },
    { value: 'FIAP', labelIndex: 1 },
    { value: 'ADS', labelIndex: 2 },
]

function About() {
    const { language } = useLanguage()
    const t = content[language]

    return (
        <section className="about" id="about">
            <div className="about-inner">
                <div className="about-text">
                    <h2 className="about-title">
                        {t.title} <span>{t.highlight}</span>
                    </h2>
                    <p className="about-description">{t.description}</p>
                    <a href="#projects" className="about-btn">
                        {t.btn}
                    </a>
                </div>
                <div className="about-stats">
                    {stats.map((stat, i) => (
                        <div key={i} className="about-stat-card">
                            <span className="stat-value">{stat.value}</span>
                            <span className="stat-label">{t.statsLabels[stat.labelIndex]}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About
