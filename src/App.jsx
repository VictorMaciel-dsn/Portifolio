import { useEffect } from 'react';
import WOW from 'wow.js';
import NavBarComponent from './components/navBar/index';
import PagePrincipalComponent from './components/pagePrincipal/index';
import PageSobreComponent from './components/pageSobre/index';
import FooterComponent from './components/footer';
import PageContatoComponent from './components/pageContato';

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
      <PageContatoComponent />
      <FooterComponent />
    </>
  );
}

export default App;
