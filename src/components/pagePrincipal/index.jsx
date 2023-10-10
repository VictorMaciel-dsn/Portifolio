import imgProfile from '../../assets/img/profile.png';
import TypingEffect from '../efeitoDigitacao';

function PagePrincipalComponent() {
  return (
    <div className="pageprincipal-component">
      <section className="featured-box" id="home">
        <div className="featured-text">
          <div className="featured-text-card">
            <span>Victor Maciel</span>
          </div>
          <div className="featured-name">
            <p>
              Eu sou <TypingEffect />
            </p>
          </div>
          <div className="featured-text-info">
            <p>
              Desenvolvedor front-end experiente e apaixonado por criar sites
              visualmente impressionantes e fáceis de usar.
            </p>
          </div>
          <div className="featured-text-btn">
            <button className="btn blue-btn">Contrate-me</button>
            <button className="btn">
              Visualizar CV <i className="pi pi-file-pdf"></i>
            </button>
          </div>
          <div className="social_icons">
            <div className="icon">
              <i className="pi pi-instagram"></i>
            </div>
            <div className="icon">
              <i className="pi pi-linkedin"></i>
            </div>
            <div className="icon">
              <i className="pi pi-whatsapp"></i>
            </div>
            <div className="icon">
              <i className="pi pi-github"></i>
            </div>
          </div>
        </div>
        <div className="featured-image">
          <div className="image">
            <img src={imgProfile} alt="avatar" />
          </div>
        </div>
        <div className="scroll-icon-box">
          <a href="#about" className="scroll-btn">
            <i className="pi pi-angle-double-down"></i>
            <p>Rolar para baixo</p>
          </a>
        </div>
      </section>
    </div>
  );
}

export default PagePrincipalComponent;
