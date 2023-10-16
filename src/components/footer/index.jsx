import { useEffect, useState } from 'react';

function FooterComponent() {
  const [activeLink, setActiveLink] = useState('contact');

  useEffect(() => {
    function isContactSectionNearBottom() {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        return rect.bottom <= window.innerHeight;
      }
      return false;
    }

    function handleScroll() {
      if (isContactSectionNearBottom()) {
        setActiveLink('contact');
      } else {
        setActiveLink('home');
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function isOpen(type) {
    switch (type) {
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

  function handleFooterLinkClick(section) {
    setActiveLink(section);
  }

  return (
    <div className="footer-component">
      <footer>
        <div
          className="top-footer wow animate__animated animate__fadeIn"
          data-wow-delay="0.4s"
        >
          <p>Victor</p>
          <span>.</span>
        </div>
        <div className="middle-footer">
          <ul
            className="footer-menu wow animate__animated animate__fadeIn"
            data-wow-delay="0.5s"
          >
            <li className="footer_menu_list">
              <a
                href="#home"
                className={`footer-link ${
                  activeLink === 'home' ? 'active-link' : ''
                }`}
                onClick={() => handleFooterLinkClick('home')}
              >
                Início
              </a>
            </li>
            <li className="footer_menu_list">
              <a
                href="#about"
                className={`footer-link ${
                  activeLink === 'about' ? 'active-link' : ''
                }`}
                onClick={() => handleFooterLinkClick('about')}
              >
                Sobre
              </a>
            </li>
            <li className="footer_menu_list">
              <a
                href="#contact"
                className={`footer-link ${
                  activeLink === 'contact' ? 'active-link' : ''
                }`}
                onClick={() => handleFooterLinkClick('contact')}
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
        <div
          className="footer-social-icons wow animate__animated animate__fadeIn"
          data-wow-delay="0.6s"
        >
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
        <div
          className="bottom-footer wow animate__animated animate__fadeIn"
          data-wow-delay="0.7s"
        >
          <p>
            Copyright &copy; <span>Victor Maciel</span> - Todos os direitos
            reservados
          </p>
        </div>
      </footer>
    </div>
  );
}

export default FooterComponent;
