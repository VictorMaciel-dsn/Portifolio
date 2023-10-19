import { useEffect, useState } from 'react';

function NavBarComponent() {
  const [iconMenu, setIconMenu] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isNavigating, setIsNavigating] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isNavigating) {
        const aboutSection = document.getElementById('about');
        const contactSection = document.getElementById('contact');
        const scrollTop = window.scrollY;

        if (
          aboutSection &&
          contactSection &&
          scrollTop >= aboutSection.offsetTop - 200 &&
          scrollTop < contactSection.offsetTop - 200
        ) {
          setActiveLink('about');
        } else if (
          contactSection &&
          scrollTop >= contactSection.offsetTop - 200
        ) {
          setActiveLink('contact');
        } else {
          setActiveLink('home');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeLink, isNavigating]);

  function myMenu() {
    setIsMenuOpen(!isMenuOpen);
    const menuBtn = document.getElementById('myNavMenu');

    if (menuBtn.className === 'nav-menu ') {
      menuBtn.className += ' responsive';
      setIconMenu(true);
    } else {
      menuBtn.className = 'nav-menu';
      setIconMenu(false);
    }
  }

  function openCV() {
    window.open(
      'https://drive.google.com/file/d/18AnxL1D_XSF4xwXMjAs4zq3t392-yVQK/view?usp=sharing',
    );
  }

  function handleNavLinkClick(section) {
    setIsNavigating(true);
    setActiveLink(section);

    setTimeout(() => {
      setIsMenuOpen(false);
      setIconMenu(false);
      setIsNavigating(false);
    }, 500);
  }

  return (
    <div className="navbar-component">
      <nav id="header">
        <div className="nav-logo wow animate__animated animate__bounceInLeft">
          <p className="nav-name">Victor</p>
          <span>.</span>
        </div>
        <div
          className={`nav-menu ${isMenuOpen ? 'responsive' : ''}`}
          id="myNavMenu"
        >
          <ul className="nav_menu_list wow animate__animated animate__fadeIn">
            <li className="nav_list">
              <a
                href="#home"
                className={`nav-link ${
                  activeLink === 'home' ? 'active-link' : ''
                }`}
                onClick={() => handleNavLinkClick('home')}
              >
                Início
              </a>
              <div className="circle"></div>
            </li>
            <li className="nav_list">
              <a
                href="#about"
                className={`nav-link ${
                  activeLink === 'about' ? 'active-link' : ''
                }`}
                onClick={() => handleNavLinkClick('about')}
              >
                Sobre
              </a>
              <div className="circle"></div>
            </li>
            <li className="nav_list">
              <a
                href="#contact"
                className={`nav-link ${
                  activeLink === 'contact' ? 'active-link' : ''
                }`}
                onClick={() => handleNavLinkClick('contact')}
              >
                Contato
              </a>
              <div className="circle"></div>
            </li>
          </ul>
        </div>
        <div className="nav-button wow animate__animated animate__bounceInRight">
          <button className="btn" onClick={() => openCV()}>
            Visualizar CV <i className="pi pi-file-pdf"></i>
          </button>
        </div>
        <div className="nav-menu-btn wow animate__animated animate__bounceInRight">
          {iconMenu ? (
            <i className="pi pi-times" onClick={() => myMenu()}></i>
          ) : (
            <i className="pi pi-bars" onClick={() => myMenu()}></i>
          )}
        </div>
      </nav>
    </div>
  );
}

export default NavBarComponent;
