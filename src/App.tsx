import { useState, useEffect } from 'react';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Catalogue } from './pages/Catalogue';
import { Solutions } from './pages/Solutions';
import { Contact } from './pages/Contact';
import { attachReveal } from './ui/reveal';

import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname);
      window.scrollTo(0, 0);
      // Re-attach reveal on navigation
      setTimeout(attachReveal, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    // Custom link handling
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.href.startsWith(window.location.origin)) {
        const url = new URL(anchor.href);
        if (url.pathname !== window.location.pathname) {
          e.preventDefault();
          window.history.pushState({}, '', url.pathname);
          handleLocationChange();
        }
      }
    };
    
    document.addEventListener('click', handleClick);
    
    // Initial reveal attach
    attachReveal();
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  let Page = Home;
  if (path === '/catalogue') Page = Catalogue;
  if (path === '/solutions') Page = Solutions;
  if (path === '/contact') Page = Contact;

  return (
    <div className="app-root">
      <Nav currentPath={path} />
      <main>
        <Page />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
