import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import './components/Header/Header.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <Hero />

            <main>                 

                    
                    <div id="carouselControll" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="p-4 text-center">
                                    <h2>Sobre mim</h2>
                                    <p>• Sou Iago Dantas, formado em Direito e em transição de carreira para a área de
                                        tecnologia.
                                        Atualmente
                                        curso Análise e Desenvolvimento de Sistemas pela FIAP e sou apaixonado por criar
                                        soluções
                                        tecnológicas
                                        que gerem impacto.Tenho experiência em Java e Spring Boot para construção de APIs REST,
                                        além
                                        de
                                        PostgreSQL para bancos de dados relacionais. Também domino HTML, CSS e JavaScript,
                                        integrando
                                        front
                                        e
                                        back-end em projetos web.Desenvolvo projetos pessoais em Java e participo de um projeto
                                        acadêmico
                                        voltado à criação de uma solução global para situações de catástrofes.
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="p-4 text-center">
                                    <h2>About me</h2>
                                    <p>My name is Iago Dantas. I hold a degree in Law and am currently transitioning into the
                                        tech field. I’m studying Systems Analysis and Development at FIAP and I’m passionate
                                        about creating impactful technological solutions. I have experience with Java and Spring
                                        Boot for building RESTful APIs, as well as PostgreSQL for relational databases. I’m also
                                        proficient in HTML, CSS, and JavaScript, integrating both front-end and back-end in web
                                        projects. I develop personal projects using Java and actively contribute to an academic
                                        initiative focused on creating a global solution for disaster situations.</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Anterior</span>
                        </button>
                        <button className="carousel-control-next" >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Proximo</span>
                        </button>
                    </div>
                    {/* carrosel */}
                </main>
                <section className="container portifolio" id="portifolio">
                    <h2 className="display-3 my-4 text-center">Projetos</h2>
                    <div className="row text-center">
                        <div className="col-12 col-sm-12 com-md-6 col-lg-4">
                            <div className="card">
                                <img className="card-img-top card-img" src="assets/images/projetoJava.png"
                                    alt="Projeto Tabela Fipe" />
                                <div className="card-body">
                                    <h2 className="java card-title">Java+Spring API tabela Fipe</h2>
                                    <li className="card-text my-3">Permite escolher o tipo de veículo: carro, moto ou caminhão</li>
                                        <li>Lista todas as marcas disponíveis da Tabela FIPE para o tipo selecionado</li>
                                        <li>Permite buscar modelos por nome</li>
                                        <li>Mostra os anos de fabricação disponíveis</li>
                                        <li>Retorna os detalhes da avaliação FIPE formatados ao final</li>
                                    <a href="https://github.com/IDantas7/Spring-tabelaFipe" target="_blank"
                                        className="btn btn-secondary">See more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 com-md-6 col-lg-4">
                            <div className="card">
                                <img className="card-img-top card-img" src="assets/images/AppVendas.png"
                                    alt="ReadMe projeto Java GitHub" />
                                <div className="card-body">
                                    <h2 className="java card-title">Java 17 App estoque</h2>
                                    <li className="card-text">Adicionar produtos ao estoque (nome, preço, marca)</li>
                                        <li>Listar todos os produtos disponíveis</li>
                                        <li>Remover produtos do estoque pelo nome</li>
                                        <li>Registrar vendas com retirada automática do estoque</li>
                                        <li>Listar todas as vendas realizadas</li>
                                        <li>Persistência de dados em JSON (estoque e vendas)
                                        </li>
                                    <a href="https://github.com/IDantas7/Sistema-estoque-venda" target="_blank"
                                        className="btn btn-secondary">See more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 com-md-6 col-lg-4">
                            <div className="card">
                                <img className="card-img-top card-img" src="assets/images/BuscarCep.png"
                                    alt="ReadMe projeto Java GitHub" />
                                <div className="card-body">
                                    <h2 className="java card-title">Java 23 API Buscar CEP</h2>
                                    <li className="card-text">Consulta de endereço por CEP via terminal</li>
                                        <li>Requisição HTTP com HttpClient</li>
                                        <li>Remover produtos do estoque pelo nome</li>
                                        <li>Conversão de JSON para objeto com Gson</li>
                                        <li>Salvamento dos dados em arquivo JSON</li>
                                        <li>Estrutura organizada com orientação a objetos</li>
                                    <a href="https://github.com/IDantas7/BuscarCep" target="_blank"
                                        className="btn btn-secondary">See more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 com-md-6 col-lg-4">
                            <div className="card">
                                <img className="card-img-top card-img" src="assets/images/Zentrix.jpeg"
                                    alt="ReadMe projeto Java GitHub" />
                                <div className="card-body">
                                    <h2 className="java card-title">Fintech Zentrix</h2>
                                    <p className="card-text">Projeto academico, em desenvolvimento.
                                        A ideia é criar uma plataforma de serviços financeiros que
                                        permita aos usuários gerenciar suas finanças pessoais de forma
                                        eficiente e segura. A plataforma contará com funcionalidades como
                                        controle de despesas, geração de relatórios financeiros, integração
                                        com contas bancárias, e recursos de segurança avançados.
                                    </p>
                                    <a href="https://github.com/IDantas7/Spring-tabelaFipe" target="_blank"
                                        className="btn btn-secondary">See more</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-12 col-sm-12 com-md-6 col-lg-4">
                            <div className="card">
                                <img className="card-img-top card-img" src="assets/images/GlobalSolution.png"
                                    alt="ReadMe projeto Java GitHub" />
                                <div className="card-body">
                                    <h2 className="java card-title">Global solution</h2>
                                    <p className="card-text">Plataforma de comando unificado em desastres**, com drones, IA e mapeamento logístico para resgates e envio de suprimentos.Plataforma de comando unificado em desastres**, com drones, IA e mapeamento logístico para resgates e envio de suprimentos.
                                    </p>
                                    <a href="https://www.youtube.com/watch?v=DQTbc2cWH7w&t=1s" target="_blank"
                                        className="btn btn-secondary">See more</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="" id="skills">
                    <div>""Inserir Hard/softSkills</div>
                    <p>Java, spring Boot, postgreSQL, HTML, CSS, JavaScript, Git, GitHub, IntelliJ, VSCode, Figma</p>
                    <p>Capacidade analitica, Comunicacao, Habilidade de negociação, Relacionamento interpessoal, Trabalho em equipe, Proatividade, Pensamento critico, Resolucao de problemas</p>
                </section>

                <section className="social" id="contatos">
                    <div className="rede-social">Minhas redes</div>
                    <a href="https://github.com/IDantas7" target="_blank"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/iago-dantas/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="mailto:iagodantas_p@outlook.com" target="_blank"><i className="fa-solid fa-envelope"></i></a>
                    <a href="https://www.instagram.com/iaagodantas/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                </section>


        </>
  )
}

export default App
