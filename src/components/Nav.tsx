import { useState, useEffect } from 'react';

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`globalNav ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="shell">
        <div className="globalNav__inner">
          <a href="/" className="topBrand">
            <img 
              src="/images/logo.png" 
              alt="DB Tech Innovation" 
              className="topBrand__logo"
              style={{ height: '64px', width: 'auto', objectFit: 'contain' }}
            />
          </a>

          <nav className="globalNav__links">
            <a href="/" className="nav-link">Accueil</a>
            <a href="/catalogue" className="nav-link">Catalogue</a>
            <a href="/solutions" className="nav-link">Solutions</a>
          </nav>

          <div className="globalNav__actions">
            <a href="mailto:services@dbtech-innovation.com" className="btn btn--primary">
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
