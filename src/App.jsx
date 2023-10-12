import { useEffect } from 'react';
import WOW from 'wow.js';
import NavBarComponent from './components/navBar/index';
import PagePrincipalComponent from './components/pagePrincipal/index';
import PageSobreComponent from './components/pageSobre/index';
import FooterComponent from './components/footer';

function App() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <>
      <NavBarComponent />
      <PagePrincipalComponent />
      <PageSobreComponent />
      <FooterComponent />
    </>
  );
}

export default App;
