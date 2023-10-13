import { useState } from 'react';

function NavBarComponent() {
  const [iconMenu, setIconMenu] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  function myMenu() {
    const menuBtn = document.getElementById('myNavMenu');

    if (menuBtn.className === 'nav-menu') {
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
    setActiveLink(section);
  }

  return (
    <div className="navbar-component">
      <nav id="header">
        <div className="nav-logo">
          <p className="nav-name">Victor</p>
          <span>.</span>
        </div>
        <div className="nav-menu" id="myNavMenu">
          <ul className="nav_menu_list">
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
        <div className="nav-button">
          <button className="btn" onClick={() => openCV()}>
            Visualizar CV <i className="pi pi-file-pdf"></i>
          </button>
        </div>
        <div className="nav-menu-btn">
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
