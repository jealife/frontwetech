import { useState, useEffect } from 'react';

export function Nav({ currentPath }: { currentPath: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
              src="/Logo.png" 
              alt="DB Tech Innovation" 
              className="topBrand__logo"
              style={{ height: '64px', width: 'auto', objectFit: 'contain' }}
            />
          </a>

          <nav className={`globalNav__links ${isOpen ? 'is-open' : ''}`}>
            <a href="/" className={`globalNav__link ${currentPath === '/' ? 'is-active' : ''}`} onClick={() => setIsOpen(false)}>Accueil</a>
            <a href="/catalogue" className={`globalNav__link ${currentPath === '/catalogue' ? 'is-active' : ''}`} onClick={() => setIsOpen(false)}>Catalogue</a>
            <a href="/solutions" className={`globalNav__link ${currentPath === '/solutions' ? 'is-active' : ''}`} onClick={() => setIsOpen(false)}>Solutions</a>
            <a href="/contact" className={`globalNav__link ${currentPath === '/contact' ? 'is-active' : ''}`} onClick={() => setIsOpen(false)}>Contact</a>
            
            <div className="mobile-only" style={{ marginTop: '20px' }}>
              <a href="/contact" className="btn btn--primary" style={{ width: '100%' }} onClick={() => setIsOpen(false)}>
                Nous contacter
              </a>
            </div>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div className="globalNav__actions">
              <a href="/contact" className="btn btn--primary">
                Nous contacter
              </a>
            </div>

            <div className={`menu-toggle ${isOpen ? 'is-open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
