import { useEffect } from 'react';
import WOW from 'wow.js';
import NavBarComponent from './components/navBar/index';
import PagePrincipalComponent from './components/pagePrincipal/index';

function App() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <>
      <NavBarComponent />
      <PagePrincipalComponent />
    </>
  );
}

export default App;
