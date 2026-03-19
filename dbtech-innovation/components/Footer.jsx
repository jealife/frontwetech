import Link from 'next/link';

export function Footer() {
  return (
    <footer className="globalFooter" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="tech-decor glow-blue" style={{ bottom: '-10%', left: '-5%', opacity: 0.4 }}></div>
      <div className="tech-decor tech-grid" style={{ opacity: 0.3 }}></div>
      <div className="tech-decor tech-shape" style={{ top: '15%', right: '5%', borderStyle: 'double', opacity: 0.6 }}></div>
      <div className="tech-decor tech-line" style={{ top: '10%', left: '0', width: '100%', opacity: 0.2 }}></div>
      <div className="tech-decor tech-node" style={{ top: '10%', left: '30%' }}></div>
      <div className="tech-decor tech-node" style={{ top: '10%', right: '15%' }}></div>
      <div className="shell">
        <div className="globalFooter__inner">
          <div className="globalFooter__brand">
            <img 
              src="/Logo.png" 
              alt="DB Tech Innovation" 
              style={{ height: '100px', width: 'auto', objectFit: 'contain', marginBottom: '40px', filter: 'brightness(0) invert(1)' }}
            />
            <p className="globalFooter__desc">
              Expertise structurée pour la performance des institutions et des entreprises au Gabon et à l'international.
            </p>
          </div>

          <div className="globalFooter__group">
            <h4 className="globalFooter__title">Solutions</h4>
            <nav className="globalFooter__links">
              <Link href="/catalogue" className="footer-link">Catalogue complet</Link>
              <Link href="/solutions" className="footer-link">Secteurs & Réalisations</Link>
              <Link href="/" className="footer-link">Architecture Digitale</Link>
            </nav>
          </div>

          <div className="globalFooter__group">
            <h4 className="globalFooter__title">Contact</h4>
            <nav className="globalFooter__links">
              <Link href="/contact" className="footer-link">Page de Contact</Link>
              <a href="mailto:services@dbtech-innovation.com" className="footer-link">services@dbtech-innovation.com</a>
              <a href="tel:+24102055501" className="footer-link">+241 02 05 55 01</a>
            </nav>
          </div>

          <div className="globalFooter__group">
            <h4 className="globalFooter__title">Légal</h4>
            <nav className="globalFooter__links">
              <span className="footer-link">Mentions Légales</span>
              <span className="footer-link">Confidentialité</span>
            </nav>
          </div>
        </div>

        <div className="globalFooter__bottom">
          <p>© {new Date().getFullYear()} DB Tech Innovation. Tous droits réservés.</p>
          <p>Libreville, Gabon</p>
        </div>
      </div>
    </footer>
  );
}
