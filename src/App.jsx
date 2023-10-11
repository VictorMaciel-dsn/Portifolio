import { useEffect } from 'react';
import WOW from 'wow.js';
import NavBarComponent from './components/navBar/index';
import PagePrincipalComponent from './components/pagePrincipal/index';
import PageSobreComponent from './components/pageSobre/index';

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
    </>
  );
}

export default App;
