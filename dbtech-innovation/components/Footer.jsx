import Link from 'next/link';

export function Footer() {
  return (
    <footer className="globalFooter">
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
