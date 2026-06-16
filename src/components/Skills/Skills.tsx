import {
    FaJava, FaReact, FaGitAlt, FaGithub, FaDocker, FaAws,
} from 'react-icons/fa'
import {
    SiSpringboot, SiPostgresql, SiMongodb,
} from 'react-icons/si'
import type { IconType } from 'react-icons'
import './Skills.css'
import { useLanguage } from '../../context/LanguageContext'

type HardSkill = {
    Icon: IconType
    name: string
    color: string
}

const hardSkills: HardSkill[] = [
    { Icon: FaJava, name: 'Java', color: '#f89820' },
    { Icon: SiSpringboot, name: 'Spring Boot', color: '#6db33f' },
    { Icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
    { Icon: FaReact, name: 'ReactJS', color: '#61dafb' },
    { Icon: SiMongodb, name: 'MongoDB', color: '#47a248' },
    { Icon: FaGitAlt, name: 'Git', color: '#f05032' },
    { Icon: FaGithub, name: 'GitHub', color: '#ffffff' },
    { Icon: FaDocker, name: 'Docker', color: '#2496ed' },
    { Icon: FaAws, name: 'Cloud', color: '#ff9900' },
]

const softSkills = {
    'pt-BR': [
        'Capacidade analítica',
        'Comunicação',
        'Habilidade de negociação',
        'Relacionamento interpessoal',
        'Trabalho em equipe',
        'Proatividade',
        'Pensamento crítico',
        'Resolução de problemas',
    ],
    'en-US': [
        'Analytical thinking',
        'Communication',
        'Negotiation skills',
        'Interpersonal skills',
        'Teamwork',
        'Proactivity',
        'Critical thinking',
        'Problem-solving',
    ],
}

const content = {
    'pt-BR': {
        title: 'Minhas',
        highlight: 'Habilidades',
        hardTitle: 'Técnicas',
        softTitle: 'Comportamentais',
    },
    'en-US': {
        title: 'My',
        highlight: 'Skills',
        hardTitle: 'Technical',
        softTitle: 'Soft Skills',
    },
}

function Skills() {
    const { language } = useLanguage()
    const t = content[language]

    return (
        <section className="skills" id="skills">
            <h2 className="skills-title">
                {t.title} <span>{t.highlight}</span>
            </h2>

            <div className="skills-inner">
                <div className="skills-block">
                    <h3 className="skills-subtitle">{t.hardTitle}</h3>
                    <div className="hard-skills-grid">
                        {hardSkills.map((skill, i) => {
                            const Icon = skill.Icon
                            return (
                                <div key={i} className="skill-badge">
                                    <Icon style={{ color: skill.color }} />
                                    <span>{skill.name}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="skills-block">
                    <h3 className="skills-subtitle">{t.softTitle}</h3>
                    <div className="soft-skills-list">
                        {softSkills[language].map((skill, i) => (
                            <span key={i} className="soft-badge">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
