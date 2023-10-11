import imgProfile from '../../assets/img/profile.png';
import TypingEffect from '../efeitoDigitacao';

function PagePrincipalComponent() {
  
  function isOpen(type) {
    switch (type) {
      case 'contact':
        window.open('https://wa.link/js73df');
        break;
      case 'openCV':
        window.open(
          'https://drive.google.com/file/d/18AnxL1D_XSF4xwXMjAs4zq3t392-yVQK/view?usp=sharing',
        );
        break;
      case 'openInstagram':
        window.open(
          'https://instagram.com/oliveira.victor1?igshid=YTQwZjQ0NmI0OA==',
        );
        break;
      case 'openLinkedin':
        window.open('https://www.linkedin.com/in/victor-maciel-5a90991a3/');
        break;
      case 'openWhatsapp':
        window.open('https://wa.link/js73df');
        break;
      case 'openGithub':
        window.open('https://github.com/VictorMaciel-dsn');
        break;

      default:
        break;
    }
  }

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
            <button className="btn blue-btn" onClick={() => isOpen('contact')}>
              Contrate-me
            </button>
            <button className="btn" onClick={() => isOpen('openCV')}>
              Visualizar CV <i className="pi pi-file-pdf"></i>
            </button>
          </div>
          <div className="social_icons">
            <div className="icon" onClick={() => isOpen('openInstagram')}>
              <i className="pi pi-instagram"></i>
            </div>
            <div className="icon" onClick={() => isOpen('openLinkedin')}>
              <i className="pi pi-linkedin"></i>
            </div>
            <div className="icon" onClick={() => isOpen('openWhatsapp')}>
              <i className="pi pi-whatsapp"></i>
            </div>
            <div className="icon" onClick={() => isOpen('openGithub')}>
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
