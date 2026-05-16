import { FaJava, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiPython, SiFastapi } from "react-icons/si";
import "./Hero.css";
import profileImg from "../../assets/images/imagemPerfil.jpg";

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-left">
                <h2 className="hero-greeting">Hi, I'm</h2>

                <h1 className="hero-name">
                    Iago <span>Dantas</span>
                </h1>

                <h3 className="hero-role">
                    I build scalable backend solutions and APIs using Java, Spring Boot,
                    Python, FastAPI and PostgreSQL.
                </h3>

                <p className="hero-description">
                    Backend developer focused on REST APIs, system integrations and
                    software engineering best practices. Passionate about building robust
                    solutions and solving real-world problems through code.
                </p>

                <div className="hero-buttons">
                    <a href="#projects" className="hero-btn primary-btn">
                        View Projects
                    </a>
                </div>
            </div>

            <div className="hero-right">
                <div className="hero-image-wrapper">
                    <div className="hero-image-circle">
                        <img src={profileImg} alt="Iago Dantas" className="hero-image" />
                    </div>

                    <div className="stack-icon icon-java">
                        <FaJava />
                    </div>

                    <div className="stack-icon icon-spring">
                        <SiSpringboot />
                    </div>

                    <div className="stack-icon icon-postgres">
                        <SiPostgresql />
                    </div>

                    <div className="stack-icon icon-python">
                        <SiPython />
                    </div>

                    <div className="stack-icon icon-fastapi">
                        <SiFastapi />
                    </div>

                    <div className="stack-icon icon-react">
                        <FaReact />
                    </div>

                    <div className="stack-icon icon-node">
                        <FaNodeJs />
                    </div>

                    <div className="stack-icon icon-git">
                        <FaGitAlt />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero