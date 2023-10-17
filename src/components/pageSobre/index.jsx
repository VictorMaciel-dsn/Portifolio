function PageSobreComponent() {
  function openCV() {
    window.open(
      'https://drive.google.com/file/d/18AnxL1D_XSF4xwXMjAs4zq3t392-yVQK/view?usp=sharing',
    );
  }

  return (
    <div className="pagesobre-component">
      <section id="about">
        <div
          className="top-header wow animate__animated animate__fadeInUp"
          data-wow-delay="0.2s"
        >
          <h1>Sobre mim</h1>
        </div>
        <div className="row">
          <div className="col">
            <div
              className="about-info wow animate__animated animate__fadeInUp"
              data-wow-delay="0.4s"
            >
              <h3>Minha apresentação</h3>
              <p>
                Sou um profissional com um sólido conhecimento em tecnologias
                web, como; HTML5, CSS3, JavaScript, ReactJS, Sass, Bootstrap,
                TypeScript, Vite e Webpack. Tenho experiência em metodologias
                ágeis, como Scrum. Também sou habilidoso em design web. Além
                disso, tenho expertise em integração com APIs, versionamento com
                Git e utilização de ferramentas como GitLab, Git Flow, Jira e
                Jenkins. Minha formação em Ciência da Computação e familiaridade
                com Linux e PostgreSQL complementam minhas habilidades técnicas.
                Sou proativo, organizado, comunicativo e trabalho bem em equipe.
                Tenho facilidade em aprender e um espírito empreendedor. Além
                disso, estou sempre disposto a me adaptar a novos desafios e
                ambientes.
              </p>
              <div className="about-btn">
                <button className="btn" onClick={() => openCV()}>
                  Visualizar CV <i className="pi pi-file-pdf" />
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="skills-box wow animate__animated animate__fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="skills-header">
                <h3>Hard Skills</h3>
              </div>
              <div className="skills-list">
                <span>JavaScript</span>
                <span>ReactJS</span>
                <span>Sass</span>
                <span>Bootstrap</span>
                <span>TypeScript</span>
                <span>Vite</span>
                <span>Webpack</span>
                <span>Scrum</span>
                <span>Web design</span>
                <span>Ionic Framework</span>
                <span>Consumo de API's</span>
                <span>Git</span>
                <span>GitLab</span>
                <span>Git Flow</span>
                <span>Jira</span>
                <span>Jenkins</span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>Cloud Computing</span>
                <span>Linux</span>
                <span>PostgreSQL</span>
                <span>Inglês básico</span>
                <span>Suporte técnico</span>
                <span>Cursando Ciência da computação (8/8)</span>
              </div>
            </div>
            <div
              className="skills-box wow animate__animated animate__fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="skills-header">
                <h3>Soft Skills</h3>
              </div>
              <div className="skills-list">
                <span>Proatividade</span>
                <span>Organização</span>
                <span>Comunicação</span>
                <span>Trabalho em equipe</span>
                <span>Facilidade em adaptações</span>
                <span>Facilidade em aprender</span>
                <span>Espírito empreendedor</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PageSobreComponent;
