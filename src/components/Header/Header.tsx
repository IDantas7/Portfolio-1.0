import { useState, useEffect } from "react";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import "./Header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleHireClick() {
        const resumeLink = document.createElement("a");
        resumeLink.href = "/[PT] Iago_Dantas_Pereira_Esteves.pdf";
        resumeLink.download = "curriculo-iago-dantas.pdf";
        document.body.appendChild(resumeLink);
        resumeLink.click();
        document.body.removeChild(resumeLink);

        window.open(
            "https://wa.me/5511976607010?text=Ol%C3%A1%2C%20Iago!%20Vi%20seu%20portf%C3%B3lio%20e%20gostei%20do%20seu%20perfil.%20Gostaria%20de%20conversar%20sobre%20uma%20oportunidade%2Fprojeto.",
            "_blank"
        );
    }

    function closeMenu() {
        setMenuOpen(false);
    }

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth > 768) setMenuOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <header className="header">
            <a href="#home" className="logo">
                Software <span>Engineer</span>
            </a>

            <nav className="header-nav">
                <a href="#home" className="nav-link">Home</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#services" className="nav-link">Services</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#contact" className="nav-link">Contact</a>
            </nav>

            <div className="header-actions">
                <LanguageSwitcher />
                <a href="#contact" className="hire-button" onClick={handleHireClick}>
                    <span className="hire-icon">✦</span>
                    Hire Me
                </a>
            </div>

            <button
                className={`hamburger${menuOpen ? " open" : ""}`}
                onClick={() => setMenuOpen((o) => !o)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
            >
                <span />
                <span />
                <span />
            </button>

            {menuOpen && (
                <div className="mobile-overlay" onClick={closeMenu}>
                    <nav className="mobile-menu" onClick={(e) => e.stopPropagation()}>
                        <a href="#home" className="mobile-link" onClick={closeMenu}>Home</a>
                        <a href="#about" className="mobile-link" onClick={closeMenu}>About</a>
                        <a href="#services" className="mobile-link" onClick={closeMenu}>Services</a>
                        <a href="#projects" className="mobile-link" onClick={closeMenu}>Projects</a>
                        <a href="#contact" className="mobile-link" onClick={closeMenu}>Contact</a>
                        <div className="mobile-footer-actions">
                            <LanguageSwitcher />
                            <a
                                href="#contact"
                                className="hire-button"
                                onClick={() => { closeMenu(); handleHireClick(); }}
                            >
                                <span className="hire-icon">✦</span>
                                Hire Me
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;
