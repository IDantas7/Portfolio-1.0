import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './Header.css'
import { Button } from "react-bootstrap";

function Header() {
    function handleHireClick() {
        const resumeLink = document.createElement("a");

        resumeLink.href = "/[PT] Iago_Dantas_Pereira_Esteves.pdf"
        resumeLink.download = "curriculo-iago-dantas.pdf";
        document.body.appendChild(resumeLink);
        resumeLink.click();
        document.body.removeChild(resumeLink);

        window.open(
            "https://wa.me/5511976607010?text=Ol%C3%A1%2C%20Iago!%20Vi%20seu%20portf%C3%B3lio%20e%20gostei%20do%20seu%20perfil.%20Gostaria%20de%20conversar%20sobre%20uma%20oportunidade%2Fprojeto.",
            "_blank")
    }
    return (

        <header className="header">
            <a href="home" className="logo">
                Software <span>Engineer</span>
            </a>

            <Navbar className="navbar">
                <Nav.Link href="#home">Home | </Nav.Link>
                <Nav.Link href="#about">About | </Nav.Link>
                <Nav.Link href="#services">Services | </Nav.Link>
                <Nav.Link href="#projects">Projects | </Nav.Link>
                <Nav.Link href="#contact">Contact </Nav.Link>

            </Navbar>
            <Button href="#contact" className="hire-button" title="Hire Me" onClick={handleHireClick}>
                <span className="hire-icon">✦</span>
                Hire Me</Button>


        </header>

    )
}

export default Header